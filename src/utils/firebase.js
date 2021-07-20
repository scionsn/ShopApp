import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAx_tDU5kPUwJkcJBmn2HUTqxQclemBe_g",
    authDomain: "todoappadv.firebaseapp.com",
    databaseURL: "https://todoappadv.firebaseio.com",
    projectId: "todoappadv",
    storageBucket: "todoappadv.appspot.com",
    messagingSenderId: "240885067049",
    appId: "1:240885067049:web:52ab51800546c15a8a9b38",
    measurementId: "G-D2MMGSEQJW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;  
