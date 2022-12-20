import React from 'react'

function ErrorCheck({ error }) {
    let errorText;
    switch (error.code) {
        case "auth/user-not-found":
            errorText = 'user not found with this email id';
            break;
        case "auth/wrong-password":
            errorText = 'entered password incorrect';
            break;
        case "auth/invalid-email":
            errorText = 'enter a valid email address';
            break;

        case "auth/internal-error":
            errorText = 'enter a valid email address and password';
            break;
        case "auth/weak-password":
            errorText = 'Password should be at least 6 characters';
            break;
        case "auth/email-already-in-use":
            errorText = 'The email address is already in use by another account.';
            break;
        case "custom/password-not-match":
            errorText = 'password do not match';
            break;
        case "auth/network-request-failed":
            errorText = 'request timeout , try again';
            break;
        default: errorText = error.message;
    }
    return (
        <div class="alert alert-danger error" style={{ fontSize: "14px" }} role="alert">{errorText}</div>
    )
}
export default ErrorCheck