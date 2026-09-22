# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Checkout Flow - RoadReady Wheels >> should verify shipping, subtotal and total calculation on checkout review
- Location: tests\cart.spec.ts:13:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: /Your Cart/ }).last().locator('..').locator('..').getByRole('button', { name: /Remove .* from cart/i }).first()
    - locator resolved to <button disabled aria-label="Remove 1999-2004 16x6 Ford F350SD Alloy Wheel / Rim from cart" class="text-gray-400 hover:text-red-500 flex-shrink-0 transition-colors opacity-50 cursor-not-allowed">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not enabled
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: Categories - Road Ready Wheels
  - iframe [ref=e3]
  - iframe [ref=e4]:
    - button "Support" [ref=f7e4] [cursor=pointer]
  - generic [ref=e5]:
    - banner [ref=e6]:
      - generic [ref=e9]:
        - link "ROADREADY" [ref=e10] [cursor=pointer]:
          - /url: /
        - generic [ref=e13]:
          - combobox "Search category" [ref=e15] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=e17]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=e18]
        - generic [ref=e19]:
          - generic [ref=e20]:
            - button "Resale" [ref=e23] [cursor=pointer]
            - button "Wholesale" [ref=e25] [cursor=pointer]
          - button "Select State" [ref=e28] [cursor=pointer]
          - generic [ref=e35]: "|"
          - button [ref=e37] [cursor=pointer]
          - generic [ref=e43]: "|"
          - button "Cart is empty" [disabled] [ref=e44]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart (0 items)" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=e50]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]: Parts Finder
          - generic [ref=e57]:
            - generic [ref=e61]:
              - combobox [ref=e63]
              - generic: Select Make
            - generic [ref=e67]:
              - combobox [ref=e69]
              - generic: Select Model
            - generic [ref=e73]:
              - combobox [ref=e75]
              - generic: Select Year
        - generic [ref=e76]:
          - generic [ref=e77]: type
          - generic [ref=e78]:
            - button "Aftermarket Wheel" [ref=e79] [cursor=pointer]
            - button "Genuine OEM Reconditioned Rim" [ref=e81] [cursor=pointer]
            - button "OEM Reconditioned Wheel" [ref=e83] [cursor=pointer]
            - button "OEM Replacement Hubcap" [ref=e85] [cursor=pointer]
            - button "OEM Replacement Wheel" [ref=e87] [cursor=pointer]
            - button "OEM Surplus Wheel" [ref=e89] [cursor=pointer]
            - button "OEM Take Off Wheel" [ref=e91] [cursor=pointer]
            - button "OEM Wheel Rim" [ref=e93] [cursor=pointer]
            - button "Simulator" [ref=e95] [cursor=pointer]
            - button "Trailer" [ref=e97] [cursor=pointer]
        - generic [ref=e99]:
          - generic [ref=e100]: material
          - generic [ref=e101]:
            - button "Alloy" [ref=e102] [cursor=pointer]
            - button "Steel" [ref=e104] [cursor=pointer]
            - button "ABS Plastic" [ref=e106] [cursor=pointer]
        - generic [ref=e108]:
          - generic [ref=e109]: diameter
          - generic [ref=e110]:
            - button "14\"" [ref=e111] [cursor=pointer]
            - button "15\"" [ref=e113] [cursor=pointer]
            - button "16\"" [ref=e115] [cursor=pointer]
            - button "17\"" [ref=e117] [cursor=pointer]
            - button "17.5\"" [ref=e119] [cursor=pointer]
            - button "18\"" [ref=e121] [cursor=pointer]
            - button "19\"" [ref=e123] [cursor=pointer]
            - button "19.5\"" [ref=e125] [cursor=pointer]
            - button "20\"" [ref=e127] [cursor=pointer]
            - button "21\"" [ref=e129] [cursor=pointer]
            - button "22\"" [ref=e131] [cursor=pointer]
            - button "22.5\"" [ref=e133] [cursor=pointer]
            - button "23\"" [ref=e135] [cursor=pointer]
            - button "24\"" [ref=e137] [cursor=pointer]
            - button "24.5\"" [ref=e139] [cursor=pointer]
        - generic [ref=e141]:
          - generic [ref=e142]: bolt pattern
          - generic [ref=e143]:
            - button "3x112.5mm or 3x4.4\"" [ref=e144] [cursor=pointer]
            - button "4x98mm or 4x3.9\"" [ref=e146] [cursor=pointer]
            - button "4x100mm or 4x3.9\"" [ref=e148] [cursor=pointer]
            - button "4x108mm or 4x4.3\"" [ref=e150] [cursor=pointer]
            - button "4x114.3mm or 4x4.5\"" [ref=e152] [cursor=pointer]
            - button "5x92.3mm or 5x3.6\"" [ref=e154] [cursor=pointer]
            - button "5x98mm or 5x3.9\"" [ref=e156] [cursor=pointer]
            - button "5x100mm or 5x3.9\"" [ref=e158] [cursor=pointer]
            - button "5x105mm or 5x4.1\"" [ref=e160] [cursor=pointer]
            - button "5x108mm or 5x4.3\"" [ref=e162] [cursor=pointer]
            - button "5x108mm or 5x4.25\"" [ref=e164] [cursor=pointer]
            - button "5x110mm or 5x4.3\"" [ref=e166] [cursor=pointer]
            - button "5x112mm or 5x4.4\"" [ref=e168] [cursor=pointer]
            - button "5x114.3mm or 5x4.5\"" [ref=e170] [cursor=pointer]
            - button "5x114.3mm or 5x5\"" [ref=e172] [cursor=pointer]
            - button "5x115mm or 5x4.5\"" [ref=e174] [cursor=pointer]
            - button "5x116.4mm or 4.6\"" [ref=e176] [cursor=pointer]
            - button "5x118.4mm or 4.7\"" [ref=e178] [cursor=pointer]
            - button "5x120mm or 5x4.7\"" [ref=e180] [cursor=pointer]
            - button "5x120mm or 5x4.75\"" [ref=e182] [cursor=pointer]
            - button "5x127mm or 5x5\"" [ref=e184] [cursor=pointer]
            - button "5x127mm or 5x4.7\"" [ref=e186] [cursor=pointer]
            - button "5x130mm or 5x5.1\"" [ref=e188] [cursor=pointer]
            - button "5x135mm or 5x5.3\"" [ref=e190] [cursor=pointer]
            - button "5x139.7mm or 5x5.5\"" [ref=e192] [cursor=pointer]
            - button "5x150mm or 5x5.9\"" [ref=e194] [cursor=pointer]
            - button "5x160mm or 5x6.3\"" [ref=e196] [cursor=pointer]
            - button "6x114.3mm or 6x4.5\"" [ref=e198] [cursor=pointer]
            - button "6x115mm or 6x4.5\"" [ref=e200] [cursor=pointer]
            - button "6x120mm or 6x4.7\"" [ref=e202] [cursor=pointer]
            - button "6x127mm or 6x5\"" [ref=e204] [cursor=pointer]
            - button "6x130mm or 6x5.1\"" [ref=e206] [cursor=pointer]
            - button "6x132mm or 6x5.2\"" [ref=e208] [cursor=pointer]
            - button "6x135mm or 6x5.3\"" [ref=e210] [cursor=pointer]
            - button "6x139.7mm or 6x5.5\"" [ref=e212] [cursor=pointer]
            - button "6x180mm or 6x7.1\"" [ref=e214] [cursor=pointer]
            - button "6x205mm or 6x8.1\"" [ref=e216] [cursor=pointer]
            - button "6x222.25mm or 6x8.75\"" [ref=e218] [cursor=pointer]
            - button "7x150mm or 7x5.9\"" [ref=e220] [cursor=pointer]
            - button "8x165.1mm or 8x6.5\"" [ref=e222] [cursor=pointer]
            - button "8x170mm or 8x6.7\"" [ref=e224] [cursor=pointer]
            - button "8x180mm or 8x7.1\"" [ref=e226] [cursor=pointer]
            - button "8x200mm or 8x7.9\"" [ref=e228] [cursor=pointer]
            - button "8x210mm or 8x8.3\"" [ref=e230] [cursor=pointer]
            - button "8x225mm or 8x8.9\"" [ref=e232] [cursor=pointer]
            - button "8x275mm or 8x10.8\"" [ref=e234] [cursor=pointer]
            - button "10x184.1mm or 10x7.25\"" [ref=e236] [cursor=pointer]
            - button "10-222.25mm or 10-8.75\"" [ref=e238] [cursor=pointer]
            - button "10x225mm or 10x8.9\"" [ref=e240] [cursor=pointer]
            - button "10x285.7mm or 10x11.2\"" [ref=e242] [cursor=pointer]
        - generic [ref=e244]:
          - generic [ref=e245]: lug count
          - generic [ref=e246]:
            - button "3" [ref=e247] [cursor=pointer]
            - button "4" [ref=e249] [cursor=pointer]
            - button "5" [ref=e251] [cursor=pointer]
            - button "6" [ref=e253] [cursor=pointer]
            - button "7" [ref=e255] [cursor=pointer]
            - button "8" [ref=e257] [cursor=pointer]
            - button "10" [ref=e259] [cursor=pointer]
        - generic [ref=e261]:
          - generic [ref=e262]: center bore
          - generic [ref=e263]:
            - button "46mm" [ref=e264] [cursor=pointer]
            - button "54mm" [ref=e266] [cursor=pointer]
            - button "54.06mm" [ref=e268] [cursor=pointer]
            - button "54.1mm" [ref=e270] [cursor=pointer]
            - button "56mm" [ref=e272] [cursor=pointer]
            - button "56.1mm" [ref=e274] [cursor=pointer]
            - button "56.5mm" [ref=e276] [cursor=pointer]
            - button "56.6mm" [ref=e278] [cursor=pointer]
            - button "56.8mm" [ref=e280] [cursor=pointer]
            - button "57mm" [ref=e282] [cursor=pointer]
            - button "57.1mm" [ref=e284] [cursor=pointer]
            - button "57.2mm" [ref=e286] [cursor=pointer]
            - button "58mm" [ref=e288] [cursor=pointer]
            - button "58.1mm" [ref=e290] [cursor=pointer]
            - button "59.1mm" [ref=e292] [cursor=pointer]
            - button "60mm" [ref=e294] [cursor=pointer]
            - button "60.1mm" [ref=e296] [cursor=pointer]
            - button "60.7mm" [ref=e298] [cursor=pointer]
            - button "63mm" [ref=e300] [cursor=pointer]
            - button "63.1mm" [ref=e302] [cursor=pointer]
            - button "63.3mm" [ref=e304] [cursor=pointer]
            - button "63.4mm" [ref=e306] [cursor=pointer]
            - button "63.5mm" [ref=e308] [cursor=pointer]
            - button "63.6mm" [ref=e310] [cursor=pointer]
            - button "64mm" [ref=e312] [cursor=pointer]
            - button "64.1mm" [ref=e314] [cursor=pointer]
            - button "64.2mm" [ref=e316] [cursor=pointer]
            - button "65mm" [ref=e318] [cursor=pointer]
            - button "65.1mm" [ref=e320] [cursor=pointer]
            - button "66mm" [ref=e322] [cursor=pointer]
            - button "66.1mm" [ref=e324] [cursor=pointer]
            - button "66.45mm" [ref=e326] [cursor=pointer]
            - button "66.5mm" [ref=e328] [cursor=pointer]
            - button "66.6mm" [ref=e330] [cursor=pointer]
            - button "66.87mm" [ref=e332] [cursor=pointer]
            - button "66.9mm" [ref=e334] [cursor=pointer]
            - button "67mm" [ref=e336] [cursor=pointer]
            - button "67.1mm" [ref=e338] [cursor=pointer]
            - button "68mm" [ref=e340] [cursor=pointer]
            - button "70,3mm" [ref=e342] [cursor=pointer]
            - button "70.1mm" [ref=e344] [cursor=pointer]
            - button "70.2mm" [ref=e346] [cursor=pointer]
            - button "70.3mm" [ref=e348] [cursor=pointer]
            - button "70.5mm" [ref=e350] [cursor=pointer]
            - button "70.6mm" [ref=e352] [cursor=pointer]
            - button "70.8mm" [ref=e354] [cursor=pointer]
            - button "71.5mm" [ref=e356] [cursor=pointer]
            - button "71.6mm" [ref=e358] [cursor=pointer]
            - button "71.8mm" [ref=e360] [cursor=pointer]
            - button "72.5mm" [ref=e362] [cursor=pointer]
            - button "72.6mm" [ref=e364] [cursor=pointer]
            - button "73.1mm" [ref=e366] [cursor=pointer]
            - button "74mm" [ref=e368] [cursor=pointer]
            - button "74.1mm" [ref=e370] [cursor=pointer]
            - button "74.5mm" [ref=e372] [cursor=pointer]
            - button "77.8mm" [ref=e374] [cursor=pointer]
            - button "78mm" [ref=e376] [cursor=pointer]
            - button "78.1mm" [ref=e378] [cursor=pointer]
            - button "78.3mm" [ref=e380] [cursor=pointer]
            - button "81mm" [ref=e382] [cursor=pointer]
            - button "83.7mm" [ref=e384] [cursor=pointer]
            - button "84mm" [ref=e386] [cursor=pointer]
            - button "84.1mm" [ref=e388] [cursor=pointer]
            - button "84.5mm" [ref=e390] [cursor=pointer]
            - button "87mm" [ref=e392] [cursor=pointer]
            - button "87,1mm" [ref=e394] [cursor=pointer]
            - button "87.1mm" [ref=e396] [cursor=pointer]
            - button "92.5mm" [ref=e398] [cursor=pointer]
            - button "93.1mm" [ref=e400] [cursor=pointer]
            - button "95.1mm" [ref=e402] [cursor=pointer]
            - button "95.2mm" [ref=e404] [cursor=pointer]
            - button "100mm" [ref=e406] [cursor=pointer]
            - button "100.3mm" [ref=e408] [cursor=pointer]
            - button "106mm" [ref=e410] [cursor=pointer]
            - button "106.1mm" [ref=e412] [cursor=pointer]
            - button "106.2mm" [ref=e414] [cursor=pointer]
            - button "108mm" [ref=e416] [cursor=pointer]
            - button "108.1mm" [ref=e418] [cursor=pointer]
            - button "110.1mm" [ref=e420] [cursor=pointer]
            - button "110.2mm" [ref=e422] [cursor=pointer]
            - button "110.5mm" [ref=e424] [cursor=pointer]
            - button "110.6mm" [ref=e426] [cursor=pointer]
            - button "116mm" [ref=e428] [cursor=pointer]
            - button "116.6mm" [ref=e430] [cursor=pointer]
            - button "116.7mm" [ref=e432] [cursor=pointer]
            - button "116.8mm" [ref=e434] [cursor=pointer]
            - button "117mm" [ref=e436] [cursor=pointer]
            - button "120.9mm" [ref=e438] [cursor=pointer]
            - button "121mm" [ref=e440] [cursor=pointer]
            - button "121.0mm" [ref=e442] [cursor=pointer]
            - button "121.15mm" [ref=e444] [cursor=pointer]
            - button "121.2mm" [ref=e446] [cursor=pointer]
            - button "121.3mm" [ref=e448] [cursor=pointer]
            - button "122mm" [ref=e450] [cursor=pointer]
            - button "123.9mm" [ref=e452] [cursor=pointer]
            - button "124mm" [ref=e454] [cursor=pointer]
            - button "124.1mm" [ref=e456] [cursor=pointer]
            - button "124.2mm" [ref=e458] [cursor=pointer]
            - button "124.46mm" [ref=e460] [cursor=pointer]
            - button "124.9mm" [ref=e462] [cursor=pointer]
            - button "125mm" [ref=e464] [cursor=pointer]
            - button "125.1mm" [ref=e466] [cursor=pointer]
            - button "125.2mm" [ref=e468] [cursor=pointer]
            - button "133.4mm" [ref=e470] [cursor=pointer]
            - button "138.8mm" [ref=e472] [cursor=pointer]
            - button "139mm" [ref=e474] [cursor=pointer]
            - button "140mm" [ref=e476] [cursor=pointer]
            - button "142mm" [ref=e478] [cursor=pointer]
            - button "142.1mm" [ref=e480] [cursor=pointer]
            - button "154mm" [ref=e482] [cursor=pointer]
            - button "154.2mm" [ref=e484] [cursor=pointer]
            - button "161mm" [ref=e486] [cursor=pointer]
            - button "164mm" [ref=e488] [cursor=pointer]
            - button "165.1mm" [ref=e490] [cursor=pointer]
            - button "167.5mm" [ref=e492] [cursor=pointer]
            - button "170.1mm" [ref=e494] [cursor=pointer]
            - button "170.2mm" [ref=e496] [cursor=pointer]
            - button "220mm" [ref=e498] [cursor=pointer]
            - button "220.1mm" [ref=e500] [cursor=pointer]
            - button "220.9mm" [ref=e502] [cursor=pointer]
            - button "221mm" [ref=e504] [cursor=pointer]
            - button "222mm" [ref=e506] [cursor=pointer]
        - generic [ref=e508]:
          - generic [ref=e509]: Availability
          - generic [ref=e510] [cursor=pointer]:
            - checkbox "Include Out of Stock" [checked] [ref=e511]
            - generic [ref=e512]: Include Out of Stock
      - generic [ref=e513]:
        - generic [ref=e515]:
          - generic [ref=e516]: Shop Road Ready Products
          - generic [ref=e517]:
            - link [ref=e518] [cursor=pointer]:
              - /url: /t/categories
              - button "By Category" [ref=e519]
            - link [ref=e520] [cursor=pointer]:
              - /url: /t/brand
              - button "Top Brands" [ref=e521]
            - link [ref=e522] [cursor=pointer]:
              - /url: /t/section
              - button "Featured Items" [ref=e523]
        - generic [ref=e525]:
          - generic [ref=e526]:
            - generic [ref=e528]:
              - heading "Alloy Wheels" [level=5] [ref=e529] [cursor=pointer]
              - button "View All" [ref=e530] [cursor=pointer]
            - generic [ref=e532]:
              - generic [ref=e533]:
                - generic [ref=e534]:
                  - generic [ref=e535]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=e540] [cursor=pointer]
                  - link [ref=e543] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                    - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e546]
                - generic [ref=e547]:
                  - link [ref=e548] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                    - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e549]
                  - link "9,257 All-Time Units Sold" [ref=e550] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                  - generic [ref=e552]: $233.58
                  - generic [ref=e554]: "Hollander: 560-03335B"
                  - generic [ref=e556]:
                    - generic [ref=e557]: 🚚
                    - button "Please Select State" [ref=e558] [cursor=pointer]
                  - generic [ref=e560]:
                    - button "1" [ref=e562] [cursor=pointer]
                    - button "Add To Cart" [ref=e566] [cursor=pointer]
              - generic [ref=e567]:
                - generic [ref=e568]:
                  - generic [ref=e569]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=e574] [cursor=pointer]
                  - link [ref=e577] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                    - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=e580]
                - generic [ref=e581]:
                  - link [ref=e582] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                    - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=e583]
                  - link "6,559 All-Time Units Sold" [ref=e584] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                  - generic [ref=e586]: $198.55
                  - generic [ref=e588]: "Hollander: 560-64127"
                  - generic [ref=e590]:
                    - generic [ref=e591]: 🚚
                    - button "Please Select State" [ref=e592] [cursor=pointer]
                  - generic [ref=e594]:
                    - button "1" [ref=e596] [cursor=pointer]
                    - button "Add To Cart" [ref=e600] [cursor=pointer]
              - generic [ref=e601]:
                - generic [ref=e602]:
                  - generic [ref=e603]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=e608] [cursor=pointer]
                  - link [ref=e611] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                    - img "2019-2025 Toyota Corolla 18x8 Alloy Wheel / Rim" [ref=e614]
                - generic [ref=e615]:
                  - link [ref=e616] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                    - heading "2019-2025 Toyota Corolla 18x8 Alloy Wheel / Rim" [level=3] [ref=e617]
                  - link "707 All-Time Units Sold" [ref=e618] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                  - generic [ref=e620]: $228.87
                  - generic [ref=e622]: "Hollander: 560-75236C"
                  - generic [ref=e624]:
                    - generic [ref=e625]: 🚚
                    - button "Please Select State" [ref=e626] [cursor=pointer]
                  - generic [ref=e628]:
                    - button "1" [ref=e630] [cursor=pointer]
                    - button "Add To Cart" [ref=e634] [cursor=pointer]
              - generic [ref=e635]:
                - generic [ref=e636]:
                  - generic [ref=e637]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=e642] [cursor=pointer]
                  - link [ref=e645] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                    - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=e648]
                - generic [ref=e649]:
                  - link [ref=e650] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                    - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=e651]
                  - link "6,559 All-Time Units Sold" [ref=e652] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                  - generic [ref=e654]: $198.55
                  - generic [ref=e656]: "Hollander: 560-60337A"
                  - generic [ref=e658]:
                    - generic [ref=e659]: 🚚
                    - button "Please Select State" [ref=e660] [cursor=pointer]
                  - generic [ref=e662]:
                    - button "1" [ref=e664] [cursor=pointer]
                    - button "Add To Cart" [ref=e668] [cursor=pointer]
          - generic [ref=e669]:
            - generic [ref=e671]:
              - heading "Dually Steel Wheels" [level=5] [ref=e672] [cursor=pointer]
              - button "View All" [ref=e673] [cursor=pointer]
            - generic [ref=e676]:
              - generic [ref=e677]:
                - generic [ref=e678]: Top Trending Dually Wheels
                - button "Add to wishlist" [ref=e683] [cursor=pointer]
                - link [ref=e686] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                  - img "2019-2024 17x6 Dodge Ram 3500 Dually Wheel / Rim" [ref=e689]
              - generic [ref=e690]:
                - link [ref=e691] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                  - heading "2019-2024 17x6 Dodge Ram 3500 Dually Wheel / Rim" [level=3] [ref=e692]
                - link "729 All-Time Units Sold" [ref=e693] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                - generic [ref=e695]: $183.75
                - generic [ref=e697]: "Hollander: 560-02704"
                - generic [ref=e699]:
                  - generic [ref=e700]: 🚚
                  - button "Please Select State" [ref=e701] [cursor=pointer]
                - generic [ref=e703]:
                  - button "1" [ref=e705] [cursor=pointer]
                  - button "Add To Cart" [ref=e709] [cursor=pointer]
          - generic [ref=e710]:
            - generic [ref=e712]:
              - heading "Chrome Wheels" [level=5] [ref=e713] [cursor=pointer]
              - button "View All" [ref=e714] [cursor=pointer]
            - generic [ref=e716]:
              - generic [ref=e717]:
                - generic [ref=e718]:
                  - generic [ref=e719]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=e724] [cursor=pointer]
                  - link [ref=e727] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                    - img "2014-2023 22x9 Cadillac Escalade GMC Sierra Yukon 1500 Chrome Wheel / Rim" [ref=e730]
                - generic [ref=e731]:
                  - link [ref=e732] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                    - heading "2014-2023 22x9 Cadillac Escalade GMC Sierra Yukon 1500 Chrome Wheel / Rim" [level=3] [ref=e733]
                  - link "333 All-Time Units Sold" [ref=e734] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                  - generic [ref=e736]: $363.40
                  - generic [ref=e738]: "Hollander: 560-05667"
                  - generic [ref=e740]:
                    - generic [ref=e741]: 🚚
                    - button "Please Select State" [ref=e742] [cursor=pointer]
                  - generic [ref=e744]:
                    - button "1" [ref=e746] [cursor=pointer]
                    - button "Add To Cart" [ref=e750] [cursor=pointer]
              - generic [ref=e751]:
                - generic [ref=e752]:
                  - generic [ref=e753]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=e758] [cursor=pointer]
                  - link [ref=e761] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                    - img "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [ref=e764]
                - generic [ref=e765]:
                  - link [ref=e766] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                    - heading "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [level=3] [ref=e767]
                  - link "668 All-Time Units Sold" [ref=e768] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                  - generic [ref=e770]: $351.07
                  - generic [ref=e772]: "Hollander: 560-05309A"
                  - generic [ref=e775]:
                    - generic [ref=e776]: 🚚
                    - button "Please Select State" [ref=e777] [cursor=pointer]
                  - generic [ref=e779]:
                    - button "1" [ref=e781] [cursor=pointer]
                    - button "Add To Cart" [ref=e785] [cursor=pointer]
              - generic [ref=e786]:
                - generic [ref=e787]:
                  - generic [ref=e788]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=e793] [cursor=pointer]
                  - link [ref=e796] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                    - img "2014-2023 22x9 Chevrolet Silverado Suburban Tahoe 1500 Chrome Wheel / Rim" [ref=e799]
                - generic [ref=e800]:
                  - link [ref=e801] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                    - heading "2014-2023 22x9 Chevrolet Silverado Suburban Tahoe 1500 Chrome Wheel / Rim" [level=3] [ref=e802]
                  - link "391 All-Time Units Sold" [ref=e803] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                  - generic [ref=e805]: $363.40
                  - generic [ref=e807]: "Hollander: 560-05667"
                  - generic [ref=e809]:
                    - generic [ref=e810]: 🚚
                    - button "Please Select State" [ref=e811] [cursor=pointer]
                  - generic [ref=e813]:
                    - button "1" [ref=e815] [cursor=pointer]
                    - button "Add To Cart" [ref=e819] [cursor=pointer]
              - generic [ref=e820]:
                - generic [ref=e821]:
                  - generic [ref=e822]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=e827] [cursor=pointer]
                  - link [ref=e830] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                    - img "1999-2018 20x9 GMC Sierra 1500 Chrome Wheel / Rim" [ref=e833]
                - generic [ref=e834]:
                  - link [ref=e835] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                    - heading "1999-2018 20x9 GMC Sierra 1500 Chrome Wheel / Rim" [level=3] [ref=e836]
                  - link "498 All-Time Units Sold" [ref=e837] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                  - generic [ref=e839]: $351.07
                  - generic [ref=e841]: "Hollander: 560-05656"
                  - generic [ref=e843]:
                    - generic [ref=e844]: 🚚
                    - button "Please Select State" [ref=e845] [cursor=pointer]
                  - generic [ref=e847]:
                    - button "1" [ref=e849] [cursor=pointer]
                    - button "Add To Cart" [ref=e853] [cursor=pointer]
          - generic [ref=e854]:
            - generic [ref=e856]:
              - heading "Hubcaps" [level=5] [ref=e857] [cursor=pointer]
              - button "View All" [ref=e858] [cursor=pointer]
            - generic [ref=e860]:
              - generic [ref=e861]:
                - generic [ref=e862]:
                  - generic [ref=e863]: Top Hubcaps
                  - button "Add to wishlist" [ref=e868] [cursor=pointer]
                  - link [ref=e871] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - img "2013-2015 Honda Civic Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=e874]
                - generic [ref=e875]:
                  - link [ref=e876] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - heading "2013-2015 Honda Civic Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e877]
                  - link "475 All-Time Units Sold" [ref=e878] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                  - generic [ref=e880]: $71.85
                  - generic [ref=e882]: "Hollander: 570-0020"
                  - generic [ref=e885]:
                    - generic [ref=e886]: 🚚
                    - button "Please Select State" [ref=e887] [cursor=pointer]
                  - generic [ref=e889]:
                    - button "1" [ref=e891] [cursor=pointer]
                    - button "Add To Cart" [ref=e895] [cursor=pointer]
              - generic [ref=e896]:
                - generic [ref=e897]:
                  - generic [ref=e898]: Top Hubcaps
                  - button "Add to wishlist" [ref=e903] [cursor=pointer]
                  - link [ref=e906] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                    - img "2006-2011 Chevrolet Impala Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=e909]
                - generic [ref=e910]:
                  - link [ref=e911] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                    - heading "2006-2011 Chevrolet Impala Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e912]
                  - link "250 All-Time Units Sold" [ref=e913] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                  - generic [ref=e915]: $65.01
                  - generic [ref=e917]: "Hollander: 570-03021"
                  - generic [ref=e920]:
                    - generic [ref=e921]: 🚚
                    - button "Please Select State" [ref=e922] [cursor=pointer]
                  - generic [ref=e924]:
                    - button "1" [ref=e926] [cursor=pointer]
                    - button "Add To Cart" [ref=e930] [cursor=pointer]
              - generic [ref=e931]:
                - generic [ref=e932]:
                  - generic [ref=e933]: Top Hubcaps
                  - button "Add to wishlist" [ref=e938] [cursor=pointer]
                  - link [ref=e941] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - img "2015-2024 Ford Transit 150 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [ref=e944]
                - generic [ref=e945]:
                  - link [ref=e946] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - heading "2015-2024 Ford Transit 150 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e947]
                  - link "126 All-Time Units Sold" [ref=e948] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                  - generic [ref=e950]: $72.99
                  - generic [ref=e952]: "Hollander: 570-07068"
                  - generic [ref=e955]:
                    - generic [ref=e956]: 🚚
                    - button "Please Select State" [ref=e957] [cursor=pointer]
                  - generic [ref=e959]:
                    - button "1" [ref=e961] [cursor=pointer]
                    - button "Add To Cart" [ref=e965] [cursor=pointer]
              - generic [ref=e966]:
                - generic [ref=e967]:
                  - button "Add to wishlist" [ref=e970] [cursor=pointer]
                  - link [ref=e973] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                    - img "2022-2024 Honda Civic Four Piece Set 16\" Silver/Black Wheel Cover Caps / Hubcaps" [ref=e976]
                - generic [ref=e977]:
                  - link [ref=e978] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                    - heading "2022-2024 Honda Civic Four Piece Set 16\" Silver/Black Wheel Cover Caps / Hubcaps" [level=3] [ref=e979]
                  - link "1,425 All-Time Units Sold" [ref=e980] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                  - generic [ref=e982]: $83.07
                  - generic [ref=e984]: "Hollander: 570-10011"
                  - generic [ref=e986]:
                    - generic [ref=e987]: 🚚
                    - button "Please Select State" [ref=e988] [cursor=pointer]
                  - generic [ref=e990]:
                    - button "1" [ref=e992] [cursor=pointer]
                    - button "Add To Cart" [ref=e996] [cursor=pointer]
          - generic [ref=e997]:
            - generic [ref=e999]:
              - heading "Steel Wheels" [level=5] [ref=e1000] [cursor=pointer]
              - button "View All" [ref=e1001] [cursor=pointer]
            - generic [ref=e1003]:
              - generic [ref=e1004]:
                - generic [ref=e1005]:
                  - generic [ref=e1006]: Top Steel Wheel
                  - button "Add to wishlist" [ref=e1011] [cursor=pointer]
                  - link [ref=e1014] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                    - img "2005-2026 Ford F-550 19.5x6 Steel Wheel / Rim" [ref=e1017]
                - generic [ref=e1018]:
                  - link [ref=e1019] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                    - heading "2005-2026 Ford F-550 19.5x6 Steel Wheel / Rim" [level=3] [ref=e1020]
                  - link "16,540 All-Time Units Sold" [ref=e1021] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                  - generic [ref=e1023]: $194.33
                  - generic [ref=e1025]: "Hollander: 99042"
                  - generic [ref=e1028]:
                    - generic [ref=e1029]: 🚚
                    - button "Please Select State" [ref=e1030] [cursor=pointer]
                  - generic [ref=e1032]:
                    - button "1" [ref=e1034] [cursor=pointer]
                    - button "Add To Cart" [ref=e1038] [cursor=pointer]
              - generic [ref=e1039]:
                - generic [ref=e1040]:
                  - generic [ref=e1041]: Top Steel Wheel
                  - button "Add to wishlist" [ref=e1046] [cursor=pointer]
                  - link [ref=e1049] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                    - img "2011-2025 Chevrolet Silverado 3500 17x6.5 Steel Wheel / Rim" [ref=e1052]
                - generic [ref=e1053]:
                  - link [ref=e1054] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                    - heading "2011-2025 Chevrolet Silverado 3500 17x6.5 Steel Wheel / Rim" [level=3] [ref=e1055]
                  - link "13,374 All-Time Units Sold" [ref=e1056] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                  - generic [ref=e1058]: $147.15
                  - generic [ref=e1060]: "Hollander: 560-08094"
                  - generic [ref=e1062]:
                    - generic [ref=e1063]: 🚚
                    - button "Please Select State" [ref=e1064] [cursor=pointer]
                  - generic [ref=e1066]:
                    - button "1" [ref=e1068] [cursor=pointer]
                    - button "Add To Cart" [ref=e1072] [cursor=pointer]
              - generic [ref=e1073]:
                - generic [ref=e1074]:
                  - generic [ref=e1075]: Top Steel Wheel
                  - button "Add to wishlist" [ref=e1080] [cursor=pointer]
                  - link [ref=e1083] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                    - img "2015-2025 16x6 Ford Transit 350 Dually Steel Wheel / Rim" [ref=e1086]
                - generic [ref=e1087]:
                  - link [ref=e1088] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                    - heading "2015-2025 16x6 Ford Transit 350 Dually Steel Wheel / Rim" [level=3] [ref=e1089]
                  - link "4,176 All-Time Units Sold" [ref=e1090] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                  - generic [ref=e1092]: $142.66
                  - generic [ref=e1094]: "Hollander: 560-10050S"
                  - generic [ref=e1096]:
                    - generic [ref=e1097]: 🚚
                    - button "Please Select State" [ref=e1098] [cursor=pointer]
                  - generic [ref=e1100]:
                    - button "1" [ref=e1102] [cursor=pointer]
                    - button "Add To Cart" [ref=e1106] [cursor=pointer]
              - generic [ref=e1107]:
                - generic [ref=e1108]:
                  - generic [ref=e1109]: Top Steel Wheel
                  - button "Add to wishlist" [ref=e1114] [cursor=pointer]
                  - link [ref=e1117] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                    - img "2008-2010 17x6.5 GMC Sierra 3500 Dually Steel Wheel / Rim" [ref=e1120]
                - generic [ref=e1121]:
                  - link [ref=e1122] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                    - heading "2008-2010 17x6.5 GMC Sierra 3500 Dually Steel Wheel / Rim" [level=3] [ref=e1123]
                  - link "5,783 All-Time Units Sold" [ref=e1124] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                  - generic [ref=e1126]: $161.63
                  - generic [ref=e1128]: "Hollander: 560-08076A"
                  - generic [ref=e1130]:
                    - generic [ref=e1131]: 🚚
                    - button "Please Select State" [ref=e1132] [cursor=pointer]
                  - generic [ref=e1134]:
                    - button "1" [ref=e1136] [cursor=pointer]
                    - button "Add To Cart" [ref=e1140] [cursor=pointer]
          - generic [ref=e1141]:
            - generic [ref=e1143]:
              - heading "New OEM Take Off Wheels / Rims" [level=5] [ref=e1144] [cursor=pointer]
              - button "View All" [ref=e1145] [cursor=pointer]
            - generic [ref=e1147]:
              - generic [ref=e1148]:
                - generic [ref=e1149]:
                  - generic [ref=e1150]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=e1155] [cursor=pointer]
                  - link [ref=e1158] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                    - img "2020-2024 16x6.5 Ford Transit 150 Genuine OEM Take-Off Steel Wheel / Rim" [ref=e1161]
                - generic [ref=e1162]:
                  - link [ref=e1163] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                    - heading "2020-2024 16x6.5 Ford Transit 150 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=e1164]
                  - link "1,437 All-Time Units Sold" [ref=e1165] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                  - generic [ref=e1167]: $138.82
                  - generic [ref=e1169]: "Hollander: 560-10283"
                  - generic [ref=e1172]:
                    - generic [ref=e1173]: 🚚
                    - button "Please Select State" [ref=e1174] [cursor=pointer]
                  - generic [ref=e1176]:
                    - button "1" [ref=e1178] [cursor=pointer]
                    - button "Add To Cart" [ref=e1182] [cursor=pointer]
              - generic [ref=e1183]:
                - generic [ref=e1184]:
                  - generic [ref=e1185]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=e1190] [cursor=pointer]
                  - link [ref=e1193] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                    - img "2010-2025 17x7.5 Ford F250SD Genuine OEM Take-Off Steel Wheel / Rim" [ref=e1196]
                - generic [ref=e1197]:
                  - link [ref=e1198] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                    - heading "2010-2025 17x7.5 Ford F250SD Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=e1199]
                  - link "406 All-Time Units Sold" [ref=e1200] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                  - generic [ref=e1202]: $181.31
                  - generic [ref=e1204]: "Hollander: 560-03828A"
                  - generic [ref=e1207]:
                    - generic [ref=e1208]: 🚚
                    - button "Please Select State" [ref=e1209] [cursor=pointer]
                  - generic [ref=e1211]:
                    - button "1" [ref=e1213] [cursor=pointer]
                    - button "Add To Cart" [ref=e1217] [cursor=pointer]
              - generic [ref=e1218]:
                - generic [ref=e1219]:
                  - generic [ref=e1220]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=e1225] [cursor=pointer]
                  - link [ref=e1228] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                    - img "2010-2024 Mercedes-Benz Sprinter 3500 DRW 16x5.5 Genuine OEM Take-Off Steel Wheel / Rim" [ref=e1231]
                - generic [ref=e1232]:
                  - link [ref=e1233] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                    - heading "2010-2024 Mercedes-Benz Sprinter 3500 DRW 16x5.5 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=e1234]
                  - link "599 All-Time Units Sold" [ref=e1235] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                  - generic [ref=e1237]: $101.68
                  - generic [ref=e1239]: "Hollander: 560-85412"
                  - generic [ref=e1241]:
                    - generic [ref=e1242]: 🚚
                    - button "Please Select State" [ref=e1243] [cursor=pointer]
                  - generic [ref=e1245]:
                    - button "1" [ref=e1247] [cursor=pointer]
                    - button "Add To Cart" [ref=e1251] [cursor=pointer]
              - generic [ref=e1252]:
                - generic [ref=e1253]:
                  - generic [ref=e1254]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=e1259] [cursor=pointer]
                  - link [ref=e1262] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                    - img "2010-2024 16x5.5 Mercedes-Benz Sprinter 3500 Genuine OEM Take-Off Steel Wheel / Rim" [ref=e1265]
                - generic [ref=e1266]:
                  - link [ref=e1267] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                    - heading "2010-2024 16x5.5 Mercedes-Benz Sprinter 3500 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=e1268]
                  - link "599 All-Time Units Sold" [ref=e1269] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                  - generic [ref=e1271]: $101.68
                  - generic [ref=e1273]: "Hollander: 560-85413"
                  - generic [ref=e1275]:
                    - generic [ref=e1276]: 🚚
                    - button "Please Select State" [ref=e1277] [cursor=pointer]
                  - generic [ref=e1279]:
                    - button "1" [ref=e1281] [cursor=pointer]
                    - button "Add To Cart" [ref=e1285] [cursor=pointer]
    - contentinfo [ref=e1286]:
      - generic [ref=e1287]:
        - generic [ref=e1288]:
          - generic [ref=e1289]:
            - heading "Contact Us" [level=3] [ref=e1290]
            - generic [ref=e1291]:
              - paragraph [ref=e1292]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e1293] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e1294]:
                - text: "Text:"
                - link "217-635-2033" [ref=e1295] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e1296] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e1297]:
              - link "Visit our Facebook page" [ref=e1298] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e1301] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e1302]
              - link "Visit our Instagram page" [ref=e1303] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e1307] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e1311]:
              - img "BBB Accredited" [ref=e1313]
              - img "WTC Member" [ref=e1315]
          - generic [ref=e1316]:
            - heading "Support" [level=3] [ref=e1317]
            - generic [ref=e1318]:
              - link "Returns and Refunds" [ref=e1319] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e1320] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e1321] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e1322] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e1323] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e1324] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e1325] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e1326] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e1327]:
            - heading "Why Road Ready" [level=3] [ref=e1328]
            - generic [ref=e1329]:
              - link "About Us" [ref=e1330] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e1331] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e1332]:
            - heading "Divisions" [level=3] [ref=e1333]
            - generic [ref=e1334]:
              - link "Wholesale" [ref=e1335] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e1336] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e1337]:
          - paragraph [ref=e1339]:
            - strong [ref=e1340]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e1341]:
            - paragraph [ref=e1342]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e1343]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e1344] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  1   | import { Page, Locator } from '@playwright/test';
  2   | import BasePage from './BasePage';
  3   | 
  4   | export default class CartPage extends BasePage {
  5   |   readonly cartDrawer: Locator;
  6   |   readonly cartHeading: Locator;
  7   |   readonly openCartButton: Locator;
  8   |   readonly removeItemButtons: Locator;
  9   |   readonly quantityIncreaseButton: Locator;
  10  |   readonly quantityDecreaseButton: Locator;
  11  |   readonly quantityValue: Locator;
  12  |   readonly completeCheckoutButton: Locator;
  13  |   readonly dontHavePOButton: Locator;
  14  |   readonly completeOrderButton: Locator;
  15  |   readonly closeRebillModalButton: Locator;
  16  | 
  17  |   constructor(page: Page) {
  18  |     super(page);
  19  | 
  20  |     this.openCartButton = page.getByRole('button', { name: 'Open cart' });
  21  | 
  22  |     this.cartHeading = page.getByRole('heading', { name: /Your Cart/ }).last();
  23  |     this.cartDrawer = this.cartHeading.locator('..').locator('..');
  24  | 
  25  |     this.removeItemButtons = this.cartDrawer.getByRole('button', {
  26  |       name: /Remove .* from cart/i,
  27  |     });
  28  | 
  29  |     this.quantityDecreaseButton = this.cartDrawer
  30  |       .getByRole('button', { name: /Decrease quantity/i })
  31  |       .last();
  32  | 
  33  |     this.quantityIncreaseButton = this.cartDrawer
  34  |       .getByRole('button', { name: /Increase quantity/i })
  35  |       .last();
  36  | 
  37  |     this.quantityValue = this.quantityDecreaseButton
  38  |       .locator('..')
  39  |       .getByText(/^\d+$/)
  40  |       .first();
  41  | 
  42  |     
  43  |     this.completeCheckoutButton = this.cartDrawer
  44  |       .locator('button:visible', { hasText: 'Complete Checkout' })
  45  |       .first();
  46  | 
  47  |     this.completeOrderButton = page.getByRole('button', { name: 'Complete Order' });
  48  |     this.dontHavePOButton = page.getByRole('button', { name: "Don't Have PO" });
  49  |     this.closeRebillModalButton = page.getByRole('button', { name: 'Close modal' });
  50  |   }
  51  | 
  52  |   async getQuantity(): Promise<number> {
  53  |     const text = await this.quantityValue.textContent();
  54  |     if (!text) {
  55  |       throw new Error('Quantity value was not found');
  56  |     }
  57  |     const quantity = Number(text.trim());
  58  |     if (Number.isNaN(quantity)) {
  59  |       throw new Error(`Invalid quantity value: "${text}"`);
  60  |     }
  61  |     return quantity;
  62  |   }
  63  | 
  64  |   async toggleQuantity() {
  65  |     const currentQty = await this.getQuantity();
  66  |     console.log('Current quantity:', currentQty);
  67  | 
  68  |     if (currentQty > 1) {
  69  |       console.log('Clicking decrease quantity');
  70  |       await this.quantityDecreaseButton.click();
  71  |     } else {
  72  |       console.log('Clicking increase quantity');
  73  |       await this.quantityIncreaseButton.click();
  74  |     }
  75  |   }
  76  | 
  77  |   async clickCompleteCheckout() {
  78  |     await this.completeCheckoutButton.click();
  79  |   }
  80  | 
  81  |   async dismissRebillPOModal() {
  82  |   await this.dontHavePOButton.click();
  83  | 
  84  |   }
  85  |   async clearCartIfNotEmpty() {
  86  |   const hasItems = await this.openCartButton.isVisible().catch(() => false);
  87  |   if (!hasItems) return;
  88  | 
  89  |   await this.click(this.openCartButton);
  90  |   await this.page.waitForTimeout(500);
  91  | 
  92  |   let count = await this.removeItemButtons.count();
  93  |   while (count > 0) {
> 94  |     await this.removeItemButtons.first().click();
      |                                          ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  95  |     await this.page.waitForTimeout(500);
  96  |     count = await this.removeItemButtons.count();
  97  |   }
  98  | 
  99  | 
  100 |   const closeCartButton = this.page.getByRole('button', { name: 'Close cart' }).first();
  101 |   const closeVisible = await closeCartButton.isVisible().catch(() => false);
  102 |   if (closeVisible) {
  103 |     await closeCartButton.click();
  104 |     await this.page.waitForTimeout(500);
  105 |   }
  106 | }
  107 | }
```