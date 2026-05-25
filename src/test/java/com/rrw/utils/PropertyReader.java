package com.rrw.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * PropertyReader
 * --------------
 * Teen config files padho aur unke values do.
 * Environment ka naam env.properties se aata hai.
 */
public class PropertyReader {

    private static final Properties configProps = new Properties();
    private static final Properties dataProps   = new Properties();
    private static final Properties loginProps  = new Properties();

    static {
        try {
            String env = readEnv();
            load(configProps, env + "-config.properties");
            load(dataProps,   "data-config.properties");
            load(loginProps,  "dataLogin.properties");
        } catch (IOException e) {
            throw new RuntimeException("Properties load nahi hui: " + e.getMessage(), e);
        }
    }

    // ─── Public Getters ──────────────────────────────────────

    public static String getConfigProperty(String key) { return configProps.getProperty(key); }
    public static String getDataProperty(String key)   { return dataProps.getProperty(key);   }
    public static String getLoginProperty(String key)  { return loginProps.getProperty(key);  }


    // ─── Private Helpers ─────────────────────────────────────

    // env.properties se environment naam padho (e.g. "stg", "prod")
    private static String readEnv() throws IOException {
        Properties envProps = new Properties();
        load(envProps, "env.properties");

        String env = envProps.getProperty("env");
        if (env == null || env.trim().isEmpty()) {
            throw new IOException("'env' key missing in env.properties");
        }
        return env.trim();
    }

    // File padho aur target mein daal do
    private static void load(Properties target, String fileName) throws IOException {
        InputStream stream = PropertyReader.class
                .getClassLoader()
                .getResourceAsStream(fileName);

        if (stream == null) {
            throw new IOException("File nahi mili: " + fileName);
        }

        Properties temp = new Properties();
        temp.load(stream);
        target.putAll(temp);
    }
}