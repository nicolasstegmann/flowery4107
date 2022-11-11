/*
import aspiration from "../img/products/aspiration.jpg"
import aleli from "../img/products/aleli.jpg"
import astromelia from "../img/products/astromelia.jpg"
import heliconia from "../img/products/heliconia.jpg"
import honesty from "../img/products/honesty.jpg"

const products = [
    {
        id: 1,
        name: "Aspiration",
        tags: [
            "Lilium",
            "Floración 90"
        ],
        price: 300,
        stock: 0,
        img: aspiration,
        category: { id: 1, name: "Bulbo" }
    },
    {
        id: 2,
        name: "Honesty",
        tags: [
            "Lilium",
            "Híbrido",
            "Floración 90"
        ],
        price: 220,
        stock: 5,
        img: honesty,
        category: { id: 1, name: "Bulbo" }
    },
    {
        id: 3,
        name: "Aleli Jordyn Red",
        tags: [
            "Germinación Asegurada",
            "Oferta"
        ],
        price: 1003,
        stock: 200,
        img: aleli,
        category: { id: 2, name: "Semilla" }
    },
    {
        id: 4,
        name: "Astromelia",
        tags: [
            "Producción nacional"
        ],
        price: 505,
        stock: 7,
        img: astromelia,
        category: { id: 3, name: "Rizoma" }
    },
    {
        id: 5,
        name: "Heliconia Rostrata",
        tags: [
            "Producción nacional"
        ],
        price: 708,
        stock: 2,
        img: heliconia,
        category: { id: 3, name: "Rizoma" }
    }
];
*/

import { collection, getDocs, getDoc, doc, where, query } from "firebase/firestore";
import { db } from "./configFirestore";

const productsRef = collection(db, 'products')

export const getProducts = async (categoryId) => {
    const products = [];
    const q = categoryId ? query(productsRef, where("category.id", "==", +categoryId)) : productsRef;

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        products.push({id: doc.id, ...doc.data()});
    });

    return products;
};

export const getProduct = async (productId) => {
    const document = doc(db, "products", productId);
  
    const docSnap = await getDoc(document);
  
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
  
    return null;
  };
  