module.exports = {
  km: {
    km: 1,
    ml: 0.621371,
    m: 1000,
    cm: 100000,
    mm: 1e6,
    yd: 1093.61,
    ft: 3280.83,
    in: 39370.1,
    nm: 0.5399570950324,
  },
  ml: {
    km: 1.60934,
    ml: 1,
    m: 1609.34,
    cm: 160934,
    mm: 1.609e6,
    yd: 1760,
    ft: 5280,
    in: 63360,
    nm: 0.868976,
  },
  m: {
    km: 0.001,
    ml: 0.000621371,
    m: 1,
    cm: 100,
    mm: 1000,
    yd: 1.09361,
    ft: 3.28084,
    in: 39.3701,
    nm: 0.000539957,
  },
  cm: {
    km: 1e-5,
    ml: 6.2137e-6,
    m: 0.01,
    cm: 1,
    mm: 10,
    yd: 0.0109361,
    ft: 0.0328084,
    in: 0.393701,
    nm: 5.3996e-6,
  },
  mm: {
    km: 1e-6,
    ml: 6.2137e-7,
    m: 0.001,
    cm: 0.1,
    mm: 10,
    yd: 0.0109361,
    ft: 0.0328084,
    in: 0.393701,
    nm: 5.3996e-6,
  },
  yd: {
    km: 0.0009144,
    ml: 0.000568182,
    m: 0.9144,
    cm: 91.44,
    mm: 914.4,
    yd: 1,
    ft: 3,
    in: 36,
    nm: 0.000493737,
  },
  ft: {
    km: 0.0003048,
    ml: 0.000189394,
    m: 0.3048,
    cm: 30.48,
    mm: 304.8,
    yd: 0.333333,
    ft: 1,
    in: 12,
    nm: 0.000164579,
  },
  in: {
    km: 2.54e-5,
    ml: 1.5783e-5,
    m: 0.0254,
    cm: 2.54,
    mm: 25.4,
    yd: 0.0277778,
    ft: 0.0833334,
    in: 1,
    nm: 1.3715e-5,
  },
  nm: {
    km: 1.852,
    ml: 1.15078,
    m: 1852,
    cm: 185200,
    mm: 1.852e6,
    yd: 2025.37,
    ft: 6076.12,
    in: 72913.4,
    nm: 1,
  },
  c: {
    c: 1,
    f: (a) => {
      return (a * 9) / 5 + 32;
    },
    k: (a) => {
      return a + 273.15;
    },
  },
  f: {
    c: (a) => {
      return ((a - 32) * 5) / 9;
    },
    f: 1,
    k: (a) => {
      return ((a - 32) * 5) / 9 + 273.15;
    },
  },
  k: {
    c: (a) => {
      return a - 273.15;
    },
    f: (a) => {
      return ((a - 273.15) * 9) / 5 + 32;
    },
    k: 1,
  },

  km2: {
    km2: 1,
    m2: 1e6,
    ml2: 0.386102,
    yd2: 1.196e6,
    ft2: 1.076e7,
    in2: 1.55e9,
    ha: 100,
    a: 247.105,
  },

  m2: {
    km2: 1e-6,
    m2: 1,
    ml2: 3.861e-7,
    yd2: 1.19599,
    ft2: 10.7639,
    in2: 1550,
    ha: 1e-4,
    a: 0.000247105,
  },
  ml2: {
    km2: 2.58999,
    m2: 2.59e6,
    ml2: 0.836127,
    yd2: 3.098e6,
    ft2: 2.788e7,
    in2: 4.014e9,
    ha: 258.999,
    a: 640,
  },
  yd2: {
    km2: 8.3613e-7,
    m2: 0.836127,
    ml2: 0.386102,
    yd2: 1,
    ft2: 9,
    in2: 1296,
    ha: 8.3613e-5,
    a: 0.000206612,
  },
  ft2: {
    km2: 9.2903e-8,
    m2: 0.092903,
    ml2: 3.587e-8,
    yd2: 0.111111,
    ft2: 1,
    in2: 144,
    ha: 9.2903e-6,
    a: 2.2957e-5,
  },
  in2: {
    km2: 6.4516e-10,
    m2: 0.00064516,
    ml2: 2.491e-10,
    yd2: 0.000771605,
    ft2: 0.00694444,
    in2: 1,
    ha: 6.4516e-8,
    a: 1.5942e-7,
  },
  ha: {
    km2: 0.01,
    m2: 10000,
    ml2: 0.00386102,
    yd2: 11959.9,
    ft2: 107639,
    in2: 1.55e7,
    ha: 1,
    a: 2.47105,
  },
  a: {
    km2: 0.00404686,
    m2: 4046.86,
    ml2: 0.0015625,
    yd2: 4840,
    ft2: 43560,
    in2: 6.273e6,
    ha: 0.404686,
    a: 1,
  },

  l: {
    l: 1,
    m3: 0.001,
    in3: 61.0237,
    ft3: 0.0353147,
    "fl oz": 33.814,
    pt: 1.75975,
    gal: 0.264172,
    mll: 1000,
  },

  m3: {
    l: 1000,
    m3: 1,
    in3: 61023.7,
    ft3: 35.3147,
    "fl oz": 33814,
    pt: 1759.752807358,
    gal: 264.17187536294363781,
    mll: 999999.33000026619993,
  },

  in3: {
    l: 0.0163871,
    m3: 1.6387e-5,
    in3: 1,
    ft3: 0.000578704,
    "fl oz": 0.576744,
    pt: 0.0288372,
    gal: 0.004329,
    mll: 16.3871,
  },
  ft3: {
    l: 28.3168,
    m3: 0.0283168,
    in3: 1728,
    ft3: 1,
    "fl oz": 996.614,
    pt: 49.8307,
    gal: 7.48052,
    mll: 28316.8,
  },
  "fl oz": {
    l: 0.0284131,
    m3: 2.8413e-5,
    in3: 1.73387,
    ft3: 0.0010034,
    "fl oz": 1,
    pt: 0.05,
    gal: 0.00750594,
    mll: 28.4131,
  },
  pt: {
    l: 0.568261,
    m3: 0.000568261,
    in3: 34.6774,
    ft3: 0.020068,
    "fl oz": 20,
    pt: 1,
    gal: 0.150119,
    mll: 568.261,
  },
  gal: {
    l: 3.78541,
    m3: 0.00378541,
    in3: 231,
    ft3: 0.133681,
    "fl oz": 133.228,
    pt: 6.66139,
    gal: 1,
    mll: 3785.41,
  },
  mll: {
    l: 0.001,
    m3: 1e-6,
    in3: 0.0610237,
    ft3: 3.5315e-5,
    "fl oz": 0.0351951,
    pt: 0.00175975,
    gal: 0.000264172,
    mll: 1,
  },

  kg: {
    kg: 1,
    mg: 1e6,
    g: 1000,
    t: 0.000984207,
    oz: 35.274,
    lb: 2.20462,
    s: 0.157473,
  },

  mg: {
    kg: 1e-6,
    mg: 1,
    g: 0.001,
    t: 9.8421e-10,
    oz: 3.5274e-5,
    lb: 2.2046e-6,
    s: 1.5747e-7,
  },

  g: {
    kg: 0.001,
    mg: 1000,
    g: 1,
    t: 9.8421e-7,
    oz: 0.035274,
    lb: 0.00220462,
    s: 0.000157473,
  },

  t: {
    kg: 1016.05,
    mg: 1.016e9,
    g: 1.016e6,
    t: 1,
    oz: 35840,
    lb: 2240,
    s: 160,
  },

  oz: {
    kg: 0.0283495,
    mg: 28349.5,
    g: 28.3495,
    t: 2.7902e-5,
    oz: 1,
    lb: 0.0625,
    s: 0.00446429,
  },
  lb: {
    kg: 0.453592,
    mg: 453592,
    g: 453.592,
    t: 0.000446429,
    oz: 16,
    lb: 1,
    s: 0.0714286,
  },

  s: {
    kg: 6.35029,
    mg: 6.35e6,
    g: 6350.29,
    t: 0.00625,
    oz: 224,
    lb: 14,
    s: 1,
  },
};
