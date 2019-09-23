import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDY0IqrWvJ-3TaVhARPlX76PfZg4w4XqFA",
  authDomain: "map-manager-7bbd6.firebaseapp.com",
  databaseURL: "https://map-manager-7bbd6.firebaseio.com",
  projectId: "map-manager-7bbd6",
  storageBucket: "map-manager-7bbd6.appspot.com",
  messagingSenderId: "353920382641"
}

firebase.initializeApp(config);

export default firebase;