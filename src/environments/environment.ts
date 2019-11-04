// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyDWFI6qHewypfF3LTBu8PnAs8KuUIzmn0Y',
    authDomain: 'commentingapp.firebaseapp.com',
    databaseURL: 'https://commentingapp.firebaseio.com',
    projectId: 'commentingapp',
    storageBucket: 'commentingapp.appspot.com',
    messagingSenderId: '1094002780881',
    appId: '1:1094002780881:web:9682aaabd2fc5a6026b3f0'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
