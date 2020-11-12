import app from "firebase/app";

const config = {
  apiKey: "AIzaSyDYHi6_YFp8AwL3OHSgbBMV_inJctFa11U",
  authDomain: "react-final-project-906c0.firebaseapp.com",
  databaseURL: "https://react-final-project-906c0.firebaseio.com",
  projectId: "react-final-project-906c0",
  storageBucket: "react-final-project-906c0.appspot.com",
  messagingSenderId: "752191512330",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
