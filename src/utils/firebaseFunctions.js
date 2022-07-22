// Saving a new Item
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const saveNewItem = async (data) =>{
    await setDoc(doc(db,'menu', `${Date.now()}`), data, {merge : true});
}

//fetch all data
export const getMenu = async () =>{
    const items = await getDocs(
        query(collection(db, 'menu'), orderBy('id', 'desc'))
    );
    return items.docs.map((doc) => doc.data());
}