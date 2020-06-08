import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyCAIW9N-gFyPb0ZB79GPi9T-5Yehaj1Xd0",
        authDomain: "chatapp-6807f.firebaseapp.com",
        databaseURL: "https://chatapp-6807f.firebaseio.com",
        projectId: "chatapp-6807f",
        storageBucket: "chatapp-6807f.appspot.com",
        messagingSenderId: "1029786553108",
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;