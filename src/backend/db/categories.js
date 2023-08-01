import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "sneakers"
    
  },
  {
    _id: uuid(),
    categoryName: "basketball"
  },
  {
    _id: uuid(),
    categoryName: "classics"
  },
  {
    _id: uuid(),
    categoryName: "skateboard"
  },
  {
    _id: uuid(),
    categoryName: "slides"
  },
  {
    _id: uuid(),
    categoryName: "sandals"
  }
];
