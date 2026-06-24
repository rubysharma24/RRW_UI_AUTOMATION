package com.locator;
public interface loginlocator {
    String login_icon = "//a[@href='/login' and normalize-space(text())='Login']";
    String login_email = "//input[@type='email']";
    String login_password = "//input[@type='password']";
    String login_button = "//button[normalize-space()='Login']";
    String unsuccess_message = "//*[contains(text(),'Invalid email or password')]";
    String Dashboardmessage = "//span[text()='Shop Road Ready Products']";
    
}

