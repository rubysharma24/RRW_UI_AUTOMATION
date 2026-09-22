# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation
- Location: tests\cart.spec.ts:27:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim - Road Ready Wheels
  - iframe [ref=e3]
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e8]:
        - link "ROADREADY" [ref=e9] [cursor=pointer]:
          - /url: /
        - generic [ref=e12]:
          - combobox "Search category" [ref=e14] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=e16]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=e17]
        - generic [ref=e18]:
          - generic [ref=e19]:
            - button "Resale" [ref=e22] [cursor=pointer]
            - button "Wholesale" [ref=e24] [cursor=pointer]
          - button "Select State" [ref=e27] [cursor=pointer]
          - generic [ref=e34]: "|"
          - button [ref=e36] [cursor=pointer]
          - generic [ref=e42]: "|"
          - button "Open cart" [ref=e43] [cursor=pointer]:
            - generic [ref=e48]: "1"
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading "Your Cart (1 items)" [level=2] [ref=e53]
        - button "Close cart" [ref=e54] [cursor=pointer]
      - generic [ref=e59]:
        - generic [ref=e60] [cursor=pointer]:
          - checkbox "E-Mail Shopping Cart To Me" [ref=e61]
          - text: E-Mail Shopping Cart To Me
        - generic [ref=e62]:
          - textbox "Enter your email" [ref=e63]
          - button "Send Email" [ref=e64] [cursor=pointer]
      - generic [ref=e65]:
        - generic [ref=e69]:
          - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e71]
          - generic [ref=e72]:
            - generic [ref=e73]:
              - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=4] [ref=e74] [cursor=pointer]
              - button "Remove 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim from cart" [ref=e75] [cursor=pointer]
            - paragraph [ref=e79]: "SKU: 560-03335B"
            - generic [ref=e80]:
              - generic [ref=e81]:
                - button "Decrease quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e82] [cursor=pointer]
                - generic [ref=e84]: "1"
                - button "Increase quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e85] [cursor=pointer]
              - generic [ref=e87]: $233.58
        - generic [ref=e88]:
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e91]: Subtotal (1 items)
              - generic [ref=e92]: $233.58
            - generic [ref=e93]:
              - generic [ref=e94]: Tax
              - generic [ref=e95]: $22.77
            - button "Shipping Select State" [ref=e97] [cursor=pointer]:
              - generic [ref=e98]: Shipping
              - button "Select State" [ref=e103]
            - generic [ref=e104]:
              - generic [ref=e105]: Total
              - generic [ref=e106]: $256.35
          - generic [ref=e107]:
            - paragraph [ref=e108]: Express Checkouts
            - generic [ref=e109]:
              - generic [ref=e110]:
                - img "Amazon Pay"
                - generic:
                  - generic:
                    - img "AmazonPay"
                - button "Pay with Amazon Pay" [ref=e111] [cursor=pointer]
              - generic [ref=e112]:
                - img "Google Pay"
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - button "Pay with GPay"
                - button "Pay with Google Pay" [ref=e113] [cursor=pointer]
          - button "Complete Checkout" [ref=e115] [cursor=pointer]
          - generic [ref=e116]:
            - img "American Express" [ref=e118]
            - img "Visa" [ref=e120]
            - img "Mastercard" [ref=e122]
            - img "PayPal" [ref=e124]
            - img "Discover" [ref=e126]
            - img "Apple Pay" [ref=e128]
            - img "Affirm" [ref=e130]
          - separator [ref=e131]
          - generic [ref=e132]:
            - paragraph [ref=e133]: Questions?
            - generic [ref=e134]:
              - link [ref=e135] [cursor=pointer]:
                - /url: tel:1-888-790-5899
              - link [ref=e139] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
              - button "Open live chat" [ref=e144] [cursor=pointer]
          - generic [ref=e148]:
            - paragraph [ref=e149]: Awesomely Secured 🔒
            - img "Trusted Secure" [ref=e151]
    - banner [ref=e152]:
      - generic [ref=e156]:
        - generic [ref=e157]:
          - generic [ref=e158]: Browse By Vehicle
          - generic "Select Make" [ref=e159] [cursor=pointer]:
            - generic [ref=e161]:
              - combobox "Select Make" [ref=e163]
              - generic: Select Make
          - generic "Select Model" [ref=e164] [cursor=pointer]:
            - generic [ref=e166]:
              - combobox "Select Model" [disabled] [ref=e168]
              - generic: Select Model
          - generic "Select Year" [ref=e169] [cursor=pointer]:
            - generic [ref=e171]:
              - combobox "Select Year" [disabled] [ref=e173]
              - generic: Select Year
          - button "Search" [ref=e174] [cursor=pointer]
        - generic [ref=e175]:
          - generic [ref=e176]: Browse All Wheels
          - generic [ref=e177]:
            - button "By Category" [ref=e178] [cursor=pointer]
            - button "Top Brands" [ref=e179] [cursor=pointer]
            - button "top product" [ref=e180] [cursor=pointer]
    - generic [ref=e183]:
      - generic [ref=e184]:
        - heading "Your Cart (1 items)" [level=2] [ref=e185]
        - button "Close cart" [ref=e186] [cursor=pointer]
      - generic [ref=e191]:
        - generic [ref=e192] [cursor=pointer]:
          - checkbox "E-Mail Shopping Cart To Me" [ref=e193]
          - text: E-Mail Shopping Cart To Me
        - generic [ref=e194]:
          - textbox "Enter your email" [ref=e195]
          - button "Send Email" [ref=e196] [cursor=pointer]
      - generic [ref=e197]:
        - generic [ref=e201]:
          - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e203]
          - generic [ref=e204]:
            - generic [ref=e205]:
              - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=4] [ref=e206] [cursor=pointer]
              - button "Remove 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim from cart" [ref=e207] [cursor=pointer]
            - paragraph [ref=e211]: "SKU: 560-03335B"
            - generic [ref=e212]:
              - generic [ref=e213]:
                - button "Decrease quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e214] [cursor=pointer]
                - generic [ref=e216]: "1"
                - button "Increase quantity of 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e217] [cursor=pointer]
              - generic [ref=e219]: $233.58
        - generic [ref=e220]:
          - generic [ref=e221]:
            - generic [ref=e222]:
              - generic [ref=e223]: Subtotal (1 items)
              - generic [ref=e224]: $233.58
            - generic [ref=e225]:
              - generic [ref=e226]: Tax
              - generic [ref=e227]: $22.77
            - button "Shipping Select State" [ref=e229] [cursor=pointer]:
              - generic [ref=e230]: Shipping
              - button "Select State" [ref=e235]
            - generic [ref=e236]:
              - generic [ref=e237]: Total
              - generic [ref=e238]: $256.35
          - generic [ref=e239]:
            - paragraph [ref=e240]: Express Checkouts
            - generic [ref=e241]:
              - generic [ref=e242]:
                - img "Amazon Pay"
                - generic:
                  - generic:
                    - img "AmazonPay"
                - button "Pay with Amazon Pay" [ref=e243] [cursor=pointer]
              - generic [ref=e244]:
                - img "Google Pay"
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - button "Pay with GPay"
                - button "Pay with Google Pay" [ref=e245] [cursor=pointer]
          - button "Complete Checkout" [ref=e247] [cursor=pointer]
          - generic [ref=e248]:
            - img "American Express" [ref=e250]
            - img "Visa" [ref=e252]
            - img "Mastercard" [ref=e254]
            - img "PayPal" [ref=e256]
            - img "Discover" [ref=e258]
            - img "Apple Pay" [ref=e260]
            - img "Affirm" [ref=e262]
          - separator [ref=e263]
          - generic [ref=e264]:
            - paragraph [ref=e265]: Questions?
            - generic [ref=e266]:
              - link [ref=e267] [cursor=pointer]:
                - /url: tel:1-888-790-5899
              - link [ref=e271] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
              - button "Open live chat" [ref=e276] [cursor=pointer]
          - generic [ref=e280]:
            - paragraph [ref=e281]: Awesomely Secured 🔒
            - img "Trusted Secure" [ref=e283]
    - generic [ref=e286]:
      - paragraph [ref=e288]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
      - generic [ref=e289]:
        - generic [ref=e290]:
          - generic [ref=e291]: $233.58
          - generic [ref=e293]: $767.00
        - button "Add To Cart" [ref=e294] [cursor=pointer]
    - generic [ref=e300]:
      - navigation [ref=e301]:
        - button "Ford" [ref=e302] [cursor=pointer]
        - generic [ref=e303]: ">"
        - button "F-350" [ref=e304] [cursor=pointer]
        - generic [ref=e305]: ">"
        - generic [ref=e306]: 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim
      - generic [ref=e307]:
        - generic [ref=e308]:
          - generic [ref=e309]:
            - generic [ref=e310]:
              - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e312]
              - button [ref=e313] [cursor=pointer]
              - button [ref=e316] [cursor=pointer]
            - generic:
              - generic [ref=e320]:
                - generic [ref=e321]: Top Alloy Wheel
                - button "Show 1 more top seller titles" [ref=e322] [cursor=pointer]: "+1"
              - generic: 9,263 All-Time Units Sold
            - generic [ref=e323]:
              - button [disabled] [ref=e324]
              - generic [ref=e327]:
                - button [ref=e328] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 1" [ref=e330]
                - button [ref=e331] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 2" [ref=e333]
                - button [ref=e334] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 3" [ref=e336]
                - button [ref=e337] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 4" [ref=e339]
                - button [ref=e340] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 5" [ref=e342]
                - button [ref=e343] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 6" [ref=e345]
                - button [ref=e346] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 7" [ref=e348]
                - button [ref=e349] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 8" [ref=e351]
                - button [ref=e352] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 9" [ref=e354]
                - button [ref=e355] [cursor=pointer]:
                  - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim view 10" [ref=e357]
              - button [ref=e358] [cursor=pointer]
          - table [ref=e362]:
            - rowgroup [ref=e363]:
              - row [ref=e364]:
                - cell "Condition" [ref=e365]
                - cell "New" [ref=e366]
              - row [ref=e367]:
                - cell "Brand" [ref=e368]
                - cell "Road Ready" [ref=e369]
              - row [ref=e370]:
                - cell "Hollander" [ref=e371]
                - cell "560-03335B" [ref=e372]
              - row [ref=e373]:
                - cell "OEM Part Number(s)" [ref=e374]
                - cell "4C3Z1007KA" [ref=e375]
              - row [ref=e376]:
                - cell "Vehicle Fitment" [ref=e377]
                - cell "Ford F-350" [ref=e378]
              - row [ref=e379]:
                - cell "Type" [ref=e380]
                - cell "OEM Replacement Wheel" [ref=e381]
              - row [ref=e382]:
                - cell "Material" [ref=e383]
                - cell "Alloy" [ref=e384]
              - row [ref=e385]:
                - cell "Years of fitment" [ref=e386]
                - cell "1999, 2000, 2001, 2002, 2003, 2004" [ref=e387]
              - row [ref=e388]:
                - cell "Diameter" [ref=e389]
                - cell "16\"" [ref=e390]
              - row [ref=e391]:
                - cell "Width" [ref=e392]
                - cell "6\"" [ref=e393]
              - row [ref=e394]:
                - cell "Gross Weight" [ref=e395]
                - cell "21.6" [ref=e396]
              - row [ref=e397]:
                - cell "Color" [ref=e398]
                - cell "Silver" [ref=e399]
              - row [ref=e400]:
                - cell "Bolt Pattern" [ref=e401]
                - cell "8x170mm or 8x6.7\"" [ref=e402]
              - row [ref=e403]:
                - cell "Offset" [ref=e404]
                - cell "120mm" [ref=e405]
              - row [ref=e406]:
                - cell "Center Bore" [ref=e407]
                - cell "125mm" [ref=e408]
              - row [ref=e409]:
                - cell "Finish" [ref=e410]
                - cell "Machined with Clear Coat" [ref=e411]
              - row [ref=e412]:
                - cell "OEM Tire Size" [ref=e413]
                - cell "LT235/85R16" [ref=e414]
              - row [ref=e415]:
                - cell "Lug Nut Thread Size" [ref=e416]
                - cell "M14 x 1.5" [ref=e417]
              - row [ref=e418]:
                - cell "Tire Pressure (PSI)" [ref=e419]
                - cell "59.4 / 69.6" [ref=e420]
              - row [ref=e421]:
                - cell "UPC" [ref=e422]
                - cell "850000502086" [ref=e423]
        - generic [ref=e424]:
          - generic [ref=e426]:
            - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=1] [ref=e427]
            - generic [ref=e428]:
              - generic [ref=e429]:
                - img "Year range arrow" [ref=e431]
                - generic [ref=e432]:
                  - generic [ref=e433]: "1999"
                  - generic [ref=e435]: "2004"
              - link "See Product Details" [ref=e438] [cursor=pointer]:
                - /url: "#product-details-tabs"
          - generic [ref=e440]:
            - generic [ref=e441]: $233.58
            - generic [ref=e443]: $767.00
            - generic [ref=e444]:
              - text: YOU SAVE
              - generic [ref=e445]: $533.42
          - generic [ref=e446]:
            - generic [ref=e449] [cursor=pointer]:
              - combobox [ref=e451]
              - generic "1" [ref=e452]
            - button "Add To Cart" [ref=e453] [cursor=pointer]
          - generic [ref=e459]:
            - generic [ref=e460]:
              - paragraph [ref=e461]: Express Checkouts
              - generic [ref=e462]:
                - generic [ref=e463]:
                  - img "Amazon Pay"
                  - generic:
                    - generic:
                      - img "AmazonPay"
                  - button "Pay with Amazon Pay" [ref=e464] [cursor=pointer]
                - generic [ref=e465]:
                  - img "Google Pay"
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - button "Pay with GPay"
                  - button "Pay with Google Pay" [ref=e466] [cursor=pointer]
            - generic [ref=e467]:
              - generic [ref=e468]: In Stock
              - generic [ref=e469]: Free Shipping
              - generic [ref=e470]: 1 Year Warranty
            - separator [ref=e471]
            - generic [ref=e472]: Ships Today if you order in the next 11 hrs 1 mins
            - generic [ref=e479]: "Expected Delivery: Tuesday, September 22nd - Wednesday, September 23rd"
      - generic [ref=e487]:
        - heading "Customers Who Viewed This Item Also Viewed" [level=2] [ref=e488]
        - generic [ref=e489]:
          - region [ref=e490]:
            - generic [ref=e492]:
              - group [ref=e493]:
                - generic [ref=e494]:
                  - generic [ref=e495]:
                    - button "Add to wishlist" [ref=e498] [cursor=pointer]
                    - link [ref=e501] [cursor=pointer]:
                      - /url: /products/2017-2019-20x8-ford-f350sd-aluminum-wheel-rim
                      - img "2017-2019 20x8 Ford F350SD Alloy Wheel / Rim" [ref=e504]
                  - generic [ref=e505]:
                    - link [ref=e506] [cursor=pointer]:
                      - /url: /products/2017-2019-20x8-ford-f350sd-aluminum-wheel-rim
                      - heading "2017-2019 20x8 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e507]
                    - link "360 All-Time Units Sold" [ref=e508] [cursor=pointer]:
                      - /url: /products/2017-2019-20x8-ford-f350sd-aluminum-wheel-rim
                    - generic [ref=e510]: $457.05
                    - generic [ref=e512]: "Hollander: 560-10100"
                    - generic [ref=e515]:
                      - generic [ref=e516]: 🚚
                      - button "Please Select State" [ref=e517] [cursor=pointer]
                    - generic [ref=e519]:
                      - button "1" [ref=e521] [cursor=pointer]
                      - button "Add To Cart" [ref=e525] [cursor=pointer]
              - group [ref=e526]:
                - generic [ref=e527]:
                  - generic [ref=e528]:
                    - button "Add to wishlist" [ref=e531] [cursor=pointer]
                    - link [ref=e534] [cursor=pointer]:
                      - /url: /products/1995-2011-ford-f350-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                      - img "1995-2011 Ford F350 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [ref=e537]
                  - generic [ref=e538]:
                    - link [ref=e539] [cursor=pointer]:
                      - /url: /products/1995-2011-ford-f350-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                      - heading "1995-2011 Ford F350 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e540]
                    - link "On Sale" [ref=e541] [cursor=pointer]:
                      - /url: /products/1995-2011-ford-f350-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - generic [ref=e543]: $83.49
                    - generic [ref=e545]: "Hollander: 570-07030"
                    - generic [ref=e548]:
                      - generic [ref=e549]: 🚚
                      - button "Please Select State" [ref=e550] [cursor=pointer]
                    - generic [ref=e552]:
                      - button "1" [ref=e554] [cursor=pointer]
                      - button "Add To Cart" [ref=e558] [cursor=pointer]
              - group [ref=e559]:
                - generic [ref=e560]:
                  - generic [ref=e561]:
                    - button "Add to wishlist" [ref=e564] [cursor=pointer]
                    - link [ref=e567] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-steel-wheel-rim
                      - img "1999-2004 16x6 Ford F350SD Steel Wheel / Rim" [ref=e570]
                  - generic [ref=e571]:
                    - link [ref=e572] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-steel-wheel-rim
                      - heading "1999-2004 16x6 Ford F350SD Steel Wheel / Rim" [level=3] [ref=e573]
                    - link "10,032 All-Time Units Sold" [ref=e574] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-steel-wheel-rim
                    - generic [ref=e576]: $120.25
                    - generic [ref=e578]: "Hollander: 560-03336"
                    - generic [ref=e581]:
                      - generic [ref=e582]: 🚚
                      - button "Please Select State" [ref=e583] [cursor=pointer]
                    - generic [ref=e585]:
                      - button "1" [ref=e587] [cursor=pointer]
                      - button "Add To Cart" [ref=e591] [cursor=pointer]
              - group [ref=e592]:
                - generic [ref=e593]:
                  - generic [ref=e594]:
                    - button "Add to wishlist" [ref=e597] [cursor=pointer]
                    - link [ref=e600] [cursor=pointer]:
                      - /url: /products/2005-2024-17x6-5-ford-f350sd-steel-wheel-rim
                      - img "2005-2025 17x6.5 Ford F350SD Steel Wheel / Rim" [ref=e603]
                  - generic [ref=e604]:
                    - link [ref=e605] [cursor=pointer]:
                      - /url: /products/2005-2024-17x6-5-ford-f350sd-steel-wheel-rim
                      - heading "2005-2025 17x6.5 Ford F350SD Steel Wheel / Rim" [level=3] [ref=e606]
                    - link "10,435 All-Time Units Sold" [ref=e607] [cursor=pointer]:
                      - /url: /products/2005-2024-17x6-5-ford-f350sd-steel-wheel-rim
                    - generic [ref=e609]: $144.69
                    - generic [ref=e611]: "Hollander: 560-03615"
                    - generic [ref=e614]:
                      - generic [ref=e615]: 🚚
                      - button "Please Select State" [ref=e616] [cursor=pointer]
                    - generic [ref=e618]:
                      - button "1" [ref=e620] [cursor=pointer]
                      - button "Add To Cart" [ref=e624] [cursor=pointer]
              - group [ref=e625]:
                - generic [ref=e626]:
                  - generic [ref=e627]:
                    - button "Add to wishlist" [ref=e630] [cursor=pointer]
                    - link [ref=e633] [cursor=pointer]:
                      - /url: /products/2005-2023-18x8-ford-f350-steel-wheel-rim3
                      - img "2005-2023 18x8 Ford F350 Steel Wheel / Rim" [ref=e636]
                  - generic [ref=e637]:
                    - link [ref=e638] [cursor=pointer]:
                      - /url: /products/2005-2023-18x8-ford-f350-steel-wheel-rim3
                      - heading "2005-2023 18x8 Ford F350 Steel Wheel / Rim" [level=3] [ref=e639]
                    - link "1,401 All-Time Units Sold" [ref=e640] [cursor=pointer]:
                      - /url: /products/2005-2023-18x8-ford-f350-steel-wheel-rim3
                    - generic [ref=e642]: $165.39
                    - generic [ref=e644]: "Hollander: 560-10190"
                    - generic [ref=e647]:
                      - generic [ref=e648]: 🚚
                      - button "Please Select State" [ref=e649] [cursor=pointer]
                    - generic [ref=e651]:
                      - button "1" [ref=e653] [cursor=pointer]
                      - button "Add To Cart" [ref=e657] [cursor=pointer]
              - group [ref=e658]:
                - generic [ref=e659]:
                  - generic [ref=e660]:
                    - button "Add to wishlist" [ref=e663] [cursor=pointer]
                    - link [ref=e666] [cursor=pointer]:
                      - /url: /products/2023-2026-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim
                      - img "2023-2026 20x8 Ford F-350 SRW Genuine OEM Take-Off Alloy Wheel / Rim" [ref=e669]
                  - generic [ref=e670]:
                    - link [ref=e671] [cursor=pointer]:
                      - /url: /products/2023-2026-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim
                      - heading "2023-2026 20x8 Ford F-350 SRW Genuine OEM Take-Off Alloy Wheel / Rim" [level=3] [ref=e672]
                    - link "On Sale" [ref=e673] [cursor=pointer]:
                      - /url: /products/2023-2026-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim
                    - generic [ref=e675]: $330.20
                    - generic [ref=e677]: "Hollander: 560-10486"
                    - generic [ref=e679]:
                      - generic [ref=e680]: 🚚
                      - button "Please Select State" [ref=e681] [cursor=pointer]
                    - generic [ref=e683]:
                      - button "1" [ref=e685] [cursor=pointer]
                      - button "Add To Cart" [ref=e689] [cursor=pointer]
              - group [ref=e690]:
                - generic [ref=e691]:
                  - generic [ref=e692]:
                    - button "Add to wishlist" [ref=e695] [cursor=pointer]
                    - link [ref=e698] [cursor=pointer]:
                      - /url: /products/2023-2025-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim3
                      - img "2023-2025 20x8 Ford F-350 SRW Genuine OEM Take-Off Alloy Wheel / Rim" [ref=e701]
                  - generic [ref=e702]:
                    - link [ref=e703] [cursor=pointer]:
                      - /url: /products/2023-2025-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim3
                      - heading "2023-2025 20x8 Ford F-350 SRW Genuine OEM Take-Off Alloy Wheel / Rim" [level=3] [ref=e704]
                    - link "On Sale" [ref=e705] [cursor=pointer]:
                      - /url: /products/2023-2025-20x8-ford-f-350-srw-genuine-oem-take-off-alloy-wheel-rim3
                    - generic [ref=e707]: $347.59
                    - generic [ref=e709]: "Hollander: 560-10487"
                    - generic [ref=e711]:
                      - generic [ref=e712]: 🚚
                      - button "Please Select State" [ref=e713] [cursor=pointer]
                    - generic [ref=e715]:
                      - button "1" [ref=e717] [cursor=pointer]
                      - button "Add To Cart" [ref=e721] [cursor=pointer]
              - group [ref=e722]:
                - generic [ref=e723]:
                  - generic [ref=e724]:
                    - button "Add to wishlist" [ref=e727] [cursor=pointer]
                    - link [ref=e730] [cursor=pointer]:
                      - /url: /products/2021-2026-ford-f-350-front-17x6-5-genuine-oem-alloy-wheel-rim
                      - img "2021-2026 Ford F-350 Front 17x6.5 Genuine OEM Alloy Wheel / Rim" [ref=e733]
                  - generic [ref=e734]:
                    - link [ref=e735] [cursor=pointer]:
                      - /url: /products/2021-2026-ford-f-350-front-17x6-5-genuine-oem-alloy-wheel-rim
                      - heading "2021-2026 Ford F-350 Front 17x6.5 Genuine OEM Alloy Wheel / Rim" [level=3] [ref=e736]
                    - link "New" [ref=e737] [cursor=pointer]:
                      - /url: /products/2021-2026-ford-f-350-front-17x6-5-genuine-oem-alloy-wheel-rim
                    - generic [ref=e739]: $379.10
                    - generic [ref=e741]: "Hollander: 560-10477"
                    - generic [ref=e744]:
                      - generic [ref=e745]: 🚚
                      - button "Please Select State" [ref=e746] [cursor=pointer]
                    - generic [ref=e748]:
                      - button "1" [ref=e750] [cursor=pointer]
                      - button "Add To Cart" [ref=e754] [cursor=pointer]
              - group [ref=e755]:
                - generic [ref=e756]:
                  - generic [ref=e757]:
                    - button "Add to wishlist" [ref=e760] [cursor=pointer]
                    - link [ref=e763] [cursor=pointer]:
                      - /url: /products/2010-2025-17x7-5-ford-f350sd-steel-wheel-rim
                      - img "2010-2025 17x7.5 Ford F350SD Steel Wheel / Rim" [ref=e766]
                  - generic [ref=e767]:
                    - link [ref=e768] [cursor=pointer]:
                      - /url: /products/2010-2025-17x7-5-ford-f350sd-steel-wheel-rim
                      - heading "2010-2025 17x7.5 Ford F350SD Steel Wheel / Rim" [level=3] [ref=e769]
                    - link "2,488 All-Time Units Sold" [ref=e770] [cursor=pointer]:
                      - /url: /products/2010-2025-17x7-5-ford-f350sd-steel-wheel-rim
                    - generic [ref=e772]: $147.42
                    - generic [ref=e774]: "Hollander: 560-03828A"
                    - generic [ref=e777]:
                      - generic [ref=e778]: 🚚
                      - button "Please Select State" [ref=e779] [cursor=pointer]
                    - generic [ref=e781]:
                      - button "1" [ref=e783] [cursor=pointer]
                      - button "Add To Cart" [ref=e787] [cursor=pointer]
              - group [ref=e788]:
                - generic [ref=e789]:
                  - generic [ref=e790]:
                    - button "Add to wishlist" [ref=e793] [cursor=pointer]
                    - link [ref=e796] [cursor=pointer]:
                      - /url: /products/1992-1997-16x7-ford-f350-steel-wheel-rim
                      - img "1992-1997 16x7 Ford F350 Steel Wheel / Rim" [ref=e799]
                  - generic [ref=e800]:
                    - link [ref=e801] [cursor=pointer]:
                      - /url: /products/1992-1997-16x7-ford-f350-steel-wheel-rim
                      - heading "1992-1997 16x7 Ford F350 Steel Wheel / Rim" [level=3] [ref=e802]
                    - link "On Sale" [ref=e803] [cursor=pointer]:
                      - /url: /products/1992-1997-16x7-ford-f350-steel-wheel-rim
                    - generic [ref=e805]: $103.06
                    - generic [ref=e807]: "Hollander: 560-03035"
                    - generic [ref=e810]:
                      - generic [ref=e811]: 🚚
                      - button "Please Select State" [ref=e812] [cursor=pointer]
                    - generic [ref=e814]:
                      - button "1" [ref=e816] [cursor=pointer]
                      - button "Add To Cart" [ref=e820] [cursor=pointer]
          - generic [ref=e821]:
            - button [ref=e822] [cursor=pointer]
            - button [ref=e825] [cursor=pointer]
      - generic [ref=e829]:
        - generic: "\""
        - generic: "\""
        - generic [ref=e830]:
          - generic [ref=e832]:
            - generic [ref=e833]:
              - blockquote [ref=e834]: “5 stars for super fast shipping. Another 5 stars for excellent packaging — rim arrived in great condition, no dents or scratches. Fits perfectly and has no issue clearing the caliper or steering components. A great experience; I wouldn't hesitate to use them again.”
              - separator [ref=e835]
              - generic [ref=e836]: B. Greasor
            - generic [ref=e837]:
              - blockquote [ref=e838]: “Ordered a set of rims and they came in pristine condition. Highly recommend this company.”
              - separator [ref=e839]
              - generic [ref=e840]: G. Fuller
            - generic [ref=e841]:
              - blockquote [ref=e842]: “The rim came in quick and looked great — no damage to it or the packaging. It matched the factory rims perfectly! I will be ordering here again when the time comes.”
              - separator [ref=e843]
              - generic [ref=e844]: A. Mini
            - generic [ref=e845]:
              - blockquote [ref=e846]: “Item received as described, shipped fast, and a spot-on match as far as looks and size. I will be looking for all my rims at Road Ready. Thank you!”
              - separator [ref=e847]
              - generic [ref=e848]: P. Rockland
            - generic [ref=e849]:
              - blockquote [ref=e850]: “Looks like the factory wheels at half the price!”
              - separator [ref=e851]
              - generic [ref=e852]: T. Thurman
            - generic [ref=e853]:
              - blockquote [ref=e854]: “Absolutely love them! They will be used as my 'winter wheels' here in the Buffalo, NY area.”
              - separator [ref=e855]
              - generic [ref=e856]: E. Bienas
            - generic [ref=e857]:
              - blockquote [ref=e858]: “Very quick and fast service — had exactly what I was looking for at a very reasonable price!”
              - separator [ref=e859]
              - generic [ref=e860]: C. Bock
            - generic [ref=e861]:
              - blockquote [ref=e862]: “Arrived quicker than expected and works fine on our Smart Car.”
              - separator [ref=e863]
              - generic [ref=e864]: Redbudok86
            - generic [ref=e865]:
              - blockquote [ref=e866]: “Wheels came as advertised. Opened the boxes the following week and found one damaged. Took a picture and sent to customer service — they delivered a replacement. I'll shop here again.”
              - separator [ref=e867]
              - generic [ref=e868]: Folgers4545
            - generic [ref=e869]:
              - blockquote [ref=e870]: “Great rims at a great price. The guys at the tire store insisted on checking balance before mounting — they were nearly perfect, better than most factory rims! One rim was damaged in shipment and RoadReady replaced it immediately, without waiting for the shipper to resolve the claim.”
              - separator [ref=e871]
              - generic [ref=e872]: WN4ISX
          - generic [ref=e873]:
            - button "Go to testimonial 1" [ref=e874] [cursor=pointer]
            - button "Go to testimonial 2" [ref=e875] [cursor=pointer]
            - button "Go to testimonial 3" [ref=e876] [cursor=pointer]
            - button "Go to testimonial 4" [ref=e877] [cursor=pointer]
            - button "Go to testimonial 5" [ref=e878] [cursor=pointer]
            - button "Go to testimonial 6" [ref=e879] [cursor=pointer]
            - button "Go to testimonial 7" [ref=e880] [cursor=pointer]
            - button "Go to testimonial 8" [ref=e881] [cursor=pointer]
            - button "Go to testimonial 9" [ref=e882] [cursor=pointer]
            - button "Go to testimonial 10" [ref=e883] [cursor=pointer]
      - generic [ref=e884]:
        - generic [ref=e887]:
          - generic [ref=e888]:
            - img "Wheels sold" [ref=e890]
            - generic [ref=e891]: 1,000,000wheels sold
          - generic [ref=e892]:
            - img "Shipments on time" [ref=e894]
            - generic [ref=e895]: 99% of shipmentson time
          - generic [ref=e896]:
            - img "Customers back on the road" [ref=e898]
            - generic [ref=e899]: 500,000 customersback on the road
          - generic [ref=e900]:
            - img "24 hour fulfillment" [ref=e902]
            - generic [ref=e903]: 24 hour fulfillmentturnaround
          - generic [ref=e904]:
            - img "Strong carton packaging" [ref=e906]
            - generic [ref=e907]: Strong cartonpackaging
          - generic [ref=e908]:
            - img "Insurance grade verified" [ref=e910]
            - generic [ref=e911]: Insurance gradeverified
          - generic [ref=e912]:
            - img "Free shipping" [ref=e914]
            - generic [ref=e915]: Free shippingon all orders
          - generic [ref=e916]:
            - img "1-Year Warranty" [ref=e918]
            - generic [ref=e919]: 1-YearWarranty
          - generic [ref=e920]:
            - img "Quality tested and DOT approved" [ref=e922]
            - generic [ref=e923]: Quality tested andDOT approved
        - generic [ref=e926]:
          - generic [ref=e927]:
            - heading "Shipping Information" [level=4] [ref=e928]
            - generic [ref=e929]:
              - paragraph [ref=e930]: "Road Ready Wheels is committed to fulfilling customer orders as quickly as possible for your convenience. Below is detailed information about our shipping processes:"
              - generic [ref=e931]:
                - heading "Same-Day and Next-Day Shipping" [level=5] [ref=e932]
                - list [ref=e933]:
                  - listitem [ref=e934]:
                    - strong [ref=e935]: "Same-Day Shipping Cut-Off:"
                    - text: Orders placed by 1:30 PM CST will ship the same business day. Orders placed after 1:30 PM CST will ship the next business day.
                  - listitem [ref=e936]:
                    - strong [ref=e937]: "Weekend Orders:"
                    - text: Orders placed on Friday after 1:30 PM CST, Saturday, or Sunday will be shipped on the following Monday. This excludes federal or national holidays when our warehouses are closed.
              - button "See More" [ref=e938] [cursor=pointer]
          - generic [ref=e939]:
            - heading "Warranty Information" [level=4] [ref=e940]
            - generic [ref=e941]:
              - paragraph [ref=e942]: At Road Ready Wheels, we stand behind the quality of our products. All wheels sold on our website are covered by a one-year warranty from the original date of purchase. This warranty ensures that the wheels are free from defects in materials and workmanship and are in full functioning condition.
              - button "See More" [ref=e943] [cursor=pointer]
      - generic [ref=e945]:
        - generic [ref=e946]:
          - generic [ref=e947]:
            - heading "Will this rim fit my tire?" [level=2] [ref=e948]
            - paragraph [ref=e949]: "That's a great question. An easy way to answer this is by looking at your tire and finding the letter \"R\". For example:"
            - generic [ref=e950]:
              - generic [ref=e951]:
                - generic [ref=e953]: R14
                - generic [ref=e954]: = 14" Tire (fits a 14" rim)
              - generic [ref=e955]:
                - generic [ref=e957]: R15
                - generic [ref=e958]: = 15" Tire (fits a 15" rim)
              - generic [ref=e959]:
                - generic [ref=e961]: R16
                - generic [ref=e962]: = 16" Tire (fits a 16" rim)
              - generic [ref=e963]:
                - generic [ref=e965]: R17
                - generic [ref=e966]: = 17" Tire (fits a 17" rim)
              - generic [ref=e967]:
                - generic [ref=e969]: R18
                - generic [ref=e970]: = 18" Tire (fits a 18" rim)
              - generic [ref=e971]:
                - generic [ref=e973]: R19
                - generic [ref=e974]: = 19" Tire (fits a 19" rim)
              - generic [ref=e975]:
                - generic [ref=e977]: R20
                - generic [ref=e978]: = 20" Tire (fits a 20" rim)
              - generic [ref=e979]:
                - generic [ref=e981]: R22
                - generic [ref=e982]: = 22" Tire (fits a 22" rim)
          - img "Stack of tires" [ref=e984]
        - generic [ref=e985]:
          - img "Wheel close-up" [ref=e987]
          - generic [ref=e988]:
            - heading "Assurance of Quality and Value" [level=2] [ref=e989]
            - paragraph [ref=e990]: At Road Ready Wheels, we understand the importance of offering a single, specialized product at an unparalleled level of quality and value. To achieve this, we have meticulously researched and partnered with the most reputable suppliers in the industry. After extensive efforts, we have identified and collaborated with 24 distinguished manufacturers across 10 countries. These partnerships enable us to deliver premium-grade wheels at the most competitive prices available on the market.
            - heading "Guaranteed Compatibility" [level=3] [ref=e991]
            - paragraph [ref=e992]: Road Ready Wheels products are engineered to meet and exceed OEM (Original Equipment Manufacturer) specifications. They are designed to integrate seamlessly with key components, including hubcaps, center caps, TPMS sensors, tires, and lug nuts, ensuring dependable performance and optimal fit for your vehicle.
      - generic [ref=e993]:
        - generic [ref=e994]:
          - heading "Road Ready Overall Ratings and Reviews" [level=2] [ref=e995]
          - separator [ref=e996]
        - generic [ref=e998]:
          - generic [ref=e1001]:
            - generic [ref=e1002]: 1,873 Reviews
            - generic [ref=e1015]: 4.7 out of 5 stars
            - generic [ref=e1017]:
              - generic [ref=e1018]:
                - generic [ref=e1019]: 5 Stars
                - generic [ref=e1022]: 88%
              - generic [ref=e1023]:
                - generic [ref=e1024]: 4 Stars
                - generic [ref=e1027]: 5%
              - generic [ref=e1028]:
                - generic [ref=e1029]: 3 Stars
                - generic [ref=e1032]: 2%
              - generic [ref=e1033]:
                - generic [ref=e1034]: 2 Stars
                - generic [ref=e1037]: 2%
              - generic [ref=e1038]:
                - generic [ref=e1039]: 1 Stars
                - generic [ref=e1042]: 3%
          - generic [ref=e1043]:
            - generic [ref=e1044]:
              - generic [ref=e1046]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1048]
                - generic [ref=e1049]:
                  - generic [ref=e1061]:
                    - generic [ref=e1062]:
                      - text: "5"
                      - generic [ref=e1063]: ★
                    - link [ref=e1064] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1065]
                  - paragraph [ref=e1066]: Had Discount Tire do the work unmount the tire from the original 2003 F350 23-year-old rims. The attendant made a point to comment of how well balanced they are, took little to no weights to balance.
                  - generic [ref=e1067]:
                    - generic [ref=e1068]: RKDuet
                    - generic [ref=e1069]:
                      - generic [ref=e1073]: Certified Buyer
                      - generic [ref=e1074]: •
                      - generic [ref=e1075]: August 3, 2026
                  - paragraph [ref=e1080]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1082]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1084]
                - generic [ref=e1085]:
                  - generic [ref=e1097]:
                    - generic [ref=e1098]:
                      - text: "5"
                      - generic [ref=e1099]: ★
                    - link [ref=e1100] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1101]
                  - paragraph [ref=e1102]: Great wheels
                  - generic [ref=e1103]:
                    - generic [ref=e1104]: Hank
                    - generic [ref=e1105]:
                      - generic [ref=e1109]: Certified Buyer
                      - generic [ref=e1110]: •
                      - generic [ref=e1111]: April 9, 2026
                  - paragraph [ref=e1116]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1118]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1120]
                - generic [ref=e1121]:
                  - generic [ref=e1133]:
                    - generic [ref=e1134]:
                      - text: "5"
                      - generic [ref=e1135]: ★
                    - link [ref=e1136] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1137]
                  - paragraph [ref=e1138]: Reasonably priced
                  - generic [ref=e1139]:
                    - generic [ref=e1140]: Marcus McSpadden
                    - generic [ref=e1141]:
                      - generic [ref=e1145]: Certified Buyer
                      - generic [ref=e1146]: •
                      - generic [ref=e1147]: March 20, 2026
                  - paragraph [ref=e1152]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1154]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1156]
                - generic [ref=e1157]:
                  - generic [ref=e1169]:
                    - generic [ref=e1170]:
                      - text: "5"
                      - generic [ref=e1171]: ★
                    - link [ref=e1172] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1173]
                  - paragraph [ref=e1174]: Looks great thank you
                  - generic [ref=e1175]:
                    - generic [ref=e1176]: Guest
                    - generic [ref=e1177]:
                      - generic [ref=e1181]: Certified Buyer
                      - generic [ref=e1182]: •
                      - generic [ref=e1183]: January 28, 2026
                  - paragraph [ref=e1188]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1190]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1192]
                - generic [ref=e1193]:
                  - generic [ref=e1205]:
                    - generic [ref=e1206]:
                      - text: "5"
                      - generic [ref=e1207]: ★
                    - link [ref=e1208] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1209]
                  - paragraph [ref=e1210]: So far so good
                  - generic [ref=e1211]:
                    - generic [ref=e1212]: Guest
                    - generic [ref=e1213]:
                      - generic [ref=e1217]: Certified Buyer
                      - generic [ref=e1218]: •
                      - generic [ref=e1219]: December 4, 2025
                  - paragraph [ref=e1224]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1226]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1228]
                - generic [ref=e1229]:
                  - generic [ref=e1241]:
                    - generic [ref=e1242]:
                      - text: "5"
                      - generic [ref=e1243]: ★
                    - link [ref=e1244] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1245]
                  - paragraph [ref=e1246]: 5 Stars
                  - generic [ref=e1247]:
                    - generic [ref=e1248]: Douglas
                    - generic [ref=e1249]:
                      - generic [ref=e1253]: Certified Buyer
                      - generic [ref=e1254]: •
                      - generic [ref=e1255]: July 29, 2025
                  - paragraph [ref=e1260]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1262]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1264]
                - generic [ref=e1265]:
                  - generic [ref=e1277]:
                    - generic [ref=e1278]:
                      - text: "5"
                      - generic [ref=e1279]: ★
                    - link [ref=e1280] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1281]
                  - paragraph [ref=e1282]: Great rims!! Fit perfectly on truck.
                  - generic [ref=e1283]:
                    - generic [ref=e1284]: Guest
                    - generic [ref=e1285]:
                      - generic [ref=e1289]: Certified Buyer
                      - generic [ref=e1290]: •
                      - generic [ref=e1291]: June 11, 2025
                  - paragraph [ref=e1296]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1298]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1300]
                - generic [ref=e1301]:
                  - generic [ref=e1313]:
                    - generic [ref=e1314]:
                      - text: "5"
                      - generic [ref=e1315]: ★
                    - link [ref=e1316] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1317]
                  - paragraph [ref=e1318]: What a great company!! I ordered a rim over the holiday weekend and received it the same week. Like I said Great company. fast service.
                  - generic [ref=e1319]:
                    - generic [ref=e1320]: Travis
                    - generic [ref=e1321]:
                      - generic [ref=e1325]: Certified Buyer
                      - generic [ref=e1326]: •
                      - generic [ref=e1327]: May 27, 2025
                  - paragraph [ref=e1332]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1334]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1336]
                - generic [ref=e1337]:
                  - generic [ref=e1349]:
                    - generic [ref=e1350]:
                      - text: "5"
                      - generic [ref=e1351]: ★
                    - link [ref=e1352] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1353]
                  - paragraph [ref=e1354]: Delivered on time
                  - generic [ref=e1355]:
                    - generic [ref=e1356]: Black's Tire and Service
                    - generic [ref=e1357]:
                      - generic [ref=e1361]: Certified Buyer
                      - generic [ref=e1362]: •
                      - generic [ref=e1363]: April 24, 2025
                  - paragraph [ref=e1368]: Reply from Road Ready Team :Thanks for your feedback
              - generic [ref=e1370]:
                - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e1372]
                - generic [ref=e1373]:
                  - generic [ref=e1385]:
                    - generic [ref=e1386]:
                      - text: "5"
                      - generic [ref=e1387]: ★
                    - link [ref=e1388] [cursor=pointer]:
                      - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                      - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e1389]
                  - paragraph [ref=e1390]: Delivered early
                  - generic [ref=e1391]:
                    - generic [ref=e1392]: Rick
                    - generic [ref=e1393]:
                      - generic [ref=e1397]: Certified Buyer
                      - generic [ref=e1398]: •
                      - generic [ref=e1399]: February 7, 2025
                  - paragraph [ref=e1404]: Reply from Road Ready Team :Thanks for your feedback
            - button "Load More" [ref=e1406] [cursor=pointer]
    - generic [ref=e1408] [cursor=pointer]:
      - generic [ref=e1409]: ↑
      - generic [ref=e1410]: Back to Top
```

# Test source

```ts
  24  |     }
  25  |   );
  26  | 
  27  |   test(
  28  |     'should complete full order flow end to end: shipping, subtotal, total calculation and order confirmation',
  29  |     async ({
  30  |       categoriesPage,
  31  |       productPage,
  32  |       cartPage,
  33  |       addressPage,
  34  |       checkoutReviewPage,
  35  |       orderConfirmationPage,
  36  |     }) => {
  37  |       let unitPrice = 0;
  38  |       let finalQuantity = 0;
  39  | 
  40  |       // --------------------------------------------------
  41  |       // 1. Search product and open PDP
  42  |       // --------------------------------------------------
  43  | 
  44  |       await test.step(
  45  |         'Search for product and open PDP',
  46  |         async () => {
  47  |           await categoriesPage.searchFor('560-64127');
  48  | 
  49  |           await categoriesPage.page.waitForTimeout(5000);
  50  | 
  51  |           await categoriesPage.clickSearch();
  52  | 
  53  |           await categoriesPage.clickFirstProduct();
  54  | 
  55  |           await expect(productPage.page).toHaveURL(
  56  |             /.*\/products\/.*/i
  57  |           );
  58  |         }
  59  |       );
  60  | 
  61  |       // --------------------------------------------------
  62  |       // 2. Get dynamic product price
  63  |       // --------------------------------------------------
  64  | 
  65  |       await test.step(
  66  |         'Verify PDP price',
  67  |         async () => {
  68  |           const priceText =
  69  |             await productPage.getPriceText();
  70  | 
  71  |           unitPrice = Number(
  72  |             priceText.replace(/[$,]/g, '').trim()
  73  |           );
  74  | 
  75  |           console.log('Unit price:', unitPrice);
  76  | 
  77  |           expect(priceText).toContain('$');
  78  | 
  79  |           expect(unitPrice).toBeGreaterThan(0);
  80  |         }
  81  |       );
  82  | 
  83  |       // --------------------------------------------------
  84  |       // 3. Add product to cart
  85  |       // --------------------------------------------------
  86  | 
  87  |       await test.step(
  88  |         'Add product to cart',
  89  |         async () => {
  90  |           await productPage.addToCart();
  91  |         }
  92  |       );
  93  | 
  94  |       // --------------------------------------------------
  95  |       // 4. Change quantity dynamically
  96  |       // --------------------------------------------------
  97  | 
  98  |       await test.step(
  99  |         'Update quantity in cart',
  100 |         async () => {
  101 |           const currentQuantity =
  102 |             await cartPage.getQuantity();
  103 | 
  104 |           console.log(
  105 |             'Quantity before toggle:',
  106 |             currentQuantity
  107 |           );
  108 | 
  109 |           await cartPage.toggleQuantity();
  110 | 
  111 |           finalQuantity =
  112 |             await cartPage.getQuantity();
  113 | 
  114 |           console.log(
  115 |             'Quantity after toggle:',
  116 |             finalQuantity
  117 |           );
  118 | 
  119 |           // Quantity must change by exactly 1
  120 |           expect(
  121 |             Math.abs(
  122 |               finalQuantity - currentQuantity
  123 |             )
> 124 |           ).toBe(1);
      |             ^ Error: expect(received).toBe(expected) // Object.is equality
  125 | 
  126 |           expect(finalQuantity).toBeGreaterThan(0);
  127 |         }
  128 |       );
  129 | 
  130 |       // --------------------------------------------------
  131 |       // 5. Proceed to checkout
  132 |       // --------------------------------------------------
  133 | 
  134 |       await test.step(
  135 |         'Proceed to checkout',
  136 |         async () => {
  137 |           await cartPage.clickCompleteCheckout();
  138 | 
  139 |           await cartPage.page.waitForTimeout(2000);
  140 | 
  141 |           await cartPage.dismissRebillPOModal();
  142 |         }
  143 |       );
  144 | 
  145 |       // --------------------------------------------------
  146 |       // 6. Complete address
  147 |       // --------------------------------------------------
  148 | 
  149 |       await test.step(
  150 |         'Complete shipping address',
  151 |         async () => {
  152 |           await addressPage.completeAddress();
  153 |         }
  154 |       );
  155 | 
  156 |       // --------------------------------------------------
  157 |       // 7. Reach Review page
  158 |       // --------------------------------------------------
  159 | 
  160 |       await test.step(
  161 |         'Reach checkout review page',
  162 |         async () => {
  163 |           await checkoutReviewPage.page.waitForURL(
  164 |             /.*checkout\/review.*/i,
  165 |             {
  166 |               timeout: 15000,
  167 |             }
  168 |           );
  169 |         }
  170 |       );
  171 | 
  172 |       // --------------------------------------------------
  173 |       // 8. Select shipping dynamically
  174 |       // --------------------------------------------------
  175 | 
  176 |     await test.step('Select available shipping option', async () => {
  177 |   const shippingLabel = await checkoutReviewPage.selectAvailableShippingOption();
  178 |   console.log('Selected shipping option:', shippingLabel);
  179 | 
  180 |   // Tax/Total recalculate hone ka poora time do
  181 |   await checkoutReviewPage.page.waitForTimeout(3000);
  182 | });
  183 | 
  184 |       // --------------------------------------------------
  185 |       // 9. Verify all calculations dynamically
  186 |       // --------------------------------------------------
  187 | 
  188 |       let expectedTotal = 0;
  189 |       let expectedSubtotal = 0;
  190 | 
  191 |       await test.step(
  192 |         'Verify subtotal, shipping, tax and total calculation',
  193 |         async () => {
  194 |           const subtotal =
  195 |             await checkoutReviewPage.getSubtotal();
  196 | 
  197 |           const tax =
  198 |             await checkoutReviewPage.getTax();
  199 | 
  200 |           const shipping =
  201 |             await checkoutReviewPage.getShippingCost();
  202 | 
  203 |           const total =
  204 |             await checkoutReviewPage.getTotal();
  205 | 
  206 |           console.log('--------------------------------');
  207 |           console.log('Unit price:', unitPrice);
  208 |           console.log('Quantity:', finalQuantity);
  209 |           console.log('Subtotal:', subtotal);
  210 |           console.log('Tax:', tax);
  211 |           console.log('Shipping:', shipping);
  212 |           console.log('Total:', total);
  213 |           console.log('--------------------------------');
  214 | 
  215 |           // --------------------------------------------
  216 |           // Expected subtotal
  217 |           // --------------------------------------------
  218 | 
  219 |           expectedSubtotal = Number(
  220 |             (
  221 |               unitPrice * finalQuantity
  222 |             ).toFixed(2)
  223 |           );
  224 | 
```