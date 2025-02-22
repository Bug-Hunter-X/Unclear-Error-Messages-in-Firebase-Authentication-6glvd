// Improved error handling for Firebase Authentication
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('User signed in:', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    switch (errorCode) {
      case 'auth/wrong-password':
        console.error('Wrong password.');
        // Display a user-friendly message
        break;
      case 'auth/user-not-found':
        console.error('User not found.');
        // Display a user-friendly message
        break;
      case 'auth/network-request-failed':
        console.error('Network request failed.');
        // Display a user-friendly message and retry mechanism
        break;
      default:
        console.error('An unexpected error occurred:', errorMessage);
        // Display a generic error message
        break;
    }
  });