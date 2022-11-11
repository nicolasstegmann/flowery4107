import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./configFirestore";

const categoriesRef = collection(db, 'categories')

export const getCategories = async () => {
    const categories = [];
    const querySnapshot = await getDocs(categoriesRef);
    querySnapshot.forEach((doc) => {
        categories.push({...doc.data(), id: doc.id})
    }); 
    return categories;
}

export const getCategory = async (categoryId) => {
    const document = doc(db, 'categories', categoryId)
    const docSnap = await getDoc(document)
    if (docSnap.exists()){
        return {id: docSnap.id, ...docSnap.data()}
    }
};
