import { 
    collection, 
    getDocs 
} from "firebase/firestore";

import { db } from '../firebase.js';


export class Model_Catalog {
    constructor ({catalogDataFromFirebase}) {
        this.db = db;
        this.items = [];
        this.catalogDataFromFirebase = catalogDataFromFirebase;
    }

    readItems = async() => {
        const itemsFromFirebase = await getDocs(collection(this.db, "items"));
        itemsFromFirebase.forEach((doc) => {
            this.items.push({
                id: doc.id,
                model: doc.data().model,
                imageURL: doc.data().imageURL,
                series: doc.data().series,
                price: doc.data().price,
                description: doc.data().description,
            })
        });

        this.catalogDataFromFirebase(this.items);
    }

    getItems() {
        return this.items;
    }
}