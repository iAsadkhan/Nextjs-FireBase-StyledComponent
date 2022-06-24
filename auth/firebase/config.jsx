import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	connectAuthEmulator,
} from "firebase/auth";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyA0tuI8ciKlzzZ1t-RnWBvc3N89vIEr25o",
	authDomain: "next-boilerplate-bebb1.firebaseapp.com",
	projectId: "next-boilerplate-bebb1",
	storageBucket: "next-boilerplate-bebb1.appspot.com",
	messagingSenderId: "769902106399",
	appId: "1:769902106399:web:b50a8e723b7fa0c4a2422a",
	measurementId: "G-W7BF0BQXBL",
});

// const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
