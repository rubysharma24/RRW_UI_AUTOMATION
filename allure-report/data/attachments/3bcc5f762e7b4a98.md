# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation
- Location: tests\cart.spec.ts:27:7

# Error details

```
Error: expect(received).toBeCloseTo(expected, precision)

Expected: 467.16
Received: 512.71

Expected precision:    2
Expected difference: < 0.005
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
              - 'radio "Ground Shipping (FREE) $0.00 Expected Delivery: Tuesday, September 22nd - Wednesday, September 23rd" [checked] [ref=e42]'
              - generic [ref=e43]:
                - generic [ref=e44]:
                  - generic [ref=e45]: Ground Shipping (FREE)
                  - generic [ref=e46]: $0.00
                - paragraph [ref=e47]: "Expected Delivery: Tuesday, September 22nd - Wednesday, September 23rd"
            - generic [ref=e49] [cursor=pointer]:
              - 'radio "2-Day Shipping $150.00 Expected Delivery: Friday, September 18th" [ref=e50]'
              - generic [ref=e51]:
                - generic [ref=e52]:
                  - generic [ref=e53]: 2-Day Shipping
                  - generic [ref=e54]: $150.00
                - paragraph [ref=e55]: "Expected Delivery: Friday, September 18th"
            - generic [ref=e57] [cursor=pointer]:
              - 'radio "Overnight Shipping $250.00 Expected Delivery: Thursday, September 17th" [ref=e58]'
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - generic [ref=e61]: Overnight Shipping
                  - generic [ref=e62]: $250.00
                - paragraph [ref=e63]: "Expected Delivery: Thursday, September 17th"
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
                - paragraph [ref=e105]: "Expected Delivery Date: Tuesday, September 22nd - Wednesday, September 23rd"
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
  154 |           await addressPage.completeAddress();
  155 |         }
  156 |       );
  157 | 
  158 |       // --------------------------------------------------
  159 |       // 7. Reach Review page
  160 |       // --------------------------------------------------
  161 | 
  162 |       await test.step(
  163 |         'Reach checkout review page',
  164 |         async () => {
  165 |           await checkoutReviewPage.page.waitForURL(
  166 |             /.*checkout\/review.*/i,
  167 |             {
  168 |               timeout: 15000,
  169 |             }
  170 |           );
  171 |         }
  172 |       );
  173 | 
  174 |       // --------------------------------------------------
  175 |       // 8. Select shipping dynamically
  176 |       // --------------------------------------------------
  177 | 
  178 |     await test.step('Select available shipping option', async () => {
  179 |   const shippingLabel = await checkoutReviewPage.selectAvailableShippingOption();
  180 |   console.log('Selected shipping option:', shippingLabel);
  181 | 
  182 |   // Tax/Total recalculate hone ka poora time do
  183 |   await checkoutReviewPage.page.waitForTimeout(3000);
  184 | });
  185 | 
  186 |       // --------------------------------------------------
  187 |       // 9. Verify all calculations dynamically
  188 |       // --------------------------------------------------
  189 | 
  190 |       let expectedTotal = 0;
  191 |       let expectedSubtotal = 0;
  192 | 
  193 |       await test.step(
  194 |         'Verify subtotal, shipping, tax and total calculation',
  195 |         async () => {
  196 |           const subtotal =
  197 |             await checkoutReviewPage.getSubtotal();
  198 | 
  199 |           const tax =
  200 |             await checkoutReviewPage.getTax();
  201 | 
  202 |           const shipping =
  203 |             await checkoutReviewPage.getShippingCost();
  204 | 
  205 |           const total =
  206 |             await checkoutReviewPage.getTotal();
  207 | 
  208 |           console.log('--------------------------------');
  209 |           console.log('Unit price:', unitPrice);
  210 |           console.log('Quantity:', finalQuantity);
  211 |           console.log('Subtotal:', subtotal);
  212 |           console.log('Tax:', tax);
  213 |           console.log('Shipping:', shipping);
  214 |           console.log('Total:', total);
  215 |           console.log('--------------------------------');
  216 | 
  217 |           // --------------------------------------------
  218 |           // Expected subtotal
  219 |           // --------------------------------------------
  220 | 
  221 |           expectedSubtotal = Number(
  222 |             (
  223 |               unitPrice * finalQuantity
  224 |             ).toFixed(2)
  225 |           );
  226 | 
  227 |           console.log(
  228 |             'Expected subtotal:',
  229 |             expectedSubtotal
  230 |           );
  231 | 
  232 |           expect(subtotal).toBeCloseTo(
  233 |             expectedSubtotal,
  234 |             2
  235 |           );
  236 | 
  237 |           // --------------------------------------------
  238 |           // Expected total
  239 |           // --------------------------------------------
  240 | 
  241 |           expectedTotal = Number(
  242 |             (
  243 |               subtotal +
  244 |               tax +
  245 |               shipping
  246 |             ).toFixed(2)
  247 |           );
  248 | 
  249 |           console.log(
  250 |             'Expected total:',
  251 |             expectedTotal
  252 |           );
  253 | 
> 254 |           expect(total).toBeCloseTo(
      |                         ^ Error: expect(received).toBeCloseTo(expected, precision)
  255 |             expectedTotal,
  256 |             2
  257 |           );
  258 |         }
  259 |       );
  260 | 
  261 |       // --------------------------------------------------
  262 |       // 10. Continue to Payment
  263 |       // --------------------------------------------------
  264 | 
  265 |       await test.step(
  266 |         'Proceed to Payment step',
  267 |         async () => {
  268 |           await checkoutReviewPage
  269 |             .clickSecondContinue();
  270 | 
  271 |           await checkoutReviewPage.page.waitForTimeout(
  272 |             1500
  273 |           );
  274 |         }
  275 |       );
  276 | 
  277 |       // --------------------------------------------------
  278 |       // 11. Complete charge order
  279 |       // --------------------------------------------------
  280 | 
  281 |       await test.step(
  282 |         'Complete charge order flow',
  283 |         async () => {
  284 |           await checkoutReviewPage
  285 |             .clickChargeOrder();
  286 | 
  287 |           await checkoutReviewPage.page.waitForTimeout(
  288 |             1000
  289 |           );
  290 | 
  291 |           await checkoutReviewPage
  292 |             .clickContinueWithChargeOrder();
  293 | 
  294 |           await checkoutReviewPage.page.waitForTimeout(
  295 |             1500
  296 |           );
  297 | 
  298 |           await checkoutReviewPage
  299 |             .declineUpsellInIframe();
  300 |         }
  301 |       );
  302 | 
  303 |       // --------------------------------------------------
  304 |       // 12. Verify order confirmation page
  305 |       // (NEW — matches the codegen reference, which continues
  306 |       // past charge order onto the confirmation screen)
  307 |       // --------------------------------------------------
  308 | 
  309 |       await test.step(
  310 |         'Verify order confirmation page is shown',
  311 |         async () => {
  312 |           await orderConfirmationPage.expectOrderPlaced();
  313 | 
  314 |           const orderNumber =
  315 |             await orderConfirmationPage.getOrderNumber();
  316 | 
  317 |           const customerEmail =
  318 |             await orderConfirmationPage.getCustomerEmail();
  319 | 
  320 |           const orderDate =
  321 |             await orderConfirmationPage.getOrderDate();
  322 | 
  323 |           console.log('Order Number:', orderNumber);
  324 |           console.log('Customer Email:', customerEmail);
  325 |           console.log('Order Date:', orderDate);
  326 | 
  327 |           expect(orderNumber.length).toBeGreaterThan(0);
  328 |           expect(customerEmail).toContain('@');
  329 |           expect(orderDate.length).toBeGreaterThan(0);
  330 |         }
  331 |       );
  332 | 
  333 |       // --------------------------------------------------
  334 |       // 13. Verify confirmation page totals match review page
  335 |       // --------------------------------------------------
  336 | 
  337 |       await test.step(
  338 |         'Verify subtotal and total on confirmation page',
  339 |         async () => {
  340 |           const confirmationSubtotal =
  341 |             await orderConfirmationPage.getConfirmationSubtotal();
  342 | 
  343 |           const confirmationTotal =
  344 |             await orderConfirmationPage.getConfirmationTotal();
  345 | 
  346 |           console.log(
  347 |             'Confirmation subtotal:',
  348 |             confirmationSubtotal
  349 |           );
  350 |           console.log(
  351 |             'Confirmation total:',
  352 |             confirmationTotal
  353 |           );
  354 | 
```