/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

import { auth } from './firebaseConfig.js';

export const crearUsuario = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// crear una funcion
// dentro de la funcion retornar signInWithEmailAndPassword
// tu funcion usa 2 argumentos email, password
