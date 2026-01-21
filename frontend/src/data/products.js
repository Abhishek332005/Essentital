// // data/products.js
// const products = [
//   {
//     id: "prod_001", // ✅ String format mein change karein
//     name: "AQUEAMINA",
//     price: "195.50 - 2660.50",
//     unit: "1kg",
//     image: "/products/AQUEAMINA.png",
//     description: "Minerals & Micro Nutrients Promoter.Enriches pond water nutritional value.Promotes disease resistance.Helps to grow phyto and zoo planktons.Improves fcr increase growth and body weight and disease resistance.Reduce culture period by fast growth..."
//   },
//   {
//     id: "prod_002",
//     name: "BOTTOM SAFE",
//     price: "1062.50",
//     unit: "1kg",
//     image: "/products/Bottom-Safe.png",
//     description: "Keep pond bottom healthy by treating, sludge, removing ammonia, h2s And other toxic gasesReduce algal bloom and keep the pond healthyIncrease beneficial bacteria, improves pond ecosystem Reduces stress, improves immunity & appetite Balance ph. Improves concentration of dissolved oxygen. It helps to grow natural feed and improves f.c.r. & improves in weight gain"
//   },
//   {
//     id: "prod_003",
//     name: "CALCI FISH",
//     price: "892.50",
//     unit: "1kg",
//     image: "/products/CALCI-FISH.png",
//     description: "Improves structural and bone strength. Helps in the buildup of healthy muscles Reduces stress and improves immunity .Improves appetite and helps in gaining body weight."
//   },
//     {
//     id: "prod_004",
//     name: "CLEAR POND",
//     price: "382.50",
//     unit: "1kg",
//     image: "/products/ClearPond.png",
//     description: "Absorbs ammonia, hydrogen sulphide and various toxic gasses from fish pond water.Reduces pathogenic bacterial load Removes bad odour by treating sludge improves ecosystem Increase growth and better immunity"
//   },
//     {
//     id: "prod_005",
//     name: "DO OXY PLUS",
//     price: "1037.00",
//     unit: "1kg",
//     image: "/products/Do.png",
//     description: "RELEASES INSTANT OXYGEN IN WATER, IMPROVES DO LEVEL. REDUCE LOW DO CONDITIONS AND RELIEFS GRASPING OF DISTRESS FISHES REDUCES STRESS AND PREVENTS MORTALITY DUE TO LOW OXYGEN LEVEL REDUCE EFFECT OF TOXIC GASSES INCREASE IN SPAWN PRODUCTION, REDUCES MORTALITY RATE."
//   },
//     {
//     id: "prod_006",
//     name: "EAZY CHUN",
//     price: "233.75",
//     unit: "1kg",
//     image: "/products/EAZY.png",
//     description: "95% PURE FISH LIME Maintains Ph Balance Of Water. Promots Plankton Growth & Maintains Proper Ecosystem. Improves Dissolve Oxygen Concentration Of Water.Promotes High Immunity Of Fishes."},
//     {
//     id: "prod_007",
//     name: "LIV ZYM",
//     price: "1062.50",
//     unit: "1kg",
//     image: "/products/LIV.png",
//     description: "Treats in hepatic liver, liver atrophy, swollen liver, liver necrosis Prevents liver disease or getting affected by toxic elements.Improves digestion, increases in appetite Reduces stress and improves immunity Keeps fish healthy with better f.c.r Helps in body weight gain."
//   },
//     {
//     id: "prod_008",
//     name: "LIV ACTIVE GEL",
//     price: "1317.50",
//     unit: "1kg",
//     image: "/products/LIVACTIVE.png",
//     description: "Acts as a protector to prevent liver damage. Binds all kinds of feed supplements, and probiotics with feed. Improves digestion, increases appetite & improves FCR Increases growth and body weight and disease resistance. Reduce culture period by fast growth"
//   },
//     {
//     id: "prod_009",
//     name: "MEDISAN",
//     price: "331.50",
//     unit: "1kg",
//     image: "/products/MEDISAN.png",
//     description: "Controls bacterial & fungal diseases of fish Effective in the presence of organic load It improves immunity and reduces stress.Treats pathogenically polluted waterNot harmful to spawns, larvae of fish."
//   },
//     {
//     id: "prod_010",
//     name: "PHYTO PRO FS",
//     price: "1889.00",
//     unit: "1kg",
//     image: "/products/PHYTO.png",
//     description: "It helps create phytoplankton or makes green water Creates plankton, natural feed It helps to grow natural feed, improves f.c.r, & improves in weight gain Reduces stress, improves immunity Increase beneficial bacteria, improves pond ecosystem"
//   },
//     {
//     id: "prod_011",
//     name: "PREVENT 80",
//     price: "1889.00",
//     unit: "1kg",
//     image: "/products/PREVENT.png",
//     description: "Effective control of bacterial, and fungal diseases. Of fish. Kills virus, fungi & harmful bacteria. Effective in the presence of organic load. Protects natural eco system & reduces stress. Prevents plankton bloom."
//   },
//     {
//     id: "prod_012",
//     name: "RENO FAST",
//     price: "722.50",
//     unit: "1kg",
//     image: "/products/RENO.png",
//     description: "Effective control of bacterial, and fungal diseases of fish. Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal disease. It improves immunity and reduces stress. Improves appetite"
//   },
//     {
//     id: "prod_013",
//     name: "ROT GUARD",
//     price: "357.00",
//     unit: "1kg",
//     image: "/products/ROT.png",
//     description: "Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal and protozoan disease. Improves immunity and reduces stress.Improves appetite"
//   },
//    {
//     id: "prod_014",
//     name: "SANI FISH",
//     price: "408.00",
//     unit: "1kg",
//     image: "/products/SANI.png",
//     description: "Effective control of bacterial, and fungal diseases of fish. Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal disease. It improves immunity and reduces stress.Improves appetite"
//   },
//    {
//     id: "prod_015",
//     name: "VITEAMIN FS",
//     price: "357.00",
//     unit: "1kg",
//     image: "/products/VITEAMIN.png",
//     description: "VITAMIN – MINERAL SUPPLEMENT Promotes faster growth for fish. Body mass gain in short Better nutrient digestion ability. Higher FRC. Improves stress tolerance.Vitamin – mineral supliment."
//   },
//    {
//     id: "prod_016",
//     name: "WATER SOFT",
//     price: "297.50",
//     unit: "1kg",
//     image: "/products/WATER.png",
//     description: "Reduces hardness and alkalinity. Fights against plankton bloom. Helps to reduce the poisonous effect of water Treat polluted water caused by different types of metals Caused by toxic/poisonous substances.Reduces stress in fish"
//   },
//    {
//     id: "prod_017",
//     name: "YEAST EA",
//     price: "314.50",
//     unit: "1kg",
//     image: "/products/YEAST.png",
//     description: "Enhance growth performance Enhance bowel well-being, immune system Increase in natural food and plankton Reduce bacterial load Improves water quality Improves FCR<BR>"
//   },
//   {
//    id: "prod_018",
//     name: "ZEA - G",
//     price: "1457.50",
//     unit: "1kg",
//     image: "/products/ZEA.png",
//     description: "   Reduces the effect of ammonia, sulfur dioxide, hydrogen sulfide, and other toxic Gases.Improves Water Odour By Treating Sludge. Balance Ph, Improves Concentration Of Dissolve Oxygen.Balance Eco System, Helps In Improves Planktons Reduces Stress, Improves Immunity And Appetite Helps To Release Trapped Toxic Gasses And Improves Pond Bottom Condition"
//   },
//    {
//    id: "prod_019",
//     name: "ZEAPOND",
//     price: "365.50",
//     unit: "1kg",
//     image: "/products/ZEAPOND.png",
//     description: "Reduces the effect of ammonia, sulfur dioxide, hydrogen sulfide, and other toxic gasses.Improves water odor by treating sludge. Balance ph. Improves concentration of dissolved oxygen.Balance ecosystem helps improve plankton Reduces stress, enhances immunity and appetite Helps to release trapped toxic gasses and improves pond bottom condition"
//   },
 
  
  
// ];

// export default products;












// data/products.js
const products = [
  {
    id: "prod_001",
    name: "AQUEAMINA",
    prices: {
      "1kg": 195.50,
      "10kg": 1860.00,
      "20kg": 3610.00
    },
    unit: "1kg",
    image: "/products/AQUEAMINA.png",
    description: "Minerals & Micro Nutrients Promoter.Enriches pond water nutritional value.Promotes disease resistance.Helps to grow phyto and zoo planktons.Improves fcr increase growth and body weight and disease resistance.Reduce culture period by fast growth..."
  },
  {
    id: "prod_002",
    name: "BOTTOM SAFE",
    prices: {
      "1kg": 1062.50,
      "10kg": 10100.00,
      "20kg": 19600.00
    },
    unit: "1kg",
    image: "/products/Bottom-Safe.png",
    description: "Keep pond bottom healthy by treating, sludge, removing ammonia, h2s And other toxic gasesReduce algal bloom and keep the pond healthyIncrease beneficial bacteria, improves pond ecosystem Reduces stress, improves immunity & appetite Balance ph. Improves concentration of dissolved oxygen. It helps to grow natural feed and improves f.c.r. & improves in weight gain"
  },
  {
    id: "prod_003",
    name: "CALCI FISH",
    prices: {
      "1kg": 892.50,
      "10kg": 8480.00,
      "20kg": 16460.00
    },
    unit: "1kg",
    image: "/products/CALCI-FISH.png",
    description: "Improves structural and bone strength. Helps in the buildup of healthy muscles Reduces stress and improves immunity .Improves appetite and helps in gaining body weight."
  },
  {
    id: "prod_004",
    name: "CLEAR POND",
    prices: {
      "1kg": 382.50,
      "10kg": 3650.00,
      "20kg": 7100.00
    },
    unit: "1kg",
    image: "/products/ClearPond.png",
    description: "Absorbs ammonia, hydrogen sulphide and various toxic gasses from fish pond water.Reduces pathogenic bacterial load Removes bad odour by treating sludge improves ecosystem Increase growth and better immunity"
  },
  {
    id: "prod_005",
    name: "DO OXY PLUS",
    prices: {
      "1kg": 1037.00,
      "10kg": 9850.00,
      "20kg": 19120.00
    },
    unit: "1kg",
    image: "/products/Do.png",
    description: "RELEASES INSTANT OXYGEN IN WATER, IMPROVES DO LEVEL. REDUCE LOW DO CONDITIONS AND RELIEFS GRASPING OF DISTRESS FISHES REDUCES STRESS AND PREVENTS MORTALITY DUE TO LOW OXYGEN LEVEL REDUCE EFFECT OF TOXIC GASSES INCREASE IN SPAWN PRODUCTION, REDUCES MORTALITY RATE."
  },
  {
    id: "prod_006",
    name: "EAZY CHUN",
    prices: {
      "1kg": 233.75,
      "10kg": 2220.00,
      "20kg": 4310.00
    },
    unit: "1kg",
    image: "/products/EAZY.png",
    description: "95% PURE FISH LIME Maintains Ph Balance Of Water. Promots Plankton Growth & Maintains Proper Ecosystem. Improves Dissolve Oxygen Concentration Of Water.Promotes High Immunity Of Fishes."
  },
  {
    id: "prod_007",
    name: "LIV ZYM",
    prices: {
      "1kg": 1062.50,
      "10kg": 10100.00,
      "20kg": 19600.00
    },
    unit: "1kg",
    image: "/products/LIV.png",
    description: "Treats in hepatic liver, liver atrophy, swollen liver, liver necrosis Prevents liver disease or getting affected by toxic elements.Improves digestion, increases in appetite Reduces stress and improves immunity Keeps fish healthy with better f.c.r Helps in body weight gain."
  },
  {
    id: "prod_008",
    name: "LIV ACTIVE GEL",
    prices: {
      "1kg": 1317.50,
      "10kg": 12520.00,
      "20kg": 24300.00
    },
    unit: "1kg",
    image: "/products/LIVACTIVE.png",
    description: "Acts as a protector to prevent liver damage. Binds all kinds of feed supplements, and probiotics with feed. Improves digestion, increases appetite & improves FCR Increases growth and body weight and disease resistance. Reduce culture period by fast growth"
  },
  {
    id: "prod_009",
    name: "MEDISAN",
    prices: {
      "1kg": 331.50,
      "10kg": 3150.00,
      "20kg": 6120.00
    },
    unit: "1kg",
    image: "/products/MEDISAN.png",
    description: "Controls bacterial & fungal diseases of fish Effective in the presence of organic load It improves immunity and reduces stress.Treats pathogenically polluted waterNot harmful to spawns, larvae of fish."
  },
  {
    id: "prod_010",
    name: "PHYTO PRO FS",
    prices: {
      "1kg": 1889.00,
      "10kg": 17950.00,
      "20kg": 34840.00
    },
    unit: "1kg",
    image: "/products/PHYTO.png",
    description: "It helps create phytoplankton or makes green water Creates plankton, natural feed It helps to grow natural feed, improves f.c.r, & improves in weight gain Reduces stress, improves immunity Increase beneficial bacteria, improves pond ecosystem"
  },
  {
    id: "prod_011",
    name: "PREVENT 80",
    prices: {
      "1kg": 1889.00,
      "10kg": 17950.00,
      "20kg": 34840.00
    },
    unit: "1kg",
    image: "/products/PREVENT.png",
    description: "Effective control of bacterial, and fungal diseases. Of fish. Kills virus, fungi & harmful bacteria. Effective in the presence of organic load. Protects natural eco system & reduces stress. Prevents plankton bloom."
  },
  {
    id: "prod_012",
    name: "RENO FAST",
    prices: {
      "1kg": 722.50,
      "10kg": 6860.00,
      "20kg": 13320.00
    },
    unit: "1kg",
    image: "/products/RENO.png",
    description: "Effective control of bacterial, and fungal diseases of fish. Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal disease. It improves immunity and reduces stress. Improves appetite"
  },
  {
    id: "prod_013",
    name: "ROT GUARD",
    prices: {
      "1kg": 357.00,
      "10kg": 3390.00,
      "20kg": 6580.00
    },
    unit: "1kg",
    image: "/products/ROT.png",
    description: "Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal and protozoan disease. Improves immunity and reduces stress.Improves appetite"
  },
  {
    id: "prod_014",
    name: "SANI FISH",
    prices: {
      "1kg": 408.00,
      "10kg": 3875.00,
      "20kg": 7520.00
    },
    unit: "1kg",
    image: "/products/SANI.png",
    description: "Effective control of bacterial, and fungal diseases of fish. Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal disease. It improves immunity and reduces stress.Improves appetite"
  },
  {
    id: "prod_015",
    name: "VITEAMIN FS",
    prices: {
      "1kg": 357.00,
      "10kg": 3390.00,
      "20kg": 6580.00
    },
    unit: "1kg",
    image: "/products/VITEAMIN.png",
    description: "VITAMIN – MINERAL SUPPLEMENT Promotes faster growth for fish. Body mass gain in short Better nutrient digestion ability. Higher FRC. Improves stress tolerance.Vitamin – mineral supliment."
  },
  {
    id: "prod_016",
    name: "WATER SOFT",
    prices: {
      "1kg": 297.50,
      "10kg": 2825.00,
      "20kg": 5485.00
    },
    unit: "1kg",
    image: "/products/WATER.png",
    description: "Reduces hardness and alkalinity. Fights against plankton bloom. Helps to reduce the poisonous effect of water Treat polluted water caused by different types of metals Caused by toxic/poisonous substances.Reduces stress in fish"
  },
  {
    id: "prod_017",
    name: "YEAST EA",
    prices: {
      "1kg": 314.50,
      "10kg": 2988.00,
      "20kg": 5800.00
    },
    unit: "1kg",
    image: "/products/YEAST.png",
    description: "Enhance growth performance Enhance bowel well-being, immune system Increase in natural food and plankton Reduce bacterial load Improves water quality Improves FCR"
  },
  {
    id: "prod_018",
    name: "ZEA - G",
    prices: {
      "1kg": 1457.50,
      "10kg": 13850.00,
      "20kg": 26880.00
    },
    unit: "1kg",
    image: "/products/ZEA.png",
    description: "Reduces the effect of ammonia, sulfur dioxide, hydrogen sulfide, and other toxic Gases.Improves Water Odour By Treating Sludge. Balance Ph, Improves Concentration Of Dissolve Oxygen.Balance Eco System, Helps In Improves Planktons Reduces Stress, Improves Immunity And Appetite Helps To Release Trapped Toxic Gasses And Improves Pond Bottom Condition"
  },
  {
    id: "prod_019",
    name: "ZEAPOND",
    prices: {
      "1kg": 365.50,
      "10kg": 3475.00,
      "20kg": 6740.00
    },
    unit: "1kg",
    image: "/products/ZEAPOND.png",
    description: "Reduces the effect of ammonia, sulfur dioxide, hydrogen sulfide, and other toxic gasses.Improves water odor by treating sludge. Balance ph. Improves concentration of dissolved oxygen.Balance ecosystem helps improve plankton Reduces stress, enhances immunity and appetite Helps to release trapped toxic gasses and improves pond bottom condition"
  }
];

export default products;