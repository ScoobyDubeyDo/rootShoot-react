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
        imgUrl: productOne,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "cacti",
        imgUrl: productSeven,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "bonsai",
        imgUrl: productNine,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "monstera",
        imgUrl: productFourteen,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "flowering",
        imgUrl: productTen,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "air purifying",
        imgUrl: productEight,
    },
    {
        _id: faker.datatype.uuid(),
        categoryName: "succulent",
        imgUrl: productThirteen,
    },
];
