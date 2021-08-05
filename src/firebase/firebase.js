import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
//OBJETO DE FIREBASE
    apiKey: "AIzaSyByXfvUEVhNioQmw5mjArszmcL5NyvyL3Q",
    authDomain: "frikistore-70daf.firebaseapp.com",
    projectId: "frikistore-70daf",
    storageBucket: "frikistore-70daf.appspot.com",
    messagingSenderId: "13626184623",
    appId: "1:13626184623:web:522498ee430e754855955a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const createDocsArray = (docs) => docs.map((doc) => createFirebaseObject(doc));

const createFirebaseObject = (doc) => ({ id: doc.id, ...doc.data() });

function requestProducts(
    onResponse = () => { },
    onFinally = () => { },
    hasFilter = false,
    categoryName = ""
) {
    const db = firebase.firestore(app);

    const productsCollection = hasFilter
        ? db.collection("productos").where("category", "==", categoryName)
        : db.collection("productos");

    productsCollection
        .get()
        .then((response) => onResponse(createDocsArray(response.docs)))
        .catch((error) => console.log(error))
        .finally(onFinally);
}

function requestCategories(onResponse = () => { }, onFinally = () => { }) {
    const db = firebase.firestore(app);

    const categoriesCollection = db.collection("categories");

    categoriesCollection
        .get()
        .then((response) => onResponse(createDocsArray(response.docs)))
        .catch((error) => console.log(error))
        .finally(onFinally);
}

function requestProduct(
    onResponse = () => { },
    onFinally = () => { },
    productID = ""
) {
    const db = firebase.firestore(app);

    const productSearched = db.collection("productos").doc(productID);

    productSearched
        .get()
        .then((response) => onResponse(createFirebaseObject(response)))
        .catch((error) => console.log(error))
        .finally(onFinally);
}

export { requestCategories, requestProducts, requestProduct };