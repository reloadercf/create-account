/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

const firebaseConfig = {
  // tus credenciales
};

initializeApp(firebaseConfig);

export const auth = getAuth();
