// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-EbrrjwTUFPs-un2DhxH8QjSHbZYLX5M",
  authDomain: "chat-app-1c71f.firebaseapp.com",
  projectId: "chat-app-1c71f",
  storageBucket: "chat-app-1c71f.firebasestorage.app",
  messagingSenderId: "797639405622",
  appId: "1:797639405622:web:2e10b7014df701b89b6897",
  measurementId: "G-M8WXXYTCWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);