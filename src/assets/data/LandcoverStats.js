// land cover arrays order
// AFG_Landcover = ["Snow",	"Builtup area",	"Water body",	"Forest",	"Irrigated agriculture"	"Rainfed agriculture",	"Fruit trees",	"Vineyards",	"Marshland",	"Bare land",	"Rangeland",	"Sand cover",	"Streams"]
// ESA_Landcover = ["Trees",	"Shrubland",	"Grassland",	"Cropland",	"Builtup", "Bare, Sparse vegetation",	"Snow and ice",	"Permanent water bodies",	"Herbaceous wetland",	"Moss and lichen"]
// Cropland = ["Ocean and water bodies", "Non-cropland(other land covers)",	"Irrigated cropland",	"Rainfed cropland"]

export const LandcoverStats = [
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Ab Band",
      "AFG_Landcover": [0.0, 544.77, 5.31, 0.45, 13728.42, 166.05, 22.5, 1073.97, 113.04, 46934.82, 45942.21, 0.0, 2425.77],
      "ESA_Landcover": [0.82, 241.55, 759.81, 15629.73, 138.21, 92526.78, 0.0, 0.15, 0.0, 0.0],
      "Cropland": [0.15, 94553.78, 1015.28, 14927.93]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badghis",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Kushk wa Kashan Rod",
      "DISTRICT": "Ab Kamari",
      "AFG_Landcover": [0.0, 524.7, 0.0, 39519.54, 130.14, 9577.53, 0.0, 0.27, 0.0, 22514.13, 64705.77, 0.0, 286.29],
      "ESA_Landcover": [0.0, 6790.1, 87628.58, 10360.74, 10.61, 32876.34, 0.0, 1.41, 0.0, 0.0],
      "Cropland": [81.75, 92886.0, 70.5, 46139.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Achin",
      "AFG_Landcover": [0.0, 994.95, 0.63, 19256.13, 2243.52, 0.45, 76.41, 0.0, 2.25, 5578.65, 18793.53, 0.0, 603.9],
      "ESA_Landcover": [8167.95, 4286.17, 15909.04, 3860.19, 546.08, 14976.74, 0.0, 2.08, 0.0, 0.3],
      "Cropland": [338.93, 42566.48, 2903.18, 2462.03]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Hilmand",
      "WATERSHED": "Dasht-i Naomid",
      "DISTRICT": "Adraskan",
      "AFG_Landcover": [0.0, 4098.42, 234.99, 4131.18, 1779.3, 18219.33, 449.28, 47.88, 8076.78, 584971.2, 474666.66, 0.0, 16352.82],
      "ESA_Landcover": [44.21, 47215.31, 89508.3, 13950.75, 81.75, 951538.12, 0.0, 11.65, 0.67, 0.0],
      "Cropland": [7458.3, 1067869.88, 1229.48, 37882.2]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Ajristan",
      "AFG_Landcover": [15.03, 251.82, 0.0, 10.89, 3438.27, 1168.02, 636.12, 0.0, 321.03, 5028.66, 149565.42, 0.36, 1925.73],
      "ESA_Landcover": [34.2, 94.81, 28288.83, 7161.47, 80.64, 125238.36, 0.0, 4.3, 0.0, 0.0],
      "Cropland": [4.28, 156263.1, 3576.75, 2826.53]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kapisa",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Alasay",
      "AFG_Landcover": [7.47, 59.67, 0.0, 7031.25, 298.8, 1.35, 594.0, 0.0, 0.0, 1574.46, 17002.89, 0.0, 209.52],
      "ESA_Landcover": [1550.12, 2314.9, 14635.19, 939.94, 49.56, 7511.93, 0.0, 0.96, 0.0, 0.22],
      "Cropland": [0.6, 26131.88, 1057.73, 112.43]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunduz",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Ali abad",
      "AFG_Landcover": [0.0, 2105.46, 263.34, 1642.41, 3000.51, 19154.25, 7.74, 18.0, 92.79, 5558.31, 41888.61, 0.0, 306.45],
      "ESA_Landcover": [60.46, 5663.51, 40423.8, 17707.68, 341.48, 11632.29, 0.0, 267.44, 0.45, 0.0],
      "Cropland": [148.88, 26810.55, 6056.1, 43923.68]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Laghman",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Alingar",
      "DISTRICT": "Alingar",
      "AFG_Landcover": [332.64, 1225.26, 143.46, 42561.54, 2626.56, 0.0, 667.98, 0.0, 49.5, 7721.37, 22730.76, 0.0, 603.45],
      "ESA_Landcover": [16087.61, 13069.35, 24831.98, 3470.87, 678.43, 20923.27, 0.0, 129.45, 0.0, 0.74],
      "Cropland": [115.2, 75591.08, 3869.18, 484.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Laghman",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Alingar",
      "DISTRICT": "Alishing",
      "AFG_Landcover": [9.36, 355.5, 14.58, 35861.58, 1062.63, 0.0, 491.67, 0.0, 6.3, 1855.8, 15843.33, 0.0, 486.09],
      "ESA_Landcover": [17377.03, 10374.84, 18251.31, 1987.0, 99.19, 8273.45, 0.0, 8.53, 0.0, 0.0],
      "Cropland": [7.88, 54377.78, 2041.88, 562.05]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Almar",
      "AFG_Landcover": [0.0, 1678.32, 2.16, 48.33, 398.97, 14586.75, 17.82, 208.44, 3.51, 19528.47, 142101.81, 59.67, 1987.2],
      "ESA_Landcover": [7.64, 1036.38, 130482.05, 13682.12, 462.62, 38174.48, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [226.95, 124153.8, 855.83, 60622.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Dasht-i Naomid",
      "DISTRICT": "Anar Dara",
      "AFG_Landcover": [0.0, 2827.71, 305.82, 18.36, 3347.19, 76.86, 86.85, 28.17, 2255.22, 957614.04, 79241.22, 13.95, 49989.78],
      "ESA_Landcover": [121.29, 145.18, 1285.05, 4098.33, 65.06, 1065558.44, 0.0, 21.66, 0.0, 0.0],
      "Cropland": [7063.58, 1057587.9, 265.73, 18136.28]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Andar",
      "AFG_Landcover": [0.0, 1594.71, 119.43, 0.0, 21262.23, 170.64, 205.11, 6247.8, 70.65, 42859.08, 14907.06, 0.0, 1046.79],
      "ESA_Landcover": [2.89, 285.32, 367.89, 35345.55, 406.61, 51037.45, 0.0, 131.53, 0.0, 0.0],
      "Cropland": [129.3, 44237.63, 8563.43, 35607.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Andarab",
      "AFG_Landcover": [3685.95, 506.7, 38.61, 12093.84, 3030.39, 3596.4, 1991.7, 0.54, 284.94, 25600.59, 170742.69, 0.0, 1367.55],
      "ESA_Landcover": [1207.67, 4672.68, 144042.51, 9076.58, 161.06, 62643.25, 1577.49, 108.53, 0.45, 3280.58],
      "Cropland": [99.98, 209795.7, 8946.75, 10418.78]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Andkhoy",
      "AFG_Landcover": [0.0, 1452.69, 0.0, 0.0, 1326.42, 4.5, 0.0, 0.0, 43.29, 7705.89, 7450.02, 53702.73, 0.0],
      "ESA_Landcover": [0.0, 328.05, 38443.63, 439.7, 595.49, 34497.45, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [330.6, 63352.2, 212.25, 11224.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Aqcha",
      "AFG_Landcover": [0.0, 1648.35, 4.23, 0.0, 14495.04, 4222.44, 1.53, 1.26, 418.59, 20714.31, 44090.1, 11358.72, 1264.14],
      "ESA_Landcover": [0.22, 1165.83, 34485.07, 13645.62, 2080.77, 49765.16, 0.0, 0.3, 0.0, 0.0],
      "Cropland": [0.15, 61320.08, 12309.23, 28619.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Lower Arghandab",
      "DISTRICT": "Arghandab",
      "AFG_Landcover": [0.0, 2029.41, 30.69, 0.0, 2468.97, 102.78, 2458.53, 1202.49, 292.41, 40113.18, 3592.53, 0.0, 2473.11],
      "ESA_Landcover": [2003.17, 643.42, 87.76, 8421.89, 160.84, 41757.89, 0.0, 91.84, 0.22, 0.0],
      "Cropland": [89.03, 44296.43, 7898.7, 1465.05]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Arghandab",
      "DISTRICT": "Arghandab",
      "AFG_Landcover": [0.0, 1839.87, 125.37, 228.69, 1356.03, 189.45, 3150.99, 8.91, 482.58, 84798.45, 156736.26, 0.0, 2837.43],
      "ESA_Landcover": [367.96, 7698.65, 12387.06, 8636.36, 150.38, 217588.5, 0.0, 274.71, 0.0, 0.0],
      "Cropland": [255.83, 241165.88, 5444.48, 2948.33]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Arghistan",
      "DISTRICT": "Arghistan",
      "AFG_Landcover": [0.0, 1459.62, 11.07, 31.68, 3265.11, 93.69, 352.62, 210.6, 3147.3, 276073.47, 62336.88, 7.83, 11619.54],
      "ESA_Landcover": [151.34, 1412.13, 7505.77, 17558.42, 37.46, 320852.37, 0.0, 174.86, 0.0, 0.0],
      "Cropland": [177.68, 339283.13, 1932.6, 10109.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Asad abad",
      "AFG_Landcover": [1223.64, 617.22, 257.22, 56519.46, 2132.73, 1.44, 168.75, 0.0, 14.49, 2534.67, 4282.11, 0.0, 226.08],
      "ESA_Landcover": [28939.96, 12853.17, 20853.83, 2527.44, 415.66, 2611.5, 0.0, 273.38, 1.26, 87.91],
      "Cropland": [276.38, 66115.95, 2400.15, 526.2]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Arghistan",
      "DISTRICT": "Atghar",
      "AFG_Landcover": [0.0, 541.17, 0.72, 16.47, 1696.68, 0.0, 226.89, 26.1, 4.14, 88291.53, 22183.11, 0.0, 1632.15],
      "ESA_Landcover": [2.37, 757.44, 786.59, 3653.81, 41.99, 106177.82, 0.0, 43.4, 0.0, 0.0],
      "Cropland": [43.2, 110813.33, 303.38, 1527.08]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Samangan",
      "BASIN": "Northern",
      "WATERSHED": "Khulm",
      "DISTRICT": "Aybak",
      "AFG_Landcover": [0.0, 1405.71, 0.99, 4051.62, 8470.98, 14930.91, 882.09, 192.33, 8.19, 14028.57, 104920.02, 0.0, 191.7],
      "ESA_Landcover": [426.57, 6672.73, 44071.97, 21955.2, 1035.64, 78564.24, 0.0, 0.37, 0.0, 0.0],
      "Cropland": [0.0, 69092.25, 4376.25, 80934.68]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Azro",
      "AFG_Landcover": [144.09, 167.49, 4.59, 23440.32, 563.31, 4.41, 204.84, 0.0, 0.0, 3453.03, 54351.63, 0.0, 601.56],
      "ESA_Landcover": [4074.0, 3387.78, 56406.43, 1205.37, 22.18, 17864.95, 3.12, 6.01, 0.0, 36.05],
      "Cropland": [181.2, 83119.88, 406.13, 206.03]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Baghlan City",
      "AFG_Landcover": [0.0, 1126.44, 443.34, 686.7, 13525.11, 4070.88, 298.98, 2.79, 693.45, 8160.48, 48671.73, 0.0, 852.66],
      "ESA_Landcover": [182.2, 3845.73, 43268.54, 23164.8, 1365.47, 8379.23, 0.0, 209.28, 3.41, 0.0],
      "Cropland": [133.73, 26229.53, 17699.93, 37244.7]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Baghlani Jadid",
      "AFG_Landcover": [0.0, 511.29, 551.25, 1905.93, 9943.29, 10528.92, 60.21, 45.0, 876.24, 12010.77, 123260.85, 0.0, 1539.27],
      "ESA_Landcover": [66.25, 5520.03, 113767.05, 19159.05, 251.71, 26329.43, 0.0, 415.96, 52.6, 0.0],
      "Cropland": [355.5, 95844.45, 14136.23, 57029.78]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Bagram",
      "AFG_Landcover": [0.0, 4561.92, 116.64, 67.23, 5442.48, 381.33, 207.99, 2954.52, 418.59, 14179.14, 11928.51, 0.0, 478.53],
      "ESA_Landcover": [172.11, 1132.75, 7004.72, 22409.88, 1478.75, 8685.92, 0.0, 197.04, 0.67, 0.0],
      "Cropland": [163.5, 25806.6, 12186.9, 3378.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Bagrami",
      "AFG_Landcover": [0.0, 11957.76, 100.89, 17.82, 1846.8, 0.9, 114.66, 1.44, 169.74, 7273.26, 10809.9, 0.0, 145.62],
      "ESA_Landcover": [94.81, 811.97, 3293.12, 3718.5, 4963.56, 19647.79, 0.0, 14.99, 0.0, 0.0],
      "Cropland": [12.98, 29236.65, 2690.7, 966.0]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Baharak",
      "AFG_Landcover": [39757.5, 1438.11, 287.64, 14982.39, 7356.06, 3100.14, 4141.17, 0.0, 2423.25, 31357.08, 193756.05, 0.0, 1813.23],
      "ESA_Landcover": [3246.53, 2613.8, 200427.5, 6768.95, 728.88, 85061.89, 1189.94, 612.48, 33.75, 10019.41],
      "Cropland": [641.18, 304745.55, 7989.38, 733.2]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Bak",
      "AFG_Landcover": [0.0, 146.43, 0.0, 12639.78, 1275.75, 0.0, 3.06, 0.0, 0.9, 5028.48, 1941.57, 0.0, 306.63],
      "ESA_Landcover": [2163.78, 10092.78, 5208.3, 1715.4, 129.38, 2870.11, 0.0, 0.37, 0.0, 0.0],
      "Cropland": [1035.53, 17934.53, 1580.03, 1873.43]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Khuspas Rod",
      "DISTRICT": "Bakwa",
      "AFG_Landcover": [0.0, 759.06, 9.63, 5.67, 35419.32, 5.31, 0.0, 1.17, 479.16, 149195.07, 47734.02, 0.0, 11726.46],
      "ESA_Landcover": [2.08, 191.84, 280.94, 26599.46, 108.98, 210961.17, 0.0, 20.33, 0.0, 0.0],
      "Cropland": [20.33, 182821.05, 355.43, 57585.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Farah Rod",
      "DISTRICT": "Bala Buluk",
      "AFG_Landcover": [0.0, 2500.11, 881.01, 1026.09, 20967.75, 440.19, 0.9, 49.23, 927.09, 297239.4, 176035.95, 5.85, 12183.12],
      "ESA_Landcover": [15.95, 2170.39, 2000.05, 28508.49, 301.64, 466488.39, 0.0, 328.42, 0.0, 0.0],
      "Cropland": [286.88, 476610.15, 2567.18, 25834.5]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Balkh",
      "AFG_Landcover": [0.0, 1867.68, 13.86, 0.0, 33571.08, 0.0, 957.87, 90.81, 2027.88, 9515.16, 1580.67, 0.0, 231.39],
      "ESA_Landcover": [481.39, 1730.91, 530.36, 36661.16, 2669.14, 9300.55, 0.0, 37.83, 0.0, 0.0],
      "Cropland": [6.3, 1863.0, 37889.4, 12213.0]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Sari Pul",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Balkhab",
      "AFG_Landcover": [394.74, 675.99, 257.04, 4973.13, 1918.53, 11961.27, 2221.38, 6.84, 422.01, 15597.18, 262891.35, 4.05, 752.67],
      "ESA_Landcover": [1646.41, 4567.93, 162673.95, 4528.98, 129.68, 132411.55, 0.0, 413.66, 0.82, 14.76],
      "Cropland": [411.9, 295995.68, 3564.9, 9784.8]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Bamyan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Bamyan City",
      "AFG_Landcover": [673.38, 1459.26, 12.6, 6.57, 4922.37, 363.33, 1160.19, 0.0, 1616.58, 25916.85, 150550.92, 0.0, 500.13],
      "ESA_Landcover": [511.07, 68.7, 55385.19, 6847.66, 356.91, 124401.91, 379.16, 110.69, 23.81, 323.53],
      "Cropland": [134.25, 185741.48, 2822.85, 1778.93]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Bangi",
      "AFG_Landcover": [0.0, 1510.47, 89.46, 81.45, 1687.05, 24837.48, 390.15, 0.0, 130.68, 4741.56, 24568.47, 0.0, 1016.37],
      "ESA_Landcover": [319.52, 2167.2, 24091.09, 15293.81, 296.08, 18381.51, 0.0, 254.01, 0.07, 0.0],
      "Cropland": [210.83, 20303.4, 4571.4, 36384.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Bar Kunar",
      "AFG_Landcover": [815.58, 61.56, 197.82, 58714.11, 983.25, 2.07, 31.23, 0.0, 0.54, 1177.47, 2988.63, 0.0, 176.85],
      "ESA_Landcover": [39708.13, 6416.42, 16449.71, 1265.76, 87.24, 915.23, 1.04, 298.15, 0.0, 696.83],
      "Cropland": [302.03, 65598.23, 558.75, 99.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Logar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Baraki Barak",
      "AFG_Landcover": [0.0, 1050.66, 0.63, 8.19, 3812.58, 43.74, 1964.52, 306.36, 55.08, 13906.53, 13641.39, 0.0, 236.43],
      "ESA_Landcover": [131.61, 264.84, 3079.46, 14180.28, 332.43, 16919.9, 0.0, 0.22, 0.0, 0.0],
      "Cropland": [0.15, 24264.23, 7715.33, 3311.55]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nuristan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Bargi Matal",
      "AFG_Landcover": [39580.65, 45.18, 112.32, 16140.15, 1171.35, 11.79, 18.18, 0.0, 1080.81, 35059.23, 83398.59, 0.0, 202.05],
      "ESA_Landcover": [4744.86, 607.06, 55665.54, 300.23, 9.72, 97011.77, 17970.89, 497.57, 7.2, 13611.5],
      "Cropland": [10896.75, 180804.15, 701.33, 113.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Bati Kot",
      "AFG_Landcover": [0.0, 1087.02, 702.9, 0.0, 7030.89, 0.0, 1700.37, 0.0, 832.5, 2409.12, 1164.06, 0.0, 509.76],
      "ESA_Landcover": [2473.88, 651.72, 435.18, 7924.18, 1047.06, 2257.18, 0.0, 653.65, 0.0, 0.0],
      "Cropland": [635.85, 4933.95, 9668.78, 373.8]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Bilchiragh",
      "AFG_Landcover": [0.0, 1694.52, 14.85, 1382.22, 1946.61, 69236.1, 1919.43, 178.11, 65.97, 10602.09, 199818.09, 15.21, 364.68],
      "ESA_Landcover": [1047.8, 26851.18, 123238.45, 36120.57, 142.73, 104271.98, 0.0, 15.13, 1.04, 0.0],
      "Cropland": [13.2, 175560.68, 8021.63, 111293.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Middle Hilmand",
      "DISTRICT": "Bughran",
      "AFG_Landcover": [0.0, 1466.46, 78.57, 4614.3, 2501.28, 1956.87, 477.72, 11.25, 32.49, 59141.61, 314788.05, 0.0, 4176.99],
      "ESA_Landcover": [36.05, 30398.31, 80467.33, 13296.43, 129.68, 258171.73, 0.0, 129.38, 0.0, 0.0],
      "Cropland": [115.95, 371506.8, 4058.1, 11139.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Burka",
      "AFG_Landcover": [0.09, 690.57, 0.0, 6092.19, 1269.18, 26109.09, 198.63, 61.92, 91.17, 10992.87, 33964.65, 0.0, 905.76],
      "ESA_Landcover": [118.77, 3421.61, 29306.36, 28432.16, 106.68, 20981.66, 0.0, 0.67, 0.0, 0.0],
      "Cropland": [0.53, 32875.5, 2199.0, 48196.5]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Burmul",
      "AFG_Landcover": [0.0, 1363.14, 7.65, 32810.94, 1721.16, 570.96, 164.34, 0.0, 0.9, 12928.59, 76366.89, 0.0, 1044.18],
      "ESA_Landcover": [12855.99, 6157.59, 44313.0, 4386.02, 132.5, 62256.45, 0.0, 1.63, 0.0, 0.0],
      "Cropland": [5398.8, 122618.48, 1664.25, 1848.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghor",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Bala Murghab",
      "DISTRICT": "Chaghcharan",
      "AFG_Landcover": [107.64, 5822.82, 818.55, 366.48, 11227.59, 141048.09, 1011.96, 3.69, 8131.14, 22126.41, 916926.84, 0.0, 2142.18],
      "ESA_Landcover": [847.13, 25439.2, 410659.35, 36329.63, 1114.2, 638542.34, 0.0, 853.14, 26.34, 0.52],
      "Cropland": [872.48, 1113729.3, 3858.6, 7573.73]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Ab-i-Rustaq",
      "DISTRICT": "Chah Ab",
      "AFG_Landcover": [0.0, 1169.37, 697.32, 2151.0, 726.84, 11122.83, 212.13, 0.0, 660.69, 16679.79, 29089.08, 0.0, 3480.03],
      "ESA_Landcover": [225.23, 709.14, 41216.7, 10334.41, 918.05, 14638.75, 0.0, 1185.34, 2.97, 0.0],
      "Cropland": [1397.03, 41340.9, 2958.38, 24291.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Chahar Asyab",
      "AFG_Landcover": [0.0, 2100.51, 4.77, 27.63, 344.7, 189.54, 596.16, 5.04, 43.83, 7210.17, 14984.01, 0.0, 116.55],
      "ESA_Landcover": [288.14, 387.55, 5572.78, 2908.31, 514.26, 16003.4, 0.0, 0.52, 2.15, 0.0],
      "Cropland": [1.88, 23742.75, 1797.98, 413.4]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Chaharikar",
      "AFG_Landcover": [0.0, 2366.55, 154.89, 219.24, 6809.22, 128.34, 459.18, 835.74, 21.51, 2451.87, 11362.23, 0.0, 200.7],
      "ESA_Landcover": [567.6, 1397.22, 4069.92, 9583.79, 1088.23, 8369.29, 0.0, 175.15, 1.71, 0.0],
      "Cropland": [160.95, 15087.45, 9952.8, 321.23]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Wardak",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Chak",
      "AFG_Landcover": [0.0, 1164.42, 18.36, 23.49, 476.01, 59.04, 3397.23, 0.0, 27.99, 17143.2, 103778.64, 0.0, 436.68],
      "ESA_Landcover": [1088.38, 1203.45, 32811.43, 3999.0, 180.57, 87064.91, 0.0, 20.62, 0.07, 0.15],
      "Cropland": [20.63, 123238.65, 3223.88, 1267.35]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nimroz",
      "BASIN": "Hilmand",
      "WATERSHED": "Khash Rod",
      "DISTRICT": "Chakhansur",
      "AFG_Landcover": [0.0, 2791.35, 125.73, 0.0, 8848.62, 3.78, 0.0, 0.0, 20690.19, 932979.33, 1909.26, 30275.91, 32584.23],
      "ESA_Landcover": [0.0, 540.22, 132.57, 10809.2, 81.01, 976616.11, 0.0, 0.37, 408.47, 0.0],
      "Cropland": [62.85, 966244.05, 2412.83, 30707.55]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Chal",
      "AFG_Landcover": [137.43, 655.47, 65.16, 8899.38, 89.37, 6324.66, 281.16, 0.54, 22.41, 6009.75, 35092.17, 0.0, 1095.03],
      "ESA_Landcover": [488.07, 3529.84, 34352.79, 5210.6, 74.71, 16529.01, 2.23, 91.62, 0.0, 0.3],
      "Cropland": [92.48, 51959.33, 468.75, 8420.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Chamkani",
      "AFG_Landcover": [0.0, 604.62, 1.53, 19233.18, 1152.81, 0.45, 163.62, 0.0, 0.0, 1325.25, 5517.27, 0.0, 341.01],
      "ESA_Landcover": [8355.42, 6371.39, 6837.8, 1624.97, 312.17, 4700.05, 0.0, 0.15, 0.0, 0.0],
      "Cropland": [0.08, 26287.13, 1626.45, 592.58]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Chapa Dara",
      "AFG_Landcover": [2135.61, 21.06, 12.96, 39267.09, 617.13, 0.0, 151.83, 0.0, 0.9, 1219.59, 5308.11, 0.0, 107.19],
      "ESA_Landcover": [25227.54, 5926.05, 14240.3, 789.26, 9.64, 3012.47, 2.45, 25.15, 0.0, 2.82],
      "Cropland": [24.75, 48934.5, 744.83, 70.88]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Chaparhar",
      "AFG_Landcover": [0.0, 3796.56, 0.0, 0.0, 2812.86, 0.0, 49.59, 0.0, 5.49, 7790.67, 4014.0, 0.0, 580.32],
      "ESA_Landcover": [97.04, 254.24, 193.7, 4294.48, 1641.74, 12582.09, 0.0, 1.93, 0.0, 0.0],
      "Cropland": [1.5, 13650.98, 2957.48, 2663.78]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Char Bolak",
      "AFG_Landcover": [0.0, 1067.13, 4.59, 0.0, 26624.97, 0.0, 4.68, 19.98, 637.29, 18340.65, 2068.38, 203.13, 123.39],
      "ESA_Landcover": [4.6, 2740.36, 467.52, 23885.0, 1779.13, 21717.8, 0.0, 44.73, 0.0, 0.0],
      "Cropland": [2.48, 845.85, 17018.55, 33328.43]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nimroz",
      "BASIN": "Hilmand",
      "WATERSHED": "Sistan-Helmand",
      "DISTRICT": "Char Burjak",
      "AFG_Landcover": [0.0, 15630.57, 3969.72, 0.0, 4578.57, 23.22, 0.0, 0.0, 7927.74, 1845732.24, 1458.9, 197106.84, 32358.51],
      "ESA_Landcover": [0.37, 665.23, 14.84, 11756.63, 74.63, 1998650.14, 0.0, 1193.06, 8.68, 0.0],
      "Cropland": [25567.95, 1992244.05, 955.88, 15681.53]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunduz",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Char Dara",
      "AFG_Landcover": [0.0, 1964.07, 373.23, 217.53, 15281.46, 2758.77, 492.57, 2.61, 707.58, 20963.79, 82029.15, 875.97, 730.17],
      "ESA_Landcover": [295.85, 4388.77, 66166.12, 18006.95, 1134.9, 39832.91, 0.0, 332.65, 57.87, 0.0],
      "Cropland": [249.83, 86870.85, 20104.88, 24421.35]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Logar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Charkh",
      "AFG_Landcover": [0.0, 1584.54, 0.36, 3.87, 1235.16, 1275.03, 1509.03, 139.32, 33.57, 18442.44, 56124.72, 15.21, 740.07],
      "ESA_Landcover": [109.28, 209.5, 12020.43, 9530.45, 208.54, 58580.97, 0.0, 0.74, 0.0, 0.0],
      "Cropland": [0.53, 74442.3, 3001.58, 4098.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Charkint",
      "AFG_Landcover": [0.0, 546.84, 0.72, 1456.56, 702.99, 42931.62, 203.49, 2.61, 10.8, 11089.98, 78389.37, 0.0, 371.16],
      "ESA_Landcover": [35.68, 8567.22, 58515.69, 19720.35, 63.8, 52389.71, 0.0, 1.71, 0.0, 0.0],
      "Cropland": [1.28, 67999.58, 489.83, 72332.93]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Chawkay",
      "AFG_Landcover": [0.0, 231.75, 639.9, 19578.42, 1865.16, 0.0, 228.69, 0.0, 790.56, 972.27, 1609.29, 0.0, 313.11],
      "ESA_Landcover": [12777.72, 5374.4, 3375.98, 1960.88, 290.59, 1908.06, 0.0, 686.52, 0.0, 0.0],
      "Cropland": [685.43, 23547.3, 2081.48, 348.0]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Chimtal",
      "AFG_Landcover": [0.0, 1255.05, 16.29, 169.29, 10329.03, 17052.21, 37.53, 234.27, 34.92, 32166.18, 72532.53, 0.81, 978.66],
      "ESA_Landcover": [39.99, 2472.62, 41625.62, 19800.47, 604.84, 73897.27, 0.0, 48.74, 0.22, 0.0],
      "Cropland": [17.93, 86246.55, 9368.78, 44375.33]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Upper Hari Rod",
      "DISTRICT": "Chishti Sharif",
      "AFG_Landcover": [0.0, 871.02, 1644.66, 1749.69, 892.44, 2294.73, 1037.43, 15.12, 593.91, 16347.6, 208219.77, 0.0, 590.76],
      "ESA_Landcover": [384.36, 8671.68, 110274.67, 4594.78, 52.45, 108575.59, 0.0, 1080.07, 3.49, 0.0],
      "Cropland": [886.05, 232075.43, 2361.0, 883.88]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Uruzgan",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Chora",
      "AFG_Landcover": [1.44, 1519.29, 2.88, 2785.59, 1594.44, 508.77, 6192.09, 46.08, 116.46, 30174.39, 285572.61, 0.0, 1802.16],
      "ESA_Landcover": [1584.61, 22439.63, 64098.04, 16099.33, 168.62, 220568.41, 0.0, 47.11, 0.0, 0.0],
      "Cropland": [20.25, 312954.83, 9060.68, 6534.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Dahana-I-Ghori",
      "AFG_Landcover": [13.68, 425.52, 0.0, 8141.31, 4022.01, 24584.22, 133.2, 58.14, 97.65, 8055.54, 89044.65, 0.0, 719.19],
      "ESA_Landcover": [80.27, 12478.6, 82419.38, 20112.2, 70.55, 22755.29, 0.0, 0.0, 0.0, 4.38],
      "Cropland": [0.0, 81972.75, 2106.38, 55355.48]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Registan",
      "DISTRICT": "Daman",
      "AFG_Landcover": [0.0, 5883.84, 56.97, 0.0, 11374.11, 59.67, 11.43, 584.46, 467.64, 133550.73, 9972.9, 271791.54, 8200.89],
      "ESA_Landcover": [23.15, 82.49, 63.8, 32147.32, 1424.45, 392860.12, 0.0, 47.7, 0.0, 0.0],
      "Cropland": [35.18, 402785.55, 1102.2, 27405.98]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Dand Wa Patan",
      "AFG_Landcover": [0.0, 273.96, 0.63, 12745.08, 710.64, 0.0, 29.16, 0.0, 0.09, 1865.97, 2145.24, 0.0, 276.84],
      "ESA_Landcover": [6012.33, 6082.96, 4025.11, 1363.09, 124.48, 2928.42, 0.0, 1.48, 0.0, 0.0],
      "Cropland": [2405.1, 17034.83, 1031.25, 290.4]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Dangam",
      "AFG_Landcover": [27.81, 28.53, 74.7, 24232.5, 851.22, 2.43, 63.0, 0.0, 0.0, 1747.26, 859.86, 0.0, 76.86],
      "ESA_Landcover": [17182.37, 7166.52, 8435.17, 1195.73, 32.05, 303.64, 0.0, 76.93, 0.0, 1.71],
      "Cropland": [6363.08, 27660.0, 620.03, 128.4]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Dara-I-Nur",
      "AFG_Landcover": [74.52, 211.32, 5.85, 20378.7, 1004.4, 0.0, 409.14, 0.0, 19.17, 1989.99, 2998.35, 0.0, 164.97],
      "ESA_Landcover": [9291.28, 5768.26, 8166.62, 1917.34, 220.48, 2028.62, 0.07, 6.16, 0.0, 0.0],
      "Cropland": [7.35, 25225.95, 2145.15, 320.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Dara-i-Pech",
      "AFG_Landcover": [31.05, 252.0, 77.04, 48882.15, 907.29, 0.18, 174.6, 0.0, 2.79, 1268.28, 1052.55, 0.0, 133.83],
      "ESA_Landcover": [26757.26, 11300.31, 13115.57, 1206.71, 93.25, 686.37, 0.0, 49.33, 0.0, 0.15],
      "Cropland": [43.88, 51943.2, 1417.58, 386.7]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Samangan",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Dara-i-Suf",
      "AFG_Landcover": [189.0, 1984.59, 97.56, 2061.81, 3736.71, 108227.88, 994.68, 9.45, 516.96, 27746.73, 258876.63, 0.0, 1498.05],
      "ESA_Landcover": [290.14, 24199.18, 158166.41, 58393.28, 161.73, 172640.39, 0.0, 14.84, 14.47, 0.15],
      "Cropland": [27.6, 224105.7, 2934.53, 191348.63]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Ab-i-Rustaq",
      "DISTRICT": "Darqad",
      "AFG_Landcover": [0.0, 207.09, 6217.2, 0.0, 17405.19, 0.0, 415.53, 0.0, 14591.7, 3594.87, 85.77, 0.0, 2255.13],
      "ESA_Landcover": [2152.14, 2613.42, 10811.65, 21282.33, 808.7, 3796.62, 0.0, 5752.75, 241.48, 0.0],
      "Cropland": [5320.5, 5914.73, 32997.83, 3748.35]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Panj",
      "DISTRICT": "Darwaz",
      "AFG_Landcover": [62749.98, 694.8, 729.18, 18930.69, 1968.84, 2923.92, 738.63, 0.0, 708.3, 42441.3, 159047.1, 0.0, 997.56],
      "ESA_Landcover": [2113.34, 4.53, 172924.15, 496.97, 128.42, 79371.08, 33151.5, 1666.74, 0.3, 17022.05],
      "Cropland": [1670.93, 304597.35, 1753.5, 2222.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Darzab",
      "AFG_Landcover": [0.0, 680.4, 0.0, 219.69, 322.92, 36459.99, 107.64, 68.22, 0.0, 5856.48, 89808.3, 144.99, 351.18],
      "ESA_Landcover": [60.61, 1949.76, 67812.01, 11799.28, 66.32, 55113.3, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 70085.33, 866.78, 67349.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunduz",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Dashti Archi",
      "AFG_Landcover": [0.0, 2953.08, 341.55, 834.84, 20027.43, 7170.39, 289.8, 0.0, 353.52, 15351.57, 44278.38, 0.0, 215.91],
      "ESA_Landcover": [747.5, 1755.69, 46223.81, 31801.02, 1356.27, 12804.28, 0.0, 391.26, 135.69, 0.0],
      "Cropland": [493.8, 30918.45, 24957.75, 39892.58]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Dawlat abad",
      "AFG_Landcover": [0.0, 916.47, 0.54, 0.0, 41639.31, 0.0, 5.4, 16.02, 800.55, 41866.2, 5962.32, 60380.91, 0.0],
      "ESA_Landcover": [37.76, 2937.1, 490.74, 29306.81, 2745.1, 121297.37, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 71702.4, 14604.75, 72228.6]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Dawlat abad",
      "AFG_Landcover": [31.86, 1712.16, 643.95, 0.0, 4875.3, 8948.52, 4.05, 358.56, 3658.05, 18405.18, 171519.3, 60325.2, 397.71],
      "ESA_Landcover": [1.56, 2263.12, 191507.23, 10056.8, 177.01, 74253.44, 0.0, 3.78, 0.0, 0.0],
      "Cropland": [394.73, 198244.2, 4547.93, 78130.35]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Laghman",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Alingar",
      "DISTRICT": "Dawlat Shah",
      "AFG_Landcover": [3730.41, 43.02, 22.05, 42770.25, 592.02, 3.87, 232.65, 0.0, 44.28, 4565.34, 34734.78, 0.0, 544.05],
      "ESA_Landcover": [21229.81, 8806.77, 33566.27, 876.43, 13.35, 21200.73, 157.87, 78.71, 0.07, 2172.46],
      "Cropland": [78.9, 86990.1, 1349.4, 651.68]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Daykundi",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Day Kundi",
      "AFG_Landcover": [1.89, 2377.62, 21.15, 904.77, 4980.51, 9920.88, 4677.39, 0.0, 1539.27, 40943.25, 742266.9, 2.7, 1842.66],
      "ESA_Landcover": [1676.53, 4552.94, 409074.07, 12028.89, 509.06, 377968.47, 0.0, 290.44, 1.56, 0.07],
      "Cropland": [293.25, 808716.98, 4000.58, 1935.6]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Arghandab",
      "DISTRICT": "Daychopan",
      "AFG_Landcover": [0.63, 651.69, 0.18, 211.32, 2967.3, 915.03, 3372.48, 0.0, 227.97, 16461.81, 270613.35, 0.0, 1876.95],
      "ESA_Landcover": [344.96, 12725.57, 62777.23, 12049.07, 95.77, 204049.56, 0.0, 1.71, 0.0, 0.0],
      "Cropland": [1.13, 282564.6, 7458.9, 5224.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Wardak",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Daymirdad",
      "AFG_Landcover": [0.99, 464.13, 0.0, 13.23, 512.37, 301.95, 1621.35, 0.0, 7.38, 3147.21, 88021.98, 0.0, 17.46],
      "ESA_Landcover": [404.02, 382.43, 31321.77, 3646.61, 126.12, 58278.96, 0.0, 1.26, 0.22, 0.0],
      "Cropland": [1.28, 92929.88, 1997.4, 267.23]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Dih Bala",
      "AFG_Landcover": [452.61, 824.58, 2.61, 21939.66, 1044.27, 23.22, 247.86, 0.09, 5.04, 4578.39, 22558.68, 0.0, 507.33],
      "ESA_Landcover": [9295.58, 4678.24, 19088.65, 2144.57, 158.54, 17999.6, 54.16, 17.88, 0.0, 197.71],
      "Cropland": [1700.33, 49802.7, 1796.33, 921.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Dih Sabz",
      "AFG_Landcover": [0.0, 14547.51, 76.95, 35.37, 1611.99, 95.58, 61.2, 1577.88, 140.04, 21690.27, 26684.64, 0.0, 361.17],
      "ESA_Landcover": [101.41, 1575.27, 5745.56, 14317.6, 4883.0, 40529.74, 0.0, 76.19, 0.0, 0.0],
      "Cropland": [76.13, 59719.05, 3409.05, 4759.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Dihdadi",
      "AFG_Landcover": [0.0, 3571.11, 4.05, 406.44, 10129.05, 1620.36, 219.15, 91.17, 104.13, 5564.88, 9320.76, 0.0, 236.79],
      "ESA_Landcover": [247.71, 1372.44, 6993.74, 11706.77, 2565.13, 9276.51, 0.0, 22.78, 0.0, 0.0],
      "Cropland": [3.45, 6954.53, 10937.55, 14642.93]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Uruzgan",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Dihrawud",
      "AFG_Landcover": [0.0, 1881.99, 3584.25, 1300.59, 7833.15, 245.43, 617.49, 99.27, 1118.61, 22577.04, 151569.72, 0.0, 3206.34],
      "ESA_Landcover": [92.81, 6593.65, 23796.87, 17492.76, 230.72, 139708.04, 0.0, 2141.45, 0.0, 0.0],
      "Cropland": [2019.45, 172875.75, 8685.3, 8565.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Dihyak",
      "AFG_Landcover": [0.0, 928.8, 59.04, 0.36, 6026.31, 37.71, 453.6, 943.47, 48.51, 25841.34, 30431.16, 0.0, 36.09],
      "ESA_Landcover": [53.27, 182.65, 3253.13, 18988.06, 265.66, 41444.82, 0.0, 67.81, 0.0, 0.0],
      "Cropland": [70.43, 49255.2, 2540.63, 13096.58]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Dila",
      "AFG_Landcover": [0.0, 907.02, 63.81, 0.0, 34713.0, 24.75, 34.83, 368.64, 2187.81, 61653.96, 46163.25, 0.0, 2686.5],
      "ESA_Landcover": [0.22, 125.37, 336.29, 33450.62, 20.62, 112099.87, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 126258.15, 1554.15, 19821.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Registan-i Sedi",
      "DISTRICT": "Disho",
      "AFG_Landcover": [0.0, 1699.29, 504.54, 0.0, 3798.54, 212.58, 0.0, 0.0, 1045.8, 456609.51, 4572.81, 449914.23, 16222.05],
      "ESA_Landcover": [0.07, 259.43, 19.81, 5523.07, 3.34, 888670.98, 0.0, 281.98, 0.82, 0.0],
      "Cropland": [9097.73, 888040.95, 360.9, 7071.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Doshi",
      "AFG_Landcover": [0.63, 1714.05, 426.24, 11926.44, 4843.17, 4422.78, 288.36, 0.27, 623.52, 15046.29, 132448.95, 0.0, 2150.64],
      "ESA_Landcover": [167.14, 7944.36, 110170.22, 10984.05, 458.02, 46655.65, 0.0, 524.87, 0.0, 0.0],
      "Cropland": [410.55, 154590.23, 4374.83, 19465.88]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Dur Baba",
      "AFG_Landcover": [0.0, 681.39, 3.78, 14589.36, 20.79, 0.27, 0.9, 0.0, 0.0, 2968.92, 16530.66, 0.0, 1293.84],
      "ESA_Landcover": [1991.37, 5934.29, 15319.11, 70.25, 119.07, 12917.04, 0.0, 1.04, 0.0, 0.0],
      "Cropland": [348.45, 35924.78, 11.4, 470.63]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Farah Rod",
      "DISTRICT": "Farah City",
      "AFG_Landcover": [0.0, 4290.03, 358.56, 0.0, 13842.36, 11.7, 20.7, 531.72, 1369.26, 218979.27, 13636.44, 1.35, 11781.72],
      "ESA_Landcover": [193.77, 118.03, 211.21, 19099.93, 2085.29, 234709.96, 0.0, 9.5, 0.52, 0.0],
      "Cropland": [9.53, 226720.58, 5176.5, 27343.05]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Farkhar",
      "AFG_Landcover": [2467.98, 934.83, 117.99, 23916.69, 748.53, 6610.41, 987.12, 0.0, 47.16, 24495.66, 83831.67, 0.0, 1391.76],
      "ESA_Landcover": [1250.63, 3161.51, 97625.81, 6048.53, 319.74, 39291.72, 1422.81, 321.08, 0.0, 166.47],
      "Cropland": [266.7, 140521.43, 2767.28, 7691.48]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Upper Hari Rod",
      "DISTRICT": "Farsi",
      "AFG_Landcover": [0.0, 569.07, 12.06, 593.28, 1062.9, 24956.1, 588.87, 1.08, 35.46, 8508.24, 172753.11, 0.27, 366.93],
      "ESA_Landcover": [116.32, 11671.54, 44606.56, 17729.49, 33.31, 133100.22, 0.0, 7.42, 0.0, 0.0],
      "Cropland": [6.3, 206019.45, 992.93, 2521.05]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Fayz abad",
      "AFG_Landcover": [0.0, 689.94, 0.0, 13.14, 17581.14, 4263.21, 0.63, 1.62, 244.62, 24045.84, 47105.46, 1669.41, 445.41],
      "ESA_Landcover": [1.34, 2281.66, 26351.02, 12910.22, 843.87, 56510.81, 0.0, 12.31, 0.0, 0.0],
      "Cropland": [0.83, 43810.35, 6802.05, 49385.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Fayzabad",
      "AFG_Landcover": [1221.3, 5758.74, 929.07, 6306.03, 8026.38, 44314.38, 2218.86, 0.36, 228.6, 69353.37, 152888.04, 0.0, 2614.95],
      "ESA_Landcover": [1146.17, 9012.12, 195426.77, 35581.83, 1439.28, 60796.02, 0.0, 1034.3, 0.0, 0.07],
      "Cropland": [961.05, 245360.55, 12186.9, 49265.03]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Gardez",
      "AFG_Landcover": [0.0, 2949.93, 1.8, 1587.42, 2238.57, 78.66, 1810.62, 0.0, 62.01, 13952.43, 48596.49, 0.0, 421.83],
      "ESA_Landcover": [340.22, 338.36, 21661.5, 9414.95, 2009.03, 37431.44, 0.0, 7.49, 0.0, 1.63],
      "Cropland": [7.35, 64718.03, 2705.33, 4554.68]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Chagay",
      "DISTRICT": "Garmser",
      "AFG_Landcover": [0.0, 6208.38, 1011.96, 0.0, 21644.19, 492.93, 0.54, 306.63, 3919.32, 857581.65, 17425.53, 484609.41, 50562.54],
      "ESA_Landcover": [11.8, 157.94, 509.21, 28680.09, 492.22, 1355141.34, 0.0, 787.63, 0.0, 0.0],
      "Cropland": [9293.4, 1355883.83, 21183.08, 14628.53]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Gayan",
      "AFG_Landcover": [0.0, 316.98, 0.36, 9162.45, 252.36, 0.0, 15.3, 0.0, 0.0, 1916.37, 10177.38, 0.0, 104.94],
      "ESA_Landcover": [3480.66, 730.88, 7242.04, 291.25, 24.26, 10059.1, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [174.68, 21594.08, 239.33, 58.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Tarnak Rod",
      "DISTRICT": "Gelan",
      "AFG_Landcover": [0.0, 840.06, 12.15, 0.0, 14230.44, 101.79, 87.12, 3708.18, 32.31, 32546.25, 48763.62, 0.0, 1640.25],
      "ESA_Landcover": [0.3, 231.02, 206.68, 25330.74, 246.67, 74160.7, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 80533.35, 1380.53, 19366.35]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Ghazni",
      "AFG_Landcover": [0.0, 5308.83, 0.27, 0.0, 3043.17, 92.88, 1005.39, 1128.06, 0.72, 8903.43, 11626.38, 0.0, 723.96],
      "ESA_Landcover": [21.14, 294.37, 407.65, 9248.55, 2221.94, 19390.74, 0.0, 2.74, 0.0, 0.0],
      "Cropland": [2.7, 22104.83, 4940.93, 4884.23]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Middle Hilmand",
      "DISTRICT": "Ghorak",
      "AFG_Landcover": [0.0, 797.94, 0.09, 136.35, 1215.9, 104.67, 10.53, 20.34, 0.54, 44444.43, 85455.63, 0.0, 11375.28],
      "ESA_Landcover": [2.0, 6673.1, 3224.64, 3607.81, 13.21, 126232.38, 0.0, 1.85, 0.0, 0.0],
      "Cropland": [0.9, 124088.1, 65.18, 17136.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Ghorband",
      "AFG_Landcover": [3665.88, 413.01, 58.41, 324.81, 363.24, 2.07, 4251.78, 0.0, 409.41, 24538.95, 101653.47, 0.0, 365.67],
      "ESA_Landcover": [3436.3, 1860.51, 48938.43, 1500.12, 79.82, 81100.95, 88.06, 118.85, 7.12, 225.82],
      "Cropland": [126.9, 134936.63, 3194.55, 608.48]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badghis",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Bala Murghab",
      "DISTRICT": "Ghormach",
      "AFG_Landcover": [0.0, 792.72, 0.0, 4233.78, 2437.83, 24511.23, 37.8, 28.53, 59.22, 11735.01, 131646.6, 97.92, 1788.48],
      "ESA_Landcover": [156.46, 2385.01, 120711.3, 21226.62, 107.57, 35042.8, 0.0, 7.2, 0.07, 0.0],
      "Cropland": [1.43, 108705.53, 2468.48, 70432.8]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Hilmand",
      "WATERSHED": "Dasht-i Naomid",
      "DISTRICT": "Ghoryan",
      "AFG_Landcover": [0.0, 4452.3, 3654.36, 7.56, 16866.81, 250.47, 0.54, 357.57, 27525.24, 517431.69, 67053.24, 0.9, 10795.5],
      "ESA_Landcover": [9.27, 1185.12, 1753.98, 25888.32, 491.33, 611593.61, 0.0, 23.81, 0.52, 0.0],
      "Cropland": [3371.48, 587162.78, 5221.65, 52222.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Giro",
      "AFG_Landcover": [0.0, 956.07, 1.08, 2.79, 12868.38, 64.98, 17.73, 1123.2, 2.43, 29015.01, 40919.67, 0.0, 1830.69],
      "ESA_Landcover": [0.15, 192.29, 736.96, 11717.53, 79.38, 72931.89, 0.0, 0.15, 0.0, 0.0],
      "Cropland": [0.15, 71703.45, 1055.63, 13837.28]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Daykundi",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Gizab",
      "AFG_Landcover": [0.0, 818.73, 545.94, 10851.21, 1224.81, 667.89, 4322.88, 1.53, 112.14, 14222.07, 326547.36, 0.0, 2736.72],
      "ESA_Landcover": [1836.62, 18184.92, 145049.28, 6170.94, 167.07, 186218.14, 0.0, 606.54, 0.0, 0.0],
      "Cropland": [583.88, 354858.9, 5684.7, 1032.6]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Gomal",
      "DISTRICT": "Gomal",
      "AFG_Landcover": [0.0, 859.86, 9.27, 20244.24, 459.45, 0.45, 3.6, 0.0, 39.15, 124196.49, 252735.48, 0.0, 3001.95],
      "ESA_Landcover": [2002.35, 4788.71, 69812.07, 1040.16, 11.13, 316071.98, 0.0, 19.88, 0.0, 0.0],
      "Cropland": [358.95, 397559.55, 68.48, 80.55]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Goshta",
      "AFG_Landcover": [0.0, 1069.11, 12.42, 5889.24, 975.6, 0.0, 14.58, 0.0, 19.98, 7140.78, 25737.84, 0.0, 1196.91],
      "ESA_Landcover": [1052.18, 3279.24, 13029.88, 1533.05, 313.21, 22935.05, 0.0, 12.31, 0.0, 0.0],
      "Cropland": [8.93, 41760.75, 567.53, 280.5]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Gul dara",
      "AFG_Landcover": [226.44, 112.68, 0.36, 226.53, 192.78, 77.67, 804.15, 157.23, 291.96, 2194.47, 7874.19, 0.0, 85.5],
      "ESA_Landcover": [532.95, 1038.16, 3082.35, 1791.37, 45.62, 5839.48, 0.0, 2.23, 0.0, 0.22],
      "Cropland": [2.18, 10648.5, 1708.05, 107.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Farah Rod",
      "DISTRICT": "Gulistan",
      "AFG_Landcover": [1.35, 1670.67, 625.86, 8866.98, 2444.49, 423.09, 259.02, 155.52, 476.55, 281944.17, 393390.0, 1.62, 15650.64],
      "ESA_Landcover": [61.2, 19505.58, 39723.71, 7365.04, 29.6, 622047.46, 0.0, 424.12, 0.0, 0.0],
      "Cropland": [422.03, 684537.0, 2179.88, 9579.23]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Kushk wa Kashan Rod",
      "DISTRICT": "Gulran",
      "AFG_Landcover": [0.0, 4593.96, 161.73, 201.69, 2542.23, 54264.24, 6.84, 125.73, 2605.68, 194389.56, 254204.73, 56182.86, 8343.54],
      "ESA_Landcover": [4.53, 6461.9, 91858.66, 40148.8, 48.81, 443433.39, 0.0, 95.48, 0.0, 0.0],
      "Cropland": [5008.8, 310479.38, 1843.43, 271104.53]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Gurbuz",
      "AFG_Landcover": [0.0, 595.62, 0.72, 10733.22, 2349.18, 0.0, 5.22, 0.0, 0.0, 1827.81, 11525.13, 0.0, 486.72],
      "ESA_Landcover": [513.66, 4128.53, 10331.74, 3125.6, 200.38, 9125.62, 0.0, 1.04, 0.0, 0.0],
      "Cropland": [241.13, 24364.5, 2927.55, 192.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Lower Hari Rod",
      "DISTRICT": "Guzara",
      "AFG_Landcover": [0.0, 5538.24, 47.79, 36.18, 12224.7, 1752.12, 762.48, 5598.72, 171.18, 89970.48, 56655.63, 0.0, 3190.95],
      "ESA_Landcover": [357.21, 1720.37, 2003.1, 28282.97, 1279.41, 140417.26, 0.0, 3.12, 0.0, 0.0],
      "Cropland": [2.03, 128258.7, 16579.28, 31131.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunduz",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Hazrati Imam",
      "AFG_Landcover": [0.0, 3651.21, 7716.33, 28.08, 35748.9, 37.26, 1411.83, 0.45, 16159.5, 39151.35, 43138.17, 11268.36, 1215.72],
      "ESA_Landcover": [2331.74, 9051.95, 51309.78, 46233.09, 4710.81, 45028.08, 0.0, 6704.86, 750.02, 0.0],
      "Cropland": [6265.28, 88004.7, 59381.78, 14290.5]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Samangan",
      "BASIN": "Northern",
      "WATERSHED": "Khulm",
      "DISTRICT": "Hazrati Sultan",
      "AFG_Landcover": [0.0, 938.43, 4.86, 1643.58, 11495.16, 4686.03, 13.77, 90.81, 141.03, 9938.43, 80720.73, 0.0, 150.66],
      "ESA_Landcover": [18.25, 4344.78, 46132.27, 18543.68, 131.68, 43672.63, 0.0, 1.85, 0.37, 0.0],
      "Cropland": [1.2, 77919.53, 4824.38, 31342.43]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Lower Hari Rod",
      "DISTRICT": "Hirat City",
      "AFG_Landcover": [0.0, 2593.98, 0.0, 0.0, 183.06, 0.0, 4.14, 203.22, 10.53, 376.11, 27.9, 0.0, 69.21],
      "ESA_Landcover": [36.87, 25.15, 7.2, 462.55, 2142.42, 767.23, 0.0, 0.3, 0.0, 0.0],
      "Cropland": [0.15, 2254.95, 435.38, 786.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Wardak",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Hisa-i-Awali Bihsud",
      "AFG_Landcover": [588.78, 162.81, 9.54, 20.79, 1912.77, 262.35, 86.76, 0.0, 472.41, 4468.05, 85436.82, 0.0, 118.44],
      "ESA_Landcover": [70.77, 42.95, 66958.13, 3033.98, 82.87, 23375.71, 105.27, 12.61, 2.08, 256.02],
      "Cropland": [14.85, 94741.43, 110.03, 105.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Panjshir",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Hisa-I-Awali Panjsher",
      "AFG_Landcover": [18531.45, 246.78, 303.21, 1791.36, 1400.22, 74.52, 705.15, 0.0, 1799.82, 26726.04, 164503.08, 0.09, 578.97],
      "ESA_Landcover": [421.75, 155.35, 80985.3, 521.82, 36.43, 103734.28, 6963.99, 746.53, 0.07, 26620.68],
      "Cropland": [751.58, 220280.78, 975.75, 598.28]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Panjshir",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Hisa-I-Duwum Panjsher",
      "AFG_Landcover": [4989.78, 101.07, 78.75, 2294.19, 309.24, 0.72, 510.03, 0.0, 63.81, 5072.76, 57615.3, 0.0, 330.03],
      "ESA_Landcover": [413.29, 193.03, 32579.3, 264.77, 27.52, 33353.14, 646.75, 310.39, 0.45, 4444.78],
      "Cropland": [314.7, 72219.98, 474.15, 17.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Hisarak",
      "AFG_Landcover": [0.9, 927.36, 0.27, 13961.07, 1825.02, 127.17, 601.02, 0.0, 1.17, 6540.03, 48481.2, 0.54, 488.07],
      "ESA_Landcover": [2841.84, 5583.98, 32719.74, 3569.68, 182.79, 28109.74, 0.0, 1.04, 0.0, 2.23],
      "Cropland": [1.05, 70516.43, 1957.13, 1344.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Lower Hari Rod",
      "DISTRICT": "Injil",
      "AFG_Landcover": [0.0, 11232.99, 213.93, 93.06, 19515.87, 497.43, 688.95, 4566.78, 983.7, 92316.96, 22608.0, 0.0, 6042.69],
      "ESA_Landcover": [452.24, 1070.95, 3985.57, 43311.27, 3771.99, 104986.17, 0.0, 99.34, 0.37, 0.0],
      "Cropland": [44.1, 76105.13, 29487.98, 53772.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Ishkamish",
      "AFG_Landcover": [3.6, 1133.37, 2.79, 4145.94, 3401.64, 21381.03, 452.16, 3.15, 280.08, 10580.58, 21397.95, 0.0, 929.34],
      "ESA_Landcover": [339.7, 3730.59, 19914.64, 27207.86, 427.98, 13771.22, 0.0, 3.71, 6.53, 0.0],
      "Cropland": [2.7, 24439.43, 6373.05, 35306.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Panj",
      "DISTRICT": "Ishkashim",
      "AFG_Landcover": [38754.72, 254.79, 569.88, 36.81, 2559.78, 287.28, 254.34, 0.0, 1306.89, 30966.57, 79578.9, 0.0, 2173.77],
      "ESA_Landcover": [381.32, 218.77, 36852.34, 1714.29, 98.74, 111113.49, 4738.19, 1180.82, 58.9, 5524.93],
      "Cropland": [1372.13, 158019.45, 1397.4, 2870.48]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Istalif",
      "AFG_Landcover": [0.0, 119.61, 0.0, 144.09, 175.68, 63.72, 245.16, 83.34, 9.45, 1187.55, 9443.43, 0.0, 55.89],
      "ESA_Landcover": [459.73, 683.99, 3791.05, 986.38, 34.87, 5659.35, 0.0, 0.07, 0.0, 0.07],
      "Cropland": [0.08, 10456.65, 1175.4, 110.78]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Jabalussaraj",
      "AFG_Landcover": [0.0, 639.09, 27.36, 278.28, 3402.09, 0.72, 746.1, 2.07, 14.22, 1071.27, 12248.46, 0.0, 120.33],
      "ESA_Landcover": [863.38, 1023.69, 5741.48, 3612.56, 211.28, 7241.07, 0.0, 56.97, 0.0, 0.0],
      "Cropland": [46.13, 14053.58, 4782.75, 75.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Jadran",
      "AFG_Landcover": [0.0, 102.78, 2.7, 27366.66, 308.43, 0.18, 69.93, 0.0, 0.0, 1636.47, 13995.99, 0.0, 296.55],
      "ESA_Landcover": [6350.69, 1910.44, 24716.77, 453.05, 59.65, 9871.63, 0.0, 0.0, 0.0, 0.3],
      "Cropland": [0.0, 43400.03, 362.85, 74.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Jaghatu",
      "AFG_Landcover": [0.45, 2195.55, 57.69, 11.07, 2642.04, 2185.83, 2805.39, 4.05, 95.58, 20197.35, 189278.28, 0.72, 1649.97],
      "ESA_Landcover": [39.69, 1754.94, 61328.9, 20875.79, 269.37, 135366.23, 0.0, 31.08, 0.82, 0.0],
      "Cropland": [31.05, 198768.6, 7774.8, 15504.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Arghandab",
      "DISTRICT": "Jaghuri",
      "AFG_Landcover": [0.0, 1595.52, 0.0, 43.83, 1466.46, 173.61, 3642.39, 0.45, 135.72, 10880.19, 158770.98, 0.0, 1871.73],
      "ESA_Landcover": [623.01, 3332.58, 49027.38, 9548.7, 469.82, 113310.95, 0.0, 2.6, 0.0, 0.0],
      "Cropland": [2.63, 166585.43, 6763.35, 4896.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Jaji",
      "AFG_Landcover": [0.9, 218.61, 0.0, 22107.33, 1817.19, 3.24, 502.65, 0.0, 1.17, 2737.71, 19536.48, 0.0, 551.25],
      "ESA_Landcover": [10818.84, 6282.89, 23994.65, 2838.21, 149.41, 5005.85, 0.0, 4.01, 0.0, 6.16],
      "Cropland": [1712.25, 45027.98, 2127.98, 775.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Jaji Maydan",
      "AFG_Landcover": [0.0, 317.34, 0.0, 20342.07, 951.48, 0.45, 10.53, 0.0, 12.69, 6688.44, 1296.81, 0.0, 320.04],
      "ESA_Landcover": [2508.45, 16578.86, 12157.68, 1946.79, 71.37, 1406.27, 0.0, 0.15, 0.0, 0.0],
      "Cropland": [4890.38, 27996.9, 873.45, 1287.38]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Jalal abad",
      "AFG_Landcover": [0.0, 4081.95, 293.22, 0.0, 2309.67, 0.0, 419.31, 0.0, 165.51, 6146.91, 2477.7, 0.0, 738.18],
      "ESA_Landcover": [708.7, 160.76, 62.91, 2304.59, 3915.09, 9308.19, 0.0, 215.66, 0.0, 0.0],
      "Cropland": [215.55, 13347.23, 2402.03, 893.7]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Wardak",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Jalrez",
      "AFG_Landcover": [814.68, 159.03, 0.18, 102.69, 203.58, 0.9, 2128.41, 0.0, 10.62, 8460.99, 107314.65, 0.0, 187.65],
      "ESA_Landcover": [1330.38, 465.29, 69934.85, 1123.1, 59.13, 46900.02, 0.0, 9.94, 0.0, 16.02],
      "Cropland": [10.05, 119839.05, 1243.05, 60.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Jani Khel",
      "AFG_Landcover": [0.0, 94.95, 0.63, 28848.6, 324.99, 0.0, 93.33, 0.0, 0.0, 963.99, 4885.02, 0.0, 53.64],
      "ESA_Landcover": [11506.84, 7063.77, 14223.61, 726.95, 31.23, 1461.32, 0.0, 0.45, 0.0, 8.09],
      "Cropland": [0.45, 34934.33, 394.5, 83.93]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badghis",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Bala Murghab",
      "DISTRICT": "Jawand",
      "AFG_Landcover": [0.45, 1188.9, 203.85, 11953.26, 2034.99, 77069.16, 515.79, 2.43, 738.45, 12714.66, 688343.94, 0.0, 660.6],
      "ESA_Landcover": [301.71, 66815.62, 401690.85, 54469.36, 59.35, 275188.59, 0.0, 340.66, 1.19, 0.0],
      "Cropland": [298.2, 686881.95, 2156.4, 118296.83]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Jurm",
      "AFG_Landcover": [29320.92, 1528.11, 253.35, 8291.79, 4639.23, 1245.15, 2141.37, 0.0, 594.9, 46756.35, 255314.79, 0.0, 878.49],
      "ESA_Landcover": [1199.51, 2716.39, 205336.98, 8075.67, 368.33, 129570.23, 10329.81, 498.16, 0.0, 2913.51],
      "Cropland": [502.2, 356880.3, 6344.78, 1244.48]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Kabul City",
      "AFG_Landcover": [0.0, 14140.08, 5.76, 17.37, 308.34, 4.32, 193.86, 0.0, 37.26, 1257.84, 4974.93, 0.0, 114.21],
      "ESA_Landcover": [376.72, 565.07, 3164.85, 801.43, 11033.24, 5168.98, 0.0, 13.35, 0.0, 0.0],
      "Cropland": [13.35, 20680.73, 419.1, 243.83]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Kahmard",
      "AFG_Landcover": [54.27, 809.46, 16.47, 124.02, 2585.7, 3264.3, 1296.63, 79.56, 404.82, 18059.49, 327471.3, 0.0, 425.16],
      "ESA_Landcover": [432.73, 3631.92, 124268.75, 7366.45, 94.29, 222873.51, 0.0, 37.46, 1.11, 9.94],
      "Cropland": [35.18, 350489.03, 4933.95, 7194.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Middle Hilmand",
      "DISTRICT": "Kajaki",
      "AFG_Landcover": [0.0, 2062.8, 3142.53, 479.7, 16980.66, 600.48, 62.01, 277.11, 369.0, 58117.77, 88908.03, 0.0, 3246.48],
      "ESA_Landcover": [36.28, 7020.37, 9097.06, 30361.66, 167.36, 120812.49, 0.0, 2746.14, 0.0, 0.0],
      "Cropland": [2746.95, 123251.93, 3638.33, 42471.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Kalafgan",
      "AFG_Landcover": [0.63, 1537.47, 103.32, 672.3, 1061.55, 17700.66, 481.86, 0.0, 51.48, 9839.97, 40108.5, 0.0, 1442.34],
      "ESA_Landcover": [244.67, 1352.34, 35833.1, 15086.17, 397.49, 22167.89, 0.0, 223.97, 0.0, 0.0],
      "Cropland": [203.48, 48929.1, 3092.1, 23905.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Kalakan",
      "AFG_Landcover": [0.0, 271.35, 2.7, 0.0, 176.85, 1.98, 1.44, 749.97, 6.57, 1606.14, 1127.07, 0.0, 95.58],
      "ESA_Landcover": [2.23, 89.25, 110.54, 2439.9, 58.61, 1364.58, 0.0, 1.41, 0.0, 0.0],
      "Cropland": [1.35, 2073.75, 1913.63, 122.48]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Amu Darya",
      "WATERSHED": "Dasht-i Shortepa",
      "DISTRICT": "Kaldar",
      "AFG_Landcover": [0.0, 959.04, 6065.55, 0.0, 3023.46, 0.0, 0.0, 0.0, 5475.51, 9634.41, 141.57, 57626.91, 561.6],
      "ESA_Landcover": [12.39, 4110.65, 996.61, 8329.53, 938.53, 69316.88, 0.0, 5749.79, 15.36, 0.0],
      "Cropland": [7574.85, 72262.5, 6340.28, 4272.53]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Kama",
      "AFG_Landcover": [0.0, 763.38, 329.85, 326.34, 5513.4, 0.0, 496.8, 0.0, 194.4, 4122.63, 12312.9, 0.0, 513.09],
      "ESA_Landcover": [1196.84, 359.28, 4702.21, 4956.74, 1007.67, 12159.53, 0.0, 246.89, 0.0, 0.0],
      "Cropland": [245.63, 20691.98, 3881.1, 80.33]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nuristan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Kamdesh",
      "AFG_Landcover": [17919.9, 7.83, 9.72, 48156.75, 367.38, 8.64, 3.78, 0.0, 1.8, 4943.25, 40669.92, 0.0, 93.15],
      "ESA_Landcover": [32244.72, 2759.27, 46118.84, 169.89, 6.23, 19533.77, 656.62, 245.18, 4.6, 16060.97],
      "Cropland": [4209.3, 114639.23, 215.7, 26.63]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Lower Arghandab",
      "DISTRICT": "Kandahar City",
      "AFG_Landcover": [0.0, 13329.45, 21.33, 0.0, 11589.75, 73.53, 632.79, 6203.25, 452.79, 27584.46, 1892.52, 60.21, 1114.02],
      "ESA_Landcover": [431.39, 317.74, 101.04, 27885.33, 4722.98, 27493.93, 0.0, 43.25, 0.0, 0.0],
      "Cropland": [34.28, 29796.38, 15308.48, 16526.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nimroz",
      "BASIN": "Hilmand",
      "WATERSHED": "Khash Rod",
      "DISTRICT": "Kang",
      "AFG_Landcover": [0.0, 666.18, 1076.13, 0.0, 450.9, 0.0, 0.0, 0.0, 99967.32, 28732.23, 544.5, 0.0, 1568.07],
      "ESA_Landcover": [0.0, 7909.49, 1864.29, 27661.88, 4.9, 81993.04, 0.0, 97.85, 7860.97, 0.0],
      "Cropland": [724.2, 64833.98, 6834.53, 56397.0]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Lower Hari Rod",
      "DISTRICT": "Karukh",
      "AFG_Landcover": [0.0, 1684.35, 5.22, 1388.07, 4097.52, 19563.21, 684.81, 472.14, 102.69, 37410.39, 122913.9, 0.0, 7036.2],
      "ESA_Landcover": [89.84, 13478.56, 44521.69, 38043.17, 129.16, 98145.48, 0.0, 14.84, 0.0, 0.0],
      "Cropland": [8.1, 120853.28, 4478.55, 71215.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Khaki Jabar",
      "AFG_Landcover": [0.0, 722.25, 4.41, 1016.55, 252.27, 5.67, 290.61, 0.45, 25.11, 3893.58, 58512.15, 1.8, 269.1],
      "ESA_Landcover": [57.2, 243.11, 26450.05, 1350.56, 94.36, 36895.44, 0.0, 2.67, 0.0, 1.11],
      "Cropland": [2.7, 65237.4, 370.43, 197.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Farah Rod",
      "DISTRICT": "Khaki Safed",
      "AFG_Landcover": [0.0, 591.93, 42.57, 10.98, 19206.09, 0.0, 0.0, 0.99, 3.33, 63075.33, 35102.79, 0.0, 1877.49],
      "ESA_Landcover": [3.12, 180.94, 294.82, 28100.1, 24.04, 88014.2, 0.0, 5.34, 0.0, 0.0],
      "Cropland": [5.33, 90537.98, 206.63, 27151.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Lower Arghandab",
      "DISTRICT": "Khakrez",
      "AFG_Landcover": [0.0, 1229.4, 2.7, 17.55, 5821.02, 333.63, 128.25, 423.45, 137.88, 65429.55, 47425.5, 0.0, 4452.48],
      "ESA_Landcover": [47.55, 2422.54, 1086.23, 15878.77, 33.83, 102563.55, 0.0, 1.56, 0.0, 0.0],
      "Cropland": [1.35, 109999.43, 933.98, 12441.45]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Khamyab",
      "AFG_Landcover": [0.0, 59.94, 586.71, 0.0, 1621.26, 0.0, 1.98, 0.0, 702.18, 7773.48, 194.04, 66213.63, 94.32],
      "ESA_Landcover": [32.64, 562.48, 93.99, 2421.65, 127.6, 77296.1, 0.0, 1004.18, 9.2, 0.0],
      "Cropland": [1793.93, 75746.55, 1732.13, 3169.2]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunduz",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Khan Abad",
      "AFG_Landcover": [0.0, 2537.82, 289.26, 71.64, 14162.22, 14161.41, 531.27, 59.49, 259.11, 6696.99, 36036.27, 0.0, 1218.42],
      "ESA_Landcover": [616.71, 2579.52, 32251.99, 33745.13, 1272.81, 7570.01, 0.0, 269.44, 32.42, 0.0],
      "Cropland": [224.78, 17634.3, 24607.65, 36724.5]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Khan Char Bagh",
      "AFG_Landcover": [0.0, 348.75, 0.0, 0.0, 4187.25, 0.0, 0.0, 0.0, 21.96, 18692.64, 12428.73, 66957.03, 0.0],
      "ESA_Landcover": [0.0, 460.55, 24293.02, 637.41, 178.71, 80922.83, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [418.58, 79534.58, 273.75, 27434.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Khas Kunar",
      "AFG_Landcover": [0.0, 296.82, 2.52, 12824.82, 1573.38, 0.0, 160.83, 0.0, 5.31, 2563.29, 11808.63, 0.0, 828.81],
      "ESA_Landcover": [6944.7, 6779.19, 10860.9, 1606.13, 225.53, 6205.36, 0.0, 2.3, 0.0, 0.0],
      "Cropland": [2419.58, 28993.13, 1443.23, 126.6]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Uruzgan",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Khas Uruzgan",
      "AFG_Landcover": [0.72, 818.01, 4.32, 1188.54, 2309.58, 234.27, 5508.99, 3.06, 135.18, 12773.25, 221753.34, 0.0, 3200.04],
      "ESA_Landcover": [857.66, 4524.08, 61638.4, 10728.63, 267.44, 166336.81, 0.0, 9.42, 0.0, 0.0],
      "Cropland": [8.93, 235853.1, 8865.23, 2314.73]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nimroz",
      "BASIN": "Hilmand",
      "WATERSHED": "Khash Rod",
      "DISTRICT": "Khash Rod",
      "AFG_Landcover": [0.0, 4793.4, 511.11, 0.0, 36998.01, 2.34, 0.0, 13.23, 1113.57, 681513.21, 14617.98, 1681.83, 23755.32],
      "ESA_Landcover": [4.82, 228.94, 19.44, 42935.37, 493.86, 694450.69, 0.0, 19.59, 0.37, 0.0],
      "Cropland": [12.53, 666416.4, 3099.75, 76723.73]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Khinjan",
      "AFG_Landcover": [3281.04, 697.32, 135.63, 13782.69, 1082.34, 159.3, 519.03, 0.45, 202.68, 15931.44, 85912.29, 0.0, 630.18],
      "ESA_Landcover": [308.09, 5706.16, 59648.59, 2224.54, 190.06, 55125.17, 219.81, 230.79, 0.45, 545.12],
      "Cropland": [194.33, 121312.28, 2682.75, 1373.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Khogyani",
      "AFG_Landcover": [95.58, 1239.84, 1.98, 12341.16, 5949.0, 31.95, 541.53, 0.0, 4.68, 12003.66, 22070.16, 0.0, 716.76],
      "ESA_Landcover": [4051.82, 4303.08, 15943.39, 8909.37, 963.16, 23472.3, 5.86, 3.41, 0.0, 1.19],
      "Cropland": [2877.53, 44391.68, 7566.3, 3451.28]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Khost (Matun)",
      "AFG_Landcover": [0.0, 2819.7, 13.41, 8070.84, 7843.68, 0.0, 67.86, 0.0, 12.96, 5570.55, 15135.03, 0.0, 1398.06],
      "ESA_Landcover": [631.1, 7077.86, 7503.84, 8872.87, 2737.24, 15584.03, 0.0, 33.61, 0.0, 0.0],
      "Cropland": [1935.53, 31085.55, 9477.83, 408.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Khost Wa Firing",
      "AFG_Landcover": [9827.19, 590.58, 148.23, 11401.11, 4574.52, 1050.39, 2207.43, 0.09, 1003.41, 23825.16, 199255.41, 0.0, 1779.3],
      "ESA_Landcover": [1771.12, 1781.43, 136229.83, 8525.75, 119.29, 102179.2, 1639.29, 373.16, 0.3, 8527.38],
      "Cropland": [365.63, 248490.08, 11907.98, 3248.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Khulm",
      "DISTRICT": "Khulm",
      "AFG_Landcover": [0.0, 1555.74, 884.25, 1636.56, 18728.01, 4593.24, 746.64, 561.78, 1283.85, 75693.42, 168014.61, 81168.75, 919.98],
      "ESA_Landcover": [788.52, 4221.48, 67265.34, 15538.7, 792.23, 278060.85, 0.0, 1517.4, 0.45, 0.0],
      "Cropland": [2216.4, 305457.38, 3558.23, 60993.68]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Samangan",
      "BASIN": "Northern",
      "WATERSHED": "Khulm",
      "DISTRICT": "Khuram Wa Sarbagh",
      "AFG_Landcover": [20.7, 924.84, 1.8, 7036.83, 3146.04, 44963.46, 507.96, 4.05, 61.02, 10937.07, 174270.15, 0.0, 687.6],
      "ESA_Landcover": [358.99, 20553.6, 109883.34, 24038.42, 111.8, 92790.96, 0.0, 0.15, 0.0, 4.82],
      "Cropland": [0.08, 148365.9, 1114.35, 100975.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Logar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Khushi",
      "AFG_Landcover": [0.0, 418.41, 1.8, 327.69, 131.67, 7.11, 399.78, 0.0, 0.0, 13818.42, 31903.56, 0.0, 104.13],
      "ESA_Landcover": [184.43, 132.2, 15202.64, 659.88, 50.67, 30767.68, 0.0, 1.85, 0.0, 0.74],
      "Cropland": [1.88, 47021.25, 401.78, 90.08]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Panj",
      "DISTRICT": "Khwahan",
      "AFG_Landcover": [28226.97, 534.78, 336.42, 22500.09, 2443.14, 6927.21, 332.55, 0.0, 5578.74, 21751.74, 109488.33, 0.0, 1052.19],
      "ESA_Landcover": [1084.6, 699.65, 163060.23, 1900.27, 85.09, 29607.78, 4910.15, 769.61, 0.0, 6519.24],
      "Cropland": [802.58, 205142.55, 2222.18, 2760.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Khwaja Du Koh",
      "AFG_Landcover": [0.0, 589.77, 0.0, 0.0, 9756.0, 485.91, 0.0, 1.89, 32.4, 14491.17, 20429.46, 146453.85, 0.0],
      "ESA_Landcover": [0.0, 1000.99, 26662.37, 6941.88, 203.71, 163599.79, 0.0, 0.22, 0.0, 0.0],
      "Cropland": [5.93, 160338.98, 1645.05, 38595.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Khwaja Ghar",
      "AFG_Landcover": [0.0, 3303.45, 92.52, 257.49, 4919.13, 13051.35, 199.89, 14.94, 12.15, 14706.81, 38174.4, 0.0, 214.47],
      "ESA_Landcover": [503.95, 1167.17, 37180.61, 19938.16, 871.98, 17801.08, 0.0, 179.53, 0.0, 0.0],
      "Cropland": [213.23, 31186.35, 6604.88, 40489.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Khwaja Sabz Posh",
      "AFG_Landcover": [0.0, 2847.24, 0.0, 7.56, 1966.77, 13776.3, 36.09, 146.25, 0.0, 29633.76, 49570.11, 55.98, 1136.07],
      "ESA_Landcover": [45.48, 1211.75, 37724.03, 9848.86, 1300.11, 50798.72, 0.0, 4.01, 0.0, 0.0],
      "Cropland": [0.68, 35518.2, 1982.25, 64539.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Daykundi",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Kijran",
      "AFG_Landcover": [0.0, 1760.58, 74.79, 6740.55, 2765.34, 1597.68, 2062.17, 38.7, 67.59, 17598.87, 213186.51, 0.0, 1218.24],
      "ESA_Landcover": [652.99, 16645.34, 63551.59, 9375.18, 98.15, 153445.28, 0.0, 326.86, 0.0, 0.0],
      "Cropland": [252.0, 236737.58, 6101.85, 3684.68]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Kishim",
      "AFG_Landcover": [18680.85, 2496.24, 171.54, 27061.47, 2814.75, 17996.58, 1934.46, 0.09, 396.0, 54928.71, 168969.24, 0.0, 1458.72],
      "ESA_Landcover": [1998.94, 6364.64, 192142.93, 15523.57, 832.07, 80684.03, 5030.48, 494.67, 1.93, 2653.04],
      "Cropland": [413.03, 273695.63, 7897.05, 27069.6]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Kishindih",
      "AFG_Landcover": [0.0, 1135.17, 79.02, 3361.77, 1717.2, 75770.64, 375.48, 11.25, 195.3, 12214.08, 123865.74, 0.0, 1342.26],
      "ESA_Landcover": [242.29, 13516.91, 110718.97, 22277.68, 119.14, 77379.78, 0.0, 150.82, 0.0, 0.0],
      "Cropland": [116.33, 121548.08, 4572.68, 100628.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kapisa",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Kohband",
      "AFG_Landcover": [1.44, 105.39, 0.0, 1098.18, 149.67, 299.52, 429.03, 0.0, 0.0, 998.82, 12310.74, 0.0, 136.44],
      "ESA_Landcover": [356.09, 1096.1, 5070.24, 1142.98, 20.03, 8007.79, 0.0, 0.67, 0.0, 0.0],
      "Cropland": [0.68, 14801.7, 800.85, 264.45]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Kohi Safi",
      "AFG_Landcover": [0.0, 749.61, 32.85, 1419.3, 167.4, 266.04, 206.01, 22.23, 16.65, 20499.3, 44879.49, 0.0, 366.12],
      "ESA_Landcover": [127.75, 3288.52, 18920.55, 2991.03, 25.3, 43670.85, 0.0, 59.87, 0.0, 0.0],
      "Cropland": [57.83, 68820.83, 535.13, 426.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Bala Murghab",
      "DISTRICT": "Kohistan",
      "AFG_Landcover": [2.43, 572.31, 29.61, 1862.91, 2238.93, 35596.17, 365.22, 1.08, 513.09, 4764.33, 181720.62, 0.0, 199.35],
      "ESA_Landcover": [128.49, 17652.93, 133110.09, 14240.52, 55.49, 64948.73, 0.0, 42.81, 0.22, 0.0],
      "Cropland": [41.03, 183467.18, 2772.3, 46423.73]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kapisa",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Kohistan",
      "AFG_Landcover": [0.0, 890.19, 116.91, 428.76, 5976.27, 749.7, 750.78, 243.72, 1.44, 2098.35, 6250.14, 0.0, 231.66],
      "ESA_Landcover": [722.57, 1058.19, 2809.42, 9196.91, 324.93, 3663.3, 0.0, 151.41, 0.0, 0.0],
      "Cropland": [136.8, 8470.43, 9009.45, 508.28]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Sari Pul",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Kohistanat",
      "AFG_Landcover": [154.89, 1368.09, 184.59, 871.47, 5985.81, 44266.41, 2287.35, 73.44, 1750.14, 15113.25, 578145.6, 4.68, 670.32],
      "ESA_Landcover": [1356.64, 20013.75, 333074.44, 16032.34, 162.32, 288217.06, 0.0, 199.78, 42.51, 0.22],
      "Cropland": [242.18, 615820.58, 6505.2, 43759.73]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Lower Hari Rod",
      "DISTRICT": "Kuhsan",
      "AFG_Landcover": [0.0, 2679.39, 263.7, 10.8, 8017.38, 638.46, 11.97, 26.01, 3133.8, 242119.44, 43397.82, 46.89, 7539.03],
      "ESA_Landcover": [2.6, 1195.43, 3603.21, 11379.61, 478.2, 293167.05, 0.0, 15.58, 0.0, 0.0],
      "Cropland": [3751.05, 268014.08, 3192.68, 38282.7]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunduz",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Kunduz",
      "AFG_Landcover": [0.0, 6657.93, 1231.83, 0.0, 23178.69, 468.27, 195.03, 5.22, 1169.37, 10214.73, 21599.19, 37.71, 278.19],
      "ESA_Landcover": [221.82, 3004.09, 20091.42, 30933.19, 4657.1, 7193.37, 0.0, 837.86, 185.54, 0.0],
      "Cropland": [768.3, 21232.35, 32140.28, 13720.8]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Kuran Wa Munjan",
      "AFG_Landcover": [55360.44, 372.87, 1693.17, 188.73, 1403.73, 2.16, 133.56, 0.0, 1800.09, 172207.17, 217190.34, 0.0, 1367.19],
      "ESA_Landcover": [512.25, 30.49, 25219.98, 597.86, 13.95, 347825.59, 55972.15, 2424.99, 5.34, 28013.82],
      "Cropland": [2454.3, 461612.93, 963.53, 639.08]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Kushk wa Kashan Rod",
      "DISTRICT": "Kushk",
      "AFG_Landcover": [0.0, 3098.07, 8.73, 851.58, 4176.09, 106440.3, 77.22, 254.7, 195.75, 38639.16, 134748.81, 19695.96, 3175.38],
      "ESA_Landcover": [7.49, 2884.95, 91431.06, 66967.18, 299.93, 150284.52, 0.0, 4.08, 0.0, 0.0],
      "Cropland": [448.5, 84639.68, 2863.05, 227349.45]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Kushk wa Kashan Rod",
      "DISTRICT": "Kushki Kuhna",
      "AFG_Landcover": [0.0, 622.08, 3.42, 8625.15, 803.7, 41910.93, 162.36, 36.99, 10.26, 19300.05, 113589.27, 0.0, 1559.61],
      "ESA_Landcover": [307.35, 9872.97, 102154.49, 30198.08, 12.69, 44158.62, 0.0, 0.22, 0.0, 0.0],
      "Cropland": [226.13, 103826.4, 1044.9, 83657.4]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Kuz Kunar",
      "AFG_Landcover": [0.0, 1087.83, 609.3, 7500.15, 3274.56, 0.0, 281.97, 0.0, 532.26, 5939.91, 15963.21, 0.0, 767.88],
      "ESA_Landcover": [3104.68, 3304.62, 9630.83, 3677.1, 708.85, 15053.01, 0.0, 614.78, 0.0, 0.0],
      "Cropland": [612.38, 33087.98, 2483.33, 306.0]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Lal Pur",
      "AFG_Landcover": [0.0, 683.73, 1141.38, 193.14, 1244.16, 0.0, 57.6, 0.0, 396.36, 8616.87, 35739.27, 0.0, 1859.49],
      "ESA_Landcover": [270.56, 4232.68, 22107.58, 1880.84, 266.55, 20471.48, 0.0, 941.27, 0.0, 0.0],
      "Cropland": [1212.45, 48181.88, 1048.5, 279.0]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghor",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Upper Hari Rod",
      "DISTRICT": "Lal Wa Sarjangal",
      "AFG_Landcover": [656.01, 1199.52, 55.53, 22.41, 5621.67, 17064.54, 46.17, 0.0, 2069.37, 8788.86, 291351.42, 0.0, 1044.27],
      "ESA_Landcover": [31.01, 4.75, 202428.15, 9243.35, 168.92, 116913.43, 27.37, 133.31, 17.66, 6.53],
      "Cropland": [152.48, 332264.25, 112.43, 56.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Adraskan Rod",
      "DISTRICT": "Lash Wa Juwayn",
      "AFG_Landcover": [0.0, 3120.39, 30315.6, 0.0, 10930.14, 258.93, 0.0, 0.0, 49069.08, 501663.6, 2003.4, 0.0, 36635.04],
      "ESA_Landcover": [3.26, 447.04, 274.04, 14175.54, 47.4, 611890.88, 0.0, 74.71, 10.98, 0.0],
      "Cropland": [16724.4, 578670.75, 560.78, 37842.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Lower Hilmand",
      "DISTRICT": "Lashkargah",
      "AFG_Landcover": [0.0, 4646.79, 1007.46, 0.0, 16421.94, 134.19, 12.42, 54.36, 3939.21, 53624.34, 2441.34, 89220.33, 5503.05],
      "ESA_Landcover": [85.98, 432.21, 36.87, 23351.9, 1881.73, 144153.41, 0.0, 1023.47, 0.0, 0.0],
      "Cropland": [856.05, 139049.33, 11618.78, 21317.03]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Lija Mangal",
      "AFG_Landcover": [0.0, 144.99, 5.13, 33291.63, 424.62, 0.0, 356.13, 0.0, 3.51, 1631.34, 9657.0, 0.0, 254.07],
      "ESA_Landcover": [12132.97, 7771.58, 22114.48, 873.24, 91.62, 2566.39, 0.0, 0.45, 0.0, 6.68],
      "Cropland": [0.45, 45032.48, 763.65, 255.83]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kapisa",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Mahmud Raqi",
      "AFG_Landcover": [0.0, 308.43, 331.2, 543.06, 2597.04, 848.52, 335.97, 276.3, 120.6, 2200.14, 9712.44, 0.0, 269.82],
      "ESA_Landcover": [386.88, 951.51, 2409.04, 5712.17, 182.5, 7761.27, 0.0, 297.26, 2.3, 0.0],
      "Cropland": [295.8, 13173.6, 4028.93, 403.05]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Arghandab",
      "DISTRICT": "Malistan",
      "AFG_Landcover": [0.0, 267.48, 0.0, 2.25, 1783.71, 492.3, 503.82, 0.0, 152.19, 2263.14, 121132.44, 0.0, 949.59],
      "ESA_Landcover": [145.48, 68.77, 53116.81, 4082.31, 73.37, 68719.01, 0.0, 0.15, 1.19, 0.0],
      "Cropland": [0.9, 124906.05, 1910.55, 774.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Mando Zayi",
      "AFG_Landcover": [0.0, 1249.11, 2.34, 0.36, 4832.28, 0.0, 6.21, 0.0, 18.36, 4661.91, 1959.57, 0.0, 535.59],
      "ESA_Landcover": [19.29, 339.18, 110.02, 5366.47, 1397.52, 5888.07, 0.0, 6.97, 0.0, 0.0],
      "Cropland": [6.83, 6811.8, 5937.53, 513.83]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nuristan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Alingar",
      "DISTRICT": "Mandol",
      "AFG_Landcover": [18689.94, 85.5, 324.81, 49221.54, 891.81, 10.44, 103.05, 0.0, 301.68, 19857.96, 154882.35, 0.0, 506.34],
      "ESA_Landcover": [14076.27, 5386.13, 90555.07, 385.25, 2.52, 103910.99, 2876.12, 722.57, 0.74, 30285.1],
      "Cropland": [729.45, 248859.6, 526.05, 804.23]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Mardyan",
      "AFG_Landcover": [0.0, 465.84, 0.27, 0.0, 11361.96, 0.0, 0.0, 0.0, 1179.99, 24094.71, 3191.49, 44945.73, 0.0],
      "ESA_Landcover": [1.41, 2627.3, 973.77, 11919.32, 793.72, 71839.35, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 49323.0, 12947.78, 26850.98]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Wardak",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Markazi Bihsud",
      "AFG_Landcover": [975.6, 542.43, 16.47, 83.88, 3839.85, 4070.79, 180.45, 0.0, 213.84, 9371.43, 230170.41, 0.0, 388.62],
      "ESA_Landcover": [35.02, 12.02, 160374.03, 10356.96, 76.11, 78621.66, 415.22, 87.91, 6.75, 346.37],
      "Cropland": [95.03, 250497.08, 1135.35, 1352.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Marmul",
      "AFG_Landcover": [0.0, 150.57, 0.0, 1626.03, 176.13, 3429.18, 95.94, 2.61, 4.05, 3539.43, 31839.66, 0.0, 451.53],
      "ESA_Landcover": [30.19, 2330.92, 17065.38, 1405.53, 22.78, 21675.07, 0.0, 1.48, 0.0, 0.0],
      "Cropland": [0.6, 30490.65, 182.48, 12323.33]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Arghistan",
      "DISTRICT": "Maruf",
      "AFG_Landcover": [0.0, 1475.37, 0.72, 41.58, 2162.07, 3.06, 386.37, 34.11, 522.63, 287995.32, 46557.45, 0.0, 5597.55],
      "ESA_Landcover": [3.64, 997.73, 10131.95, 7767.87, 197.48, 326272.11, 0.0, 216.03, 0.0, 0.0],
      "Cropland": [11473.35, 333268.13, 927.98, 3709.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Marwara",
      "AFG_Landcover": [0.0, 158.85, 48.33, 11906.19, 576.9, 0.0, 4.14, 0.0, 0.9, 612.72, 873.81, 0.0, 72.72],
      "ESA_Landcover": [6683.94, 2554.52, 3732.52, 795.79, 102.82, 822.72, 0.0, 52.0, 0.0, 0.0],
      "Cropland": [392.7, 13942.95, 349.35, 221.03]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Mata Khan",
      "AFG_Landcover": [0.0, 239.31, 11.07, 0.0, 4086.45, 27.45, 225.09, 77.94, 372.51, 22303.08, 11605.14, 0.0, 99.54],
      "ESA_Landcover": [3.86, 27.89, 999.21, 9706.13, 76.26, 27828.5, 0.0, 0.07, 0.0, 0.0],
      "Cropland": [0.08, 29871.75, 1135.2, 8057.93]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Wardak",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Maydan Shahr",
      "AFG_Landcover": [2.16, 1317.51, 0.0, 51.93, 302.49, 0.09, 1798.47, 0.0, 0.0, 3694.41, 15314.85, 0.0, 84.87],
      "ESA_Landcover": [911.89, 440.07, 4100.11, 1474.89, 277.23, 15437.96, 0.0, 0.45, 0.0, 0.0],
      "Cropland": [0.45, 22045.2, 766.2, 76.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Maymana",
      "AFG_Landcover": [0.0, 647.19, 0.09, 210.24, 983.7, 16827.84, 191.61, 245.7, 5.58, 5061.87, 29761.92, 13.05, 287.1],
      "ESA_Landcover": [292.29, 939.71, 24723.3, 4468.59, 133.98, 24658.98, 0.0, 6.53, 0.0, 0.0],
      "Cropland": [0.68, 25616.33, 3100.58, 27113.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Lower Arghandab",
      "DISTRICT": "Maywand",
      "AFG_Landcover": [0.0, 1856.34, 36.36, 0.0, 13594.95, 418.32, 10.08, 187.11, 2863.62, 169012.08, 22929.48, 60090.21, 14460.39],
      "ESA_Landcover": [13.8, 2177.06, 733.33, 32516.76, 192.81, 240604.78, 0.0, 62.61, 0.0, 0.0],
      "Cropland": [34.43, 218016.0, 1020.0, 60261.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Mazar-i-Sharif",
      "AFG_Landcover": [0.0, 5611.77, 0.18, 0.0, 451.71, 0.0, 104.85, 0.45, 201.87, 227.16, 4.59, 4.86, 7.74],
      "ESA_Landcover": [142.29, 64.54, 24.41, 455.95, 5237.23, 890.83, 0.0, 0.37, 0.0, 0.0],
      "Cropland": [0.38, 790.05, 1469.55, 4628.7]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Laghman",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Alingar",
      "DISTRICT": "Mihtarlam",
      "AFG_Landcover": [0.0, 1896.39, 162.18, 4647.6, 3894.84, 0.45, 698.94, 0.0, 128.34, 10404.0, 37801.62, 0.0, 1141.83],
      "ESA_Landcover": [880.81, 6803.15, 12602.2, 5192.43, 1460.65, 33982.53, 0.0, 159.35, 0.0, 0.0],
      "Cropland": [149.1, 51718.65, 5302.05, 4580.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Mingajik",
      "AFG_Landcover": [0.0, 485.73, 0.0, 0.0, 11829.6, 0.0, 0.0, 0.0, 2313.54, 33845.85, 5976.72, 44461.98, 0.0],
      "ESA_Landcover": [0.0, 3648.62, 3965.91, 12556.94, 562.92, 81544.51, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 41470.2, 15643.5, 46290.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Mirbacha Kot",
      "AFG_Landcover": [0.0, 405.54, 0.0, 1.26, 196.74, 12.69, 56.61, 895.14, 149.13, 2803.77, 2506.05, 0.0, 43.74],
      "ESA_Landcover": [68.99, 465.07, 995.13, 3823.77, 206.9, 1555.09, 0.0, 0.37, 0.0, 0.0],
      "Cropland": [0.38, 4119.45, 2964.75, 108.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Arghandab",
      "DISTRICT": "Mizan",
      "AFG_Landcover": [0.0, 288.72, 52.83, 318.33, 816.3, 7.92, 478.62, 88.83, 8.01, 26568.18, 71116.92, 0.0, 534.51],
      "ESA_Landcover": [92.88, 6968.88, 4499.6, 5032.85, 40.36, 81037.0, 0.0, 233.91, 0.0, 0.0],
      "Cropland": [226.2, 87774.6, 1223.55, 9756.83]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Logar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Muhammad Agha",
      "AFG_Landcover": [0.0, 3045.69, 14.76, 118.53, 1086.57, 236.34, 1289.07, 62.37, 19.98, 50435.55, 50612.13, 0.0, 799.65],
      "ESA_Landcover": [431.91, 410.84, 20193.8, 7610.22, 242.66, 78788.13, 0.07, 14.54, 0.0, 31.38],
      "Cropland": [14.33, 103134.0, 4409.7, 1350.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Muhmand Dara",
      "AFG_Landcover": [0.0, 2357.91, 557.82, 79.02, 2709.72, 0.0, 116.28, 0.0, 446.31, 5480.46, 6154.2, 0.0, 1478.16],
      "ESA_Landcover": [691.19, 1468.59, 2550.29, 3120.56, 1523.04, 11435.55, 0.0, 482.28, 0.0, 0.0],
      "Cropland": [2391.38, 15592.28, 3183.38, 337.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badghis",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Kushk wa Kashan Rod",
      "DISTRICT": "Muqur",
      "AFG_Landcover": [0.0, 758.43, 0.0, 503.64, 246.6, 4749.48, 0.0, 0.0, 22.23, 6922.17, 42680.43, 0.09, 830.88],
      "ESA_Landcover": [0.0, 412.55, 31988.93, 8858.55, 20.18, 15759.18, 0.0, 2.97, 0.0, 0.0],
      "Cropland": [38.03, 35138.78, 41.4, 22448.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Tarnak Rod",
      "DISTRICT": "Muqur",
      "AFG_Landcover": [0.0, 384.93, 0.0, 0.0, 7983.45, 660.51, 82.71, 1833.75, 38.43, 13039.38, 56625.57, 0.0, 1971.27],
      "ESA_Landcover": [0.22, 874.58, 2966.85, 13586.2, 338.07, 63640.16, 0.0, 0.45, 0.0, 0.0],
      "Cropland": [0.45, 62751.45, 1411.5, 18138.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badghis",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Bala Murghab",
      "DISTRICT": "Murghab",
      "AFG_Landcover": [0.0, 1916.19, 349.2, 24589.35, 8258.31, 25214.67, 388.26, 37.71, 858.06, 33319.98, 375408.45, 114.93, 2317.23],
      "ESA_Landcover": [330.42, 9813.47, 337780.43, 27429.83, 373.45, 101212.78, 0.0, 650.24, 0.45, 0.0],
      "Cropland": [777.6, 374624.25, 10167.08, 97261.28]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Musa Khel",
      "AFG_Landcover": [0.0, 73.35, 0.09, 17040.15, 176.67, 0.0, 17.28, 0.0, 0.0, 768.15, 2165.58, 0.0, 183.51],
      "ESA_Landcover": [6229.25, 3496.24, 7375.72, 320.78, 50.74, 2791.4, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 20137.2, 233.63, 114.53]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Middle Hilmand",
      "DISTRICT": "Musa Qala",
      "AFG_Landcover": [0.0, 2278.08, 108.45, 13.86, 22258.08, 813.96, 174.42, 677.97, 119.52, 100884.51, 64663.29, 0.0, 10750.59],
      "ESA_Landcover": [59.42, 2797.48, 1326.82, 39717.55, 390.74, 153798.04, 0.0, 46.14, 0.0, 0.0],
      "Cropland": [27.0, 156418.88, 5744.4, 38119.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Musayi",
      "AFG_Landcover": [0.0, 1008.36, 53.28, 136.08, 655.83, 17.55, 244.35, 8.73, 407.61, 2959.65, 7280.01, 0.0, 91.89],
      "ESA_Landcover": [22.63, 213.43, 3631.78, 2521.21, 100.89, 6374.28, 0.0, 17.51, 6.08, 0.0],
      "Cropland": [20.78, 10739.25, 2076.15, 191.4]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Khash Rod",
      "DISTRICT": "Nad Ali",
      "AFG_Landcover": [0.0, 3867.66, 245.07, 0.0, 68848.83, 92.97, 7.29, 187.38, 859.68, 430589.88, 11770.92, 639.18, 14698.53],
      "ESA_Landcover": [14.32, 59.2, 48.44, 93507.52, 496.23, 419143.78, 0.0, 96.0, 0.0, 0.0],
      "Cropland": [10.2, 441463.58, 34391.63, 43128.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Nadir Shah Kot",
      "AFG_Landcover": [0.0, 641.7, 4.77, 18666.81, 1732.5, 0.0, 40.86, 0.0, 0.0, 5863.68, 19959.57, 0.0, 481.77],
      "ESA_Landcover": [4408.73, 4194.77, 12993.08, 1892.34, 352.24, 23089.58, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 44575.28, 1671.53, 1200.08]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Middle Hilmand",
      "DISTRICT": "Nahri Sarraj",
      "AFG_Landcover": [0.0, 4599.36, 1028.79, 0.0, 58091.58, 117.63, 50.22, 284.67, 3106.26, 87492.33, 8310.42, 0.0, 4899.06],
      "ESA_Landcover": [177.16, 915.53, 57.12, 75954.67, 1170.66, 83352.13, 0.0, 1267.25, 0.07, 0.0],
      "Cropland": [823.43, 76541.03, 30056.93, 57259.35]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Nahri Shahi",
      "AFG_Landcover": [0.0, 13503.69, 7.38, 0.0, 13854.96, 1570.41, 1.62, 9.99, 3463.29, 88389.9, 17661.69, 29050.2, 253.71],
      "ESA_Landcover": [21.14, 2955.5, 4111.02, 13007.03, 4286.02, 148868.23, 0.0, 2.67, 5.12, 0.0],
      "Cropland": [1.43, 97884.9, 8890.65, 68381.03]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Nahrin",
      "AFG_Landcover": [6.39, 1087.65, 0.0, 17457.12, 3787.47, 17146.53, 971.82, 134.55, 439.29, 20539.89, 102555.0, 0.0, 2231.73],
      "ESA_Landcover": [693.49, 9256.56, 99392.47, 27293.7, 330.42, 32990.22, 0.0, 1.11, 0.0, 0.0],
      "Cropland": [0.75, 109140.45, 7030.28, 55651.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Nali",
      "AFG_Landcover": [26.1, 132.93, 199.89, 54331.65, 634.14, 0.27, 47.61, 0.0, 0.99, 1071.45, 2083.14, 0.0, 125.73],
      "ESA_Landcover": [37074.82, 2628.34, 23558.58, 931.26, 75.6, 1814.81, 0.0, 305.79, 0.0, 200.75],
      "Cropland": [7517.63, 59312.55, 406.28, 83.7]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Narang Wa Badil",
      "AFG_Landcover": [0.0, 445.05, 257.04, 15890.67, 1564.83, 0.0, 131.76, 0.0, 130.05, 770.13, 1778.49, 0.0, 194.76],
      "ESA_Landcover": [8211.2, 4580.99, 3773.1, 1677.12, 463.51, 2302.59, 0.0, 285.25, 0.0, 0.0],
      "Cropland": [288.9, 19264.73, 1623.6, 350.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Middle Hilmand",
      "DISTRICT": "Naw Zad",
      "AFG_Landcover": [0.0, 2915.73, 6.66, 419.04, 26748.54, 2275.56, 429.39, 302.4, 230.13, 169922.79, 113858.46, 0.0, 16602.39],
      "ESA_Landcover": [74.41, 6188.37, 5420.47, 54130.41, 121.22, 259483.56, 0.0, 11.28, 0.0, 0.0],
      "Cropland": [8.85, 271964.78, 2231.1, 54796.5]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Arghistan",
      "DISTRICT": "Nawa",
      "AFG_Landcover": [0.0, 1260.36, 8418.69, 0.09, 23271.66, 1.53, 356.49, 364.41, 3867.93, 157273.11, 78410.43, 0.0, 3260.79],
      "ESA_Landcover": [4.01, 1156.04, 559.21, 23918.9, 67.88, 244828.71, 0.0, 1.63, 0.0, 0.0],
      "Cropland": [1.65, 262796.48, 1947.68, 8754.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Lower Hilmand",
      "DISTRICT": "Nawa-i-Barak Zayi",
      "AFG_Landcover": [0.0, 1473.84, 119.7, 0.0, 35069.94, 53.19, 13.41, 71.55, 3677.13, 27631.08, 2720.43, 111.69, 555.12],
      "ESA_Landcover": [24.7, 32.42, 26.41, 41588.15, 287.47, 26843.02, 0.0, 153.86, 0.0, 0.0],
      "Cropland": [101.33, 12654.83, 32663.33, 24292.58]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Nawur",
      "AFG_Landcover": [49.59, 1222.65, 1927.71, 147.33, 6916.95, 6495.03, 353.79, 0.0, 32458.86, 9626.67, 490401.09, 36.72, 920.52],
      "ESA_Landcover": [181.31, 361.29, 200441.67, 12472.74, 204.68, 332660.56, 0.0, 417.22, 1384.76, 0.52],
      "Cropland": [1764.98, 547634.25, 2992.13, 1751.4]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Nazyan",
      "AFG_Landcover": [0.0, 223.92, 0.0, 816.3, 189.45, 0.0, 9.45, 0.0, 0.0, 1263.69, 7379.64, 0.0, 488.79],
      "ESA_Landcover": [162.47, 740.6, 3584.15, 295.41, 91.62, 5477.23, 0.0, 0.89, 0.0, 0.0],
      "Cropland": [0.75, 9991.28, 171.23, 302.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Uruzgan",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Nesh",
      "AFG_Landcover": [0.0, 1404.72, 0.0, 313.11, 2547.99, 433.62, 132.48, 224.28, 28.26, 64579.14, 79668.45, 0.0, 2194.92],
      "ESA_Landcover": [20.55, 8209.5, 5607.94, 11881.26, 38.13, 122387.83, 0.0, 5.04, 0.0, 0.0],
      "Cropland": [4.58, 137224.35, 686.18, 11855.33]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kapisa",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Nijrab",
      "AFG_Landcover": [84.96, 240.57, 0.36, 11231.64, 1973.16, 22.05, 3593.34, 8.28, 49.05, 3458.34, 35904.78, 0.0, 767.25],
      "ESA_Landcover": [3685.86, 4448.93, 26630.25, 4804.43, 112.39, 18208.81, 0.45, 1.48, 0.0, 10.39],
      "Cropland": [1.43, 51526.5, 6665.55, 344.4]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Nika",
      "AFG_Landcover": [0.0, 29.79, 0.0, 10050.03, 40.32, 0.0, 16.38, 0.0, 0.0, 394.83, 4794.75, 0.0, 57.87],
      "ESA_Landcover": [2258.44, 746.16, 9887.51, 280.87, 1.48, 2031.14, 0.0, 0.0, 0.0, 0.74],
      "Cropland": [0.0, 15250.65, 101.78, 19.88]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Wardak",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Nirkh",
      "AFG_Landcover": [0.0, 1019.25, 1.44, 56.61, 747.09, 45.45, 4947.21, 0.0, 0.0, 13087.62, 50058.18, 0.0, 245.79],
      "ESA_Landcover": [1303.0, 1105.07, 17345.5, 7435.89, 148.37, 42963.71, 0.0, 4.3, 0.0, 0.37],
      "Cropland": [4.43, 67616.33, 3080.93, 380.7]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Nurgal",
      "AFG_Landcover": [272.07, 215.01, 333.81, 24119.28, 1127.7, 0.0, 144.54, 0.0, 227.7, 1809.63, 8140.59, 0.0, 416.25],
      "ESA_Landcover": [12663.48, 7159.32, 9847.52, 1314.8, 130.42, 5532.35, 0.45, 338.81, 0.0, 0.0],
      "Cropland": [342.0, 35093.48, 1619.1, 340.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nuristan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Alingar",
      "DISTRICT": "Nuristan",
      "AFG_Landcover": [5290.92, 233.37, 43.65, 74308.14, 152.73, 0.0, 73.89, 0.0, 60.03, 3876.93, 30080.88, 0.0, 176.76],
      "ESA_Landcover": [31317.62, 14687.34, 46810.25, 362.84, 67.44, 13619.66, 29.9, 72.92, 0.96, 8449.56],
      "Cropland": [72.9, 116202.6, 237.68, 173.55]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Upper Hari Rod",
      "DISTRICT": "Obe",
      "AFG_Landcover": [0.0, 1102.5, 309.6, 1281.24, 4261.32, 6285.69, 1033.74, 1218.78, 347.76, 32841.72, 198608.85, 0.0, 3852.09],
      "ESA_Landcover": [136.87, 14367.75, 87098.82, 21565.2, 188.73, 126408.05, 0.0, 85.76, 0.07, 0.0],
      "Cropland": [43.65, 225918.3, 10352.85, 16278.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Omna",
      "AFG_Landcover": [0.0, 13.77, 2.07, 1490.13, 187.74, 4.05, 12.6, 0.0, 1.35, 1888.29, 42947.46, 0.0, 193.32],
      "ESA_Landcover": [86.72, 77.01, 12434.32, 572.05, 0.3, 32874.78, 0.0, 0.15, 0.0, 0.0],
      "Cropland": [0.15, 46185.68, 37.65, 329.33]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Pachir Wa Agam",
      "AFG_Landcover": [14.04, 456.93, 2.52, 12884.22, 1290.42, 0.0, 220.41, 0.0, 2.07, 2344.95, 13863.6, 0.0, 520.92],
      "ESA_Landcover": [4171.33, 3167.37, 10379.21, 2048.5, 272.93, 11752.62, 0.0, 3.56, 0.0, 7.05],
      "Cropland": [316.2, 28795.43, 2149.13, 893.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Paghman",
      "AFG_Landcover": [75.33, 4173.57, 109.17, 77.04, 684.99, 59.85, 3269.16, 0.0, 6.57, 5818.86, 27450.45, 0.0, 396.27],
      "ESA_Landcover": [1578.16, 2478.7, 14636.08, 4796.05, 1547.82, 17163.45, 0.0, 90.58, 0.0, 0.45],
      "Cropland": [91.58, 41109.75, 1245.38, 309.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Bamyan",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Panjab",
      "AFG_Landcover": [620.01, 400.05, 11.52, 2.88, 2847.78, 3442.32, 45.45, 0.0, 850.95, 6964.02, 182866.32, 0.63, 677.7],
      "ESA_Landcover": [40.13, 18.47, 145038.97, 6131.32, 38.5, 47606.12, 175.15, 13.58, 7.42, 171.67],
      "Cropland": [21.23, 200802.98, 249.3, 352.8]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Panjshir",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Panjsher",
      "AFG_Landcover": [2728.44, 585.54, 104.04, 5058.54, 147.33, 34.92, 1660.23, 0.0, 111.24, 6605.55, 57751.65, 0.0, 488.43],
      "ESA_Landcover": [1415.17, 1964.15, 46541.63, 764.86, 158.98, 24185.23, 526.5, 224.56, 0.0, 485.62],
      "Cropland": [224.25, 75093.98, 1511.78, 273.38]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Registan",
      "DISTRICT": "Panjwayi",
      "AFG_Landcover": [0.0, 4844.61, 57.42, 0.0, 18935.55, 284.76, 166.86, 14052.06, 2957.31, 115518.78, 12531.69, 507922.11, 5845.77],
      "ESA_Landcover": [178.27, 656.1, 273.45, 46308.16, 587.55, 610089.94, 0.0, 138.51, 0.0, 0.0],
      "Cropland": [81.75, 613175.55, 26464.65, 25733.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghor",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Pasaband",
      "AFG_Landcover": [0.0, 1056.24, 0.36, 833.22, 2560.95, 21882.24, 878.22, 0.0, 1356.84, 24993.27, 392779.26, 1.17, 540.36],
      "ESA_Landcover": [169.59, 1921.12, 113908.15, 15295.89, 160.46, 310983.26, 0.0, 29.82, 5.79, 0.0],
      "Cropland": [30.83, 440299.13, 1630.58, 5368.43]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Pashtun Kot",
      "AFG_Landcover": [0.0, 961.02, 127.26, 101.16, 816.39, 39301.56, 741.51, 48.15, 91.89, 6727.68, 71829.9, 0.0, 487.62],
      "ESA_Landcover": [454.17, 8575.09, 37726.47, 17457.45, 394.0, 58313.24, 0.0, 83.39, 0.0, 0.0],
      "Cropland": [83.7, 59473.35, 2921.78, 61872.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Lower Hari Rod",
      "DISTRICT": "Pashtun Zarghun",
      "AFG_Landcover": [0.0, 2332.17, 224.73, 292.68, 17399.25, 1470.24, 431.55, 1288.89, 595.98, 58847.31, 85729.95, 0.0, 8872.38],
      "ESA_Landcover": [45.4, 10022.31, 23482.54, 40761.05, 204.16, 101473.69, 0.0, 49.56, 0.0, 0.0],
      "Cropland": [31.58, 135260.78, 11588.4, 31089.98]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Logar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Puli Alam",
      "AFG_Landcover": [0.0, 4186.26, 0.54, 198.0, 3748.95, 82.8, 1060.74, 423.54, 29.61, 45467.73, 59440.05, 0.0, 1034.82],
      "ESA_Landcover": [183.76, 403.13, 14730.59, 10492.05, 672.5, 88892.71, 0.0, 3.12, 0.0, 0.67],
      "Cropland": [1.65, 106664.18, 5454.15, 4522.58]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Puli Khumri",
      "AFG_Landcover": [0.0, 2989.08, 304.83, 707.22, 17817.93, 1352.43, 318.78, 116.46, 257.49, 9490.32, 36709.47, 0.0, 381.78],
      "ESA_Landcover": [320.26, 5013.12, 27615.52, 25010.85, 1799.9, 11990.39, 0.0, 229.46, 2.23, 0.0],
      "Cropland": [162.38, 28713.68, 17510.33, 26384.78]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Farah Rod",
      "DISTRICT": "Purchaman",
      "AFG_Landcover": [1.17, 989.55, 279.72, 7634.79, 2345.13, 6182.19, 845.46, 4.95, 558.54, 55193.4, 568013.76, 0.0, 1745.01],
      "ESA_Landcover": [135.91, 33818.5, 148155.97, 9582.9, 50.37, 440382.93, 0.0, 243.85, 0.3, 0.0],
      "Cropland": [228.45, 627375.98, 3346.95, 8355.08]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Farah Rod",
      "DISTRICT": "Pusht Rod",
      "AFG_Landcover": [0.0, 646.11, 305.28, 0.0, 30347.91, 5.22, 0.72, 102.42, 986.85, 47180.07, 5535.99, 0.0, 5235.48],
      "ESA_Landcover": [54.68, 109.13, 132.42, 31357.09, 259.65, 55791.06, 0.0, 10.02, 0.0, 0.0],
      "Cropland": [9.38, 44205.75, 3069.23, 41382.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badghis",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Kushk wa Kashan Rod",
      "DISTRICT": "Qadis",
      "AFG_Landcover": [0.0, 1995.75, 0.0, 3187.89, 1026.99, 75487.32, 498.69, 72.72, 46.35, 24019.47, 214114.59, 0.0, 1453.68],
      "ESA_Landcover": [55.64, 7217.85, 135619.06, 86387.15, 214.1, 92937.25, 0.0, 8.38, 0.0, 0.0],
      "Cropland": [0.45, 141635.48, 2368.2, 181971.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Adraskan Rod",
      "DISTRICT": "Qala-I-Kah",
      "AFG_Landcover": [0.0, 2433.51, 232.56, 0.0, 18256.77, 7.92, 0.54, 29.79, 12611.97, 347757.3, 27601.38, 0.0, 12451.59],
      "ESA_Landcover": [18.92, 169.74, 250.67, 26750.8, 109.42, 380371.36, 0.0, 54.82, 17.36, 0.0],
      "Cropland": [888.68, 353978.4, 735.68, 56621.33]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badghis",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Kushk wa Kashan Rod",
      "DISTRICT": "Qala-I-Naw",
      "AFG_Landcover": [0.0, 1959.48, 0.36, 4047.93, 411.57, 48079.35, 140.04, 88.11, 27.54, 10048.23, 41715.36, 0.0, 435.51],
      "ESA_Landcover": [263.58, 7007.02, 34219.33, 27319.37, 459.36, 37704.74, 0.0, 2.23, 0.0, 0.0],
      "Cropland": [0.68, 23967.45, 1011.3, 83168.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunduz",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Qala-I-Zal",
      "AFG_Landcover": [0.0, 1213.47, 6200.64, 0.0, 13773.6, 297.09, 104.31, 0.0, 9609.75, 53125.56, 33215.49, 90278.01, 672.75],
      "ESA_Landcover": [914.27, 5195.62, 16260.24, 17460.49, 1319.32, 168228.92, 0.0, 5658.69, 1756.8, 0.0],
      "Cropland": [6286.65, 185742.45, 19676.18, 7467.68]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Qalandar",
      "AFG_Landcover": [0.0, 16.56, 0.09, 14987.25, 40.77, 0.0, 17.73, 0.0, 0.0, 458.91, 1015.56, 0.0, 10.62],
      "ESA_Landcover": [6717.91, 2945.63, 5664.77, 200.97, 15.43, 864.86, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 16393.5, 107.48, 87.53]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Tarnak Rod",
      "DISTRICT": "Qalat",
      "AFG_Landcover": [0.0, 2139.3, 7.2, 26.28, 3494.52, 580.95, 174.42, 1791.0, 54.63, 42656.67, 128710.89, 0.0, 3535.83],
      "ESA_Landcover": [22.4, 1713.62, 1626.97, 18786.71, 680.29, 156135.86, 0.0, 10.76, 0.0, 0.0],
      "Cropland": [8.1, 143050.5, 2438.4, 35442.9]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Qarabagh",
      "AFG_Landcover": [0.0, 1325.61, 8.64, 53.28, 14917.23, 992.43, 1690.02, 5424.93, 98.1, 50394.24, 103169.7, 0.0, 2191.59],
      "ESA_Landcover": [85.54, 1488.91, 38271.96, 21901.78, 1016.72, 115442.91, 0.0, 0.67, 0.0, 0.0],
      "Cropland": [0.68, 147294.45, 7520.25, 25348.58]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Qarabagh",
      "AFG_Landcover": [0.0, 1033.2, 18.45, 4.14, 873.18, 1069.83, 45.99, 2013.39, 111.33, 3713.13, 3860.46, 0.0, 239.22],
      "ESA_Landcover": [56.9, 353.94, 675.91, 9284.75, 201.64, 2480.63, 0.0, 22.92, 0.0, 0.0],
      "Cropland": [18.23, 7474.58, 5386.28, 342.38]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Qaram Qol",
      "AFG_Landcover": [0.0, 1169.28, 2.61, 0.0, 4311.99, 466.2, 0.36, 6.75, 1080.9, 14679.9, 29750.67, 98122.77, 38.43],
      "ESA_Landcover": [0.15, 1801.76, 64168.89, 4075.19, 327.09, 83672.02, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [51.0, 114399.6, 3316.13, 37969.58]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Laghman",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Qarghayi",
      "AFG_Landcover": [0.0, 2320.02, 1156.68, 6713.01, 5450.76, 3.42, 340.83, 0.0, 1196.55, 24704.01, 57685.5, 0.0, 1727.01],
      "ESA_Landcover": [1272.51, 8454.83, 18736.71, 6878.6, 1528.6, 63842.69, 0.0, 927.7, 0.0, 0.0],
      "Cropland": [880.05, 88333.5, 6006.9, 7535.78]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Dasht-i Shortepa",
      "DISTRICT": "Qarqin",
      "AFG_Landcover": [0.0, 295.2, 9110.79, 0.0, 2829.78, 0.0, 0.9, 0.0, 4318.83, 8907.75, 279.9, 99541.89, 1449.18],
      "ESA_Landcover": [15.21, 2547.99, 260.1, 7671.95, 552.83, 114954.47, 0.0, 6543.8, 27.82, 0.0],
      "Cropland": [7195.35, 121245.98, 3601.2, 1988.63]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Qaysar",
      "AFG_Landcover": [0.0, 1167.12, 0.0, 5371.56, 1491.57, 41910.66, 769.86, 2481.66, 180.09, 36493.11, 152634.24, 6.75, 2458.8],
      "ESA_Landcover": [279.53, 9329.19, 103221.36, 43399.92, 516.11, 91294.18, 0.0, 9.42, 0.0, 0.0],
      "Cropland": [8.25, 131258.85, 12886.95, 106620.53]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Panj",
      "DISTRICT": "Ragh",
      "AFG_Landcover": [10617.93, 1788.3, 81.81, 13884.03, 3393.9, 28749.78, 503.28, 0.0, 862.65, 26518.32, 96392.7, 0.0, 1343.07],
      "ESA_Landcover": [540.67, 2550.81, 164740.7, 4270.89, 70.33, 16652.23, 1858.29, 198.52, 0.0, 1027.18],
      "Cropland": [205.5, 192419.48, 379.95, 1011.0]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Lower Hilmand",
      "DISTRICT": "Reg",
      "AFG_Landcover": [0.0, 5458.95, 3150.09, 0.0, 20305.53, 59.49, 0.0, 130.41, 10086.21, 776396.43, 1679.49, 21677.85, 15738.39],
      "ESA_Landcover": [4.75, 430.65, 29.6, 33554.18, 127.08, 781716.58, 0.0, 2213.86, 0.0, 0.0],
      "Cropland": [1873.73, 786163.73, 14955.6, 24061.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Registan",
      "DISTRICT": "Reg",
      "AFG_Landcover": [0.0, 741.24, 2.97, 0.27, 0.0, 902.07, 0.0, 0.0, 27.27, 186231.6, 14708.34, 1248161.67, 5834.97],
      "ESA_Landcover": [0.22, 23.89, 362.92, 38.5, 0.15, 1389631.9, 0.0, 33.75, 0.0, 0.0],
      "Cropland": [546.15, 1404792.08, 0.0, 1.8]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Rodat",
      "AFG_Landcover": [0.0, 8384.49, 1236.42, 6.12, 11453.4, 0.27, 903.51, 0.0, 626.49, 24109.92, 23945.13, 0.0, 2374.74],
      "ESA_Landcover": [1951.54, 1076.44, 2109.7, 14031.47, 3311.51, 49527.61, 0.0, 1044.09, 0.0, 0.0],
      "Cropland": [1038.0, 56690.33, 11990.03, 4136.78]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Samangan",
      "BASIN": "Northern",
      "WATERSHED": "Khulm",
      "DISTRICT": "Royi Du Ab",
      "AFG_Landcover": [210.69, 512.19, 11.61, 742.05, 2271.6, 30061.08, 345.96, 0.0, 255.87, 5197.59, 178653.69, 0.0, 166.41],
      "ESA_Landcover": [51.34, 26369.71, 111970.78, 13995.71, 35.09, 69665.03, 0.0, 10.46, 5.93, 3.41],
      "Cropland": [14.33, 173354.18, 1432.58, 49745.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Ab-i-Rustaq",
      "DISTRICT": "Rustaq",
      "AFG_Landcover": [0.0, 3909.6, 150.66, 3620.88, 1737.54, 51889.32, 836.73, 17.82, 425.25, 26460.0, 67146.12, 0.0, 5079.33],
      "ESA_Landcover": [476.5, 4280.01, 76698.38, 42594.11, 1499.52, 41290.22, 0.0, 257.2, 0.0, 0.0],
      "Cropland": [255.45, 88845.75, 6311.1, 73519.5]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Sabari",
      "AFG_Landcover": [0.0, 504.09, 0.0, 16005.15, 5077.89, 0.0, 26.46, 0.0, 0.72, 6815.97, 6840.09, 0.0, 1295.82],
      "ESA_Landcover": [1506.2, 7022.67, 10812.39, 6514.12, 476.2, 9940.33, 0.0, 5.42, 0.0, 0.0],
      "Cropland": [5.4, 29098.5, 5818.13, 1753.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghor",
      "BASIN": "Hilmand",
      "WATERSHED": "Farah Rod",
      "DISTRICT": "Saghar",
      "AFG_Landcover": [0.0, 538.83, 43.38, 3928.23, 395.73, 2618.73, 1185.66, 3.15, 172.26, 20406.06, 306980.91, 0.0, 232.2],
      "ESA_Landcover": [266.92, 23329.94, 89364.46, 3325.91, 83.76, 215445.42, 0.0, 61.28, 0.0, 0.0],
      "Cropland": [61.73, 332375.93, 1495.2, 1589.63]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Salang",
      "AFG_Landcover": [1346.85, 197.64, 27.09, 2016.45, 88.02, 6.93, 725.85, 0.0, 27.63, 8890.56, 52285.05, 0.0, 257.58],
      "ESA_Landcover": [639.41, 2923.08, 35587.32, 198.0, 37.76, 26309.99, 784.22, 47.55, 0.89, 190.81],
      "Cropland": [49.13, 67200.6, 173.03, 27.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Sari Pul",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Sangcharak",
      "AFG_Landcover": [0.0, 2540.61, 0.0, 5447.25, 1783.35, 70845.84, 1427.85, 2934.63, 241.02, 13738.59, 70166.07, 0.0, 247.32],
      "ESA_Landcover": [623.24, 12087.57, 82875.7, 28996.93, 413.29, 47520.58, 0.0, 0.0, 0.07, 0.0],
      "Cropland": [0.0, 76626.83, 9452.63, 88334.63]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Middle Hilmand",
      "DISTRICT": "Sangin",
      "AFG_Landcover": [0.0, 1762.2, 572.22, 0.0, 9740.07, 9.27, 79.56, 390.78, 1712.43, 42609.15, 23573.88, 0.0, 3655.26],
      "ESA_Landcover": [109.87, 651.43, 499.2, 13373.51, 357.35, 66136.37, 0.0, 675.39, 0.52, 0.0],
      "Cropland": [546.9, 55780.8, 7083.3, 19289.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Sar Hawza",
      "AFG_Landcover": [0.0, 314.37, 3.42, 14192.28, 160.11, 8.73, 52.92, 0.0, 0.0, 4390.56, 52126.47, 0.0, 94.05],
      "ESA_Landcover": [2134.33, 854.85, 31182.53, 624.72, 41.47, 35566.99, 0.0, 2.23, 0.0, 0.07],
      "Cropland": [2.25, 70950.9, 123.53, 104.78]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Sari Pul",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Sar-i-Pul City",
      "AFG_Landcover": [0.0, 2201.58, 0.81, 1212.3, 8467.83, 52773.48, 682.29, 823.41, 127.26, 33910.92, 159273.81, 2.97, 1041.48],
      "ESA_Landcover": [533.25, 4685.14, 127654.37, 25516.94, 996.1, 107272.81, 0.0, 5.27, 0.0, 0.0],
      "Cropland": [0.98, 148266.75, 8515.8, 112804.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Sarobi",
      "AFG_Landcover": [0.0, 603.09, 1.08, 10426.86, 276.57, 4.32, 1.8, 0.0, 0.0, 3879.36, 22147.38, 0.0, 26.1],
      "ESA_Landcover": [3147.56, 1468.07, 13020.46, 1212.42, 63.21, 17835.06, 0.0, 3.41, 0.0, 0.0],
      "Cropland": [3.45, 36910.35, 119.25, 120.38]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Wardak",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Chak wa Logar Rod",
      "DISTRICT": "Sayid Abad",
      "AFG_Landcover": [0.0, 1662.03, 0.0, 19.71, 1200.6, 605.16, 3267.18, 0.18, 6.3, 24603.66, 83466.09, 6.66, 706.95],
      "ESA_Landcover": [504.17, 1020.13, 18206.88, 10404.96, 313.73, 84712.1, 0.0, 0.22, 0.0, 0.0],
      "Cropland": [0.15, 108502.13, 4414.95, 3508.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Sayid Karam",
      "AFG_Landcover": [0.0, 989.73, 2.61, 13243.32, 1309.23, 355.5, 858.24, 0.0, 9.72, 5442.84, 64527.03, 0.0, 249.12],
      "ESA_Landcover": [2550.0, 1661.99, 46996.53, 12590.11, 189.4, 22497.5, 0.0, 8.9, 0.0, 22.63],
      "Cropland": [7.8, 82111.13, 1140.23, 4206.23]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Sari Pul",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Sayyad",
      "AFG_Landcover": [0.0, 460.35, 0.0, 204.93, 391.14, 25395.93, 88.74, 1.08, 27.0, 5120.73, 95919.3, 0.45, 760.59],
      "ESA_Landcover": [14.61, 4129.49, 81966.33, 10769.28, 44.73, 34156.2, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 74329.73, 675.08, 57514.88]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Arghandab",
      "DISTRICT": "Shah Wali Kot",
      "AFG_Landcover": [0.0, 2448.99, 2725.2, 217.35, 3940.65, 556.83, 1566.0, 552.96, 874.71, 155429.55, 194152.86, 0.0, 4923.27],
      "ESA_Landcover": [1107.97, 18727.44, 12405.31, 16822.86, 195.7, 306592.04, 0.0, 2330.92, 0.0, 0.0],
      "Cropland": [2317.5, 339850.2, 5365.35, 14578.2]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Uruzgan",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Shahidi Hasas",
      "AFG_Landcover": [0.0, 1451.34, 643.68, 5881.14, 4346.91, 120.87, 1234.44, 65.97, 236.7, 6343.74, 179104.5, 0.0, 2647.17],
      "ESA_Landcover": [200.08, 17141.34, 42866.15, 12635.43, 37.76, 125134.27, 0.0, 713.89, 0.0, 0.0],
      "Cropland": [619.73, 188280.15, 6243.6, 5766.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Tarnak Rod",
      "DISTRICT": "Shahjoy",
      "AFG_Landcover": [0.0, 1545.12, 0.09, 3.06, 7656.75, 591.57, 469.8, 5216.49, 218.07, 54517.86, 77738.58, 0.0, 1768.14],
      "ESA_Landcover": [6.08, 1505.68, 580.88, 26033.2, 442.22, 118157.15, 0.0, 0.22, 0.0, 0.0],
      "Cropland": [0.23, 122288.7, 4718.63, 21327.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghor",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Upper Hari Rod",
      "DISTRICT": "Shahrak",
      "AFG_Landcover": [0.0, 1356.75, 146.07, 286.29, 5496.3, 57514.14, 1054.71, 0.0, 7362.27, 15932.97, 757635.3, 5.13, 2887.2],
      "ESA_Landcover": [229.23, 9340.02, 331422.84, 20037.94, 255.79, 483533.37, 0.0, 405.06, 53.41, 0.0],
      "Cropland": [452.48, 847452.9, 2000.7, 4643.7]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Shahri Buzurg",
      "AFG_Landcover": [0.0, 760.05, 112.95, 7585.29, 1115.64, 6169.86, 367.47, 0.0, 9.18, 23760.27, 49540.86, 0.0, 840.06],
      "ESA_Landcover": [256.09, 2551.85, 60950.62, 3897.51, 167.36, 25896.18, 0.0, 129.6, 0.0, 0.0],
      "Cropland": [126.83, 85222.05, 702.15, 8826.68]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Daykundi",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Shahristan",
      "AFG_Landcover": [1.8, 1262.25, 138.42, 1298.97, 1819.8, 923.76, 3514.05, 0.0, 50.58, 44520.93, 319386.33, 0.0, 846.81],
      "ESA_Landcover": [1666.37, 5154.89, 140131.79, 6034.59, 291.03, 217731.83, 2.0, 556.62, 0.0, 0.0],
      "Cropland": [561.3, 370133.85, 3311.33, 1640.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Shakar Dara",
      "AFG_Landcover": [256.41, 4209.39, 4.95, 493.47, 338.58, 26.28, 2703.15, 217.8, 30.78, 6215.31, 19845.18, 0.0, 278.1],
      "ESA_Landcover": [1669.04, 2658.53, 8104.6, 5346.29, 2018.45, 15012.35, 0.0, 5.04, 0.0, 0.0],
      "Cropland": [5.1, 30438.9, 4449.6, 303.45]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Shamul",
      "AFG_Landcover": [0.0, 102.33, 0.09, 5764.14, 87.03, 0.0, 14.76, 0.0, 0.0, 660.69, 4391.01, 0.0, 182.7],
      "ESA_Landcover": [1742.33, 900.17, 4436.1, 122.04, 28.78, 3859.3, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 11113.8, 24.68, 71.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Arghistan",
      "DISTRICT": "Shamul zayi",
      "AFG_Landcover": [0.0, 668.25, 0.0, 0.0, 4663.53, 3.06, 281.79, 4.68, 883.89, 119132.64, 161113.32, 0.0, 3351.33],
      "ESA_Landcover": [2.89, 1241.06, 861.0, 9783.28, 29.9, 277354.6, 0.0, 3.71, 0.0, 0.0],
      "Cropland": [6750.23, 280870.5, 339.98, 4491.08]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Sharan",
      "AFG_Landcover": [0.0, 2504.43, 579.6, 0.0, 7529.94, 50.4, 265.68, 0.9, 1863.81, 32523.93, 52204.68, 39.15, 1537.38],
      "ESA_Landcover": [4.75, 191.18, 1883.29, 13720.26, 488.59, 80864.97, 0.0, 733.33, 0.0, 0.0],
      "Cropland": [740.85, 88930.95, 1617.53, 7672.05]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Shekh Ali",
      "AFG_Landcover": [217.17, 217.53, 3.51, 140.67, 556.2, 83.97, 1508.04, 0.0, 273.69, 8368.38, 82561.86, 0.0, 41.49],
      "ESA_Landcover": [621.83, 376.86, 57583.32, 1390.02, 76.56, 34610.96, 1.26, 7.34, 0.0, 135.17],
      "Cropland": [7.28, 94140.3, 1432.05, 265.43]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Sherzad",
      "AFG_Landcover": [395.73, 995.22, 0.72, 5592.24, 4177.98, 63.18, 687.96, 0.0, 11.88, 8919.18, 33639.48, 0.0, 494.55],
      "ESA_Landcover": [1705.24, 3381.4, 13703.27, 6379.25, 410.77, 30093.55, 1.48, 4.08, 0.0, 1.04],
      "Cropland": [696.98, 47138.78, 5409.23, 3043.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Farah",
      "BASIN": "Hilmand",
      "WATERSHED": "Adraskan Rod",
      "DISTRICT": "Shib Koh",
      "AFG_Landcover": [0.0, 1217.7, 266.13, 0.0, 3819.78, 0.0, 0.0, 1.71, 737.1, 117595.44, 4398.21, 0.0, 4133.25],
      "ESA_Landcover": [2.08, 33.24, 26.71, 4295.96, 159.28, 122740.51, 0.0, 1.71, 174.26, 0.0],
      "Cropland": [163.88, 118441.43, 362.03, 9861.98]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Bamyan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Shibar",
      "AFG_Landcover": [292.23, 283.77, 5.58, 24.21, 1163.25, 74.34, 528.93, 0.0, 482.94, 9396.81, 100469.97, 0.0, 91.98],
      "ESA_Landcover": [303.64, 108.83, 60343.71, 1368.43, 65.73, 51259.78, 52.82, 30.86, 1.26, 160.46],
      "Cropland": [30.98, 113672.93, 849.23, 389.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Jawzjan",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Shibirghan",
      "AFG_Landcover": [0.0, 5329.08, 1.26, 0.54, 19394.55, 25694.55, 12.96, 486.45, 1204.11, 49570.02, 112004.55, 56130.48, 625.05],
      "ESA_Landcover": [34.72, 5847.49, 115062.04, 31738.48, 2354.44, 122728.64, 0.0, 0.59, 0.0, 0.0],
      "Cropland": [0.08, 150308.63, 10350.3, 120156.6]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Panj",
      "DISTRICT": "Shighnan",
      "AFG_Landcover": [88688.7, 908.73, 3583.53, 6720.84, 1919.61, 1591.2, 732.33, 0.0, 2569.23, 36794.97, 303047.73, 0.0, 1372.59],
      "ESA_Landcover": [1232.08, 8.68, 250923.54, 1476.0, 136.95, 145146.47, 25157.21, 5767.07, 0.07, 37853.63],
      "Cropland": [6097.73, 463686.98, 1131.53, 1912.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Hilmand",
      "WATERSHED": "Adraskan Rod",
      "DISTRICT": "Shindand",
      "AFG_Landcover": [0.0, 7944.39, 611.19, 732.15, 15102.63, 4481.28, 98.73, 1504.53, 5239.44, 423653.58, 272812.5, 15.21, 13015.71],
      "ESA_Landcover": [39.1, 4682.18, 12699.9, 36667.91, 444.15, 675342.53, 0.0, 38.5, 0.0, 0.0],
      "Cropland": [33.08, 684287.93, 6054.08, 47549.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Arghistan",
      "DISTRICT": "Shinkay",
      "AFG_Landcover": [0.0, 620.1, 0.09, 61.92, 2573.46, 94.41, 351.27, 402.03, 204.75, 79590.51, 79091.37, 0.0, 4040.46],
      "ESA_Landcover": [5.93, 2126.1, 2356.82, 8146.66, 74.41, 149963.96, 0.0, 29.23, 0.0, 0.0],
      "Cropland": [29.25, 155312.55, 556.13, 8592.38]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Shinwar",
      "AFG_Landcover": [0.0, 1976.76, 2.16, 1.71, 3156.66, 0.0, 263.88, 0.0, 27.81, 5054.85, 4688.19, 0.0, 1461.51],
      "ESA_Landcover": [717.75, 894.39, 668.49, 3872.66, 1612.51, 8854.92, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 11528.25, 4010.93, 1262.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Shinwari",
      "AFG_Landcover": [284.04, 289.8, 11.07, 341.28, 107.19, 21.6, 812.61, 0.0, 135.63, 4268.43, 30762.81, 0.0, 226.89],
      "ESA_Landcover": [797.8, 1112.79, 12960.67, 579.91, 43.7, 22086.95, 4.97, 21.22, 2.3, 42.95],
      "Cropland": [23.25, 37148.18, 586.2, 307.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Faryab",
      "BASIN": "Northern",
      "WATERSHED": "Shirin Tagab",
      "DISTRICT": "Shirin Tagab",
      "AFG_Landcover": [0.0, 1843.02, 0.45, 0.63, 1768.59, 12837.87, 47.07, 1375.38, 13.95, 27364.23, 174799.8, 1052.73, 2216.16],
      "ESA_Landcover": [43.84, 1885.81, 147447.05, 9801.08, 485.7, 68429.83, 0.0, 15.13, 0.0, 0.0],
      "Cropland": [21.9, 168260.1, 4041.23, 58286.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Sholgara",
      "AFG_Landcover": [0.0, 1301.58, 341.55, 1414.98, 6164.46, 50406.84, 468.72, 161.73, 565.65, 31737.96, 61721.73, 0.0, 1182.96],
      "ESA_Landcover": [419.67, 3941.35, 48704.52, 23896.13, 640.89, 81286.42, 0.0, 423.6, 1.34, 0.0],
      "Cropland": [276.68, 57861.45, 7841.33, 95082.83]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Pishin Lora",
      "DISTRICT": "Shorabak",
      "AFG_Landcover": [0.0, 444.87, 65.79, 0.0, 1767.51, 14.76, 0.72, 12.51, 1993.14, 255035.25, 13813.56, 133780.32, 13266.36],
      "ESA_Landcover": [0.07, 576.8, 37.69, 3794.47, 2.67, 409046.17, 0.0, 59.72, 0.0, 0.0],
      "Cropland": [11880.08, 406173.53, 0.0, 0.0]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Balkh",
      "BASIN": "Amu Darya",
      "WATERSHED": "Dasht-i Shortepa",
      "DISTRICT": "Shortepa",
      "AFG_Landcover": [0.0, 335.7, 7104.78, 0.0, 5498.19, 0.0, 8.1, 0.0, 9348.48, 12849.93, 264.33, 98049.15, 1455.21],
      "ESA_Landcover": [34.94, 5064.53, 54.53, 16770.78, 494.67, 113700.28, 0.0, 7169.48, 8.98, 0.0],
      "Cropland": [8412.23, 116634.98, 12737.33, 7089.75]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Shwak",
      "AFG_Landcover": [0.0, 41.04, 0.0, 8384.76, 55.8, 0.0, 4.59, 0.0, 0.0, 130.95, 3147.48, 0.0, 77.94],
      "ESA_Landcover": [1840.63, 522.86, 8045.47, 44.29, 13.13, 1271.33, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 11813.63, 51.53, 2.03]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kunar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Sirkanay",
      "AFG_Landcover": [0.0, 357.84, 174.69, 11046.6, 1347.48, 0.36, 56.34, 0.0, 116.82, 1257.93, 4988.7, 0.0, 298.17],
      "ESA_Landcover": [6161.37, 4611.48, 6924.15, 1668.15, 227.6, 3378.95, 0.0, 196.67, 0.0, 0.0],
      "Cropland": [3649.95, 18631.95, 920.78, 220.65]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Sari Pul",
      "BASIN": "Northern",
      "WATERSHED": "Sari Pul",
      "DISTRICT": "Sozma Qala",
      "AFG_Landcover": [0.0, 937.89, 0.0, 342.0, 1035.63, 29330.19, 65.97, 1132.74, 69.66, 12847.77, 44111.25, 0.09, 326.07],
      "ESA_Landcover": [77.67, 1549.3, 30035.83, 16653.12, 225.9, 43656.98, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 36398.03, 4342.5, 52467.08]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Spera",
      "AFG_Landcover": [0.0, 242.1, 1.53, 32463.54, 217.53, 0.0, 39.6, 0.0, 9.0, 1980.45, 7076.7, 0.0, 412.74],
      "ESA_Landcover": [18336.26, 4869.35, 11312.1, 452.91, 65.8, 8560.84, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [1686.6, 42120.6, 84.38, 185.1]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kandahar",
      "BASIN": "Hilmand",
      "WATERSHED": "Arghistan",
      "DISTRICT": "Spin Boldak",
      "AFG_Landcover": [0.0, 7159.68, 69.84, 0.0, 14333.49, 254.34, 56.16, 130.59, 501.21, 288159.57, 33326.91, 204616.53, 17273.43],
      "ESA_Landcover": [10.02, 463.74, 2272.84, 32368.09, 1979.65, 531784.83, 0.0, 31.38, 0.0, 0.0],
      "Cropland": [23372.78, 538089.9, 1613.1, 12079.28]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nangarhar",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Surkh Rod",
      "AFG_Landcover": [0.0, 7358.04, 103.95, 563.22, 3480.12, 5.22, 378.45, 0.0, 107.73, 11785.86, 13072.32, 0.0, 1077.93],
      "ESA_Landcover": [789.26, 774.13, 1759.32, 6640.61, 3091.33, 24848.67, 0.0, 101.41, 0.0, 0.0],
      "Cropland": [98.78, 33088.05, 4184.7, 1050.45]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Parwan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Surkhi Parsa",
      "AFG_Landcover": [397.98, 262.26, 5.13, 244.62, 596.52, 5.4, 2230.83, 0.0, 201.42, 7764.21, 90518.67, 0.0, 166.86],
      "ESA_Landcover": [1162.94, 290.14, 60510.55, 1972.23, 40.43, 39053.66, 0.89, 9.2, 0.0, 20.62],
      "Cropland": [9.3, 102351.9, 1604.85, 225.23]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kabul",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kabul",
      "DISTRICT": "Surobi",
      "AFG_Landcover": [1.8, 1114.56, 1118.52, 7712.28, 610.47, 48.24, 206.91, 0.36, 56.25, 16961.85, 68578.47, 0.0, 1251.36],
      "ESA_Landcover": [2314.23, 6759.61, 30576.72, 1928.09, 350.53, 55008.99, 0.0, 1137.86, 0.0, 0.0],
      "Cropland": [1139.33, 96228.75, 1115.55, 668.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Kapisa",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Ghorband wa Panjsher",
      "DISTRICT": "Tagab",
      "AFG_Landcover": [0.0, 677.7, 594.27, 6747.21, 859.5, 0.81, 1711.35, 1.8, 23.04, 10710.63, 33700.05, 0.0, 623.52],
      "ESA_Landcover": [2986.65, 4316.81, 14282.36, 3818.8, 367.07, 29607.71, 0.0, 653.28, 0.0, 0.0],
      "Cropland": [669.68, 50561.78, 4759.73, 649.5]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Baghlan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kunduz",
      "DISTRICT": "Tala Wa Barfak",
      "AFG_Landcover": [9847.17, 568.26, 190.44, 4731.93, 1741.5, 162.81, 415.62, 28.35, 968.13, 27678.96, 241306.29, 0.0, 1244.61],
      "ESA_Landcover": [183.02, 1345.66, 169560.34, 2585.98, 60.68, 117506.17, 67.29, 263.43, 11.28, 1052.55],
      "Cropland": [263.85, 292852.35, 2108.03, 624.3]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Taluqan",
      "AFG_Landcover": [0.0, 4918.41, 250.47, 432.72, 15153.75, 21301.92, 658.8, 2.43, 245.25, 15779.52, 21868.38, 0.0, 2112.3],
      "ESA_Landcover": [818.72, 1819.26, 22126.94, 41275.76, 3559.74, 15277.2, 0.0, 460.03, 2.74, 0.0],
      "Cropland": [382.2, 17405.55, 24751.35, 43737.23]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Tani",
      "AFG_Landcover": [0.0, 1128.24, 7.56, 20607.75, 1630.89, 0.0, 11.07, 0.0, 0.0, 7927.2, 13016.97, 0.0, 620.46],
      "ESA_Landcover": [3849.81, 5219.13, 13517.43, 4325.49, 301.27, 17604.49, 0.0, 0.52, 0.0, 0.0],
      "Cropland": [491.55, 43086.83, 863.18, 876.38]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Zabul",
      "BASIN": "Hilmand",
      "WATERSHED": "Tarnak Rod",
      "DISTRICT": "Tarnak Wa Jaldak",
      "AFG_Landcover": [0.0, 915.66, 17.73, 6.39, 3083.58, 266.31, 30.96, 742.23, 106.2, 83617.11, 77553.36, 0.0, 5365.26],
      "ESA_Landcover": [6.68, 2454.74, 2007.32, 10928.04, 211.36, 151501.83, 0.0, 22.48, 0.0, 0.0],
      "Cropland": [18.75, 147046.13, 709.28, 21193.8]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghor",
      "BASIN": "Hilmand",
      "WATERSHED": "Farah Rod",
      "DISTRICT": "Taywara",
      "AFG_Landcover": [0.0, 930.06, 0.36, 1.8, 2450.07, 9933.39, 793.26, 0.27, 466.92, 20280.15, 248211.9, 56.61, 281.25],
      "ESA_Landcover": [83.83, 2189.45, 39375.33, 14623.69, 235.76, 223218.26, 0.0, 5.42, 1.41, 0.0],
      "Cropland": [5.48, 271029.15, 3631.58, 8140.58]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Khost",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Tere Zayi",
      "AFG_Landcover": [0.0, 1193.13, 52.56, 7821.81, 4603.95, 0.9, 17.82, 0.0, 84.06, 7665.48, 23319.0, 0.0, 1666.08],
      "ESA_Landcover": [129.45, 13696.52, 8264.91, 7066.22, 641.93, 20038.6, 0.0, 108.76, 0.0, 0.0],
      "Cropland": [3930.0, 39102.45, 5120.93, 2336.93]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Uruzgan",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Tirin Kot",
      "AFG_Landcover": [0.0, 3141.9, 68.13, 405.27, 6810.21, 550.71, 2837.79, 312.12, 95.67, 49616.46, 96363.63, 0.0, 1847.25],
      "ESA_Landcover": [483.1, 5166.16, 11640.75, 21467.72, 656.99, 119423.29, 0.0, 145.7, 0.0, 0.0],
      "Cropland": [56.93, 139636.2, 9497.63, 11538.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghor",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Upper Hari Rod",
      "DISTRICT": "Tulak",
      "AFG_Landcover": [0.0, 959.67, 2.16, 138.69, 1557.09, 23018.31, 836.01, 0.72, 193.41, 31682.97, 243925.47, 19.98, 1126.62],
      "ESA_Landcover": [167.96, 18528.47, 69826.09, 15782.18, 63.73, 196577.02, 0.0, 29.53, 0.89, 0.0],
      "Cropland": [26.78, 300727.88, 1287.83, 2236.2]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Urgun",
      "AFG_Landcover": [0.0, 914.49, 12.33, 23859.72, 2293.65, 0.0, 91.26, 0.0, 9.9, 1578.78, 25597.53, 0.0, 483.21],
      "ESA_Landcover": [8356.9, 2835.76, 23896.35, 2832.35, 225.23, 15924.47, 0.0, 9.79, 0.0, 0.07],
      "Cropland": [9.6, 52860.15, 1373.63, 431.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Panj",
      "DISTRICT": "Wakhan",
      "AFG_Landcover": [577746.9, 1409.67, 7749.9, 71.37, 2475.18, 10.89, 45.99, 0.0, 10347.03, 244535.49, 231390.18, 0.0, 8094.15],
      "ESA_Landcover": [448.53, 210.32, 47606.49, 1892.71, 53.41, 635955.48, 276014.65, 22573.39, 1285.87, 156890.56],
      "Cropland": [47688.38, 1105944.6, 278.33, 1562.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nuristan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Wama",
      "AFG_Landcover": [32029.02, 70.11, 96.3, 42711.75, 869.85, 0.27, 4.41, 0.0, 1097.46, 13947.75, 90985.05, 0.0, 63.9],
      "ESA_Landcover": [20853.91, 3788.23, 62323.51, 294.59, 16.1, 58207.08, 2968.7, 518.86, 3.04, 35277.97],
      "Cropland": [526.73, 185290.73, 384.15, 71.93]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Bamyan",
      "BASIN": "Hilmand",
      "WATERSHED": "Upper Helmand",
      "DISTRICT": "Waras",
      "AFG_Landcover": [0.0, 286.47, 56.97, 290.79, 4673.25, 1589.31, 1185.84, 0.0, 62.19, 10597.05, 277227.09, 0.18, 680.04],
      "ESA_Landcover": [248.0, 86.28, 173927.15, 5351.56, 96.15, 116467.35, 0.0, 178.34, 0.37, 0.22],
      "Cropland": [180.23, 297290.63, 1755.3, 379.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Khanabad",
      "DISTRICT": "Warsaj",
      "AFG_Landcover": [24786.36, 329.49, 462.51, 4450.86, 915.93, 79.56, 1432.26, 0.0, 702.36, 69393.87, 182837.43, 1.8, 518.4],
      "ESA_Landcover": [1487.28, 171.67, 100328.55, 750.17, 121.07, 160949.12, 16903.73, 839.86, 0.0, 10950.3],
      "Cropland": [830.85, 291312.98, 2950.43, 624.38]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hilmand",
      "BASIN": "Hilmand",
      "WATERSHED": "Khash Rod",
      "DISTRICT": "Washer",
      "AFG_Landcover": [0.0, 3820.23, 79.29, 0.0, 6843.6, 539.37, 118.44, 88.92, 193.5, 431835.75, 20572.92, 2.43, 31243.05],
      "ESA_Landcover": [42.51, 141.32, 70.11, 21503.11, 628.36, 458503.23, 0.0, 40.88, 0.0, 0.0],
      "Cropland": [33.9, 476397.75, 1186.35, 8593.8]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nuristan",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Kunar",
      "DISTRICT": "Waygal",
      "AFG_Landcover": [10728.45, 8.1, 0.81, 38698.83, 251.91, 0.0, 2.43, 0.0, 0.54, 2970.72, 25458.66, 0.0, 4.68],
      "ESA_Landcover": [26109.47, 4680.91, 30290.37, 225.15, 2.08, 6958.42, 113.36, 33.98, 5.56, 10587.08],
      "Cropland": [39.83, 79435.35, 318.68, 81.45]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Hilmand",
      "WATERSHED": "Arghistan",
      "DISTRICT": "Wazakhwa",
      "AFG_Landcover": [0.0, 1526.67, 51.48, 3.69, 5268.06, 70.29, 70.74, 0.63, 354.06, 85163.76, 223408.17, 11.97, 2622.69],
      "ESA_Landcover": [0.45, 1443.36, 1906.28, 8481.02, 36.43, 299896.83, 0.0, 1.41, 0.0, 0.0],
      "Cropland": [629.55, 311756.85, 464.93, 2335.13]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Gomal",
      "DISTRICT": "Wolmamay",
      "AFG_Landcover": [0.0, 662.13, 28.71, 6373.71, 1414.08, 4.05, 68.22, 0.36, 2988.18, 51593.94, 244903.77, 0.0, 5497.29],
      "ESA_Landcover": [192.14, 4790.64, 10830.12, 5663.21, 6.9, 287133.95, 0.0, 10.31, 0.0, 0.0],
      "Cropland": [3026.7, 306411.9, 350.1, 2225.55]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Bamyan",
      "BASIN": "Northern",
      "WATERSHED": "Balkhab",
      "DISTRICT": "Yakawlang",
      "AFG_Landcover": [525.42, 1114.92, 894.51, 25.47, 6847.92, 6387.3, 541.89, 0.0, 2590.92, 10648.98, 591393.78, 0.0, 895.5],
      "ESA_Landcover": [206.83, 3.49, 235781.21, 9041.57, 108.09, 380674.48, 26.11, 794.98, 306.17, 176.93],
      "Cropland": [1079.4, 627204.68, 3235.95, 2480.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Takhar",
      "BASIN": "Amu Darya",
      "WATERSHED": "Ab-i-Rustaq",
      "DISTRICT": "Yangi Qala",
      "AFG_Landcover": [0.0, 5106.24, 1931.49, 306.81, 11827.53, 16456.41, 753.48, 0.0, 2512.71, 21697.92, 53492.31, 0.0, 1537.92],
      "ESA_Landcover": [1716.74, 1673.49, 68733.18, 32725.6, 2725.74, 10586.71, 0.0, 1799.9, 254.61, 0.0],
      "Cropland": [1733.1, 41957.7, 27658.05, 50189.4]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Ghazni",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Zana Khan",
      "AFG_Landcover": [0.0, 238.32, 1.71, 0.63, 44.55, 406.17, 58.95, 0.0, 2.61, 2291.31, 23065.56, 58.77, 117.36],
      "ESA_Landcover": [1.71, 98.74, 3513.97, 1310.05, 15.43, 21174.54, 0.0, 0.67, 0.0, 0.0],
      "Cropland": [0.68, 25325.55, 128.63, 944.85]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Nimroz",
      "BASIN": "Hilmand",
      "WATERSHED": "Sistan-Helmand",
      "DISTRICT": "Zaranj",
      "AFG_Landcover": [0.0, 3196.62, 68.94, 0.0, 3200.04, 0.0, 0.0, 0.0, 13965.48, 57378.33, 262.89, 2294.82, 1397.79],
      "ESA_Landcover": [3.04, 347.41, 50.82, 13415.72, 1578.9, 62611.72, 0.0, 25.37, 25.67, 0.0],
      "Cropland": [81.15, 56641.65, 5502.6, 16688.18]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Zarghun Shahr",
      "AFG_Landcover": [0.0, 1893.51, 21.06, 0.0, 17553.87, 21.78, 322.65, 95.04, 125.46, 46780.83, 103312.26, 0.0, 4355.55],
      "ESA_Landcover": [16.69, 798.32, 2419.21, 29901.33, 207.65, 138305.78, 0.0, 4.67, 0.0, 0.0],
      "Cropland": [4.58, 158568.0, 3707.85, 11253.15]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Badakhshan",
      "BASIN": "Amu Darya",
      "WATERSHED": "Kokcha",
      "DISTRICT": "Zebak",
      "AFG_Landcover": [49770.18, 220.95, 416.61, 35.82, 428.85, 0.72, 31.32, 0.0, 688.32, 68841.81, 63639.63, 0.0, 2031.39],
      "ESA_Landcover": [168.18, 38.73, 14998.04, 275.6, 19.88, 147425.16, 31252.78, 1034.52, 11.28, 8672.71],
      "Cropland": [14223.15, 191481.23, 230.4, 200.25]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktika",
      "BASIN": "Kabul (Indus)",
      "WATERSHED": "Shamal",
      "DISTRICT": "Ziluk",
      "AFG_Landcover": [0.0, 148.86, 0.0, 21588.03, 189.63, 0.0, 78.39, 0.0, 0.0, 339.66, 2684.79, 0.0, 406.44],
      "ESA_Landcover": [8434.13, 2380.48, 11161.14, 354.76, 21.44, 2783.53, 0.0, 0.0, 0.0, 0.0],
      "Cropland": [0.0, 25191.23, 164.1, 56.63]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Hirat",
      "BASIN": "Harirod-Murghab",
      "WATERSHED": "Lower Hari Rod",
      "DISTRICT": "Zinda Jan",
      "AFG_Landcover": [0.0, 2031.3, 188.46, 0.36, 8305.47, 4397.85, 10.89, 1024.47, 1703.97, 129489.93, 57365.55, 1.26, 5695.11],
      "ESA_Landcover": [100.3, 741.56, 3029.09, 16077.66, 188.58, 188339.48, 0.0, 14.84, 0.0, 0.0],
      "Cropland": [8.63, 175098.0, 5089.28, 30583.95]
    },
    {
      "COUNTRY": "Afghanistan",
      "PROVINCE": "Paktya",
      "BASIN": "Hilmand",
      "WATERSHED": "Sardih wa Ghazni Rod",
      "DISTRICT": "Zurmat",
      "AFG_Landcover": [0.0, 1156.5, 96.03, 2737.98, 8784.54, 16.47, 1691.19, 28.26, 45.72, 58224.24, 81015.48, 0.0, 792.27],
      "ESA_Landcover": [50.37, 168.18, 29509.93, 22387.04, 883.85, 100187.67, 0.0, 15.36, 0.0, 0.22],
      "Cropland": [14.63, 131920.43, 5389.8, 17561.55]
    }
   ]