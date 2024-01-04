const { initializeApp } = require("firebase/app");
const {getStorage,  ref,  uploadBytes,  getDownloadURL,} = require("firebase/storage");

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const uploadFileToStorage = async (file, destination) => {
  const storageRef = ref(storage, destination);
  const metadata = {
    contentType: "image/png", // Adjust according to your actual file type
  };
  await uploadBytes(storageRef, file.buffer, metadata);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

module.exports = { storage, uploadFileToStorage };
