// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4GiQVB2W6QMlUKzxz7WcO5iX6-F73aP8",
    authDomain: "lingua-camp.firebaseapp.com",
    projectId: "lingua-camp",
    storageBucket: "lingua-camp.appspot.com",
    messagingSenderId: "343962543169",
    appId: "1:343962543169:web:a29a3f647c4d0b690ed2c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;