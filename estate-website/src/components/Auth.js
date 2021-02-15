import firebase from "firebase";

export function CreateUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function SignIn(email, password) {
 return firebase.auth().signInWithEmailAndPassword(email, password);
}