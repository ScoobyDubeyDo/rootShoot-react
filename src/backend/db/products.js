import { faker } from "@faker-js/faker";

import {
    productOne,
    productTwo,
    productThree,
    productFour,
    productFive,
    productSix,
    productSeven,
    productEight,
    productNine,
    productTen,
    productEleven,
    productTwelve,
    productThirteen,
    productFourteen,
    productFifteen,
} from "./images";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        _id: faker.datatype.uuid(),
        name: "Coffee Plant",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["indoor"],
        imgUrl: productOne,
        prodDesc: [
            "You might be surprised to know the same plant that grows your morning coffee beans is a popular, low-maintenance houseplant! Although it’s unlikely this plant will produce berries inside, its attractive shiny green foliage will liven up any interior space. ",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Money Tree Plant",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["indoor", "bonsai"],
        imgUrl: productTwo,
        prodDesc: [
            "Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk. It is equal parts fuss-free and beautiful. With its braided stems and leaves that grow in sets of 5, the Money Tree makes a great centre piece. Make it a part of your indoor plant cluster or place it in empty room corners to add visual interest.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Philodendron Green",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["indoor"],
        imgUrl: productThree,
        prodDesc: [
            "The indoor house plant that has been in trend for generations now, the Philodendron Oxycardium Green can as well be called the original superstar of the plant world. Large glossy heart shaped leaves, flexible trailing vines that can be styled as you wish and easy and quick growing nature make it a must have. Let it trail on your walls with the help of wire clips or a trellis – and voila, you have yourself a Pinterest worthy wall.",
            "Why is the Philodendron our most popular plant year after year? It could be its heart-shaped green leaves, easy-going nature, or quick-growing trailing vines. Snag this low-maintenance houseplant now to bring life to your space during the winter months ahead.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Bird of Paradise",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["indoor"],
        imgUrl: productFour,
        prodDesc: [
            "With its broad vibrant green leaves, the Bird of Paradise brings a touch of the tropics to any room. It is named after its unique flowers which resemble brightly colored birds in flight. The Bird of Paradise thrives in warmer conditions with plenty of sunlight. Sized to ship best, our large Bird of Paradise arrives with room to grow as it adapts to your home’s conditions.",
            " A cousin of the banana family, it is one of the easier and more tolerant tropical plants to be grown at home. The plant can grow easily anywhere from bright direct light to semi-shade areas to reward you with graceful arching leaves that come out directly from the soil resembling a hand fan.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Snake Plant",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["succulent", "air purifying"],
        imgUrl: productFive,
        prodDesc: [
            "The Snake Plant Laurentii, or Sansevieria trifasciata 'Laurentii', is a succulent plant characterized by its upright sword-like leaves with vibrant yellow edges. It is popular for its incredibly easy-going nature – it can tolerate low light and drought – and its air-purifying capabilities. The easiest way to kill this plant is to overcare for it!",
            "It is an ornamental plant that grows in irregular rosette pattern. It does well in small pots even in low light conditions. It can add beautiful texture and elegance to your homes or even offices.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Swiss cheese plant",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["monstera", "air purifying"],
        imgUrl: productSix,
        prodDesc: [
            "Nicknamed the “swiss cheese plant”, the Monstera deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you.",
            "You might have seen it in a million home décor posts on social media, the absolute reigning king, the Monstera Deliciosa or the Swiss Cheese Plant is a tropical delight with shiny large leaves with fenestrations that make it unlike any plant ever. Its mere presence will add happiness and glamour to your home and it is so easy to care for.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Christmas Cactus",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["cacti", "flowering"],
        imgUrl: productSeven,
        prodDesc: [
            "True to their name, these flat leafed succulents bloom right in time for the holiday season and that too profusely. The pretty pink blooms last well into the new year and when not blooming they make for a pretty foliage plant. Requiring very little care other than bright light, they are excellent for those sunny windows of yours",
            "There’s something wonderfully nostalgic about the Holiday Cactus. Also called the Thanksgiving Cactus, Christmas Cactus, or Easter Cactus—depending on bloom time and leaf shape—the pet-safe Schlumbergera is a favorite winter succulent. This plant ships in different stages of its bloom cycle and can arrive without buds. The color of its flowers vary: pink, red, white, or lavender.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Parlor Palm",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["air purifying"],
        imgUrl: productEight,
        prodDesc: [
            "The Parlor Palm is a favorite easy-care palm with tropical fronds known for its air-purifying qualities.",
            "Once an endangered species, the Areca Palm is a staple in Indian spaces. One of the most undervalued plants in the indoor plant category. This excellent air purifier is pet friendly and easy to grow. Its delicate leaves/fronds grow outwards in a curved manner and add a tropical feel to any space and can adapt to a variety of growing conditions.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Ficus Bonsai",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["bonsai"],
        imgUrl: productNine,
        prodDesc: [
            "The Ficus Bonsai, commonly known as the Weeping Fig or Ficus Tree is a beautiful houseplant which is loved by numerous plant parents. It has a unique curved trunk with dark green, oval leaves making it a brilliant centre piece for your living room or side table. Plant them in shallow but wide pots to show if its magnificent stem and roots.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "White Orchid",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["flowering", "indoor"],
        imgUrl: productTen,
        prodDesc: [
            "Affectionately nicknamed the beginner orchid, the popular Phalaenopsis orchid is one of the easiest varieties of orchids to grow as a houseplant. This orchid will typically bloom once a year for up to three months. Upon delivery, you may notice a small amount of blooms on your orchid – these blooms will open quicker in a warm, indoor setting. After a blooming cycle, the flowers will wilt and fall off and the orchid will store up energy to re-bloom again next season.",
            "The saying “A thing of beauty is a joy forever” has never been truer than in the case of orchids. One of the most exotic flowers to grace our homes, the orchids are finicky in their care but reward you with sweet-smelling flowers that last a long while. These white orchids will turn your home into a winter wonderland in no time.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Pink Orchid",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["flowering", "indoor"],
        imgUrl: productEleven,
        prodDesc: [
            "Add a pop of pink to your tablescape with this popular Phalaenopsis orchid. One of the easiest varieties to grow as a houseplant, it is affectionately called the beginner orchid. You may notice a small amount of blooms on your orchid upon delivery. These blooms will open quicker in a warm indoor setting. It will typically bloom about once a year, for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the orchid’s way to store up energy to re-bloom again next season.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Hoya Heart",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["succulent"],
        imgUrl: productTwelve,
        prodDesc: [
            "What is better than a Heart Hoya? A heart hoya wit beautiful variegations. A slow-growing succulent with heart shaped leaves that are green with yellow creamy margins. The leaves grow in a cluster around the stems. A non-demanding and low-maintenance variety this makes for an excellent gifting option and is also great for new plant parents.",
            "The Hoya kerrii is commonly called the Hoya Heart because of its green heart-shaped leaves. This single leaf cutting is a fun, whimsical way to show your plant love. It is partially rooted but does not have a node. It will stay as an adorable heart-shaped leaf for years to come.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Echeveria Lola",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["succulent", "air purifying"],
        imgUrl: productThirteen,
        prodDesc: [
            "The greenest and cutest member of the “Hens and Chicks” family of succulents, the Sempervivum calcareum variety grows in a happy bunch with numerous offsets that spring up from the mother plant in no time. It grows in neat small colonies in bright sun to proudly show off its dark red tips contrasting with the lemon green leaves. The plant can survive through extreme cold and just needs protection from standing water.",
            "The Echeveria is our equivalent of the rose. This iconic succulent has fleshy drought-tolerant green leaves that grow in a chic rosette shape. It’s the perfect pick-me-up plant for yourself or a friend. ",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Broken Heart Plant",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["monstera", "air purifying"],
        imgUrl: productFourteen,
        prodDesc: [
            "One of the most popular houseplants, this easy growing plant with its heart shaped leaves that have holes in the leaf blade is a crowd favourite. Quick to grow with delicate trailing vines that can be styled for every space, the Philodendron broken heart will add an instant tropical feel and charm to your space. The Swiss Cheese Plant also boasts soft yet resilient stems that can be trained to climb, hang, or trail.",
        ],
    },
    {
        _id: faker.datatype.uuid(),
        name: "Adanson's monstera",
        rating: faker.datatype.number({ min: 1, max: 5 }),
        price: faker.datatype.number({ min: 240, max: 1599 }),
        type: ["monstera"],
        imgUrl: productFifteen,
        prodDesc: [
            "Monstera Adansonii are known for their lacy green leaves, covered with natural leaf-holes called fenestrations. The Adanson's monstera also boasts soft yet resilient stems that can be trained to climb, hang, or trail. Sized to ship best, our large Monstera Adansonii arrives with room to grow as it adapts to your home’s conditions.",
        ],
    },
];
