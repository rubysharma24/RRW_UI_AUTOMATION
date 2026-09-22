# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Vehiclefitmentsearch.spec.ts >> Vehicle Fitment Search - End to End >> should search two vehicles, reset between them, and notify me for an out-of-stock result
- Location: tests\Vehiclefitmentsearch.spec.ts:11:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f10e1]:
  - region "Notifications Alt+T"
  - alert [ref=f10e2]
  - generic [ref=f10e3]:
    - banner [ref=f10e4]:
      - generic [ref=f10e7]:
        - link "ROADREADY" [ref=f10e8] [cursor=pointer]:
          - /url: /
        - generic [ref=f10e11]:
          - combobox "Search category" [ref=f10e13] [cursor=pointer]:
            - option "Search All" [selected]
            - option "Hollander"
            - option "OE#"
          - textbox "Search for wheels" [ref=f10e15]:
            - /placeholder: Search globally for make, model, part number... . . .
          - button "Search" [disabled] [ref=f10e16]
        - generic [ref=f10e17]:
          - generic [ref=f10e18]:
            - button "Resale" [ref=f10e21] [cursor=pointer]
            - button "Wholesale" [ref=f10e23] [cursor=pointer]
          - button "Select State" [ref=f10e26] [cursor=pointer]
          - generic [ref=f10e33]: "|"
          - button [ref=f10e35] [cursor=pointer]
          - generic [ref=f10e41]: "|"
          - button "Cart is empty" [disabled] [ref=f10e42]
    - generic:
      - generic:
        - generic:
          - heading "Your Cart 0 items" [level=2]
          - button "Close cart"
        - generic:
          - generic:
            - generic:
              - paragraph: Your cart is empty
    - generic [ref=f10e48]:
      - generic [ref=f10e52]:
        - generic [ref=f10e53]:
          - generic [ref=f10e54]: Parts Finder
          - generic [ref=f10e55]:
            - generic [ref=f10e59]:
              - combobox [ref=f10e61]
              - generic: Select Make
            - generic [ref=f10e65]:
              - combobox [ref=f10e67]
              - generic: Select Model
            - generic [ref=f10e71]:
              - combobox [ref=f10e73]
              - generic: Select Year
        - generic [ref=f10e74]:
          - generic [ref=f10e75]: type
          - generic [ref=f10e76]:
            - button "Aftermarket Wheel" [ref=f10e77] [cursor=pointer]
            - button "Genuine OEM Reconditioned Rim" [ref=f10e79] [cursor=pointer]
            - button "OEM Reconditioned Wheel" [ref=f10e81] [cursor=pointer]
            - button "OEM Replacement Hubcap" [ref=f10e83] [cursor=pointer]
            - button "OEM Replacement Wheel" [ref=f10e85] [cursor=pointer]
            - button "OEM Surplus Wheel" [ref=f10e87] [cursor=pointer]
            - button "OEM Take Off Wheel" [ref=f10e89] [cursor=pointer]
            - button "OEM Wheel Rim" [ref=f10e91] [cursor=pointer]
            - button "Simulator" [ref=f10e93] [cursor=pointer]
            - button "Trailer" [ref=f10e95] [cursor=pointer]
        - generic [ref=f10e97]:
          - generic [ref=f10e98]: material
          - generic [ref=f10e99]:
            - button "Alloy" [ref=f10e100] [cursor=pointer]
            - button "Steel" [ref=f10e102] [cursor=pointer]
            - button "ABS Plastic" [ref=f10e104] [cursor=pointer]
        - generic [ref=f10e106]:
          - generic [ref=f10e107]: diameter
          - generic [ref=f10e108]:
            - button "14\"" [ref=f10e109] [cursor=pointer]
            - button "15\"" [ref=f10e111] [cursor=pointer]
            - button "16\"" [ref=f10e113] [cursor=pointer]
            - button "17\"" [ref=f10e115] [cursor=pointer]
            - button "17.5\"" [ref=f10e117] [cursor=pointer]
            - button "18\"" [ref=f10e119] [cursor=pointer]
            - button "19\"" [ref=f10e121] [cursor=pointer]
            - button "19.5\"" [ref=f10e123] [cursor=pointer]
            - button "20\"" [ref=f10e125] [cursor=pointer]
            - button "21\"" [ref=f10e127] [cursor=pointer]
            - button "22\"" [ref=f10e129] [cursor=pointer]
            - button "22.5\"" [ref=f10e131] [cursor=pointer]
            - button "23\"" [ref=f10e133] [cursor=pointer]
            - button "24\"" [ref=f10e135] [cursor=pointer]
            - button "24.5\"" [ref=f10e137] [cursor=pointer]
        - generic [ref=f10e139]:
          - generic [ref=f10e140]: bolt pattern
          - generic [ref=f10e141]:
            - button "3x112.5mm or 3x4.4\"" [ref=f10e142] [cursor=pointer]
            - button "4x98mm or 4x3.9\"" [ref=f10e144] [cursor=pointer]
            - button "4x100mm or 4x3.9\"" [ref=f10e146] [cursor=pointer]
            - button "4x108mm or 4x4.3\"" [ref=f10e148] [cursor=pointer]
            - button "4x114.3mm or 4x4.5\"" [ref=f10e150] [cursor=pointer]
            - button "5x92.3mm or 5x3.6\"" [ref=f10e152] [cursor=pointer]
            - button "5x98mm or 5x3.9\"" [ref=f10e154] [cursor=pointer]
            - button "5x100mm or 5x3.9\"" [ref=f10e156] [cursor=pointer]
            - button "5x105mm or 5x4.1\"" [ref=f10e158] [cursor=pointer]
            - button "5x108mm or 5x4.3\"" [ref=f10e160] [cursor=pointer]
            - button "5x108mm or 5x4.25\"" [ref=f10e162] [cursor=pointer]
            - button "5x110mm or 5x4.3\"" [ref=f10e164] [cursor=pointer]
            - button "5x112mm or 5x4.4\"" [ref=f10e166] [cursor=pointer]
            - button "5x114.3mm or 5x4.5\"" [ref=f10e168] [cursor=pointer]
            - button "5x114.3mm or 5x5\"" [ref=f10e170] [cursor=pointer]
            - button "5x115mm or 5x4.5\"" [ref=f10e172] [cursor=pointer]
            - button "5x116.4mm or 4.6\"" [ref=f10e174] [cursor=pointer]
            - button "5x118.4mm or 4.7\"" [ref=f10e176] [cursor=pointer]
            - button "5x120mm or 5x4.7\"" [ref=f10e178] [cursor=pointer]
            - button "5x120mm or 5x4.75\"" [ref=f10e180] [cursor=pointer]
            - button "5x127mm or 5x5\"" [ref=f10e182] [cursor=pointer]
            - button "5x127mm or 5x4.7\"" [ref=f10e184] [cursor=pointer]
            - button "5x130mm or 5x5.1\"" [ref=f10e186] [cursor=pointer]
            - button "5x135mm or 5x5.3\"" [ref=f10e188] [cursor=pointer]
            - button "5x139.7mm or 5x5.5\"" [ref=f10e190] [cursor=pointer]
            - button "5x150mm or 5x5.9\"" [ref=f10e192] [cursor=pointer]
            - button "5x160mm or 5x6.3\"" [ref=f10e194] [cursor=pointer]
            - button "6x114.3mm or 6x4.5\"" [ref=f10e196] [cursor=pointer]
            - button "6x115mm or 6x4.5\"" [ref=f10e198] [cursor=pointer]
            - button "6x120mm or 6x4.7\"" [ref=f10e200] [cursor=pointer]
            - button "6x127mm or 6x5\"" [ref=f10e202] [cursor=pointer]
            - button "6x130mm or 6x5.1\"" [ref=f10e204] [cursor=pointer]
            - button "6x132mm or 6x5.2\"" [ref=f10e206] [cursor=pointer]
            - button "6x135mm or 6x5.3\"" [ref=f10e208] [cursor=pointer]
            - button "6x139.7mm or 6x5.5\"" [ref=f10e210] [cursor=pointer]
            - button "6x180mm or 6x7.1\"" [ref=f10e212] [cursor=pointer]
            - button "6x205mm or 6x8.1\"" [ref=f10e214] [cursor=pointer]
            - button "6x222.25mm or 6x8.75\"" [ref=f10e216] [cursor=pointer]
            - button "7x150mm or 7x5.9\"" [ref=f10e218] [cursor=pointer]
            - button "8x165.1mm or 8x6.5\"" [ref=f10e220] [cursor=pointer]
            - button "8x170mm or 8x6.7\"" [ref=f10e222] [cursor=pointer]
            - button "8x180mm or 8x7.1\"" [ref=f10e224] [cursor=pointer]
            - button "8x200mm or 8x7.9\"" [ref=f10e226] [cursor=pointer]
            - button "8x210mm or 8x8.3\"" [ref=f10e228] [cursor=pointer]
            - button "8x225mm or 8x8.9\"" [ref=f10e230] [cursor=pointer]
            - button "8x275mm or 8x10.8\"" [ref=f10e232] [cursor=pointer]
            - button "10x184.1mm or 10x7.25\"" [ref=f10e234] [cursor=pointer]
            - button "10-222.25mm or 10-8.75\"" [ref=f10e236] [cursor=pointer]
            - button "10x225mm or 10x8.9\"" [ref=f10e238] [cursor=pointer]
            - button "10x285.7mm or 10x11.2\"" [ref=f10e240] [cursor=pointer]
        - generic [ref=f10e242]:
          - generic [ref=f10e243]: lug count
          - generic [ref=f10e244]:
            - button "3" [ref=f10e245] [cursor=pointer]
            - button "4" [ref=f10e247] [cursor=pointer]
            - button "5" [ref=f10e249] [cursor=pointer]
            - button "6" [ref=f10e251] [cursor=pointer]
            - button "7" [ref=f10e253] [cursor=pointer]
            - button "8" [ref=f10e255] [cursor=pointer]
            - button "10" [ref=f10e257] [cursor=pointer]
        - generic [ref=f10e259]:
          - generic [ref=f10e260]: center bore
          - generic [ref=f10e261]:
            - button "46mm" [ref=f10e262] [cursor=pointer]
            - button "54mm" [ref=f10e264] [cursor=pointer]
            - button "54.06mm" [ref=f10e266] [cursor=pointer]
            - button "54.1mm" [ref=f10e268] [cursor=pointer]
            - button "56mm" [ref=f10e270] [cursor=pointer]
            - button "56.1mm" [ref=f10e272] [cursor=pointer]
            - button "56.5mm" [ref=f10e274] [cursor=pointer]
            - button "56.6mm" [ref=f10e276] [cursor=pointer]
            - button "56.8mm" [ref=f10e278] [cursor=pointer]
            - button "57mm" [ref=f10e280] [cursor=pointer]
            - button "57.1mm" [ref=f10e282] [cursor=pointer]
            - button "57.2mm" [ref=f10e284] [cursor=pointer]
            - button "58mm" [ref=f10e286] [cursor=pointer]
            - button "58.1mm" [ref=f10e288] [cursor=pointer]
            - button "59.1mm" [ref=f10e290] [cursor=pointer]
            - button "60mm" [ref=f10e292] [cursor=pointer]
            - button "60.1mm" [ref=f10e294] [cursor=pointer]
            - button "60.7mm" [ref=f10e296] [cursor=pointer]
            - button "63mm" [ref=f10e298] [cursor=pointer]
            - button "63.1mm" [ref=f10e300] [cursor=pointer]
            - button "63.3mm" [ref=f10e302] [cursor=pointer]
            - button "63.4mm" [ref=f10e304] [cursor=pointer]
            - button "63.5mm" [ref=f10e306] [cursor=pointer]
            - button "63.6mm" [ref=f10e308] [cursor=pointer]
            - button "64mm" [ref=f10e310] [cursor=pointer]
            - button "64.1mm" [ref=f10e312] [cursor=pointer]
            - button "64.2mm" [ref=f10e314] [cursor=pointer]
            - button "65mm" [ref=f10e316] [cursor=pointer]
            - button "65.1mm" [ref=f10e318] [cursor=pointer]
            - button "66mm" [ref=f10e320] [cursor=pointer]
            - button "66.1mm" [ref=f10e322] [cursor=pointer]
            - button "66.45mm" [ref=f10e324] [cursor=pointer]
            - button "66.5mm" [ref=f10e326] [cursor=pointer]
            - button "66.6mm" [ref=f10e328] [cursor=pointer]
            - button "66.87mm" [ref=f10e330] [cursor=pointer]
            - button "66.9mm" [ref=f10e332] [cursor=pointer]
            - button "67mm" [ref=f10e334] [cursor=pointer]
            - button "67.1mm" [ref=f10e336] [cursor=pointer]
            - button "68mm" [ref=f10e338] [cursor=pointer]
            - button "70,3mm" [ref=f10e340] [cursor=pointer]
            - button "70.1mm" [ref=f10e342] [cursor=pointer]
            - button "70.2mm" [ref=f10e344] [cursor=pointer]
            - button "70.3mm" [ref=f10e346] [cursor=pointer]
            - button "70.5mm" [ref=f10e348] [cursor=pointer]
            - button "70.6mm" [ref=f10e350] [cursor=pointer]
            - button "70.8mm" [ref=f10e352] [cursor=pointer]
            - button "71.5mm" [ref=f10e354] [cursor=pointer]
            - button "71.6mm" [ref=f10e356] [cursor=pointer]
            - button "71.8mm" [ref=f10e358] [cursor=pointer]
            - button "72.5mm" [ref=f10e360] [cursor=pointer]
            - button "72.6mm" [ref=f10e362] [cursor=pointer]
            - button "73.1mm" [ref=f10e364] [cursor=pointer]
            - button "74mm" [ref=f10e366] [cursor=pointer]
            - button "74.1mm" [ref=f10e368] [cursor=pointer]
            - button "74.5mm" [ref=f10e370] [cursor=pointer]
            - button "77.8mm" [ref=f10e372] [cursor=pointer]
            - button "78mm" [ref=f10e374] [cursor=pointer]
            - button "78.1mm" [ref=f10e376] [cursor=pointer]
            - button "78.3mm" [ref=f10e378] [cursor=pointer]
            - button "81mm" [ref=f10e380] [cursor=pointer]
            - button "83.7mm" [ref=f10e382] [cursor=pointer]
            - button "84mm" [ref=f10e384] [cursor=pointer]
            - button "84.1mm" [ref=f10e386] [cursor=pointer]
            - button "84.5mm" [ref=f10e388] [cursor=pointer]
            - button "87mm" [ref=f10e390] [cursor=pointer]
            - button "87,1mm" [ref=f10e392] [cursor=pointer]
            - button "87.1mm" [ref=f10e394] [cursor=pointer]
            - button "92.5mm" [ref=f10e396] [cursor=pointer]
            - button "93.1mm" [ref=f10e398] [cursor=pointer]
            - button "95.1mm" [ref=f10e400] [cursor=pointer]
            - button "95.2mm" [ref=f10e402] [cursor=pointer]
            - button "100mm" [ref=f10e404] [cursor=pointer]
            - button "100.3mm" [ref=f10e406] [cursor=pointer]
            - button "106mm" [ref=f10e408] [cursor=pointer]
            - button "106.1mm" [ref=f10e410] [cursor=pointer]
            - button "106.2mm" [ref=f10e412] [cursor=pointer]
            - button "108mm" [ref=f10e414] [cursor=pointer]
            - button "108.1mm" [ref=f10e416] [cursor=pointer]
            - button "110.1mm" [ref=f10e418] [cursor=pointer]
            - button "110.2mm" [ref=f10e420] [cursor=pointer]
            - button "110.5mm" [ref=f10e422] [cursor=pointer]
            - button "110.6mm" [ref=f10e424] [cursor=pointer]
            - button "116mm" [ref=f10e426] [cursor=pointer]
            - button "116.6mm" [ref=f10e428] [cursor=pointer]
            - button "116.7mm" [ref=f10e430] [cursor=pointer]
            - button "116.8mm" [ref=f10e432] [cursor=pointer]
            - button "117mm" [ref=f10e434] [cursor=pointer]
            - button "120.9mm" [ref=f10e436] [cursor=pointer]
            - button "121mm" [ref=f10e438] [cursor=pointer]
            - button "121.0mm" [ref=f10e440] [cursor=pointer]
            - button "121.15mm" [ref=f10e442] [cursor=pointer]
            - button "121.2mm" [ref=f10e444] [cursor=pointer]
            - button "121.3mm" [ref=f10e446] [cursor=pointer]
            - button "122mm" [ref=f10e448] [cursor=pointer]
            - button "123.9mm" [ref=f10e450] [cursor=pointer]
            - button "124mm" [ref=f10e452] [cursor=pointer]
            - button "124.1mm" [ref=f10e454] [cursor=pointer]
            - button "124.2mm" [ref=f10e456] [cursor=pointer]
            - button "124.46mm" [ref=f10e458] [cursor=pointer]
            - button "124.9mm" [ref=f10e460] [cursor=pointer]
            - button "125mm" [ref=f10e462] [cursor=pointer]
            - button "125.1mm" [ref=f10e464] [cursor=pointer]
            - button "125.2mm" [ref=f10e466] [cursor=pointer]
            - button "133.4mm" [ref=f10e468] [cursor=pointer]
            - button "138.8mm" [ref=f10e470] [cursor=pointer]
            - button "139mm" [ref=f10e472] [cursor=pointer]
            - button "140mm" [ref=f10e474] [cursor=pointer]
            - button "142mm" [ref=f10e476] [cursor=pointer]
            - button "142.1mm" [ref=f10e478] [cursor=pointer]
            - button "154mm" [ref=f10e480] [cursor=pointer]
            - button "154.2mm" [ref=f10e482] [cursor=pointer]
            - button "161mm" [ref=f10e484] [cursor=pointer]
            - button "164mm" [ref=f10e486] [cursor=pointer]
            - button "165.1mm" [ref=f10e488] [cursor=pointer]
            - button "167.5mm" [ref=f10e490] [cursor=pointer]
            - button "170.1mm" [ref=f10e492] [cursor=pointer]
            - button "170.2mm" [ref=f10e494] [cursor=pointer]
            - button "220mm" [ref=f10e496] [cursor=pointer]
            - button "220.1mm" [ref=f10e498] [cursor=pointer]
            - button "220.9mm" [ref=f10e500] [cursor=pointer]
            - button "221mm" [ref=f10e502] [cursor=pointer]
            - button "222mm" [ref=f10e504] [cursor=pointer]
        - generic [ref=f10e506]:
          - generic [ref=f10e507]: Availability
          - generic [ref=f10e508] [cursor=pointer]:
            - checkbox "Include Out of Stock" [checked] [ref=f10e509]
            - generic [ref=f10e510]: Include Out of Stock
      - generic [ref=f10e511]:
        - generic [ref=f10e513]:
          - generic [ref=f10e514]: Shop Road Ready Products
          - generic [ref=f10e515]:
            - link [ref=f10e516] [cursor=pointer]:
              - /url: /t/categories
              - button "By Category" [ref=f10e517]
            - link [ref=f10e518] [cursor=pointer]:
              - /url: /t/brand
              - button "Top Brands" [ref=f10e519]
            - link [ref=f10e520] [cursor=pointer]:
              - /url: /t/section
              - button "Featured Items" [ref=f10e521]
        - generic [ref=f10e523]:
          - generic [ref=f10e524]:
            - generic [ref=f10e526]:
              - heading "Alloy Wheels" [level=5] [ref=f10e527] [cursor=pointer]
              - button "View All" [ref=f10e528] [cursor=pointer]
            - generic [ref=f10e530]:
              - generic [ref=f10e531]:
                - generic [ref=f10e532]:
                  - generic [ref=f10e533]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=f10e538] [cursor=pointer]
                  - link [ref=f10e541] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                    - img "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [ref=f10e544]
                - generic [ref=f10e545]:
                  - link [ref=f10e546] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                    - heading "1999-2004 16x6 Ford F350SD Alloy Wheel / Rim" [level=3] [ref=f10e547]
                  - link "9,331 All-Time Units Sold" [ref=f10e548] [cursor=pointer]:
                    - /url: /products/1999-2004-16x6-ford-f350sd-alloy-wheel-rim3
                  - generic [ref=f10e550]: $233.58
                  - generic [ref=f10e552]: "Hollander: 560-03335B"
                  - generic [ref=f10e554]:
                    - generic [ref=f10e555]: 🚚
                    - button "Please Select State" [ref=f10e556] [cursor=pointer]
                  - generic [ref=f10e558]:
                    - button "1" [ref=f10e560] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e564] [cursor=pointer]
              - generic [ref=f10e565]:
                - generic [ref=f10e566]:
                  - generic [ref=f10e567]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=f10e572] [cursor=pointer]
                  - link [ref=f10e575] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                    - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=f10e578]
                - generic [ref=f10e579]:
                  - link [ref=f10e580] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                    - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=f10e581]
                  - link "6,559 All-Time Units Sold" [ref=f10e582] [cursor=pointer]:
                    - /url: /products/2018-2022-19x8-5-honda-accord-alloy-wheel-rim
                  - generic [ref=f10e584]: $198.55
                  - generic [ref=f10e586]: "Hollander: 560-64127"
                  - generic [ref=f10e588]:
                    - generic [ref=f10e589]: 🚚
                    - button "Please Select State" [ref=f10e590] [cursor=pointer]
                  - generic [ref=f10e592]:
                    - button "1" [ref=f10e594] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e598] [cursor=pointer]
              - generic [ref=f10e599]:
                - generic [ref=f10e600]:
                  - generic [ref=f10e601]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=f10e606] [cursor=pointer]
                  - link [ref=f10e609] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                    - img "2019-2025 Toyota Corolla 18x8 Alloy Wheel / Rim" [ref=f10e612]
                - generic [ref=f10e613]:
                  - link [ref=f10e614] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                    - heading "2019-2025 Toyota Corolla 18x8 Alloy Wheel / Rim" [level=3] [ref=f10e615]
                  - link "711 All-Time Units Sold" [ref=f10e616] [cursor=pointer]:
                    - /url: /products/2019-2025-toyota-corolla-18x8-alloy-wheel-rim
                  - generic [ref=f10e618]: $228.87
                  - generic [ref=f10e620]: "Hollander: 560-75236C"
                  - generic [ref=f10e622]:
                    - generic [ref=f10e623]: 🚚
                    - button "Please Select State" [ref=f10e624] [cursor=pointer]
                  - generic [ref=f10e626]:
                    - button "1" [ref=f10e628] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e632] [cursor=pointer]
              - generic [ref=f10e633]:
                - generic [ref=f10e634]:
                  - generic [ref=f10e635]: Top Alloy Wheel
                  - button "Add to wishlist" [ref=f10e640] [cursor=pointer]
                  - link [ref=f10e643] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                    - img "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [ref=f10e646]
                - generic [ref=f10e647]:
                  - link [ref=f10e648] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                    - heading "2018-2022 Honda Accord 19x8.5 Alloy Wheel / Rim" [level=3] [ref=f10e649]
                  - link "6,563 All-Time Units Sold" [ref=f10e650] [cursor=pointer]:
                    - /url: /products/2018-2022-honda-accord-19x8-5-alloy-wheel-rim
                  - generic [ref=f10e652]: $198.55
                  - generic [ref=f10e654]: "Hollander: 560-60337A"
                  - generic [ref=f10e656]:
                    - generic [ref=f10e657]: 🚚
                    - button "Please Select State" [ref=f10e658] [cursor=pointer]
                  - generic [ref=f10e660]:
                    - button "1" [ref=f10e662] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e666] [cursor=pointer]
          - generic [ref=f10e667]:
            - generic [ref=f10e669]:
              - heading "Dually Steel Wheels" [level=5] [ref=f10e670] [cursor=pointer]
              - button "View All" [ref=f10e671] [cursor=pointer]
            - generic [ref=f10e674]:
              - generic [ref=f10e675]:
                - generic [ref=f10e676]: Top Trending Dually Wheels
                - button "Add to wishlist" [ref=f10e681] [cursor=pointer]
                - link [ref=f10e684] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                  - img "2019-2024 17x6 Dodge Ram 3500 Dually Wheel / Rim" [ref=f10e687]
              - generic [ref=f10e688]:
                - link [ref=f10e689] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                  - heading "2019-2024 17x6 Dodge Ram 3500 Dually Wheel / Rim" [level=3] [ref=f10e690]
                - link "729 All-Time Units Sold" [ref=f10e691] [cursor=pointer]:
                  - /url: /products/2019-2024-17x6-dodge-ram-3500-dually-wheel-rim
                - generic [ref=f10e693]: $183.75
                - generic [ref=f10e695]: "Hollander: 560-02704"
                - generic [ref=f10e697]:
                  - generic [ref=f10e698]: 🚚
                  - button "Please Select State" [ref=f10e699] [cursor=pointer]
                - generic [ref=f10e701]:
                  - button "1" [ref=f10e703] [cursor=pointer]
                  - button "Add To Cart" [ref=f10e707] [cursor=pointer]
          - generic [ref=f10e708]:
            - generic [ref=f10e710]:
              - heading "Chrome Wheels" [level=5] [ref=f10e711] [cursor=pointer]
              - button "View All" [ref=f10e712] [cursor=pointer]
            - generic [ref=f10e714]:
              - generic [ref=f10e715]:
                - generic [ref=f10e716]:
                  - generic [ref=f10e717]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=f10e722] [cursor=pointer]
                  - link [ref=f10e725] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                    - img "2014-2023 22x9 Cadillac Escalade GMC Sierra Yukon 1500 Chrome Wheel / Rim" [ref=f10e728]
                - generic [ref=f10e729]:
                  - link [ref=f10e730] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                    - heading "2014-2023 22x9 Cadillac Escalade GMC Sierra Yukon 1500 Chrome Wheel / Rim" [level=3] [ref=f10e731]
                  - link "337 All-Time Units Sold" [ref=f10e732] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-cadillac-escalade-gmc-sierra-yukon-1500-chrome-wheel-rim
                  - generic [ref=f10e734]: $363.40
                  - generic [ref=f10e736]: "Hollander: 560-05667"
                  - generic [ref=f10e738]:
                    - generic [ref=f10e739]: 🚚
                    - button "Please Select State" [ref=f10e740] [cursor=pointer]
                  - generic [ref=f10e742]:
                    - button "1" [ref=f10e744] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e748] [cursor=pointer]
              - generic [ref=f10e749]:
                - generic [ref=f10e750]:
                  - generic [ref=f10e751]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=f10e756] [cursor=pointer]
                  - link [ref=f10e759] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                    - img "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [ref=f10e762]
                - generic [ref=f10e763]:
                  - link [ref=f10e764] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                    - heading "2007-2013 Cadillac Escalade 22x9 Alloy Wheel / Rim" [level=3] [ref=f10e765]
                  - link "672 All-Time Units Sold" [ref=f10e766] [cursor=pointer]:
                    - /url: /products/2007-2013-22-x-9-cadillac-extra-escalade-ext-chrome-wheel-rim
                  - generic [ref=f10e768]: $351.07
                  - generic [ref=f10e770]: "Hollander: 560-05309A"
                  - generic [ref=f10e773]:
                    - generic [ref=f10e774]: 🚚
                    - button "Please Select State" [ref=f10e775] [cursor=pointer]
                  - generic [ref=f10e777]:
                    - button "1" [ref=f10e779] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e783] [cursor=pointer]
              - generic [ref=f10e784]:
                - generic [ref=f10e785]:
                  - generic [ref=f10e786]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=f10e791] [cursor=pointer]
                  - link [ref=f10e794] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                    - img "2014-2023 22x9 Chevrolet Silverado Suburban Tahoe 1500 Chrome Wheel / Rim" [ref=f10e797]
                - generic [ref=f10e798]:
                  - link [ref=f10e799] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                    - heading "2014-2023 22x9 Chevrolet Silverado Suburban Tahoe 1500 Chrome Wheel / Rim" [level=3] [ref=f10e800]
                  - link "391 All-Time Units Sold" [ref=f10e801] [cursor=pointer]:
                    - /url: /products/2014-2023-22x9-chevrolet-silverado-suburban-tahoe-1500-chrome-wheel-rim
                  - generic [ref=f10e803]: $363.40
                  - generic [ref=f10e805]: "Hollander: 560-05667"
                  - generic [ref=f10e807]:
                    - generic [ref=f10e808]: 🚚
                    - button "Please Select State" [ref=f10e809] [cursor=pointer]
                  - generic [ref=f10e811]:
                    - button "1" [ref=f10e813] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e817] [cursor=pointer]
              - generic [ref=f10e818]:
                - generic [ref=f10e819]:
                  - generic [ref=f10e820]: Top Trending Chrome Wheels
                  - button "Add to wishlist" [ref=f10e825] [cursor=pointer]
                  - link [ref=f10e828] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                    - img "1999-2018 20x9 GMC Sierra 1500 Chrome Wheel / Rim" [ref=f10e831]
                - generic [ref=f10e832]:
                  - link [ref=f10e833] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                    - heading "1999-2018 20x9 GMC Sierra 1500 Chrome Wheel / Rim" [level=3] [ref=f10e834]
                  - link "499 All-Time Units Sold" [ref=f10e835] [cursor=pointer]:
                    - /url: /products/1999-2018-20-x-9-gmc-sierra-1500-chrome-wheel-rim
                  - generic [ref=f10e837]: $351.07
                  - generic [ref=f10e839]: "Hollander: 560-05656"
                  - generic [ref=f10e841]:
                    - generic [ref=f10e842]: 🚚
                    - button "Please Select State" [ref=f10e843] [cursor=pointer]
                  - generic [ref=f10e845]:
                    - button "1" [ref=f10e847] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e851] [cursor=pointer]
          - generic [ref=f10e852]:
            - generic [ref=f10e854]:
              - heading "Hubcaps" [level=5] [ref=f10e855] [cursor=pointer]
              - button "View All" [ref=f10e856] [cursor=pointer]
            - generic [ref=f10e858]:
              - generic [ref=f10e859]:
                - generic [ref=f10e860]:
                  - generic [ref=f10e861]: Top Hubcaps
                  - button "Add to wishlist" [ref=f10e866] [cursor=pointer]
                  - link [ref=f10e869] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - img "2013-2015 Honda Civic Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=f10e872]
                - generic [ref=f10e873]:
                  - link [ref=f10e874] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                    - heading "2013-2015 Honda Civic Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=f10e875]
                  - link "477 All-Time Units Sold" [ref=f10e876] [cursor=pointer]:
                    - /url: /products/2013-2015-honda-civic-four-piece-set-silver-wheel-cover-caps-hubcaps
                  - generic [ref=f10e878]: $71.85
                  - generic [ref=f10e880]: "Hollander: 570-0020"
                  - generic [ref=f10e883]:
                    - generic [ref=f10e884]: 🚚
                    - button "Please Select State" [ref=f10e885] [cursor=pointer]
                  - generic [ref=f10e887]:
                    - button "1" [ref=f10e889] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e893] [cursor=pointer]
              - generic [ref=f10e894]:
                - generic [ref=f10e895]:
                  - generic [ref=f10e896]: Top Hubcaps
                  - button "Add to wishlist" [ref=f10e901] [cursor=pointer]
                  - link [ref=f10e904] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                    - img "2006-2011 Chevrolet Impala Four Piece Set Silver Wheel Cover Caps / Hubcaps" [ref=f10e907]
                - generic [ref=f10e908]:
                  - link [ref=f10e909] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                    - heading "2006-2011 Chevrolet Impala Four Piece Set Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=f10e910]
                  - link "254 All-Time Units Sold" [ref=f10e911] [cursor=pointer]:
                    - /url: /products/2006-2011-16-inch-chevrolet-impala-wheel-hubcap-4-pcs
                  - generic [ref=f10e913]: $65.01
                  - generic [ref=f10e915]: "Hollander: 570-03021"
                  - generic [ref=f10e918]:
                    - generic [ref=f10e919]: 🚚
                    - button "Please Select State" [ref=f10e920] [cursor=pointer]
                  - generic [ref=f10e922]:
                    - button "1" [ref=f10e924] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e928] [cursor=pointer]
              - generic [ref=f10e929]:
                - generic [ref=f10e930]:
                  - generic [ref=f10e931]: Top Hubcaps
                  - button "Add to wishlist" [ref=f10e936] [cursor=pointer]
                  - link [ref=f10e939] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - img "2015-2024 Ford Transit 150 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [ref=f10e942]
                - generic [ref=f10e943]:
                  - link [ref=f10e944] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                    - heading "2015-2024 Ford Transit 150 Four Piece Set 16\" Silver Wheel Cover Caps / Hubcaps" [level=3] [ref=f10e945]
                  - link "131 All-Time Units Sold" [ref=f10e946] [cursor=pointer]:
                    - /url: /products/2015-2024-ford-transit-150-four-piece-set-16-silver-wheel-cover-caps-hubcaps
                  - generic [ref=f10e948]: $72.99
                  - generic [ref=f10e950]: "Hollander: 570-07068"
                  - generic [ref=f10e953]:
                    - generic [ref=f10e954]: 🚚
                    - button "Please Select State" [ref=f10e955] [cursor=pointer]
                  - generic [ref=f10e957]:
                    - button "1" [ref=f10e959] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e963] [cursor=pointer]
              - generic [ref=f10e964]:
                - generic [ref=f10e965]:
                  - generic [ref=f10e966]: Top Hubcaps
                  - button "Add to wishlist" [ref=f10e971] [cursor=pointer]
                  - link [ref=f10e974] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                    - img "2022-2024 Honda Civic Four Piece Set 16\" Silver/Black Wheel Cover Caps / Hubcaps" [ref=f10e977]
                - generic [ref=f10e978]:
                  - link [ref=f10e979] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                    - heading "2022-2024 Honda Civic Four Piece Set 16\" Silver/Black Wheel Cover Caps / Hubcaps" [level=3] [ref=f10e980]
                  - link "1,435 All-Time Units Sold" [ref=f10e981] [cursor=pointer]:
                    - /url: /products/2022-2024-honda-civic-four-piece-set-16-silver-black-wheel-cover-caps-hubcaps
                  - generic [ref=f10e983]: $83.07
                  - generic [ref=f10e985]: "Hollander: 570-10011"
                  - generic [ref=f10e987]:
                    - generic [ref=f10e988]: 🚚
                    - button "Please Select State" [ref=f10e989] [cursor=pointer]
                  - generic [ref=f10e991]:
                    - button "1" [ref=f10e993] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e997] [cursor=pointer]
          - generic [ref=f10e998]:
            - generic [ref=f10e1000]:
              - heading "Steel Wheels" [level=5] [ref=f10e1001] [cursor=pointer]
              - button "View All" [ref=f10e1002] [cursor=pointer]
            - generic [ref=f10e1004]:
              - generic [ref=f10e1005]:
                - generic [ref=f10e1006]:
                  - generic [ref=f10e1007]: Top Steel Wheel
                  - button "Add to wishlist" [ref=f10e1012] [cursor=pointer]
                  - link [ref=f10e1015] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                    - img "2005-2026 Ford F-550 19.5x6 Steel Wheel / Rim" [ref=f10e1018]
                - generic [ref=f10e1019]:
                  - link [ref=f10e1020] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                    - heading "2005-2026 Ford F-550 19.5x6 Steel Wheel / Rim" [level=3] [ref=f10e1021]
                  - link "16,540 All-Time Units Sold" [ref=f10e1022] [cursor=pointer]:
                    - /url: /products/2005-2026-ford-f-550-19-5x6-steel-wheel-rim
                  - generic [ref=f10e1024]: $194.33
                  - generic [ref=f10e1026]: "Hollander: 99042"
                  - generic [ref=f10e1029]:
                    - generic [ref=f10e1030]: 🚚
                    - button "Please Select State" [ref=f10e1031] [cursor=pointer]
                  - generic [ref=f10e1033]:
                    - button "1" [ref=f10e1035] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e1039] [cursor=pointer]
              - generic [ref=f10e1040]:
                - generic [ref=f10e1041]:
                  - generic [ref=f10e1042]: Top Steel Wheel
                  - button "Add to wishlist" [ref=f10e1047] [cursor=pointer]
                  - link [ref=f10e1050] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                    - img "2011-2025 Chevrolet Silverado 3500 17x6.5 Steel Wheel / Rim" [ref=f10e1053]
                - generic [ref=f10e1054]:
                  - link [ref=f10e1055] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                    - heading "2011-2025 Chevrolet Silverado 3500 17x6.5 Steel Wheel / Rim" [level=3] [ref=f10e1056]
                  - link "13,374 All-Time Units Sold" [ref=f10e1057] [cursor=pointer]:
                    - /url: /products/2011-2025-17x6-5-chevrolet-silverado-3500-steel-wheel-rim
                  - generic [ref=f10e1059]: $147.15
                  - generic [ref=f10e1061]: "Hollander: 560-08094"
                  - generic [ref=f10e1063]:
                    - generic [ref=f10e1064]: 🚚
                    - button "Please Select State" [ref=f10e1065] [cursor=pointer]
                  - generic [ref=f10e1067]:
                    - button "1" [ref=f10e1069] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e1073] [cursor=pointer]
              - generic [ref=f10e1074]:
                - generic [ref=f10e1075]:
                  - generic [ref=f10e1076]: Top Steel Wheel
                  - button "Add to wishlist" [ref=f10e1081] [cursor=pointer]
                  - link [ref=f10e1084] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                    - img "2015-2025 16x6 Ford Transit 350 Dually Steel Wheel / Rim" [ref=f10e1087]
                - generic [ref=f10e1088]:
                  - link [ref=f10e1089] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                    - heading "2015-2025 16x6 Ford Transit 350 Dually Steel Wheel / Rim" [level=3] [ref=f10e1090]
                  - link "4,176 All-Time Units Sold" [ref=f10e1091] [cursor=pointer]:
                    - /url: /products/2015-2025-16x6-ford-transit-350-dually-steel-wheel-rim2
                  - generic [ref=f10e1093]: $142.66
                  - generic [ref=f10e1095]: "Hollander: 560-10050S"
                  - generic [ref=f10e1097]:
                    - generic [ref=f10e1098]: 🚚
                    - button "Please Select State" [ref=f10e1099] [cursor=pointer]
                  - generic [ref=f10e1101]:
                    - button "1" [ref=f10e1103] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e1107] [cursor=pointer]
              - generic [ref=f10e1108]:
                - generic [ref=f10e1109]:
                  - generic [ref=f10e1110]: Top Steel Wheel
                  - button "Add to wishlist" [ref=f10e1115] [cursor=pointer]
                  - link [ref=f10e1118] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                    - img "2008-2010 17x6.5 GMC Sierra 3500 Dually Steel Wheel / Rim" [ref=f10e1121]
                - generic [ref=f10e1122]:
                  - link [ref=f10e1123] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                    - heading "2008-2010 17x6.5 GMC Sierra 3500 Dually Steel Wheel / Rim" [level=3] [ref=f10e1124]
                  - link "5,783 All-Time Units Sold" [ref=f10e1125] [cursor=pointer]:
                    - /url: /products/2008-2010-17x6-5-gmc-sierra-3500-dually-steel-wheel-rim
                  - generic [ref=f10e1127]: $161.63
                  - generic [ref=f10e1129]: "Hollander: 560-08076A"
                  - generic [ref=f10e1131]:
                    - generic [ref=f10e1132]: 🚚
                    - button "Please Select State" [ref=f10e1133] [cursor=pointer]
                  - generic [ref=f10e1135]:
                    - button "1" [ref=f10e1137] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e1141] [cursor=pointer]
          - generic [ref=f10e1142]:
            - generic [ref=f10e1144]:
              - heading "New OEM Take Off Wheels / Rims" [level=5] [ref=f10e1145] [cursor=pointer]
              - button "View All" [ref=f10e1146] [cursor=pointer]
            - generic [ref=f10e1148]:
              - generic [ref=f10e1149]:
                - generic [ref=f10e1150]:
                  - generic [ref=f10e1151]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=f10e1156] [cursor=pointer]
                  - link [ref=f10e1159] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                    - img "2020-2024 16x6.5 Ford Transit 150 Genuine OEM Take-Off Steel Wheel / Rim" [ref=f10e1162]
                - generic [ref=f10e1163]:
                  - link [ref=f10e1164] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                    - heading "2020-2024 16x6.5 Ford Transit 150 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=f10e1165]
                  - link "1,437 All-Time Units Sold" [ref=f10e1166] [cursor=pointer]:
                    - /url: /products/2020-2024-16x6-5-ford-transit-150-genuine-oem-take-off-steel-wheel-rim
                  - generic [ref=f10e1168]: $138.82
                  - generic [ref=f10e1170]: "Hollander: 560-10283"
                  - generic [ref=f10e1173]:
                    - generic [ref=f10e1174]: 🚚
                    - button "Please Select State" [ref=f10e1175] [cursor=pointer]
                  - generic [ref=f10e1177]:
                    - button "1" [ref=f10e1179] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e1183] [cursor=pointer]
              - generic [ref=f10e1184]:
                - generic [ref=f10e1185]:
                  - generic [ref=f10e1186]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=f10e1191] [cursor=pointer]
                  - link [ref=f10e1194] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                    - img "2010-2025 17x7.5 Ford F250SD Genuine OEM Take-Off Steel Wheel / Rim" [ref=f10e1197]
                - generic [ref=f10e1198]:
                  - link [ref=f10e1199] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                    - heading "2010-2025 17x7.5 Ford F250SD Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=f10e1200]
                  - link "406 All-Time Units Sold" [ref=f10e1201] [cursor=pointer]:
                    - /url: /products/2010-2025-17x7-5-ford-f250sd-genuine-oem-take-off-steel-wheel-rim
                  - generic [ref=f10e1203]: $181.31
                  - generic [ref=f10e1205]: "Hollander: 560-03828A"
                  - generic [ref=f10e1208]:
                    - generic [ref=f10e1209]: 🚚
                    - button "Please Select State" [ref=f10e1210] [cursor=pointer]
                  - generic [ref=f10e1212]:
                    - button "1" [ref=f10e1214] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e1218] [cursor=pointer]
              - generic [ref=f10e1219]:
                - generic [ref=f10e1220]:
                  - generic [ref=f10e1221]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=f10e1226] [cursor=pointer]
                  - link [ref=f10e1229] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                    - img "2010-2024 Mercedes-Benz Sprinter 3500 DRW 16x5.5 Genuine OEM Take-Off Steel Wheel / Rim" [ref=f10e1232]
                - generic [ref=f10e1233]:
                  - link [ref=f10e1234] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                    - heading "2010-2024 Mercedes-Benz Sprinter 3500 DRW 16x5.5 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=f10e1235]
                  - link "599 All-Time Units Sold" [ref=f10e1236] [cursor=pointer]:
                    - /url: /products/2010-2024-mercedes-benz-sprinter-3500-drw-16x5-5-genuine-oem-take-off-steel-wheel-rim2
                  - generic [ref=f10e1238]: $101.68
                  - generic [ref=f10e1240]: "Hollander: 560-85412"
                  - generic [ref=f10e1242]:
                    - generic [ref=f10e1243]: 🚚
                    - button "Please Select State" [ref=f10e1244] [cursor=pointer]
                  - generic [ref=f10e1246]:
                    - button "1" [ref=f10e1248] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e1252] [cursor=pointer]
              - generic [ref=f10e1253]:
                - generic [ref=f10e1254]:
                  - generic [ref=f10e1255]: Top OEM Take Off Wheel
                  - button "Add to wishlist" [ref=f10e1260] [cursor=pointer]
                  - link [ref=f10e1263] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                    - img "2010-2024 16x5.5 Mercedes-Benz Sprinter 3500 Genuine OEM Take-Off Steel Wheel / Rim" [ref=f10e1266]
                - generic [ref=f10e1267]:
                  - link [ref=f10e1268] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                    - heading "2010-2024 16x5.5 Mercedes-Benz Sprinter 3500 Genuine OEM Take-Off Steel Wheel / Rim" [level=3] [ref=f10e1269]
                  - link "599 All-Time Units Sold" [ref=f10e1270] [cursor=pointer]:
                    - /url: /products/2010-2024-16x5-5-mercedes-benz-sprinter-3500-genuine-oem-take-off-steel-wheel-rim2
                  - generic [ref=f10e1272]: $101.68
                  - generic [ref=f10e1274]: "Hollander: 560-85413"
                  - generic [ref=f10e1276]:
                    - generic [ref=f10e1277]: 🚚
                    - button "Please Select State" [ref=f10e1278] [cursor=pointer]
                  - generic [ref=f10e1280]:
                    - button "1" [ref=f10e1282] [cursor=pointer]
                    - button "Add To Cart" [ref=f10e1286] [cursor=pointer]
    - contentinfo [ref=f10e1287]:
      - generic [ref=f10e1288]:
        - generic [ref=f10e1289]:
          - generic [ref=f10e1290]:
            - heading "Contact Us" [level=3] [ref=f10e1291]
            - generic [ref=f10e1292]:
              - paragraph [ref=f10e1293]:
                - text: "Call:"
                - link "1-888-790-5899" [ref=f10e1294] [cursor=pointer]:
                  - /url: tel:+18887905899
              - paragraph [ref=f10e1295]:
                - text: "Text:"
                - link "217-635-2033" [ref=f10e1296] [cursor=pointer]:
                  - /url: tel:+12176352033
              - link "support@roadreadywheels.com" [ref=f10e1297] [cursor=pointer]:
                - /url: mailto:support@roadreadywheels.com
            - generic [ref=f10e1298]:
              - link "Visit our Facebook page" [ref=f10e1299] [cursor=pointer]:
                - /url: https://www.facebook.com/roadreadywheels/
              - link [ref=f10e1302] [cursor=pointer]:
                - /url: https://twitter.com/RoadReadyWheel1
                - img "X (Twitter)" [ref=f10e1303]
              - link "Visit our Instagram page" [ref=f10e1304] [cursor=pointer]:
                - /url: https://www.instagram.com/roadreadywheels/
              - link "Visit our YouTube channel" [ref=f10e1308] [cursor=pointer]:
                - /url: https://www.youtube.com/channel/UCYkBqgu0APKgEfPKJmRrCrg
            - generic [ref=f10e1312]:
              - img "BBB Accredited" [ref=f10e1314]
              - img "WTC Member" [ref=f10e1316]
          - generic [ref=f10e1317]:
            - heading "Support" [level=3] [ref=f10e1318]
            - generic [ref=f10e1319]:
              - link "Returns and Refunds" [ref=f10e1320] [cursor=pointer]:
                - /url: /faq/i-want-to-return-my-rim-and-get-a-full-refund?id=7
              - link "Contact Us" [ref=f10e1321] [cursor=pointer]:
                - /url: /contact
              - link "Warranty" [ref=f10e1322] [cursor=pointer]:
                - /url: /faq/what-is-your-product-warranty?id=9
              - link "FAQs" [ref=f10e1323] [cursor=pointer]:
                - /url: /faq
              - link "Wheel Requests" [ref=f10e1324] [cursor=pointer]:
                - /url: /wheel-requests
              - link "Terms of Service" [ref=f10e1325] [cursor=pointer]:
                - /url: /terms-of-service
              - link "Privacy Policy" [ref=f10e1326] [cursor=pointer]:
                - /url: /privacy-policy
              - link "Shipping Policy" [ref=f10e1327] [cursor=pointer]:
                - /url: /faq/how-long-does-it-take-to-ship-to-me?id=1
          - generic [ref=f10e1328]:
            - heading "Why Road Ready" [level=3] [ref=f10e1329]
            - generic [ref=f10e1330]:
              - link "About Us" [ref=f10e1331] [cursor=pointer]:
                - /url: /about-us
              - link "Price Comparison" [ref=f10e1332] [cursor=pointer]:
                - /url: /price-comparison
          - generic [ref=f10e1333]:
            - heading "Divisions" [level=3] [ref=f10e1334]
            - generic [ref=f10e1335]:
              - link "Wholesale" [ref=f10e1336] [cursor=pointer]:
                - /url: /wholesale
              - link "Resale" [ref=f10e1337] [cursor=pointer]:
                - /url: /resale
        - generic [ref=f10e1338]:
          - paragraph [ref=f10e1340]:
            - strong [ref=f10e1341]: "DISCLAIMER :"
            - text: Road Ready Wheels is not affiliated with or authorized by, and does not claim to be endorsed by any of the automobile manufacturers named and/or otherwise identified within this page, and its use of any third party’s company, model and/or brand name(s), including but not limited to "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", “Chrysler”, "Dodge", "Fiat", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Land Rover", "Lexus", "Lincoln", "Mercedes-Benz", "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Opel", "Porsche", "Plymouth", "Pontiac", "Rivian", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen" and "Volvo" is for the nominative purpose of product fitment and description.
          - generic [ref=f10e1342]:
            - paragraph [ref=f10e1343]: 2026 Road Ready Wheels All Rights Reserved
            - paragraph [ref=f10e1344]:
              - text: Made with ❤️ at
              - link "W3villa Technologies" [ref=f10e1345] [cursor=pointer]:
                - /url: https://www.w3villa.com/
  - iframe [ref=f10e1346]
  - iframe [ref=f10e1347]:
    - button "Support" [ref=f17e4] [cursor=pointer]
```

# Test source

```ts
  53  |       .locator('div')
  54  |       .filter({ hasText: /^Select Model$/ })
  55  |       .nth(2);
  56  |     this.yearSelect = page
  57  |       .locator(
  58  |         'div:nth-child(3) > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-search'
  59  |       );
  60  | 
  61  |     this.categoryButton = (categoryName: string) =>
  62  |       page.getByRole('button', { name: categoryName });
  63  | 
  64  |     this.hollanderCode = page.getByText(/^Hollander: 560-/);
  65  | 
  66  |     // Result cards' prices — used to assert results actually rendered,
  67  |     // not just that no error was thrown.
  68  |     this.resultPrices = page.getByText(/^\$/);
  69  | 
  70  |     // Real DOM (confirmed from an actual run) shows Model and Year as
  71  |     // separate removable chips under "Selected Filters" — Make ("Audi")
  72  |     // is NOT its own chip, it's implicit from the initial selection.
  73  |     //
  74  |     // A "Remove X" button IS the definition of an applied filter chip, so
  75  |     // checking for it directly is unambiguous — no parent-traversal scoping
  76  |     // needed at all (the earlier `.locator('..')` approach only walked one
  77  |     // DOM level up from the heading and missed the chip container, which
  78  |     // sits deeper/separately in the DOM).
  79  |     this.removeFilterButton = (value: string) =>
  80  |       page.getByRole('button', { name: `Remove ${value}` });
  81  | 
  82  |     // The "Shop As" modal (full-screen overlay, z-[9999]) re-appears after
  83  |     // the Make selection and blocks every subsequent click underneath it.
  84  |     // Scoped via the nested heading so this doesn't collide with the plain
  85  |     // "Resale" toggle button in the header (that one has no heading inside).
  86  |     this.shopAsModalHeading = page.getByRole('heading', { name: 'Shop As' });
  87  |     this.shopAsResaleOption = page.getByRole('button').filter({
  88  |       has: page.getByRole('heading', { name: 'Resale', exact: true }),
  89  |     });
  90  |     this.shopAsWholesaleOption = page.getByRole('button').filter({
  91  |       has: page.getByRole('heading', { name: 'Wholesale', exact: true }),
  92  |     });
  93  | 
  94  |     // Same filter-button pattern as categoryButton — Material ("Alloy",
  95  |     // "Steel") and Diameter ("20\"") are just more of the same toggle-button
  96  |     // filter groups seen in the sidebar.
  97  |     this.materialButton = (materialName: string) =>
  98  |       page.getByRole('button', { name: materialName });
  99  |     this.diameterButton = (diameterLabel: string) =>
  100 |       page.getByRole('button', { name: diameterLabel });
  101 | 
  102 |     // The breadcrumb-style summary text (e.g. "Cadillac, Escalade, OEM
  103 |     // Replacement Wheel") shown above the results grid once enough filters
  104 |     // are picked — partial match since the full string grows with each
  105 |     // filter added.
  106 |     this.filterSummaryText = (partialText: string) =>
  107 |       page.getByText(partialText, { exact: false });
  108 | 
  109 |     // Shown on a result card instead of "Add To Cart" when that specific
  110 |     // filtered combination has no stock.
  111 |     this.notifyMeButton = page.getByRole('button', { name: 'Notify Me' });
  112 |     this.notifyMeEmailInput = page.getByRole('textbox', {
  113 |       name: 'example@domain.com',
  114 |     });
  115 |     this.notifyMeSubmitButton = page.getByRole('button', { name: 'Submit' });
  116 | 
  117 |     // Sits next to the "Selected Filters" heading — clears every applied
  118 |     // filter chip in one click.
  119 |     this.resetFiltersButton = page.getByRole('button', { name: 'Reset' });
  120 | 
  121 |     // Out-of-stock PDP flow is different from the category-card "Notify Me"
  122 |     // flow above — no email field at all here (uses the logged-in user's
  123 |     // account email). Clicking the normal Add To Cart button on an
  124 |     // out-of-stock product reveals a "Submit" confirm instead, then this
  125 |     // text — confirmed from a real recording, not guessed.
  126 |     this.pdpAddToCartButton = page.locator('#add-to-cart-button');
  127 |     this.pdpSubmitButton = page.getByRole('button', { name: 'Submit' });
  128 |     this.pdpNotifyConfirmationText = page.getByText(
  129 |       'We will notify you when the',
  130 |       { exact: false }
  131 |     );
  132 |   }
  133 | 
  134 |   /**
  135 |    * Call once right after login — the "Shop As" modal is mandatory at that
  136 |    * point, and choosing an option is what lands you on the categories page
  137 |    * with the Make/Model/Year selects available.
  138 |    */
  139 |   async selectShopMode(mode: 'Resale' | 'Wholesale') {
  140 |     await this.shopAsModalHeading.waitFor({ state: 'visible', timeout: 10000 });
  141 | 
  142 |     const option =
  143 |       mode === 'Resale' ? this.shopAsResaleOption : this.shopAsWholesaleOption;
  144 |     await option.click();
  145 | 
  146 |     await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 10000 });
  147 | 
  148 |     // The app appends `just_sign_in=true` to the URL after this selection,
  149 |     // and that flag keeps re-triggering the same modal on later renders
  150 |     // (e.g. once filters are applied) even though a mode was already
  151 |     // chosen — a plain wait isn't enough. Reloading clears it.
  152 |     await this.page.reload();
> 153 |     await this.page.waitForLoadState('networkidle');
      |                     ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  154 | 
  155 |     // Defensive — in case the reload still shows it once more.
  156 |     await this.dismissShopAsModalIfPresent();
  157 |   }
  158 | 
  159 |   /**
  160 |    * Call before any dropdown/button interaction that follows a Make
  161 |    * selection — the modal can pop up more than once, not just immediately
  162 |    * after the first select. A blind wait isn't reliable because the modal's
  163 |    * appearance timing varies; actively checking and dismissing it is.
  164 |    */
  165 |   async dismissShopAsModalIfPresent() {
  166 |     const isModalVisible = await this.shopAsModalHeading
  167 |       .isVisible({ timeout: 3000 })
  168 |       .catch(() => false);
  169 | 
  170 |     if (isModalVisible) {
  171 |       await this.shopAsResaleOption.click();
  172 |       await this.shopAsModalHeading.waitFor({ state: 'hidden', timeout: 5000 });
  173 |     }
  174 |   }
  175 | 
  176 |   async selectMake(make: string) {
  177 |     await this.makeSelect.click();
  178 |     await this.page.getByText(make, { exact: true }).click();
  179 | 
  180 |     // Modal shows up right after Make is picked — dismiss it here instead
  181 |     // of blindly waiting, since it doesn't reliably appear within a fixed
  182 |     // window.
  183 |     await this.dismissShopAsModalIfPresent();
  184 |   }
  185 | 
  186 |   async selectModel(model: string) {
  187 |     await this.dismissShopAsModalIfPresent();
  188 |     await this.modelSelect.click();
  189 |     await this.page.getByText(model, { exact: true }).click();
  190 |   }
  191 | 
  192 |   async selectYear(year: string) {
  193 |     await this.dismissShopAsModalIfPresent();
  194 |     await this.yearSelect.click();
  195 |     await this.page.getByText(year, { exact: true }).click();
  196 |   }
  197 | 
  198 |   async selectCategory(categoryName: string) {
  199 |     await this.dismissShopAsModalIfPresent();
  200 |     await this.click(this.categoryButton(categoryName));
  201 |   }
  202 | 
  203 |   async selectMaterial(materialName: string) {
  204 |     await this.dismissShopAsModalIfPresent();
  205 |     await this.click(this.materialButton(materialName));
  206 |   }
  207 | 
  208 |   async selectDiameter(diameterLabel: string) {
  209 |     await this.dismissShopAsModalIfPresent();
  210 |     await this.click(this.diameterButton(diameterLabel));
  211 |   }
  212 | 
  213 |   /**
  214 |    * Verifies each given value has its own "Remove <value>" chip under
  215 |    * "Selected Filters" — works for any number of filters (Model, Year,
  216 |    * Category, Material, Diameter, ...), since a chip's "Remove" button is
  217 |    * the unambiguous signal that a filter is actually applied.
  218 |    */
  219 |   async expectFiltersApplied(...values: string[]) {
  220 |     for (const value of values) {
  221 |       await expect(this.removeFilterButton(value)).toBeVisible({
  222 |         timeout: 10000,
  223 |       });
  224 |     }
  225 |   }
  226 | 
  227 |   /** After Reset, none of the previously-applied filter chips should remain. */
  228 |   async expectFiltersCleared(...previousValues: string[]) {
  229 |     for (const value of previousValues) {
  230 |       await expect(this.removeFilterButton(value)).toBeHidden({
  231 |         timeout: 10000,
  232 |       });
  233 |     }
  234 |   }
  235 | 
  236 |   async expectFilterSummaryVisible(partialText: string) {
  237 |     await expect(this.filterSummaryText(partialText)).toBeVisible({
  238 |       timeout: 10000,
  239 |     });
  240 |   }
  241 | 
  242 |   /**
  243 |    * Navigates straight to a filtered results URL — mirrors the codegen
  244 |    * recording, which reloaded the filtered listing via the address bar
  245 |    * (e.g. after opening a product from it) instead of re-picking every
  246 |    * dropdown from scratch.
  247 |    */
  248 |   async goToFilteredCategory(params: Record<string, string>) {
  249 |     const query = new URLSearchParams(params).toString();
  250 |     await this.page.goto(
  251 |       `https://staging.roadreadywheels.com/t/categories?${query}`
  252 |     );
  253 |   }
```