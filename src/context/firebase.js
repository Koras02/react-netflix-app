import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage" 


// .env.local 에 저장한 정보 불러오기
// firebase 생성자에 모든 정보 저장
const firebaseConfig = {
    apiKey: "AIzaSyDiF_ypOknM6m1sniLiAgeBcgB1FdtUcXk",
    authDomain: "netflix-react-api.firebaseapp.com",
    projectId: "netflix-react-api",
    storageBucket: "netflix-react-api.appspot.com",
    messagingSenderId: "587294626140",
    appId: "1:587294626140:web:87d22c786e445116707199",
    measurementId: "G-JB8XXQS02H"
};

firebase.initializeApp(firebaseConfig);

// 인증을위한 변수를 성정 
// 기본로그인
export const auth = firebase.auth();

// 소셜로그인
export const firebaseInstance = firebase;
export const authService = firebase.auth();
 
 
 