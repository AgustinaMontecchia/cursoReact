import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsLpflOkz5qAuQjnRLWgvlrVfYoDi-PyQ",
  authDomain: "camiflex-43325.firebaseapp.com",
  projectId: "camiflex-43325",
  storageBucket: "camiflex-43325.appspot.com",
  messagingSenderId: "460284162035",
  appId: "1:460284162035:web:bc9bd009ebc8f70a7e2c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
)
