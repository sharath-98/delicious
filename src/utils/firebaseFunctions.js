// Saving a new Item
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const saveNewItem = async (data) =>{
    await setDoc(doc(db,'menu', `${Date.now()}`), data, {merge : true});
}