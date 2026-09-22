# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search - End to End >> should search two vehicles, reset between them, and notify me for an out-of-stock result
- Location: tests\Vehiclefitmentsearch.spec.ts:11:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.ant-select-selection-search').first()
    - locator resolved to <span class="ant-select-selection-search">…</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    9 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <span class="ant-select-selection-search">…</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="page-loader fixed z-[99999] bg-white/90 backdrop-blur-sm flex items-center justify-center">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="page-loader fixed z-[99999] bg-white/90 backdrop-blur-sm flex items-center justify-center">…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div> from <div class="fixed inset-0 z-[9999] overflow-y-auto">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - region "Notifications Alt+T"
  - alert [ref=e2]: Categories - Road Ready Wheels
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
          - button "Cart is empty" [disabled] [ref=e43]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=e49]:
      - generic [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]: Parts Finder
          - generic [ref=e56]:
            - generic [ref=e60]:
              - combobox [ref=e62]
              - generic: Select Make
            - generic [ref=e66]:
              - combobox [ref=e68]
              - generic: Select Model
            - generic [ref=e72]:
              - combobox [ref=e74]
              - generic: Select Year
        - generic [ref=e75]:
          - generic [ref=e76]: type
          - generic [ref=e77]:
            - button "Aftermarket Wheel" [ref=e78] [cursor=pointer]
            - button "Genuine OEM Reconditioned Rim" [ref=e80] [cursor=pointer]
            - button "OEM Reconditioned Wheel" [ref=e82] [cursor=pointer]
            - button "OEM Replacement Hubcap" [ref=e84] [cursor=pointer]
            - button "OEM Replacement Wheel" [ref=e86] [cursor=pointer]
            - button "OEM Surplus Wheel" [ref=e88] [cursor=pointer]
            - button "OEM Take Off Wheel" [ref=e90] [cursor=pointer]
            - button "OEM Wheel Rim" [ref=e92] [cursor=pointer]
            - button "Simulator" [ref=e94] [cursor=pointer]
            - button "Trailer" [ref=e96] [cursor=pointer]
        - generic [ref=e98]:
          - generic [ref=e99]: material
          - generic [ref=e100]:
            - button "Alloy" [ref=e101] [cursor=pointer]
            - button "Steel" [ref=e103] [cursor=pointer]
            - button "ABS Plastic" [ref=e105] [cursor=pointer]
        - generic [ref=e107]:
          - generic [ref=e108]: diameter
          - generic [ref=e109]:
            - button "14\"" [ref=e110] [cursor=pointer]
            - button "15\"" [ref=e112] [cursor=pointer]
            - button "16\"" [ref=e114] [cursor=pointer]
            - button "17\"" [ref=e116] [cursor=pointer]
            - button "17.5\"" [ref=e118] [cursor=pointer]
            - button "18\"" [ref=e120] [cursor=pointer]
            - button "19\"" [ref=e122] [cursor=pointer]
            - button "19.5\"" [ref=e124] [cursor=pointer]
            - button "20\"" [ref=e126] [cursor=pointer]
            - button "21\"" [ref=e128] [cursor=pointer]
            - button "22\"" [ref=e130] [cursor=pointer]
            - button "22.5\"" [ref=e132] [cursor=pointer]
            - button "23\"" [ref=e134] [cursor=pointer]
            - button "24\"" [ref=e136] [cursor=pointer]
            - button "24.5\"" [ref=e138] [cursor=pointer]
        - generic [ref=e140]:
          - generic [ref=e141]: bolt pattern
          - generic [ref=e142]:
            - button "3x112.5mm or 3x4.4\"" [ref=e143] [cursor=pointer]
            - button "4x98mm or 4x3.9\"" [ref=e145] [cursor=pointer]
            - button "4x100mm or 4x3.9\"" [ref=e147] [cursor=pointer]
            - button "4x108mm or 4x4.3\"" [ref=e149] [cursor=pointer]
            - button "4x114.3mm or 4x4.5\"" [ref=e151] [cursor=pointer]
            - button "5x92.3mm or 5x3.6\"" [ref=e153] [cursor=pointer]
            - button "5x98mm or 5x3.9\"" [ref=e155] [cursor=pointer]
            - button "5x100mm or 5x3.9\"" [ref=e157] [cursor=pointer]
            - button "5x105mm or 5x4.1\"" [ref=e159] [cursor=pointer]
            - button "5x108mm or 5x4.3\"" [ref=e161] [cursor=pointer]
            - button "5x108mm or 5x4.25\"" [ref=e163] [cursor=pointer]
            - button "5x110mm or 5x4.3\"" [ref=e165] [cursor=pointer]
            - button "5x112mm or 5x4.4\"" [ref=e167] [cursor=pointer]
            - button "5x114.3mm or 5x4.5\"" [ref=e169] [cursor=pointer]
            - button "5x114.3mm or 5x5\"" [ref=e171] [cursor=pointer]
            - button "5x115mm or 5x4.5\"" [ref=e173] [cursor=pointer]
            - button "5x116.4mm or 4.6\"" [ref=e175] [cursor=pointer]
            - button "5x118.4mm or 4.7\"" [ref=e177] [cursor=pointer]
            - button "5x120mm or 5x4.7\"" [ref=e179] [cursor=pointer]
            - button "5x120mm or 5x4.75\"" [ref=e181] [cursor=pointer]
            - button "5x127mm or 5x5\"" [ref=e183] [cursor=pointer]
            - button "5x127mm or 5x4.7\"" [ref=e185] [cursor=pointer]
            - button "5x130mm or 5x5.1\"" [ref=e187] [cursor=pointer]
            - button "5x135mm or 5x5.3\"" [ref=e189] [cursor=pointer]
            - button "5x139.7mm or 5x5.5\"" [ref=e191] [cursor=pointer]
            - button "5x150mm or 5x5.9\"" [ref=e193] [cursor=pointer]
            - button "5x160mm or 5x6.3\"" [ref=e195] [cursor=pointer]
            - button "6x114.3mm or 6x4.5\"" [ref=e197] [cursor=pointer]
            - button "6x115mm or 6x4.5\"" [ref=e199] [cursor=pointer]
            - button "6x120mm or 6x4.7\"" [ref=e201] [cursor=pointer]
            - button "6x127mm or 6x5\"" [ref=e203] [cursor=pointer]
            - button "6x130mm or 6x5.1\"" [ref=e205] [cursor=pointer]
            - button "6x132mm or 6x5.2\"" [ref=e207] [cursor=pointer]
            - button "6x135mm or 6x5.3\"" [ref=e209] [cursor=pointer]
            - button "6x139.7mm or 6x5.5\"" [ref=e211] [cursor=pointer]
            - button "6x180mm or 6x7.1\"" [ref=e213] [cursor=pointer]
            - button "6x205mm or 6x8.1\"" [ref=e215] [cursor=pointer]
            - button "6x222.25mm or 6x8.75\"" [ref=e217] [cursor=pointer]
            - button "7x150mm or 7x5.9\"" [ref=e219] [cursor=pointer]
            - button "8x165.1mm or 8x6.5\"" [ref=e221] [cursor=pointer]
            - button "8x170mm or 8x6.7\"" [ref=e223] [cursor=pointer]
            - button "8x180mm or 8x7.1\"" [ref=e225] [cursor=pointer]
            - button "8x200mm or 8x7.9\"" [ref=e227] [cursor=pointer]
            - button "8x210mm or 8x8.3\"" [ref=e229] [cursor=pointer]
            - button "8x225mm or 8x8.9\"" [ref=e231] [cursor=pointer]
            - button "8x275mm or 8x10.8\"" [ref=e233] [cursor=pointer]
            - button "10x184.1mm or 10x7.25\"" [ref=e235] [cursor=pointer]
            - button "10-222.25mm or 10-8.75\"" [ref=e237] [cursor=pointer]
            - button "10x225mm or 10x8.9\"" [ref=e239] [cursor=pointer]
            - button "10x285.7mm or 10x11.2\"" [ref=e241] [cursor=pointer]
        - generic [ref=e243]:
          - generic [ref=e244]: lug count
          - generic [ref=e245]:
            - button "3" [ref=e246] [cursor=pointer]
            - button "4" [ref=e248] [cursor=pointer]
            - button "5" [ref=e250] [cursor=pointer]
            - button "6" [ref=e252] [cursor=pointer]
            - button "7" [ref=e254] [cursor=pointer]
            - button "8" [ref=e256] [cursor=pointer]
            - button "10" [ref=e258] [cursor=pointer]
        - generic [ref=e260]:
          - generic [ref=e261]: center bore
          - generic [ref=e262]:
            - button "46mm" [ref=e263] [cursor=pointer]
            - button "54mm" [ref=e265] [cursor=pointer]
            - button "54.06mm" [ref=e267] [cursor=pointer]
            - button "54.1mm" [ref=e269] [cursor=pointer]
            - button "56mm" [ref=e271] [cursor=pointer]
            - button "56.1mm" [ref=e273] [cursor=pointer]
            - button "56.5mm" [ref=e275] [cursor=pointer]
            - button "56.6mm" [ref=e277] [cursor=pointer]
            - button "56.8mm" [ref=e279] [cursor=pointer]
            - button "57mm" [ref=e281] [cursor=pointer]
            - button "57.1mm" [ref=e283] [cursor=pointer]
            - button "57.2mm" [ref=e285] [cursor=pointer]
            - button "58mm" [ref=e287] [cursor=pointer]
            - button "58.1mm" [ref=e289] [cursor=pointer]
            - button "59.1mm" [ref=e291] [cursor=pointer]
            - button "60mm" [ref=e293] [cursor=pointer]
            - button "60.1mm" [ref=e295] [cursor=pointer]
            - button "60.7mm" [ref=e297] [cursor=pointer]
            - button "63mm" [ref=e299] [cursor=pointer]
            - button "63.1mm" [ref=e301] [cursor=pointer]
            - button "63.3mm" [ref=e303] [cursor=pointer]
            - button "63.4mm" [ref=e305] [cursor=pointer]
            - button "63.5mm" [ref=e307] [cursor=pointer]
            - button "63.6mm" [ref=e309] [cursor=pointer]
            - button "64mm" [ref=e311] [cursor=pointer]
            - button "64.1mm" [ref=e313] [cursor=pointer]
            - button "64.2mm" [ref=e315] [cursor=pointer]
            - button "65mm" [ref=e317] [cursor=pointer]
            - button "65.1mm" [ref=e319] [cursor=pointer]
            - button "66mm" [ref=e321] [cursor=pointer]
            - button "66.1mm" [ref=e323] [cursor=pointer]
            - button "66.45mm" [ref=e325] [cursor=pointer]
            - button "66.5mm" [ref=e327] [cursor=pointer]
            - button "66.6mm" [ref=e329] [cursor=pointer]
            - button "66.87mm" [ref=e331] [cursor=pointer]
            - button "66.9mm" [ref=e333] [cursor=pointer]
            - button "67mm" [ref=e335] [cursor=pointer]
            - button "67.1mm" [ref=e337] [cursor=pointer]
            - button "68mm" [ref=e339] [cursor=pointer]
            - button "70,3mm" [ref=e341] [cursor=pointer]
            - button "70.1mm" [ref=e343] [cursor=pointer]
            - button "70.2mm" [ref=e345] [cursor=pointer]
            - button "70.3mm" [ref=e347] [cursor=pointer]
            - button "70.5mm" [ref=e349] [cursor=pointer]
            - button "70.6mm" [ref=e351] [cursor=pointer]
            - button "70.8mm" [ref=e353] [cursor=pointer]
            - button "71.5mm" [ref=e355] [cursor=pointer]
            - button "71.6mm" [ref=e357] [cursor=pointer]
            - button "71.8mm" [ref=e359] [cursor=pointer]
            - button "72.5mm" [ref=e361] [cursor=pointer]
            - button "72.6mm" [ref=e363] [cursor=pointer]
            - button "73.1mm" [ref=e365] [cursor=pointer]
            - button "74mm" [ref=e367] [cursor=pointer]
            - button "74.1mm" [ref=e369] [cursor=pointer]
            - button "74.5mm" [ref=e371] [cursor=pointer]
            - button "77.8mm" [ref=e373] [cursor=pointer]
            - button "78mm" [ref=e375] [cursor=pointer]
            - button "78.1mm" [ref=e377] [cursor=pointer]
            - button "78.3mm" [ref=e379] [cursor=pointer]
            - button "81mm" [ref=e381] [cursor=pointer]
            - button "83.7mm" [ref=e383] [cursor=pointer]
            - button "84mm" [ref=e385] [cursor=pointer]
            - button "84.1mm" [ref=e387] [cursor=pointer]
            - button "84.5mm" [ref=e389] [cursor=pointer]
            - button "87mm" [ref=e391] [cursor=pointer]
            - button "87,1mm" [ref=e393] [cursor=pointer]
            - button "87.1mm" [ref=e395] [cursor=pointer]
            - button "92.5mm" [ref=e397] [cursor=pointer]
            - button "93.1mm" [ref=e399] [cursor=pointer]
            - button "95.1mm" [ref=e401] [cursor=pointer]
            - button "95.2mm" [ref=e403] [cursor=pointer]
            - button "100mm" [ref=e405] [cursor=pointer]
            - button "100.3mm" [ref=e407] [cursor=pointer]
            - button "106mm" [ref=e409] [cursor=pointer]
            - button "106.1mm" [ref=e411] [cursor=pointer]
            - button "106.2mm" [ref=e413] [cursor=pointer]
            - button "108mm" [ref=e415] [cursor=pointer]
            - button "108.1mm" [ref=e417] [cursor=pointer]
            - button "110.1mm" [ref=e419] [cursor=pointer]
            - button "110.2mm" [ref=e421] [cursor=pointer]
            - button "110.5mm" [ref=e423] [cursor=pointer]
            - button "110.6mm" [ref=e425] [cursor=pointer]
            - button "116mm" [ref=e427] [cursor=pointer]
            - button "116.6mm" [ref=e429] [cursor=pointer]
            - button "116.7mm" [ref=e431] [cursor=pointer]
            - button "116.8mm" [ref=e433] [cursor=pointer]
            - button "117mm" [ref=e435] [cursor=pointer]
            - button "120.9mm" [ref=e437] [cursor=pointer]
            - button "121mm" [ref=e439] [cursor=pointer]
            - button "121.0mm" [ref=e441] [cursor=pointer]
            - button "121.15mm" [ref=e443] [cursor=pointer]
            - button "121.2mm" [ref=e445] [cursor=pointer]
            - button "121.3mm" [ref=e447] [cursor=pointer]
            - button "122mm" [ref=e449] [cursor=pointer]
            - button "123.9mm" [ref=e451] [cursor=pointer]
            - button "124mm" [ref=e453] [cursor=pointer]
            - button "124.1mm" [ref=e455] [cursor=pointer]
            - button "124.2mm" [ref=e457] [cursor=pointer]
            - button "124.46mm" [ref=e459] [cursor=pointer]
            - button "124.9mm" [ref=e461] [cursor=pointer]
            - button "125mm" [ref=e463] [cursor=pointer]
            - button "125.1mm" [ref=e465] [cursor=pointer]
            - button "125.2mm" [ref=e467] [cursor=pointer]
            - button "133.4mm" [ref=e469] [cursor=pointer]
            - button "138.8mm" [ref=e471] [cursor=pointer]
            - button "139mm" [ref=e473] [cursor=pointer]
            - button "140mm" [ref=e475] [cursor=pointer]
            - button "142mm" [ref=e477] [cursor=pointer]
            - button "142.1mm" [ref=e479] [cursor=pointer]
            - button "154mm" [ref=e481] [cursor=pointer]
            - button "154.2mm" [ref=e483] [cursor=pointer]
            - button "161mm" [ref=e485] [cursor=pointer]
            - button "164mm" [ref=e487] [cursor=pointer]
            - button "165.1mm" [ref=e489] [cursor=pointer]
            - button "167.5mm" [ref=e491] [cursor=pointer]
            - button "170.1mm" [ref=e493] [cursor=pointer]
            - button "170.2mm" [ref=e495] [cursor=pointer]
            - button "220mm" [ref=e497] [cursor=pointer]
            - button "220.1mm" [ref=e499] [cursor=pointer]
            - button "220.9mm" [ref=e501] [cursor=pointer]
            - button "221mm" [ref=e503] [cursor=pointer]
            - button "222mm" [ref=e505] [cursor=pointer]
        - generic [ref=e507]:
          - generic [ref=e508]: Availability
          - generic [ref=e509] [cursor=pointer]:
            - checkbox "Include Out of Stock" [checked] [ref=e510]
            - generic [ref=e511]: Include Out of Stock
      - generic [ref=e512]:
        - generic [ref=e514]:
          - generic [ref=e515]: Shop Road Ready Products
          - generic [ref=e516]:
            - link [ref=e517] [cursor=pointer]:
              - /url: /t/categories
              - button "By Category" [ref=e518]
            - link [ref=e519] [cursor=pointer]:
              - /url: /t/brand
              - button "Top Brands" [ref=e520]
            - link [ref=e521] [cursor=pointer]:
              - /url: /t/section
              - button "Featured Items" [ref=e522]
        - generic [ref=e524]:
          - generic [ref=e525]:
            - generic [ref=e527]:
              - heading "Alloy Wheels" [level=5] [ref=e528] [cursor=pointer]
              - button "View All" [ref=e529] [cursor=pointer]
            - generic [ref=e531]:
              - generic [ref=e532]:
                - generic [ref=e533]:
                  - generic [ref=e534]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=e539] [cursor=pointer]
                  - link [ref=e542] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                    - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=e545]
                - generic [ref=e546]:
                  - link [ref=e547] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                    - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=e548]
                  - link "9,331 All-Time Units Sold" [ref=e549] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                  - generic [ref=e551]: $233.58
                  - generic [ref=e553]: "Hollander: 560-03335B"
                  - generic [ref=e555]:
                    - generic [ref=e556]: 🚚
                    - button "Please Select State" [ref=e557] [cursor=pointer]
                  - generic [ref=e559]:
                    - button "1" [ref=e561] [cursor=pointer]
                    - button "Add To Cart" [ref=e565] [cursor=pointer]
              - generic [ref=e566]:
                - generic [ref=e567]:
                  - generic [ref=e568]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=e573] [cursor=pointer]
                  - link [ref=e576] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                    - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=e579]
                - generic [ref=e580]:
                  - link [ref=e581] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                    - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=e582]
                  - link "6,559 All-Time Units Sold" [ref=e583] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                  - generic [ref=e585]: $198.55
                  - generic [ref=e587]: "Hollander: 560-64127"
                  - generic [ref=e589]:
                    - generic [ref=e590]: 🚚
                    - button "Please Select State" [ref=e591] [cursor=pointer]
                  - generic [ref=e593]:
                    - button "1" [ref=e595] [cursor=pointer]
                    - button "Add To Cart" [ref=e599] [cursor=pointer]
              - generic [ref=e600]:
                - generic [ref=e601]:
                  - generic [ref=e602]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=e607] [cursor=pointer]
                  - link [ref=e610] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                    - img "2019-2025 Toyota Corolla 18x8 Alloy Wheel / Rim" [ref=e613]
                - generic [ref=e614]:
                  - link [ref=e615] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                    - heading "2019-2025 Toyota Corolla 18x8 Alloy Wheel / Rim" [level=3] [ref=e616]
                  - link "711 All-Time Units Sold" [ref=e617] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                  - generic [ref=e619]: $228.87
                  - generic [ref=e621]: "Hollander: 560-75236C"
                  - generic [ref=e623]:
                    - generic [ref=e624]: 🚚
                    - button "Please Select State" [ref=e625] [cursor=pointer]
                  - generic [ref=e627]:
                    - button "1" [ref=e629] [cursor=pointer]
                    - button "Add To Cart" [ref=e633] [cursor=pointer]
              - generic [ref=e634]:
                - generic [ref=e635]:
                  - generic [ref=e636]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=e641] [cursor=pointer]
                  - link [ref=e644] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                    - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=e647]
                - generic [ref=e648]:
                  - link [ref=e649] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                    - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=e650]
                  - link "6,563 All-Time Units Sold" [ref=e651] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                  - generic [ref=e653]: $198.55
                  - generic [ref=e655]: "Hollander: 560-60337A"
                  - generic [ref=e657]:
                    - generic [ref=e658]: 🚚
                    - button "Please Select State" [ref=e659] [cursor=pointer]
                  - generic [ref=e661]:
                    - button "1" [ref=e663] [cursor=pointer]
                    - button "Add To Cart" [ref=e667] [cursor=pointer]
          - generic [ref=e668]:
            - generic [ref=e670]:
              - heading "Dually Steel Wheels" [level=5] [ref=e671] [cursor=pointer]
              - button "View All" [ref=e672] [cursor=pointer]
            - generic [ref=e675]:
              - generic [ref=e676]:
                - generic [ref=e677]: Top Trending Dually Wheels
                - button "Add to wishlist" [ref=e682] [cursor=pointer]
                - link [ref=e685] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                  - img "2019-2024 17x6 Dodge Ram 3500 Dually Wheel / Rim" [ref=e688]
              - generic [ref=e689]:
                - link [ref=e690] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                  - heading "2019-2024 17x6 Dodge Ram 3500 Dually Wheel / Rim" [level=3] [ref=e691]
                - link "729 All-Time Units Sold" [ref=e692] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                - generic [ref=e694]: $183.75
                - generic [ref=e696]: "Hollander: 560-02704"
                - generic [ref=e698]:
                  - generic [ref=e699]: 🚚
                  - button "Please Select State" [ref=e700] [cursor=pointer]
                - generic [ref=e702]:
                  - button "1" [ref=e704] [cursor=pointer]
                  - button "Add To Cart" [ref=e708] [cursor=pointer]
          - generic [ref=e709]:
            - generic [ref=e711]:
              - heading "Chrome Wheels" [level=5] [ref=e712] [cursor=pointer]
              - button "View All" [ref=e713] [cursor=pointer]
            - generic [ref=e715]:
              - generic [ref=e716]:
                - generic [ref=e717]:
                  - generic [ref=e718]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=e723] [cursor=pointer]
                  - link [ref=e726] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                    - img "2014-2023 22x9 Cadillac Escalade GMC Sierra Yukon 1500 Chrome Wheel / Rim" [ref=e729]
                - generic [ref=e730]:
                  - link [ref=e731] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                    - heading "2014-2023 22x9 Cadillac Escalade GMC Sierra Yukon 1500 Chrome Wheel / Rim" [level=3] [ref=e732]
                  - link "337 All-Time Units Sold" [ref=e733] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                  - generic [ref=e735]: $363.40
                  - generic [ref=e737]: "Hollander: 560-05667"
                  - generic [ref=e739]:
                    - generic [ref=e740]: 🚚
                    - button "Please Select State" [ref=e741] [cursor=pointer]
                  - generic [ref=e743]:
                    - button "1" [ref=e745] [cursor=pointer]
                    - button "Add To Cart" [ref=e749] [cursor=pointer]
              - generic [ref=e750]:
                - generic [ref=e751]:
                  - generic [ref=e752]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=e757] [cursor=pointer]
                  - link [ref=e760] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                    - img "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [ref=e763]
                - generic [ref=e764]:
                  - link [ref=e765] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                    - heading "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [level=3] [ref=e766]
                  - link "672 All-Time Units Sold" [ref=e767] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                  - generic [ref=e769]: $351.07
                  - generic [ref=e771]: "Hollander: 560-05309A"
                  - generic [ref=e774]:
                    - generic [ref=e775]: 🚚
                    - button "Please Select State" [ref=e776] [cursor=pointer]
                  - generic [ref=e778]:
                    - button "1" [ref=e780] [cursor=pointer]
                    - button "Add To Cart" [ref=e784] [cursor=pointer]
              - generic [ref=e785]:
                - generic [ref=e786]:
                  - generic [ref=e787]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=e792] [cursor=pointer]
                  - link [ref=e795] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                    - img "2014-2023 22x9 Chevrolet Silverado Suburban Tahoe 1500 Chrome Wheel / Rim" [ref=e798]
                - generic [ref=e799]:
                  - link [ref=e800] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                    - heading "2014-2023 22x9 Chevrolet Silverado Suburban Tahoe 1500 Chrome Wheel / Rim" [level=3] [ref=e801]
                  - link "391 All-Time Units Sold" [ref=e802] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                  - generic [ref=e804]: $363.40
                  - generic [ref=e806]: "Hollander: 560-05667"
                  - generic [ref=e808]:
                    - generic [ref=e809]: 🚚
                    - button "Please Select State" [ref=e810] [cursor=pointer]
                  - generic [ref=e812]:
                    - button "1" [ref=e814] [cursor=pointer]
                    - button "Add To Cart" [ref=e818] [cursor=pointer]
              - generic [ref=e819]:
                - generic [ref=e820]:
                  - generic [ref=e821]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=e826] [cursor=pointer]
                  - link [ref=e829] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                    - img "1999-2018 20x9 GMC Sierra 1500 Chrome Wheel / Rim" [ref=e832]
                - generic [ref=e833]:
                  - link [ref=e834] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                    - heading "1999-2018 20x9 GMC Sierra 1500 Chrome Wheel / Rim" [level=3] [ref=e835]
                  - link "499 All-Time Units Sold" [ref=e836] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                  - generic [ref=e838]: $351.07
                  - generic [ref=e840]: "Hollander: 560-05656"
                  - generic [ref=e842]:
                    - generic [ref=e843]: 🚚
                    - button "Please Select State" [ref=e844] [cursor=pointer]
                  - generic [ref=e846]:
                    - button "1" [ref=e848] [cursor=pointer]
                    - button "Add To Cart" [ref=e852] [cursor=pointer]
          - generic [ref=e853]:
            - generic [ref=e855]:
              - heading "Hubcaps" [level=5] [ref=e856] [cursor=pointer]
              - button "View All" [ref=e857] [cursor=pointer]
            - generic [ref=e859]:
              - generic [ref=e860]:
                - generic [ref=e861]:
                  - generic [ref=e862]: Top Hubcaps
                  - button "Add to wishlist" [ref=e867] [cursor=pointer]
                  - link [ref=e870] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - img "2013-2015 Honda Civic Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=e873]
                - generic [ref=e874]:
                  - link [ref=e875] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - heading "2013-2015 Honda Civic Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e876]
                  - link "477 All-Time Units Sold" [ref=e877] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                  - generic [ref=e879]: $71.85
                  - generic [ref=e881]: "Hollander: 570-0020"
                  - generic [ref=e884]:
                    - generic [ref=e885]: 🚚
                    - button "Please Select State" [ref=e886] [cursor=pointer]
                  - generic [ref=e888]:
                    - button "1" [ref=e890] [cursor=pointer]
                    - button "Add To Cart" [ref=e894] [cursor=pointer]
              - generic [ref=e895]:
                - generic [ref=e896]:
                  - generic [ref=e897]: Top Hubcaps
                  - button "Add to wishlist" [ref=e902] [cursor=pointer]
                  - link [ref=e905] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                    - img "2006-2011 Chevrolet Impala Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=e908]
                - generic [ref=e909]:
                  - link [ref=e910] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                    - heading "2006-2011 Chevrolet Impala Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e911]
                  - link "254 All-Time Units Sold" [ref=e912] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                  - generic [ref=e914]: $65.01
                  - generic [ref=e916]: "Hollander: 570-03021"
                  - generic [ref=e919]:
                    - generic [ref=e920]: 🚚
                    - button "Please Select State" [ref=e921] [cursor=pointer]
                  - generic [ref=e923]:
                    - button "1" [ref=e925] [cursor=pointer]
                    - button "Add To Cart" [ref=e929] [cursor=pointer]
              - generic [ref=e930]:
                - generic [ref=e931]:
                  - generic [ref=e932]: Top Hubcaps
                  - button "Add to wishlist" [ref=e937] [cursor=pointer]
                  - link [ref=e940] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - img "2015-2024 Ford Transit 150 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [ref=e943]
                - generic [ref=e944]:
                  - link [ref=e945] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - heading "2015-2024 Ford Transit 150 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=e946]
                  - link "131 All-Time Units Sold" [ref=e947] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                  - generic [ref=e949]: $72.99
                  - generic [ref=e951]: "Hollander: 570-07068"
                  - generic [ref=e954]:
                    - generic [ref=e955]: 🚚
                    - button "Please Select State" [ref=e956] [cursor=pointer]
                  - generic [ref=e958]:
                    - button "1" [ref=e960] [cursor=pointer]
                    - button "Add To Cart" [ref=e964] [cursor=pointer]
              - generic [ref=e965]:
                - generic [ref=e966]:
                  - generic [ref=e967]: Top Hubcaps
                  - button "Add to wishlist" [ref=e972] [cursor=pointer]
                  - link [ref=e975] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                    - img "2022-2024 Honda Civic Four Piece Set 16\" Silver/Black Wheel Cover Caps / Hubcaps" [ref=e978]
                - generic [ref=e979]:
                  - link [ref=e980] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                    - heading "2022-2024 Honda Civic Four Piece Set 16\" Silver/Black Wheel Cover Caps / Hubcaps" [level=3] [ref=e981]
                  - link "1,435 All-Time Units Sold" [ref=e982] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                  - generic [ref=e984]: $83.07
                  - generic [ref=e986]: "Hollander: 570-10011"
                  - generic [ref=e988]:
                    - generic [ref=e989]: 🚚
                    - button "Please Select State" [ref=e990] [cursor=pointer]
                  - generic [ref=e992]:
                    - button "1" [ref=e994] [cursor=pointer]
                    - button "Add To Cart" [ref=e998] [cursor=pointer]
          - generic [ref=e999]:
            - generic [ref=e1001]:
              - heading "Steel Wheels" [level=5] [ref=e1002] [cursor=pointer]
              - button "View All" [ref=e1003] [cursor=pointer]
            - generic [ref=e1005]:
              - generic [ref=e1006]:
                - generic [ref=e1007]:
                  - generic [ref=e1008]: Top Steel Wheel
                  - button "Add to wishlist" [ref=e1013] [cursor=pointer]
                  - link [ref=e1016] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                    - img "2005-2026 Ford F-550 19.5x6 Steel Wheel / Rim" [ref=e1019]
                - generic [ref=e1020]:
                  - link [ref=e1021] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                    - heading "2005-2026 Ford F-550 19.5x6 Steel Wheel / Rim" [level=3] [ref=e1022]
                  - link "16,540 All-Time Units Sold" [ref=e1023] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                  - generic [ref=e1025]: $194.33
                  - generic [ref=e1027]: "Hollander: 99042"
                  - generic [ref=e1030]:
                    - generic [ref=e1031]: 🚚
                    - button "Please Select State" [ref=e1032] [cursor=pointer]
                  - generic [ref=e1034]:
                    - button "1" [ref=e1036] [cursor=pointer]
                    - button "Add To Cart" [ref=e1040] [cursor=pointer]
              - generic [ref=e1041]:
                - generic [ref=e1042]:
                  - generic [ref=e1043]: Top Steel Wheel
                  - button "Add to wishlist" [ref=e1048] [cursor=pointer]
                  - link [ref=e1051] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                    - img "2011-2025 Chevrolet Silverado 3500 17x6.5 Steel Wheel / Rim" [ref=e1054]
                - generic [ref=e1055]:
                  - link [ref=e1056] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                    - heading "2011-2025 Chevrolet Silverado 3500 17x6.5 Steel Wheel / Rim" [level=3] [ref=e1057]
                  - link "13,374 All-Time Units Sold" [ref=e1058] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                  - generic [ref=e1060]: $147.15
                  - generic [ref=e1062]: "Hollander: 560-08094"
                  - generic [ref=e1064]:
                    - generic [ref=e1065]: 🚚
                    - button "Please Select State" [ref=e1066] [cursor=pointer]
                  - generic [ref=e1068]:
                    - button "1" [ref=e1070] [cursor=pointer]
                    - button "Add To Cart" [ref=e1074] [cursor=pointer]
              - generic [ref=e1075]:
                - generic [ref=e1076]:
                  - generic [ref=e1077]: Top Steel Wheel
                  - button "Add to wishlist" [ref=e1082] [cursor=pointer]
                  - link [ref=e1085] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                    - img "2015-2025 16x6 Ford Transit 350 Dually Steel Wheel / Rim" [ref=e1088]
                - generic [ref=e1089]:
                  - link [ref=e1090] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                    - heading "2015-2025 16x6 Ford Transit 350 Dually Steel Wheel / Rim" [level=3] [ref=e1091]
                  - link "4,176 All-Time Units Sold" [ref=e1092] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                  - generic [ref=e1094]: $142.66
                  - generic [ref=e1096]: "Hollander: 560-10050S"
                  - generic [ref=e1098]:
                    - generic [ref=e1099]: 🚚
                    - button "Please Select State" [ref=e1100] [cursor=pointer]
                  - generic [ref=e1102]:
                    - button "1" [ref=e1104] [cursor=pointer]
                    - button "Add To Cart" [ref=e1108] [cursor=pointer]
              - generic [ref=e1109]:
                - generic [ref=e1110]:
                  - generic [ref=e1111]: Top Steel Wheel
                  - button "Add to wishlist" [ref=e1116] [cursor=pointer]
                  - link [ref=e1119] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                    - img "2008-2010 17x6.5 GMC Sierra 3500 Dually Steel Wheel / Rim" [ref=e1122]
                - generic [ref=e1123]:
                  - link [ref=e1124] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                    - heading "2008-2010 17x6.5 GMC Sierra 3500 Dually Steel Wheel / Rim" [level=3] [ref=e1125]
                  - link "5,783 All-Time Units Sold" [ref=e1126] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                  - generic [ref=e1128]: $161.63
                  - generic [ref=e1130]: "Hollander: 560-08076A"
                  - generic [ref=e1132]:
                    - generic [ref=e1133]: 🚚
                    - button "Please Select State" [ref=e1134] [cursor=pointer]
                  - generic [ref=e1136]:
                    - button "1" [ref=e1138] [cursor=pointer]
                    - button "Add To Cart" [ref=e1142] [cursor=pointer]
          - generic [ref=e1143]:
            - generic [ref=e1145]:
              - heading "New OEM Take Off Wheels / Rims" [level=5] [ref=e1146] [cursor=pointer]
              - button "View All" [ref=e1147] [cursor=pointer]
            - generic [ref=e1149]:
              - generic [ref=e1150]:
                - generic [ref=e1151]:
                  - generic [ref=e1152]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=e1157] [cursor=pointer]
                  - link [ref=e1160] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                    - img "2020-2024 16x6.5 Ford Transit 150 Genuine OEM Take-Off Steel Wheel / Rim" [ref=e1163]
                - generic [ref=e1164]:
                  - link [ref=e1165] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                    - heading "2020-2024 16x6.5 Ford Transit 150 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=e1166]
                  - link "1,437 All-Time Units Sold" [ref=e1167] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                  - generic [ref=e1169]: $138.82
                  - generic [ref=e1171]: "Hollander: 560-10283"
                  - generic [ref=e1174]:
                    - generic [ref=e1175]: 🚚
                    - button "Please Select State" [ref=e1176] [cursor=pointer]
                  - generic [ref=e1178]:
                    - button "1" [ref=e1180] [cursor=pointer]
                    - button "Add To Cart" [ref=e1184] [cursor=pointer]
              - generic [ref=e1185]:
                - generic [ref=e1186]:
                  - generic [ref=e1187]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=e1192] [cursor=pointer]
                  - link [ref=e1195] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                    - img "2010-2025 17x7.5 Ford F250SD Genuine OEM Take-Off Steel Wheel / Rim" [ref=e1198]
                - generic [ref=e1199]:
                  - link [ref=e1200] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                    - heading "2010-2025 17x7.5 Ford F250SD Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=e1201]
                  - link "406 All-Time Units Sold" [ref=e1202] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                  - generic [ref=e1204]: $181.31
                  - generic [ref=e1206]: "Hollander: 560-03828A"
                  - generic [ref=e1209]:
                    - generic [ref=e1210]: 🚚
                    - button "Please Select State" [ref=e1211] [cursor=pointer]
                  - generic [ref=e1213]:
                    - button "1" [ref=e1215] [cursor=pointer]
                    - button "Add To Cart" [ref=e1219] [cursor=pointer]
              - generic [ref=e1220]:
                - generic [ref=e1221]:
                  - generic [ref=e1222]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=e1227] [cursor=pointer]
                  - link [ref=e1230] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                    - img "2010-2024 Mercedes-Benz Sprinter 3500 DRW 16x5.5 Genuine OEM Take-Off Steel Wheel / Rim" [ref=e1233]
                - generic [ref=e1234]:
                  - link [ref=e1235] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                    - heading "2010-2024 Mercedes-Benz Sprinter 3500 DRW 16x5.5 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=e1236]
                  - link "599 All-Time Units Sold" [ref=e1237] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                  - generic [ref=e1239]: $101.68
                  - generic [ref=e1241]: "Hollander: 560-85412"
                  - generic [ref=e1243]:
                    - generic [ref=e1244]: 🚚
                    - button "Please Select State" [ref=e1245] [cursor=pointer]
                  - generic [ref=e1247]:
                    - button "1" [ref=e1249] [cursor=pointer]
                    - button "Add To Cart" [ref=e1253] [cursor=pointer]
              - generic [ref=e1254]:
                - generic [ref=e1255]:
                  - generic [ref=e1256]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=e1261] [cursor=pointer]
                  - link [ref=e1264] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                    - img "2010-2024 16x5.5 Mercedes-Benz Sprinter 3500 Genuine OEM Take-Off Steel Wheel / Rim" [ref=e1267]
                - generic [ref=e1268]:
                  - link [ref=e1269] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                    - heading "2010-2024 16x5.5 Mercedes-Benz Sprinter 3500 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=e1270]
                  - link "599 All-Time Units Sold" [ref=e1271] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                  - generic [ref=e1273]: $101.68
                  - generic [ref=e1275]: "Hollander: 560-85413"
                  - generic [ref=e1277]:
                    - generic [ref=e1278]: 🚚
                    - button "Please Select State" [ref=e1279] [cursor=pointer]
                  - generic [ref=e1281]:
                    - button "1" [ref=e1283] [cursor=pointer]
                    - button "Add To Cart" [ref=e1287] [cursor=pointer]
    - generic [ref=e1291]:
      - button "Close modal" [ref=e1292] [cursor=pointer]
      - heading "Shop As" [level=2] [ref=e1297]
      - generic [ref=e1298]:
        - button [ref=e1299] [cursor=pointer]:
          - heading "Wholesale" [level=3] [ref=e1305]
          - paragraph [ref=e1306]: "Orders of: (15+)"
        - button [ref=e1307] [cursor=pointer]:
          - heading "Resale" [level=3] [ref=e1314]
          - paragraph [ref=e1315]: "Orders of: (1-14)"
    - contentinfo [ref=e1316]:
      - generic [ref=e1317]:
        - generic [ref=e1318]:
          - generic [ref=e1319]:
            - heading "Contact Us" [level=3] [ref=e1320]
            - generic [ref=e1321]:
              - paragraph [ref=e1322]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=e1323] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=e1324]:
                - text: "Text:"
                - link "217-635-2033" [ref=e1325] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=e1326] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=e1327]:
              - link "Visit our Facebook page" [ref=e1328] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=e1331] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=e1332]
              - link "Visit our Instagram page" [ref=e1333] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=e1337] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=e1341]:
              - img "BBB Accredited" [ref=e1343]
              - img "WTC Member" [ref=e1345]
          - generic [ref=e1346]:
            - heading "Support" [level=3] [ref=e1347]
            - generic [ref=e1348]:
              - link "Returns and Refunds" [ref=e1349] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=e1350] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=e1351] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=e1352] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=e1353] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=e1354] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=e1355] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=e1356] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=e1357]:
            - heading "Why Road Ready" [level=3] [ref=e1358]
            - generic [ref=e1359]:
              - link "About Us" [ref=e1360] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=e1361] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=e1362]:
            - heading "Divisions" [level=3] [ref=e1363]
            - generic [ref=e1364]:
              - link "Wholesale" [ref=e1365] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=e1366] [cursor=pointer]:
                - /url: /resale
        - generic [ref=e1367]:
          - paragraph [ref=e1369]:
            - strong [ref=e1370]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=e1371]:
            - paragraph [ref=e1372]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=e1373]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=e1374] [cursor=pointer]:
                - /url: https://www.w3villa.com/
```

# Test source

```ts
  115 |     this.notifyMeSubmitButton = page.getByRole('button', { name: 'Submit' });
  116 | 
  117 |     // Sits next to the "Selected Filters" heading — clears every applied
  118 |     // filter chip in one click.
  119 |     this.resetFiltersButton = page.getByRole('button', { name: 'Reset' });
  120 | 
  121 |     // Out-of-stock PDP shows a "Notify Me" button directly instead of "Add
  122 |     // To Cart" (there are two on the page — top and bottom — .first() picks
  123 |     // whichever renders first). Clicking it opens a dialog with the
  124 |     // account's email pre-filled; Submit inside that dialog is what
  125 |     // actually registers the request. Scoping the email/Submit locators to
  126 |     // the dialog avoids collisions with any other "Submit" button on the
  127 |     // page.
  128 |     this.pdpNotifyMeButton = page.getByRole('button', { name: 'Notify Me' }).first();
  129 |     this.pdpNotifyDialog = page.getByRole('dialog', { name: 'Enter your Email' });
  130 |     this.pdpNotifyEmailInput = this.pdpNotifyDialog.getByRole('textbox', {
  131 |       name: 'example@domain.com',
  132 |     });
  133 |     this.pdpNotifySubmitButton = this.pdpNotifyDialog.getByRole('button', {
  134 |       name: 'Submit',
  135 |     });
  136 |   }
  137 | 
  138 |   /**
  139 |    * Call once right after login — the "Shop As" modal is mandatory at that
  140 |    * point, and choosing an option is what lands you on the categories page
  141 |    * with the Make/Model/Year selects available.
  142 |    */
  143 |   async selectShopMode(mode: 'Resale' | 'Wholesale') {
  144 |     // The modal only shows on a genuinely first-time selection for this
  145 |     // browser session — if the mode is already set (e.g. persisted from an
  146 |     // earlier test run's cookie/localStorage), it never appears at all, so
  147 |     // a hard "must be visible" wait is wrong. Check first, and skip
  148 |     // everything below if there's nothing to dismiss.
  149 |     const isModalVisible = await this.shopAsModalHeading
  150 |       .isVisible({ timeout: 5000 })
  151 |       .catch(() => false);
  152 | 
  153 |     if (!isModalVisible) {
  154 |       return;
  155 |     }
  156 | 
  157 |     const option =
  158 |       mode === 'Resale' ? this.shopAsResaleOption : this.shopAsWholesaleOption;
  159 |     await option.click();
  160 | 
  161 |     await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 10000 });
  162 | 
  163 |     // The app appends `just_sign_in=true` to the URL after this selection,
  164 |     // and that flag keeps re-triggering the same modal on later renders
  165 |     // (e.g. once filters are applied) even though a mode was already
  166 |     // chosen — a plain wait isn't enough. Reloading clears it.
  167 |     await this.page.reload();
  168 |     await this.page.waitForLoadState('networkidle');
  169 | 
  170 |     // Defensive — in case the reload still shows it once more.
  171 |     await this.dismissShopAsModalIfPresent();
  172 | 
  173 |     // After the reload, the whole filter panel re-initializes: every
  174 |     // dropdown/button is disabled and an "Updating filters…" overlay sits
  175 |     // on top intercepting clicks. networkidle doesn't cover this app-level
  176 |     // loading state, so clicking immediately after it races the overlay.
  177 |     await this.waitForFiltersReady();
  178 |   }
  179 | 
  180 |   /**
  181 |    * Waits out the "Updating filters…" loading overlay that appears after a
  182 |    * reload or a filter-panel re-init — while it's up, every Make/Model/
  183 |    * Year/Type/Material/Diameter control is disabled and a full-panel div
  184 |    * intercepts clicks underneath it.
  185 |    */
  186 |   async waitForFiltersReady() {
  187 |     const updatingFiltersText = this.page.getByText('Updating filters', {
  188 |       exact: false,
  189 |     });
  190 | 
  191 |     if (await updatingFiltersText.isVisible({ timeout: 3000 }).catch(() => false)) {
  192 |       await updatingFiltersText.waitFor({ state: 'hidden', timeout: 15000 });
  193 |     }
  194 |   }
  195 | 
  196 |   /**
  197 |    * Call before any dropdown/button interaction that follows a Make
  198 |    * selection — the modal can pop up more than once, not just immediately
  199 |    * after the first select. A blind wait isn't reliable because the modal's
  200 |    * appearance timing varies; actively checking and dismissing it is.
  201 |    */
  202 |   async dismissShopAsModalIfPresent() {
  203 |     const isModalVisible = await this.shopAsModalHeading
  204 |       .isVisible({ timeout: 3000 })
  205 |       .catch(() => false);
  206 | 
  207 |     if (isModalVisible) {
  208 |       await this.shopAsResaleOption.click();
  209 |       await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 5000 });
  210 |     }
  211 |   }
  212 | 
  213 |   async selectMake(make: string) {
  214 |     await this.waitForFiltersReady();
> 215 |     await this.makeSelect.click();
      |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  216 |     await this.page.getByText(make, { exact: true }).click();
  217 | 
  218 |     // Modal shows up right after Make is picked — dismiss it here instead
  219 |     // of blindly waiting, since it doesn't reliably appear within a fixed
  220 |     // window.
  221 |     await this.dismissShopAsModalIfPresent();
  222 |   }
  223 | 
  224 |   async selectModel(model: string) {
  225 |     await this.dismissShopAsModalIfPresent();
  226 |     await this.modelSelect.click();
  227 |     await this.page.getByText(model, { exact: true }).click();
  228 |   }
  229 | 
  230 |   async selectYear(year: string) {
  231 |     await this.dismissShopAsModalIfPresent();
  232 |     await this.yearSelect.click();
  233 |     await this.page.getByText(year, { exact: true }).click();
  234 |   }
  235 | 
  236 |   async selectCategory(categoryName: string) {
  237 |     await this.dismissShopAsModalIfPresent();
  238 |     await this.click(this.categoryButton(categoryName));
  239 |   }
  240 | 
  241 |   async selectMaterial(materialName: string) {
  242 |     await this.dismissShopAsModalIfPresent();
  243 |     await this.click(this.materialButton(materialName));
  244 |   }
  245 | 
  246 |   async selectDiameter(diameterLabel: string) {
  247 |     await this.dismissShopAsModalIfPresent();
  248 |     await this.click(this.diameterButton(diameterLabel));
  249 |   }
  250 | 
  251 |   /**
  252 |    * Verifies each given value has its own "Remove <value>" chip under
  253 |    * "Selected Filters" — works for any number of filters (Model, Year,
  254 |    * Category, Material, Diameter, ...), since a chip's "Remove" button is
  255 |    * the unambiguous signal that a filter is actually applied.
  256 |    */
  257 |   async expectFiltersApplied(...values: string[]) {
  258 |     for (const value of values) {
  259 |       await expect(this.removeFilterButton(value)).toBeVisible({
  260 |         timeout: 10000,
  261 |       });
  262 |     }
  263 |   }
  264 | 
  265 |   /** After Reset, none of the previously-applied filter chips should remain. */
  266 |   async expectFiltersCleared(...previousValues: string[]) {
  267 |     for (const value of previousValues) {
  268 |       await expect(this.removeFilterButton(value)).toBeHidden({
  269 |         timeout: 10000,
  270 |       });
  271 |     }
  272 |   }
  273 | 
  274 |   async expectFilterSummaryVisible(partialText: string) {
  275 |     await expect(this.filterSummaryText(partialText)).toBeVisible({
  276 |       timeout: 10000,
  277 |     });
  278 |   }
  279 | 
  280 |   /**
  281 |    * Navigates straight to a filtered results URL — mirrors the codegen
  282 |    * recording, which reloaded the filtered listing via the address bar
  283 |    * (e.g. after opening a product from it) instead of re-picking every
  284 |    * dropdown from scratch.
  285 |    */
  286 |   async goToFilteredCategory(params: Record<string, string>) {
  287 |     const query = new URLSearchParams(params).toString();
  288 |     await this.page.goto(
  289 |       `https://staging.roadreadywheels.com/t/categories?${query}`
  290 |     );
  291 |   }
  292 | 
  293 |   /**
  294 |    * Out-of-stock result cards show "Notify Me" instead of "Add To Cart".
  295 |    * Fills and submits the email capture, then confirms the modal actually
  296 |    * closed rather than assuming a specific success toast (whose exact copy
  297 |    * we haven't confirmed yet).
  298 |    */
  299 |   async submitNotifyMe(email: string) {
  300 |     await this.click(this.notifyMeButton);
  301 |     await this.notifyMeEmailInput.click();
  302 |     await this.notifyMeEmailInput.fill(email);
  303 |     await this.click(this.notifyMeSubmitButton);
  304 | 
  305 |     await expect(this.notifyMeEmailInput).toBeHidden({ timeout: 10000 });
  306 |   }
  307 | 
  308 |   /**
  309 |    * PDP "Notify Me" for an out-of-stock item — the button itself opens a
  310 |    * dialog with the account email pre-filled; Submit inside that dialog is
  311 |    * what registers the request. The dialog closing is the success signal —
  312 |    * more reliable than guessing at a specific confirmation string.
  313 |    */
  314 |   async submitNotifyMeFromPdp(email?: string) {
  315 |     await this.click(this.pdpNotifyMeButton);
```