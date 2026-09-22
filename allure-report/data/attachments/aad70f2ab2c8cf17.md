# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Functionality - RoadReady Wheels >> should navigate to listing page and show only matching Hollander products
- Location: tests\search.spec.ts:23:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://staging.roadreadywheels.com/", waiting until "load"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```