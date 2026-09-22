# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should verify shipping, subtotal and total calculation on checkout review
- Location: tests\cart.spec.ts:13:7

# Error details

```
Error: expect(received).toBeCloseTo(expected, precision)

Expected: 467.16
Received: 512.71

Expected precision:    1
Expected difference: < 0.05
Received difference:   45.55000000000001
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: Checkout - Road Ready Wheels
  - iframe [ref=e3]
  - iframe [ref=e4]:
    - button "Support" [ref=f7e4] [cursor=pointer]
  - generic [ref=e5]:
    - banner [ref=e6]:
      - link "ROADREADY" [ref=e9] [cursor=pointer]:
        - /url: /
    - banner [ref=e11]:
      - generic [ref=e14]:
        - generic [ref=e15]: Address
        - generic [ref=e23]:
          - generic [ref=e24]: "2"
          - generic [ref=e25]: Review
        - generic [ref=e28]:
          - generic [ref=e29]: "3"
          - generic [ref=e30]: Payment
    - generic [ref=e31]:
      - generic [ref=e32]:
        - heading "Confirm" [level=1] [ref=e33]
        - button "Continue" [ref=e34] [cursor=pointer]
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]:
            - heading "Shipments" [level=2] [ref=e39]
            - generic [ref=e41] [cursor=pointer]:
              - 'radio "Ground Shipping (FREE) $0.00 Expected Delivery: Friday, September 18th - Monday, September 21st" [checked] [ref=e42]'
              - generic [ref=e43]:
                - generic [ref=e44]:
                  - generic [ref=e45]: Ground Shipping (FREE)
                  - generic [ref=e46]: $0.00
                - paragraph [ref=e47]: "Expected Delivery: Friday, September 18th - Monday, September 21st"
            - generic [ref=e49] [cursor=pointer]:
              - 'radio "2-Day Shipping $150.00 Expected Delivery: Wednesday, September 16th" [ref=e50]'
              - generic [ref=e51]:
                - generic [ref=e52]:
                  - generic [ref=e53]: 2-Day Shipping
                  - generic [ref=e54]: $150.00
                - paragraph [ref=e55]: "Expected Delivery: Wednesday, September 16th"
            - generic [ref=e57] [cursor=pointer]:
              - 'radio "Overnight Shipping $250.00 Expected Delivery: Tuesday, September 15th" [ref=e58]'
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - generic [ref=e61]: Overnight Shipping
                  - generic [ref=e62]: $250.00
                - paragraph [ref=e63]: "Expected Delivery: Tuesday, September 15th"
            - generic [ref=e64]:
              - generic [ref=e65]:
                - heading "Shipping Address" [level=3] [ref=e66]
                - button "Edit" [ref=e67] [cursor=pointer]
              - generic [ref=e71]:
                - paragraph [ref=e72]: raja sharma
                - paragraph [ref=e73]: TCS
                - paragraph [ref=e74]: w3vvvvvvvvvvvvvv
                - paragraph [ref=e75]: Mountain View California 90012
                - paragraph [ref=e76]: United States
                - paragraph [ref=e77]: "Phone: 9368047877"
            - generic [ref=e78]:
              - generic [ref=e79]:
                - heading "Billing Address" [level=3] [ref=e80]
                - button "Edit" [ref=e81] [cursor=pointer]
              - generic [ref=e85]:
                - paragraph [ref=e86]: raja sharma
                - paragraph [ref=e87]: TCS
                - paragraph [ref=e88]: w3vvvvvvvvvvvvvv
                - paragraph [ref=e89]: Mountain View California 90012
                - paragraph [ref=e90]: United States
                - paragraph [ref=e91]: "Phone: 9368047877"
          - generic [ref=e92]:
            - link "Edit" [ref=e94] [cursor=pointer]:
              - /url: /cart
            - generic [ref=e98]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e100]
              - generic [ref=e101]:
                - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e102] [cursor=pointer]
                - paragraph [ref=e103]: "SKU: 560-03335B"
                - paragraph [ref=e104]: "Qty: 2"
                - paragraph [ref=e105]: "Expected Delivery Date: Friday, September 18th - Monday, September 21st"
                - paragraph [ref=e106]: $512.71
        - generic [ref=e107]:
          - generic [ref=e108]:
            - heading "Order Summary (2 items)" [level=2] [ref=e109]
            - generic [ref=e112]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e114]
              - generic [ref=e115]:
                - paragraph [ref=e116] [cursor=pointer]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
                - paragraph [ref=e117]: "SKU: 560-03335B"
              - generic [ref=e118]:
                - paragraph [ref=e119]: $233.58
                - paragraph [ref=e120]: "Qty: 2"
            - generic [ref=e121]:
              - generic [ref=e122]:
                - generic [ref=e123]: Subtotal (2 items)
                - generic [ref=e124]: $467.16
              - generic [ref=e125]:
                - generic [ref=e126]: Tax
                - generic [ref=e127]: $45.55
              - generic [ref=e128]:
                - generic [ref=e129]: "Shipping: Ground Shipping (FREE)"
                - text: $0.00
              - generic [ref=e131]:
                - generic [ref=e132]: Total
                - generic [ref=e133]: $512.71
          - generic [ref=e135]:
            - heading "NEED HELP?" [level=2] [ref=e136]
            - generic [ref=e137]:
              - generic [ref=e144]:
                - link "HASSLE-FREE RETURNS" [ref=e145] [cursor=pointer]:
                  - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
                - paragraph [ref=e146]: We strive to have the best customer service in the business.
              - generic [ref=e153]:
                - link "FREE SHIPPING" [ref=e154] [cursor=pointer]:
                  - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
                - paragraph [ref=e155]: Free shipping anywhere in the continental United States.
              - generic [ref=e159]:
                - link "1-YEAR WARRANTY" [ref=e160] [cursor=pointer]:
                  - /url: /faq/what-is-your-product-warranty?id=9
                - paragraph [ref=e161]: Take it for a test drive! At Road Ready customer satisfaction is our main priority.
              - generic [ref=e166]:
                - link "100% COMPATIBLE" [ref=e167] [cursor=pointer]:
                  - /url: /faq/will-the-wheel-fit-my-vehicle?id=16
                - paragraph [ref=e168]: Compatible with all OEM/Factory equipment including Hubcaps, TPMS, Lug Nuts, and Tires!
      - generic [ref=e169]:
        - button "Return to address" [ref=e170] [cursor=pointer]
        - button "Continue" [ref=e173] [cursor=pointer]
      - separator [ref=e175]
      - generic [ref=e176]:
        - heading "Questions? Our team of wheel experts are standing by." [level=3] [ref=e177]
        - generic [ref=e178]:
          - link [ref=e179] [cursor=pointer]:
            - /url: tel:1-888-790-5899
            - paragraph [ref=e183]: 1-888-790-5899
          - link [ref=e184] [cursor=pointer]:
            - /url: mailto:support@roadreadywheels.com
            - paragraph [ref=e189]: support@roadreadywheels.com
          - button [ref=e190] [cursor=pointer]:
            - paragraph [ref=e194]: Live Chat
      - generic [ref=e196]:
        - generic [ref=e197]:
          - heading "Certified & Secured by:" [level=4] [ref=e198]
          - img "Trusted Secure" [ref=e201]
        - generic [ref=e202]:
          - heading "We Accept:" [level=4] [ref=e203]
          - generic [ref=e204]:
            - generic [ref=e205]:
              - img "American Express" [ref=e207]
              - img "Visa" [ref=e209]
              - img "Mastercard" [ref=e211]
              - img "Paypal" [ref=e213]
              - img "Discover" [ref=e215]
              - img "Apple Pay" [ref=e217]
              - img "Affirm" [ref=e219]
            - generic [ref=e220]:
              - img "Amazon Pay" [ref=e222]
              - img "Google Pay" [ref=e224]
    - contentinfo [ref=e225]:
      - generic [ref=e226]:
        - generic [ref=e227]:
          - generic [ref=e228]:
            - heading "Contact Us" [level=3] [ref=e229]
            - generic [ref=e230]:
              - paragraph [ref=e231]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e232] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e233]:
                - text: "Text:"
                - link "217-635-2033" [ref=e234] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e235] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e236]:
              - link "Visit our Facebook page" [ref=e237] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e240] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e241]
              - link "Visit our Instagram page" [ref=e242] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e246] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e250]:
              - img "BBB Accredited" [ref=e252]
              - img "WTC Member" [ref=e254]
          - generic [ref=e255]:
            - heading "Support" [level=3] [ref=e256]
            - generic [ref=e257]:
              - link "Returns and Refunds" [ref=e258] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e259] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e260] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e261] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e262] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e263] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e264] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e265] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e266]:
            - heading "Why Road Ready" [level=3] [ref=e267]
            - generic [ref=e268]:
              - link "About Us" [ref=e269] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e270] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e271]:
            - heading "Divisions" [level=3] [ref=e272]
            - generic [ref=e273]:
              - link "Wholesale" [ref=e274] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e275] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e276]:
          - paragraph [ref=e278]:
            - strong [ref=e279]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e280]:
            - paragraph [ref=e281]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e282]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e283] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/pageFixtures';
  2  | import { validUser } from '../test-data/login.data';
  3  | 
  4  | test.describe('Checkout Flow - RoadReady Wheels', () => {
  5  |   test.beforeEach(async ({ homePage, loginPage, categoriesPage, cartPage }) => {
  6  |     await homePage.open();
  7  |     await homePage.goToLogin();
  8  |     await loginPage.login(validUser.email, validUser.password);
  9  |     await categoriesPage.closeShopAsModal();
  10 |     await cartPage.clearCartIfNotEmpty();
  11 |   });
  12 | 
  13 |   test('should verify shipping, subtotal and total calculation on checkout review', async ({
  14 |     categoriesPage,
  15 |     productPage,
  16 |     cartPage,
  17 |     addressPage,
  18 |     checkoutReviewPage,
  19 |   }) => {
  20 |     let unitPrice = 0;
  21 |     let finalQuantity = 0;
  22 |     let shippingCost = 0;
  23 | 
  24 |     await test.step('Search for product and open PDP', async () => {
  25 |       await categoriesPage.searchFor('560-64127');
  26 |       await categoriesPage.page.waitForTimeout(5000);
  27 |       await categoriesPage.clickSearch();
  28 |       await categoriesPage.clickFirstProduct();
  29 |     });
  30 | 
  31 |     await test.step('Verify PDP price', async () => {
  32 |       const priceText = await productPage.getPriceText();
  33 |       unitPrice = parseFloat(priceText.replace('$', ''));
  34 |       console.log('Unit price:', unitPrice);
  35 |       expect(priceText).toContain('$');
  36 |     });
  37 | 
  38 |     await test.step('Add product to cart', async () => {
  39 |       await productPage.addToCart();
  40 |     });
  41 | 
  42 |     await test.step('Update quantity in cart', async () => {
  43 |       await cartPage.toggleQuantity();
  44 |       finalQuantity = await cartPage.getQuantity();
  45 |       console.log('Final quantity:', finalQuantity);
  46 |     });
  47 | 
  48 |     await test.step('Proceed to checkout', async () => {
  49 |       await cartPage.clickCompleteCheckout();
  50 |       await cartPage.page.waitForTimeout(2000);
  51 |       await cartPage.dismissRebillPOModal();
  52 |     });
  53 | 
  54 |     await test.step('Complete shipping address', async () => {
  55 |       await addressPage.completeAddress();
  56 |     });
  57 | 
  58 |     await test.step('Reach checkout review page', async () => {
  59 |       await checkoutReviewPage.page.waitForURL(/.*checkout\/review.*/, { timeout: 15000 });
  60 |     });
  61 | 
  62 |     await test.step('Select available shipping option', async () => {
  63 |       const shippingLabel = await checkoutReviewPage.selectAvailableShippingOption();
  64 |       shippingCost = checkoutReviewPage.extractShippingCost(shippingLabel);
  65 |       console.log('Shipping cost:', shippingCost);
  66 |     });
  67 | 
  68 |     await test.step('Verify subtotal and total calculation', async () => {
  69 |       // Totals ko Review page pe hi padh lo, Continue click karne se PEHLE
  70 |       const subtotal = await checkoutReviewPage.getSubtotal();
  71 |       const tax = await checkoutReviewPage.getTax();
  72 |       const total = await checkoutReviewPage.getTotal();
  73 | 
  74 |       console.log(`Subtotal: $${subtotal}, Tax: $${tax}, Total: $${total}`);
  75 | 
  76 |       const expectedSubtotal = parseFloat((unitPrice * finalQuantity).toFixed(2));
  77 |       expect(subtotal).toBeCloseTo(expectedSubtotal, 1);
  78 | 
  79 |       const expectedTotal = parseFloat((subtotal + tax + shippingCost).toFixed(2));
> 80 |       expect(total).toBeCloseTo(expectedTotal, 1);
     |                     ^ Error: expect(received).toBeCloseTo(expected, precision)
  81 |     });
  82 | 
  83 |     await test.step('Proceed to Payment step', async () => {
  84 |       await checkoutReviewPage.clickSecondContinue();
  85 |       await checkoutReviewPage.page.waitForTimeout(1500);
  86 |     });
  87 | 
  88 |     await test.step('Complete charge order flow', async () => {
  89 |       await checkoutReviewPage.clickChargeOrder();
  90 |       await checkoutReviewPage.page.waitForTimeout(1000);
  91 |       await checkoutReviewPage.clickContinueWithChargeOrder();
  92 |       await checkoutReviewPage.page.waitForTimeout(1500);
  93 |       await checkoutReviewPage.declineUpsellInIframe();
  94 |     });
  95 |   });
  96 | });
```