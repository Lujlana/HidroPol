// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// const loginForm = document.getElementById("loginForm");
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = loginForm["loginEmail"].value;
//   const password = loginForm["loginPassword"].value;
//   signInWithEmailAndPassword(auth, email, password)
//     .then((cred) => {
//       console.log(cred.user);
//       loginForm.reset();
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     });
// });

// const logout = document.getElementById("logout");
// logout.addEventListener("click", (e) => {
//   e.preventDefault();
//   auth.signOut().then(() => {
//     console.log("user signout");
//   });
// });