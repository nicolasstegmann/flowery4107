const categories = [
    {
        id: 1, name: "Bulbos"
    },
    {
        id: 2, name: "Semillas"
    },
    {
        id: 3, name: "Rizomas"
    }
];

export const getCategories = () =>
    new Promise((res, rej) => {
        const response = categories
        setTimeout(() => {
            res(response);
        }, 500);
    });

export const getCategory = (categoryId) =>
    new Promise((res, rej) => {
        const response = categories.find((category) => category.id === +categoryId);
        setTimeout(() => {
            res(response);
        }, 500);
    });