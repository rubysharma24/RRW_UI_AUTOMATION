# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> should verify shipping, subtotal and total calculation on checkout review
- Location: tests\cart.spec.ts:6:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder(/Search globally for make/i) to be visible

```

```
Error: browserContext.close: Target page, context or browser has been closed
```