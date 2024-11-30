import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"examapp-f0fd9","appId":"1:881262534572:web:85ea2ff403e195d94ce409","storageBucket":"examapp-f0fd9.firebasestorage.app","apiKey":"AIzaSyD2pGHDXjnz4JV_x70BeUbD3lFCU7d8sBI","authDomain":"examapp-f0fd9.firebaseapp.com","messagingSenderId":"881262534572"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
