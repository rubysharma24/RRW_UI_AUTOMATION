package com.hooks;

import CommonMethod.Java_methods;
import com.rrw.utils.email;             // class rename ki recommend hai
import io.cucumber.java.After;
import io.cucumber.java.AfterAll;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class hooks {

    @Before
    public void setUp() {
        Java_methods.openBrowserAndNavigate();
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            System.out.println(":x: Test fail hua: " + scenario.getName());
        }
        Java_methods.closeBrowser();
    }

   @AfterAll
   public static void sendEmailReport() {
       email.sendReport();   // ← yahan se email trigger hoga, sab scenarios ke baad
   }
}