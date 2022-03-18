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
        _id: faker.datatype.uuid(),
        categoryName: "indoor",
        displayImg: productOne,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "cacti",
        displayImg: productSeven,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "bonsai",
        displayImg: productNine,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "monstera",
        displayImg: productFourteen,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "flowering",
        displayImg: productTen,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "air purifying",
        displayImg: productEight,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "succulent",
        displayImg: productThirteen,
    },
];
