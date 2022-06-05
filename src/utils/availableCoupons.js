import faker from "@faker-js/faker";

export const availableCoupons = [
	{
		id: faker.datatype.uuid(),
		code: "MEGAUSER",
		description: "Get ₹500 off if you spend above ₹4000",
		minimumPrice: 4000,
		discount: 500,
	},
	{
		id: faker.datatype.uuid(),
		code: "SEEDLING",
		description: "Get 10% off on your every buy",
		minimumPrice: 0,
		discountPercentage: 10,
	},
	{
		id: faker.datatype.uuid(),
		code: "GROWER",
		description: "Get 15% off if you spend above ₹2000",
		minimumPrice: 2000,
		discountPercentage: 15,
	},
	{
		id: faker.datatype.uuid(),
		code: "SUPERUSER",
		description: "Flat ₹1000 off on purchase of 5000 or above",
		minimumPrice: 5000,
		discount: 1000,
	},
	{
		id: faker.datatype.uuid(),
		code: "SEEDER",
		description: "Buy plants worth ₹700 and get 5% off",
		minimumPrice: 700,
		discount: 400,
	},
];
