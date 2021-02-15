import firebase from "firebase";

export default function CreateAccount(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}
