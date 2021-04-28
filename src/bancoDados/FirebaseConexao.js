import firebase from 'firebase/app';
import 'firebase/database';

//Firebase - Configuração
let firebaseConfig = {
    apiKey: "AIzaSyAhhLNXQrABTkonLvL4Dv2WCqpn33DWnfw",
    authDomain: "webreact01.firebaseapp.com",
    databaseURL: "https://webreact01.firebaseio.com",
    projectId: "webreact01",
    storageBucket: "webreact01.appspot.com",
    messagingSenderId: "237741017693",
    appId: "1:237741017693:web:9d4f306b229fe27a7b1bb4",
    measurementId: "G-HM9FSEZKD7"
};

//Firebase - Inicializar
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;



