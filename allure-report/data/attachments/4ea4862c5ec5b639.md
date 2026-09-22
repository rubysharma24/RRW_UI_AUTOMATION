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

Call Log:
- Timeout 15000ms exceeded while waiting on the predicate
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
  100 |       throw new Error('Subtotal row was not found');
  101 |     }
  102 | 
  103 |     return this.extractAmount(text);
  104 |   }
  105 | 
  106 |  async getTax(): Promise<number> {
  107 |   // was: this.taxRow.isVisible({ timeout: 8000 }) — isVisible() checks the
  108 |   // DOM once, instantly, and ignores the timeout option entirely. Right
  109 |   // after selecting shipping, the totals re-render and this raced ahead of
  110 |   // the tax row actually mounting, so a genuinely-present $45.55 tax row
  111 |   // got reported as "not present" and silently treated as $0.
  112 |   // waitFor() actually retries up to the timeout before giving up.
  113 |   try {
  114 |     await this.taxRow.waitFor({ state: 'visible', timeout: 8000 });
  115 |   } catch {
  116 |     console.log('Tax row not present — treating tax as $0.00');
  117 |     return 0;
  118 |   }
  119 |   const text = await this.taxRow.textContent();
  120 |   if (!text) return 0;
  121 |   return this.extractAmount(text);
  122 | }
  123 | 
  124 |   async getShippingCost(): Promise<number> {
  125 |     // Same isVisible() timing pitfall as getTax() had — waitFor() retries,
  126 |     // isVisible() doesn't. Harmless while shipping is FREE ($0 either way),
  127 |     // but would wrongly report $0 for paid shipping (2-Day/Overnight) the
  128 |     // moment the row renders a beat late.
  129 |     try {
  130 |       await this.shippingRow.waitFor({ state: 'visible', timeout: 8000 });
  131 |     } catch {
  132 |       console.log(
  133 |         'Shipping row not present — treating shipping as $0.00'
  134 |       );
  135 | 
  136 |       return 0;
  137 |     }
  138 | 
  139 |     const text = (await this.shippingRow.textContent()) ?? '';
  140 | 
  141 |     if (!text) {
  142 |       return 0;
  143 |     }
  144 | 
  145 |     // "Shipping: Ground Shipping (FREE)" — the label itself has no $
  146 |     // amount; the "$0.00" lives in a separate sibling text node that can
  147 |     // render a beat after the label (React re-render timing), so it's not
  148 |     // always present in textContent() at the moment we read it. Rather
  149 |     // than fight that race, treat an explicit "(FREE)" label as $0 —
  150 |     // that's what it means regardless of whether the sibling node landed
  151 |     // in time.
  152 |     if (/free/i.test(text) && !/\$?\s*[\d,]+\.\d{2}/.test(text)) {
  153 |       return 0;
  154 |     }
  155 | 
  156 |     return this.extractAmount(text);
  157 |   }
  158 | 
  159 |   async getTotal(): Promise<number> {
  160 |     const text = await this.totalRow.textContent();
  161 | 
  162 |     if (!text) {
  163 |       throw new Error('Total row was not found');
  164 |     }
  165 | 
  166 |     return this.extractAmount(text);
  167 |   }
  168 | 
  169 |   /**
  170 |    * Waits until subtotal/tax/shipping/total have finished recalculating and
  171 |    * are internally consistent (total ≈ subtotal + tax + shipping), and
  172 |    * subtotal matches unitPrice × quantity — instead of reading everything
  173 |    * once and hoping every row happened to be ready at that instant.
  174 |    * expect().toPass() re-runs the whole block on a retry interval until it
  175 |    * passes or the timeout is hit, which is the correct Playwright pattern
  176 |    * for "the page hasn't finished updating yet" rather than chasing each
  177 |    * row's own visibility timing individually.
  178 |    * Returns the final settled values so the caller doesn't have to re-read.
  179 |    */
  180 |   async waitForTotalsToSettle(
  181 |     unitPrice: number,
  182 |     quantity: number,
  183 |     timeout = 15000
  184 |   ): Promise<{ subtotal: number; tax: number; shipping: number; total: number }> {
  185 |     let result = { subtotal: 0, tax: 0, shipping: 0, total: 0 };
  186 | 
  187 |     await expect(async () => {
  188 |       const subtotal = await this.getSubtotal();
  189 |       const tax = await this.getTax();
  190 |       const shipping = await this.getShippingCost();
  191 |       const total = await this.getTotal();
  192 | 
  193 |       const expectedSubtotal = Number((unitPrice * quantity).toFixed(2));
  194 |       const expectedTotal = Number((subtotal + tax + shipping).toFixed(2));
  195 | 
  196 |       expect(subtotal).toBeCloseTo(expectedSubtotal, 2);
  197 |       expect(total).toBeCloseTo(expectedTotal, 2);
  198 | 
  199 |       result = { subtotal, tax, shipping, total };
> 200 |     }).toPass({ timeout });
      |        ^ Error: expect(received).toBeCloseTo(expected, precision)
  201 | 
  202 |     return result;
  203 |   }
  204 | 
  205 |   async getOrderSummary(): Promise<{
  206 |     subtotal: number;
  207 |     tax: number;
  208 |     shipping: number;
  209 |     total: number;
  210 |   }> {
  211 |     const subtotal = await this.getSubtotal();
  212 |     const tax = await this.getTax();
  213 |     const shipping = await this.getShippingCost();
  214 |     const total = await this.getTotal();
  215 | 
  216 |     return {
  217 |       subtotal,
  218 |       tax,
  219 |       shipping,
  220 |       total,
  221 |     };
  222 |   }
  223 | 
  224 |   async clickContinue() {
  225 |     await this.continueButton.first().click();
  226 |   }
  227 | 
  228 |   async clickSecondContinue() {
  229 |     await this.continueButton.nth(1).click();
  230 |   }
  231 | 
  232 |   async clickChargeOrder() {
  233 |     await this.chargeOrderButton.click();
  234 |   }
  235 | 
  236 |   async clickContinueWithChargeOrder() {
  237 |     await this.continueWithChargeOrderButton.click();
  238 |   }
  239 | 
  240 |   async declineUpsellInIframe() {
  241 |     const frame = this.page.frameLocator('iframe[name^="I0_"]');
  242 | 
  243 |     await frame
  244 |       .getByRole('button', { name: 'NO' })
  245 |       .click();
  246 |   }
  247 | }
```