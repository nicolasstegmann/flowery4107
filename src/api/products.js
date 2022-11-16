import { collection, getDocs, getDoc, doc, where, query, writeBatch, increment } from "firebase/firestore";
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
  
  export const bulkUpdateProductsStock = async (orderProducts) => {
    const batch = writeBatch(db);
    orderProducts.forEach(({id, qty}) => {
        const docRef = doc(db, "products", id)
        batch.update(docRef, {stock: increment(-qty)})
    })
    batch.commit()
  }