const products = [
  {
    _id: "1dsfs",
    img: "/image/1.jpg",
    brand: "HP",
    model: "3453lkd",
    price: 1900,
    rating: 12,
    processor: "12th Gen Intel Core i5-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
  {
    _id: "1234ds",
    img: "/image/2.jpg",
    brand: "HP",
    model: "3453l234kd",
    price: 1999,
    rating: 12,
    processor: "12th Gen Intel Core i7-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
  {
    _id: "1sd33",
    img: "/image/3.jpg",
    brand: "HP",
    model: "3453ldsfkd",
    price: 2299,
    rating: 12,
    processor: "12th Gen Intel Core i8-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
  {
    _id: "1dsf23s",
    img: "/image/4.jpg",
    brand: "HP",
    model: "3453lkd",
    price: 1900,
    rating: 12,
    processor: "12th Gen Intel Core i5-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
  {
    _id: "123412ds",
    img: "/image/5.jpg",
    brand: "HP",
    model: "3453l234kd",
    price: 1999,
    rating: 12,
    processor: "12th Gen Intel Core i7-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
  {
    _id: "1sd3232",
    img: "/image/6.jpg",
    brand: "HP",
    model: "3453ldsfkd",
    price: 2299,
    rating: 12,
    processor: "12th Gen Intel Core i8-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
  {
    _id: "1dsfsd32s",
    img: "/image/7.jpg",
    brand: "HP",
    model: "3453lkd",
    price: 1900,
    rating: 12,
    processor: "12th Gen Intel Core i5-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
  {
    _id: "1234gfe32ds",
    img: "/image/8.jpg",
    brand: "HP",
    model: "3453l234kd",
    price: 1999,
    rating: 12,
    processor: "12th Gen Intel Core i7-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
  {
    _id: 9,
    img: "/image/9.jpg",
    brand: "HP",
    model: "3453ldsfkd",
    price: 2299,
    rating: 12,
    processor: "12th Gen Intel Core i8-1245U",
    os: "Windows 11 Pro",
    Graphics: "Intel iris Xe Graphics",
    memory: "16, 32, 64 GB",
    storage: 512,
  },
];

export function getProduct() {
  return products;
}

export function getProduct(id) {
  const product = products.find((p) => p._id === id);
  if (!product)
    return console.log("Error 400: bad request...\nProduct is not found!");

  return product;
}
getProduct(9);

export function addProduct(product) {
  const newproduct = products.push(product);
  const listofproducts = [...products, newproduct];
  console.log("list of products", listofproducts);
  return listofproducts;
}
addProduct({
  _id: "1sdsdfwewe3",
  img: "/image/9.jpg",
  brand: "macbook pro",
  model: "3453ldsfkd",
  price: 879879,
  rating: 12,
  processor: "12th Gen Intel Core i8-1245U",
  os: "Windows 11 Pro",
  Graphics: "Intel iris Xe Graphics",
  memory: "16, 32, 64 GB",
  storage: 512,
});

export function updateProduct(product) {
  const index = products.filter((p) => p._id === product._id);
  if (!index)
    return console.log("Error 400: bad request...\nProduct is not found!");

  const listofproducts = [...products];
  listofproducts.indexOf;

  console.log("list of products", listofproducts);
  return listofproducts;
}
export function deleteProduct(id) {
  const productInDb = products.find((p) => p._id === id);
  if (!productInDb)
    return console.log("Error 400: bad request...\nProduct is not found!");

  const delproduct = products.splice(products.indexOf(productInDb));

  return products;
}
deleteProduct("1sdsdfwewe3");
