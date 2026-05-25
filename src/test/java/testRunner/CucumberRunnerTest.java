package testRunner;

import org.junit.platform.suite.api.ConfigurationParameter;
import org.junit.platform.suite.api.IncludeEngines;
import org.junit.platform.suite.api.SelectClasspathResource;
import org.junit.platform.suite.api.Suite;
import static io.cucumber.junit.platform.engine.Constants.*;

/**
 * ============================================================
 *  CucumberRunnerTest — "Test Ka Remote Control"
 * ============================================================
 *
 *  MANAGER KE LIYE:
 *    Yeh class decide karti hai —
 *      → Kaun se tests chalenge  (FILTER_TAGS)
 *      → Test files kahan hain   (SelectClasspathResource)
 *      → Steps ka code kahan hai (GLUE)
 *      → Report kahan banega     (PLUGIN)
 *
 *  Sirf TAG badlo → alag tests chalenge. Bas!
 * ============================================================
 */

@Suite
// Cucumber engine use karo tests chalane ke liye
@IncludeEngines("cucumber")

// Feature files kahan hain?
@SelectClasspathResource("features")

// Step definitions kahan hain?
@ConfigurationParameter(
    key = GLUE_PROPERTY_NAME,
    value = "com.stepDefinations," 
)

// Report kaise banana hai?
@ConfigurationParameter(
    key = PLUGIN_PROPERTY_NAME,
    value = "pretty," +
            "html:target/cucumber-reports/report.html," +
            "json:target/cucumber-reports/report.json," +
            "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"
)

// Method names camelCase mein generate honge
@ConfigurationParameter(
    key = SNIPPET_TYPE_PROPERTY_NAME,
    value = "camelcase"
)

// ── SIRF YAHAN TAG BADLO ──────────────────────────────────
// "@Smoke"             → smoke tests
// "@Regression"        → regression tests
// "@Smoke or @Login"   → dono mein se koi bhi
// "@Smoke and @Login"  → dono tags wale hi
// "not @Skip"          → skip wale chhod do baaki sab
@ConfigurationParameter(
    key = FILTER_TAGS_PROPERTY_NAME,
    value = "@login_test" 
)

public class CucumberRunnerTest {
    // Khali hai — upar ke annotations hi saara kaam karti hain
}