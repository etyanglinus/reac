import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDEjGFJ53GR6_HWgojuHiaW2YJHG96MCtY",
  authDomain: "nobo-5255d.firebaseapp.com",
  projectId: "nobo-5255d",
  storageBucket: "nobo-5255d.firebasestorage.app",
  messagingSenderId: "57986059959",
  appId: "1:57986059959:web:7cb1551959c05e0f714732",
  measurementId: "G-17R4YFQQ76"
};
const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const messaging = (async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    return null;
  } catch (err) {
    return null;
  }
})();

export const fetchToken = async (setTokenFound, setFcmToken) => {
  return getToken(await messaging, {
    vapidKey:
      "BJrZj-2WNLPOSMWtCZa2FNVzDTfBqYVll2Sz8uQV0bzsOmg_brIdsIXGohYzevGtNrJ1Lclyv2hLWY2jBiATfr8",
  })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(true);
        setFcmToken(currentToken);

        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        setTokenFound(false);
        setFcmToken();
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.error(err);
      // catch error while creating client token
    });
};

export const onMessageListener = async () =>
  new Promise((resolve) =>
    (async () => {
      const messagingResolve = await messaging;
      onMessage(messagingResolve, (payload) => {
        resolve(payload);
      });
    })()
  );
export const auth = getAuth(firebaseApp);
