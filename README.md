# OWNE Mobile App

## Requirement
1. Create an `.env` file in project root `./`.
2. Go to firebase console and copy firebase config from `web` setting.
3. Paste the config in `.env` file.
4. Paste Facebook app id in `.env` file. (Follow is [guide](https://docs.expo.io/versions/latest/sdk/facebook/) to setup FB Developer.)

Your `.env` file should look as below:
```
FIREBASE_API_KEY=<apiKey>
FIREBASE_AUTH_DOMAIN=<authDomain>
FIREBASE_DATABASE_URL=<databaseURL>
FIREBASE_PROJECT_ID=<projectId>
FIREBASE_STORAGE_BUCKET=<storageBucket>
FIREBASE_MESSAGING_SENDER_ID=<messagingSenderId>
FIREBASE_APP_ID=<appId>
FIREBASE_MEASUREMENT_ID=<measurementId>

FB_APP_ID=<facebookAppId>
```