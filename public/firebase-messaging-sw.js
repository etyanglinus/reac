importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDEjGFJ53GR6_HWgojuHiaW2YJHG96MCtY",
  authDomain: "nobo-5255d.firebaseapp.com",
  projectId: "nobo-5255d",
  storageBucket: "nobo-5255d.firebasestorage.app",
  messagingSenderId: "57986059959",
  appId: "1:57986059959:web:7cb1551959c05e0f714732",
  measurementId: "G-17R4YFQQ76"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
