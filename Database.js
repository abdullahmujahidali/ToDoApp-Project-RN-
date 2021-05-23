import firebase from 'firebase';
import '@firebase/firestore'
const firebaseConfiguration = {
    apiKey: "AIzaSyD2V2qt68xkVSY_Dm5cgheWvaPzSypR9o0",
    authDomain: "addypaladintodo.firebaseapp.com",
    databaseURL: "https://addypaladintodo-default-rtdb.firebaseio.com",
    projectId: "addypaladintodo",
    storageBucket: "addypaladintodo.appspot.com",
    messagingSenderId: "339595665713",
    appId: "1:339595665713:web:75171fd6822b5250555010"
}
class Database {
    constructor(callback) {
        this.init(callback)
    }
    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfiguration)
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user)
            }
            else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(Error)
                })
            }
        })
    }
}

export default Database;