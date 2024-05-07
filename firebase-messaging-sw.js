importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);


const bc = new BroadcastChannel('fire-local-store')

const firebaseConfig = {
  apiKey: "AIzaSyAsOG2IscaIOX-e7sHIJ4ULHIZ5CSzCbq4",
  authDomain: "demofire-21343.firebaseapp.com",
  databaseURL: "https://demofire-21343-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demofire-21343",
  storageBucket: "demofire-21343.appspot.com",
  messagingSenderId: "173086254100",
  appId: "1:173086254100:web:bc8ec1f248a67df977b301",
  measurementId: "G-1FZG2CHBQ5"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  // if (payload.notification) {
  //   const notificationTitle = payload.notification.title || "I don't know";
  //   const notificationOptions = {
  //     body: payload.notification.body || "We don't care",
  //     icon: '/favicon.png'
  //   };

  //   self.registration.showNotification(notificationTitle, notificationOptions);
  // }

  bc.postMessage(JSON.stringify(payload))
});
