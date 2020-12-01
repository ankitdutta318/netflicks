import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyD0GheY9E46fy2AfB7p_qGdObkiVh1y1uM',
  authDomain: 'netflicksapp.firebaseapp.com',
  databaseURL: 'https://netflicksapp.firebaseio.com',
  projectId: 'netflicksapp',
  storageBucket: 'netflicksapp.appspot.com',
  messagingSenderId: '933547667416',
  appId: '1:933547667416:web:606e443affaa76dc348cad',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
