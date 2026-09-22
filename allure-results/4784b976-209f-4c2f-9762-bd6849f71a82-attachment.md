# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Add to Cart - RoadReady Wheels >> should open PDP and read price after clicking first product
- Location: tests\cart.spec.ts:12:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://staging.roadreadywheels.com/", waiting until "load"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```