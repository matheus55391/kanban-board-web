'use client';

import firebaseConfig from '@/config/firebaseConfig';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export function getFirebaseApp(): FirebaseApp {
  return firebaseApp;
}
