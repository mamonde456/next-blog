import {
  GithubAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../../firebase";

const provider = new GithubAuthProvider();
export default function GitHubAuth() {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      if (result) {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const user = result.user;

          console.log(token);
          console.log(user);
        }
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("🚨 GitHub Login Error Code: ", errorCode);
      console.log("🚨 GitHub Login Error Msg: ", errorMessage);
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(credential);
    });
}
