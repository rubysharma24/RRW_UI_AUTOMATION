package com.rrw.utils;
import com.rrw.utils.PropertyReader;
import jakarta.mail.*;
import jakarta.mail.internet.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.Properties;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.stream.Stream;

public class email {

    private static final String REPORT_DIR = "target/ExtentReports";
    private static final AtomicBoolean EMAIL_SENT = new AtomicBoolean(false);

    public static void sendReport() {

        if (!EMAIL_SENT.compareAndSet(false, true)) {
            System.out.println("Email already sent once — skipping duplicate call");
            return;
        }

        try {
            final String fromEmail = PropertyReader.getConfigProperty("reportEmail");
            final String password  = PropertyReader.getConfigProperty("reportKey");
            final String toEmail   = PropertyReader.getConfigProperty("reportTo");
            final String ccEmail   = PropertyReader.getConfigProperty("reportCC");
            final String bccEmail  = PropertyReader.getConfigProperty("reportBCC");

            Properties props = new Properties();
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.port", "587");
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");

            Session session = Session.getInstance(props, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(fromEmail, password);
                }
            });

            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(fromEmail));

            addRecipients(message, Message.RecipientType.TO, toEmail);
            addRecipients(message, Message.RecipientType.CC, ccEmail);
            addRecipients(message, Message.RecipientType.BCC, bccEmail);

            message.setSubject("API Automation Test Report | Staging Environment");

            MimeMultipart mp = new MimeMultipart();

            MimeBodyPart body = new MimeBodyPart();
            body.setContent("<p>Execution completed successfully.</p>", "text/html; charset=UTF-8");
            mp.addBodyPart(body);

            // Attach latest HTML report from REPORT_DIR (if present)
            Path latestReport = findLatestHtmlReportFileRecursive(REPORT_DIR);
            if (latestReport != null) {
                MimeBodyPart attachment = new MimeBodyPart();
                attachment.attachFile(latestReport.toFile());
                mp.addBodyPart(attachment);
                System.out.println("Attached report: " + latestReport);
            } else {
                System.out.println("No HTML report found in " + REPORT_DIR);
            }

            message.setContent(mp);

            Transport.send(message);
            System.out.println("Report email sent successfully");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void addRecipients(MimeMessage message, Message.RecipientType type, String addresses)
            throws MessagingException {
        if (addresses == null || addresses.trim().isEmpty()) return;
        for (String addr : addresses.split(",")) {
            if (!addr.trim().isEmpty()) {
                message.addRecipient(type, new InternetAddress(addr.trim()));
            }
        }
    }

    private static Path findLatestHtmlReportFileRecursive(String dir) {
        try (Stream<Path> s = Files.walk(Paths.get(dir))) {
            return s.filter(Files::isRegularFile)
                    .filter(p -> p.toString().endsWith(".html"))
                    .max(Comparator.comparingLong(p -> {
                        try { return Files.getLastModifiedTime(p).toMillis(); }
                        catch (Exception e) { return 0L; }
                    }))
                    .orElse(null);
        } catch (IOException e) {
            return null;
        }
    }

        // ... existing code ...

        public static void main(String[] args) {
            sendReport();
        }

}