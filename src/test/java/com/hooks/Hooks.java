package com.hooks;

import CommonMethod.Java_methods;
import com.rrw.utils.email;
import io.cucumber.java.After;
import io.cucumber.java.AfterAll;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks {

    @Before
    public void setUp(Scenario scenario) {
        System.out.println("\n══════════════════════════════════════════");
        System.out.println("▶▶▶ START Scenario: " + scenario.getName());
        System.out.println("══════════════════════════════════════════");
        
        try {
            Java_methods.openBrowserAndNavigate();
            System.out.println("✅ @Before complete — browser ready");
        } catch (Exception e) {
            System.err.println("❌ @Before failed: " + e.getMessage());
            throw new RuntimeException("Failed to setup browser", e);
        }
    }

    @After
    public void tearDown(Scenario scenario) {
        System.out.println("\n──────────────────────────────────────────");
        System.out.println("◀◀◀ END Scenario: " + scenario.getName() 
                + " | Status: " + scenario.getStatus());
        System.out.println("──────────────────────────────────────────");
        
        if (scenario.isFailed()) {
            System.out.println("❌ Scenario FAILED: " + scenario.getName());
        }
         
     
        System.out.println("🔄 Closing browser...");
        try {
            Java_methods.closeBrowser();
            System.out.println("✅ Browser closed");
        } catch (Exception e) {
            System.err.println("⚠️ Browser close error (ignored): " + e.getMessage());
        }
    }

    @AfterAll
    public static void sendEmailReport() {
        System.out.println("\n══════════════════════════════════════════");
        System.out.println("📧 All scenarios done — sending email report");
        System.out.println("══════════════════════════════════════════");
        
        try {
            email.sendReport();
            System.out.println("✅ Email sent");
        } catch (Exception e) {
            System.err.println("⚠️ Email send failed (ignored): " + e.getMessage());
            // Don't throw — test run is over, email failure shouldn't crash
        }
    }
}