import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses: [
      "Flat 303, Classique Apartments, Chembur, Maharashtra, 400074",
      "Plot No. 101, Anand Nagar, Dehradun, Uttarakhand, 100201",
      "63, Bholenath Residency, Collector's Colony, Chembur, Maharashtra, 101000",
    ],
  },
];
