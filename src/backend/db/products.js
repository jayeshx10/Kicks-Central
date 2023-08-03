import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "SAMBA DECON CLOUD WHITE/GREY ONE",
    brand: "Adidas Originals",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166148/images/AdidasOriginals_SambaDeconCloud_kwghal.png",
    about:
      "The adidas Samba shoes take on a deconstructed aesthetic without missing a beat in style. These shoes reflect a rich legacy with their timeless design. From the feet of football athletes to the high-fashion runways, the adidas Samba shoes embody self-expression and effortless style. The iconic details of the 3-Stripes and T-shaped toe box speak for themselves. Add this versatile option to your rotation to energise your wardrobe.",
    price: 19999,
    quantity: 1,
    rating: 5,
    categoryName: "sneakers",
  },
  {
    _id: uuid(),
    name: "GAZELLE 85 GREEN/WHITE/METALLIC",
    brand: "Adidas Originals",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166148/images/AdidasOriginals_Gazelle_85_bls11f.png",
    about:
      "The thing about timeless style is just that: It isn't bound by time. The adidas Gazelle shoes prove it, stepping with the same cool confidence now as they did when they debuted. This pair draws design inspiration from the 1985 archive with a modern update to bold colors that were just as loved back then. Signature details show up strong with metallic-gold branding, serrated 3-Stripes and of course that classic low-cut silhouette.",
    price: 12999,
    quantity: 1,
    rating: 4.2,
    categoryName: "sneakers",
  },
  {
    _id: uuid(),
    name: "OZWEEGO 'MAGIC BEIGE/CLAY STRATA/SAND STRATA'",
    brand: "Adidas Originals",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166148/images/Adidas_OzweegoMagic_jxbo0c.png",
    about:
      "A CHUNKY TRAINER THAT BLENDS STYLE AND COMFORT. Step into the '90s with modern comfort. The adidas OZWEEGO shoes bring ultimate comfort with an EVA midsole with Adiprene and Adiprene+. Premium leather and suede paneling on the textile upper mirrors the sculpted sole for a cohesive dynamic shape in the classic OZWEEGO style. Keep your feet happy and your look bold when you add these to your rotation.",
    price: 13999,
    quantity: 1,
    rating: 3.9,
    categoryName: "sneakers",
  },
  {
    _id: uuid(),
    name: "ADIFOM SUPERSTAR 'CORE WHITE/BLACK'",
    brand: "Adidas Originals",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166148/images/AdidasOrignals_AdiofomSuperstar_j0tazv.png",
    about:
      "The adidas Superstar shoes are entering the metaverse, thanks to this unique expression of the shell-toe silhouette. This chunky, slip-on version is built with foam material made in part from sugarcane, to create a one-of-a-kind design. Step at once into the forefront of sustainability and the future of fashion. These shoes are made with natural and renewable materials as part of our journey to design out finite resources and help end plastic waste.",
    price: 7999,
    quantity: 1,
    rating: 4.6,
    categoryName: "sneakers",
  },
  {
    _id: uuid(),
    name: "AIR JORDAN 2 RETRO LOW 'WHITE/UNIVERSITY BLUE-CEMENT GREY'",
    brand: "Jordan",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166149/images/Jordan_AirJordan_2_RetroLow_ti4qdp.png",
    about:
      "Wear a shoe with over 30 years of legacy that remains fresh to this day. Making its debut in 1986, the AJ2 was the cool younger sibling of its famous predecessor—a sleeker and more pared-down version of the iconic AJ1. With premium leather and an Air-Sole unit underfoot, this throwback serves the ultimate combo of wearability and style.",
    price: 14995,
    quantity: 1,
    rating: 4.1,
    categoryName: "basketball",
  },
  {
    _id: uuid(),
    name: "AIR JORDAN 7 'WHITE INFRARED'",
    brand: "Jordan",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166149/images/Jordan_AirJordan7_lx5xuc.png",
    about:
      "Run it back and reconnect with sneaker lore. Keeping true to the AJ7's original allure, this edition keeps everything that made it an international sensation: the embroidered Jumpman, retro 23 logo on the heel and that flawless foot-hugging fit. We upped the appeal with an iced outsole and bursts of iconic Infrared, too. But you didn't need any more validation—these kicks were always fire.",
    price: 18395,
    quantity: 1,
    rating: 3.5,
    categoryName: "basketball",
  },
  {
    _id: uuid(),
    name: "AIR JORDAN 6 RETRO 'VARSITY RED/BLACK'",
    brand: "Jordan",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166149/images/Jordan_AirJordan_6_Retro_kz5iki.png",
    about:
      "MJ's sixth signature shoe debuted during the 1990-1991 season as His Airness battled rivals in pursuit of an elusive first championship. Now, it's back in a variety of color schemes. Gear up for the 30th anniversary of the Air Jordan 6 with this timeless classic.",
    price: 18395,
    quantity: 1,
    rating: 3.7,
    categoryName: "basketball",
  },
  {
    _id: uuid(),
    name: "AIR FORCE 1 MID '07 LV8 'SUMMIT WHITE/BLACK-STADIUM GREEN'",
    brand: "Nike",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166150/images/Nike_AirForce1_Mid_07_izecuk.png",
    about:
      "The radiance lives on in the Air Force 1 ’07. This b-ball original offers a fresh look with stitched overlays, crisp leather and the perfect amount of color. Color blocking on the sole and Swooshes combines with mismatched logos for a look that's part retro, part modern and all you.",
    price: 11895,
    quantity: 1,
    rating: 4.2,
    categoryName: "basketball",
  },
  {
    _id: uuid(),
    name: "AIR JORDAN 5 RETRO SE CRAFT 'LT OREWOOD BRN/SAFETY ORANGE-FLAT PEWTER'",
    brand: "Jordan",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166149/images/Jordan_AirJordan_5_RetroSE_x484ye.png",
    about:
      "Bring some pop to your look with the AJ5, the shoe that's recognizably cool. All the original elements are here: lace toggles, premium leather and that unmissable midsole. Updated with new colors and textures, here's a shoe that keeps every look fresh.",
    price: 19295,
    quantity: 1,
    rating: 3.4,
    categoryName: "basketball",
  },
  {
    _id: uuid(),
    name: "FORUM MOD LOW 'CLOUD WHITE/BEIGE'",
    brand: "Adidas Originals",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166148/images/AdidasOriginals_ForumModLow_Cloud_mfh14p.png",
    about:
      "The adidas Forum Mod shoes deliver playful expression and creativity with a nod to progressive design. This pair takes on sustainable vegan materials and is made in part with recycled materials to keep our environment in mind. The core elements still remain from the serrated 3-Stripes to the classic X-panel. An elongated midsole counter and midsole plugs add to the redefined look while energetic colour blocks keep style at the forefront. To reduce our reliance on virgin materials, we make sure that our vegan alternatives also contain a minimum of 25% recycled content.",
    price: 10999,
    quantity: 1,
    rating: 4.4,
    categoryName: "classics",
  },
  {
    _id: uuid(),
    name: "GAZELLE 'DARK SLATE/OFF WHITE/CORE BLACK'",
    brand: "Adidas Originals",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166149/images/AdidasOrignals_Gazelle_Dark_nvepav.png",
    about:
      "The adidas Gazelle shoes are back in their 1991 form. From the premium suede upper to the signature 3-Stripes and heel tab, these trainers are never in short supply of fresh looks. This iteration shows off a barrage of Trefoils on the upper. The 3-Stripes are bold as ever, with contrast zigzag stitching to complement the midsole. With so much attention to detail, you won't need to worry about looking your best.",
    price: 10999,
    quantity: 1,
    rating: 5,
    categoryName: "classics",
  },
  {
    _id: uuid(),
    name: "CHUCK 70 PLUS CANVAS 'WHITE'",
    brand: "Converse",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166149/images/Converse_Chuck70PlusCanvas_qmi9bf.png",
    about:
      "High-top sneaker with upper made from about 50% recycled 12oz and 16oz canvas. OrthoLite cushioning for all-day comfort. An asymmetrical, fused design and elongated tongue for standout style. A split rubber outsole distorts heritage Chuck Taylor design elements. A spliced Chuck Taylor ankle patch",
    price: 6995,
    quantity: 1,
    rating: 4,
    categoryName: "classics",
  },
  {
    _id: uuid(),
    name: "CHUCK TAYLOR ALL STAR LIFT SEASONAL COLOR 'YELLOW'",
    brand: "Converse",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166149/images/Converse_ChuckTaylor_AllStar_zvk0oh.png",
    about:
      "The double sole enhances the legendary look of the ankle sneaker. New upbeat colorways evoke a cheery spring vibe, while Chuck Taylor staples such as the checkered sole and contrasting stripes on the midsole represent proven style.",
    price: 4999,
    quantity: 1,
    rating: 4.3,
    categoryName: "skateboard",
  },
  {
    _id: uuid(),
    name: "CLASSIC LEATHER 'VECTOR RED/VECTOR BLUE/WHITE'",
    brand: "Reebok",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166150/images/Reebok_ClassicLeather_Vector_abfbrc.png",
    about:
      "These Reebok Classic Leather shoes bring it all together. The iconic Reebok Vector will turn 30, so it's embroidered on the heel tab. An embroidered Classic Leather on the tongue lets the world know which icon you're wearing. Hits of '90s color gives you the final signoff.",
    price: 7999,
    quantity: 1,
    rating: 2.3,
    categoryName: "classics",
  },
  {
    _id: uuid(),
    name: "AMI RIDER FV 'FADED DENIM'",
    brand: "Puma",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166150/images/Puma_AmiRider_FV_Faded_nvplpm.png",
    about:
      "These Rider FV sneakers from the second season of PUMA x AMI are guided by the creative vision of the Parisian label, finding the balance between relaxed and refined, amiable and edgy, streetwear and sportswear - just like every item from season one.",
    price: 7999,
    quantity: 1,
    rating: 3.1,
    categoryName: "classics",
  },
  {
    _id: uuid(),
    name: "ADILETTE 22 'TECH PURPLE'",
    brand: "Adidas Originals",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166148/images/Adidas_Adilette22_o2ypcf.png",
    about:
      "For the design of these adidas slides we looked to topographic maps illustrating expeditions to Mars and the dimensional stages of a new planet. And the futuristic vibes don't end there. They're built with material made in part from sugarcane, one step on the road to a more sustainable future. Wear them on diverse terrain from wet to dry. These slides are made with natural and renewable materials as part of our journey to design out finite resources and help end plastic waste.",
    price: 7999,
    quantity: 1,
    rating: 3.8,
    categoryName: "slides",
  },
  {
    _id: uuid(),
    name: "BLAZER MID'77 VINTAGE 'BLACK/WHITE'",
    brand: "Nike",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166150/images/Nike_BlazerMid_77_Vintage_g5ekep.png",
    about:
      "In the ’70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid ’77 Vintage—classic from the beginning.",
    price: 7495,
    quantity: 1,
    rating: 4.9,
    categoryName: "classics",
  },
  {
    _id: uuid(),
    name: "DUNK LOW RETRO PREMIUM 'BLACK/BLACK-SAIL'",
    brand: "Nike",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166150/images/Nike_DunkLowRetro_daasnh.png",
    about:
      "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with premium materials that take your style to the next level. Its padded, low-cut collar lets you take your game anywhere—in comfort.",
    price: 9995,
    quantity: 1,
    rating: 5,
    categoryName: "skateboard",
  },
  {
    _id: uuid(),
    name: "SK8 LOW 'GREEN/WHITE'",
    brand: "Vans",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166151/images/Vans_SK8Low_auci2n.png",
    about:
      "The Sk8-Low, a takedown of the legendary Vans high top shoe, is built with an array of colors and materials to provide a familiar Sk8-Hi aesthetic in a low top shoe. Featuring sturdy canvas and suede uppers just like its taller counterpart, this lace-up style also includes re-enforced toe caps, supportive padded collars, and signature rubber waffle outsoles.",
    price: 5099,
    quantity: 1,
    rating: 3.1,
    categoryName: "skateboard",
  },
  {
    _id: uuid(),
    name: "X LARGE X CROCS CLASSIC CLOG 'CAMO'",
    brand: "Crocs",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166149/images/Crocs_ClassicClogs_qjdwzg.png",
    about:
      "XLARGE, a pioneer of streetwear culture born in Los Angeles in 1991, has presented a unique perspective of 'expressing practical wear as fashion, not everyday wear,' and by fusing various cultures, has created original fashion styles The collaboration is the first time Crocs has partnered with XLARGE.",
    price: 7195,
    quantity: 1,
    rating: 1.5,
    categoryName: "slides",
  },
  {
    _id: uuid(),
    name: "OFFCOURT ADJUST 'SUMMIT WHITE/SUMMIT WHITE-BLACK'",
    brand: "Nike",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166150/images/Nike_OffcourtAdjust_Summit_ld2gro.png",
    about:
      "Post game, errands and more—adjust your comfort on the go. The adjustable, padded strap lets you perfect your fit, while the lightweight foam midsole brings first-class comfort to your feet.",
    price: 3095,
    quantity: 1,
    rating: 5,
    categoryName: "slides",
  },
  {
    _id: uuid(),
    name: "ONEONTA NEXT NATURE 'NEUTRAL OLIVE/CARGO KHAKI-MEDIUM OLIVE'",
    brand: "Nike",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166150/images/Nike_OneontaNextNature_rnc7gy.png",
    about:
      "From trails to rivers to trees, these lightweight, durable sandals are ready to make adventuring fun with special thanks to their rugged tread. The Oneonta name honors the majestic falls that flow near the Columbia River in Oregon (Nike's home state). Strap in and quickly personalize your fit with an elastic cord and cinch on the heel—then get wilding.",
    price: 4499,
    quantity: 1,
    rating: 3.6,
    categoryName: "sandals",
  },
  {
    _id: uuid(),
    name: "AIR MAX CIRRO 'PHOTON DUST/UNIVERSITY RED-OBSIDIAN'",
    brand: "Nike",
    imgUrl:
      "https://res.cloudinary.com/dlvilwngl/image/upload/v1689166150/images/Nike_AirMax_Cirro_PhotonDust_m61w7z.png",
    about:
      "Whether you're hitting the gym or headed to the store, we've created a perfect go-between that delivers quick style and incredible comfort. Large, visible Air in the heel pairs with a comfy foam footbed for a striking statement in comfort.",
    price: 3999,
    quantity: 1,
    rating: 5,
    categoryName: "slides",
  },
];
