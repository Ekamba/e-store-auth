const ProductData = [
  {
    id: 1,
    name: "ReactProX",
    price: 9000,
    image: require("../../assets/products/oneplus9pro.jpeg"),
    description:
      'A latest  smartphone having 16.55cm (6.5") HD+ Infinity-V display with a resolution of 1440 x 2560 pixels at a pixel density of 458 pixels per inch (ppi) and a screen-to-body ratio of 73.5%.',
  },
  {
    id: 2,
    name: "HomeDecor Rugs",
    price: 5000,
    image: require("../../assets/products/homeDecore.jpeg"),
    description:
      "Hand-tufted from a blend of cotton, polyester and wool, the rug is made with a soft, smooth and durable material. The rug is made with a soft, smooth and durable material. The rug is made with a soft, smooth and durable material.",
  },
  {
    id: 3,
    name: "Battery",
    price: 1000,
    image: require("../../assets/products/battery_plane.jpeg"),
    description:
      "Saisha collection airplane toys for 1234567 years old. The airplane is made of plastic and has a plastic cover. The airplane is made of plastic and has a plastic cover. The airplane is made of plastic and has a plastic cover.",
  },
];

export const getProductData = () => {
  return ProductData;
};

export const getProductById = (id) => {
  return ProductData.find((product) => product.id === id);
};
