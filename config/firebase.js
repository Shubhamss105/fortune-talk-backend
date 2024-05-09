const { getDatabase } = require("firebase-admin/database");
const { initializeApp, cert } = require("firebase-admin/app");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const serviceAccount = require('./service-account.json')

const firebaseConfig = {
  credential: cert(serviceAccount),
  apiKey: "AIzaSyDnuwnsYlVwFTHP4dL5br735ljkK0T1y6c",
  authDomain: "astrokunj-587a9.firebaseapp.com",
  databaseURL: "https://astrokunj-587a9-default-rtdb.firebaseio.com",
  projectId: "astrokunj-587a9",
  storageBucket: "astrokunj-587a9.appspot.com",
  messagingSenderId: "349953920310",
  appId: "1:349953920310:web:99e96d984f8c8773e5f797",
  measurementId: "G-N9Y9LRXNRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

module.exports = {
  app,
  database,
};
