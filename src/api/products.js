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

export const getProducts = (categoryId) =>
    new Promise((res, rej) => {
        const response = categoryId ? products.filter((product) => product.category.id === +categoryId) : products;
        setTimeout(() => {
            res(response);
        }, 2000);
    });

export const getProduct = (productId) =>
    new Promise((res, rej) => {
        const response = products.find((product) => product.id === +productId);
        setTimeout(() => {
            res(response);
        }, 3000);
    });
