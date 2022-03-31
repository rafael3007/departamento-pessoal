import { initializeApp } from 'firebase/app'
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC2wzXFe45_E6gM_IlRxOOwYANvdnh2Kb4",
    authDomain: "planilhas-307101.firebaseapp.com",
    projectId: "planilhas-307101",
    storageBucket: "planilhas-307101.appspot.com",
    messagingSenderId: "182780474399",
    appId: "1:182780474399:web:4c0bd8cc0fe6502f0a912a",
    measurementId: "G-8V3JLPQTKQ"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
