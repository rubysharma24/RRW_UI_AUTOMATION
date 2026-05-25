package com.rrw.utils;

import org.assertj.core.api.SoftAssertions;

public class SoftAssertionsContext {
    private static ThreadLocal<SoftAssertions> softAssertions = ThreadLocal.withInitial(SoftAssertions::new);

    public static SoftAssertions getSoftAssertions() {
        return softAssertions.get();
    }

    public static void resetSoftAssertions() {
    	softAssertions.remove();
        softAssertions.set(new SoftAssertions());
    }
}
