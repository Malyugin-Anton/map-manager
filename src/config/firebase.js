import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAxMTn1eh3atDFRyoYDZsF4pB1CCz1qZrE",
  authDomain: "yandex-map-manager.firebaseapp.com",
  databaseURL: "https://yandex-map-manager.firebaseio.com",
  projectId: "yandex-map-manager",
  storageBucket: "yandex-map-manager.appspot.com",
  messagingSenderId: "231863491022"
}

firebase.initializeApp(config);

export default firebase;