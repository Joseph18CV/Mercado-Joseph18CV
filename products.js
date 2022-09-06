const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

const ulFruits = document.querySelector(".fruits ul")
const ulDrinks = document.querySelector(".drinks ul")
const ulHygiene = document.querySelector(".hygiene ul")

function createElementList (list) {
  for (let i = 0; i < list.length; i++){

  const li = document.createElement("li")
        li.classList.add("product")

  let img = document.createElement("img")
      img.classList.add("product-img")
      img.src = (list[i].image === undefined) ? "./img/products/no-img.svg" : list[i].image;

  let main = document.createElement("main")
      main.classList.add("product-main")
      let h1 = document.createElement("h1")
          h1.classList.add("product-title")
          h1.innerText = `${list[i].title}`
      let h5 = document.createElement("h5")
          h5.classList.add("product-category")
          h5.innerText = `${list[i].category}`
      let strong = document.createElement("strong")
          strong.classList.add("product-price")
          strong.innerText = `R$ ${list[i].price}`
  
  main.appendChild(h1)
  main.appendChild(h5)
  main.appendChild(strong)

  if (list[i].category === "Frutas"){
    li.appendChild(img)
    li.appendChild(main)
    ulFruits.appendChild(li)
  }
  if (list[i].category === "Bebidas"){
    li.appendChild(img)
    li.appendChild(main)
    ulDrinks.appendChild(li)
  }
  if (list[i].category === "Higiene"){
    li.appendChild(img)
    li.appendChild(main)
    ulHygiene.appendChild(li)
  }
 }
}
console.log(createElementList(products))




