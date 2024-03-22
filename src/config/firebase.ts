// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAPQ8veGc8VGBV_Qd_pwDAmuRinGnYEj0E',
  authDomain: 'topdev-clone.firebaseapp.com',
  projectId: 'topdev-clone',
  storageBucket: 'topdev-clone.appspot.com',
  messagingSenderId: '813310787366',
  appId: '1:813310787366:web:0783427d4fdfb1e4b44be7',
  measurementId: 'G-7F084RKC1T',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebaseApp;
