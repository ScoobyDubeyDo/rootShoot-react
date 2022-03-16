import faker from "@faker-js/faker";

import {
    productOne,
    productSeven,
    productNine,
    productTen,
    productThirteen,
    productFourteen,
    productEight,
} from "./images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
    {
        id: faker.datatype.uuid(),
        categoryName: "indoor",
        displayImg: productOne,
    },
    {
        id: faker.datatype.uuid(),
        categoryName: "cacti",
        displayImg: productSeven,
    },
    {
        id: faker.datatype.uuid(),
        categoryName: "bonsai",
        displayImg: productNine,
    },
    {
        id: faker.datatype.uuid(),
        categoryName: "monstera",
        displayImg: productFourteen,
    },
    {
        id: faker.datatype.uuid(),
        categoryName: "flowering",
        displayImg: productTen,
    },
    {
        id: faker.datatype.uuid(),
        categoryName: "air purifying",
        displayImg: productEight,
    },
    {
        id: faker.datatype.uuid(),
        categoryName: "succulent",
        displayImg: productThirteen,
    },
];
