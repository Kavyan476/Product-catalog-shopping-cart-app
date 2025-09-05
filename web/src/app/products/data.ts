export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Headphones",
    image: "/product1.jpg",
    description: "Head speakers with a 3.5mm TRS connector",
    price: 9.99,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    image: "/product_2.jpg",
    description: "Wireless over-ear headphones with noise cancellation",
    price: 15,
  },
  {
    id: 3,
    name: "Wireless Mouse",
    image: "/product_3.jpg",
    description: "wireless mouse with ergonomic design",
    price: 39.99,
  },
    {
    id: 4,
    name: "Keyboard",
    image: "/product_4.jpg",
    description: "keyboard with backlit keys",
    price: 19.99,
  },
  {
    id: 5,
    name: "Monitor",
    image: "/product_5.jpg",
    description: "27-inch 4K UHD monitor",
    price: 99.99,
  },
  {
    id: 6,
    name: "Power Bank",
    image: "/product_6.jpg",
    description: "power bank with USB charging",
    price: 34.99,
  },
    {
    id: 7,
    name: "iphone12 pro max case",
    image: "/product_7.jpg",
    description: "iphone12 pro max case",
    price: 9.99,
  },
  {
    id: 8,
    name: "iphone case",
    image: "/product_8.jpg",
    description: "iphone case cyan color",
    price: 19.99,
  },
  {
    id: 9,
    name: "Mouse Pad",
    image: "/product_9.jpg",
    description: "mouse pad with backlit keys",
    price: 39.99,
  },
    {
    id: 10,
    name: "Mouse with mouse pad",
    image: "/product_10.jpg",
    description: "Mouse with mouse pad",
    price: 19.99,
  },
  {
    id: 11,
    name: "Dell Mouse",
    image: "/product_11.jpg",
    description: "Dell Mouse wireless mouse with ergonomic design",
    price: 29.99,
  }
];
