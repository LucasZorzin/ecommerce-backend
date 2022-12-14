import admin from 'firebase-admin';
import MongoStore from "connect-mongo";
import serviceAccount from 'firebase.json';
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const Config = {
    mongoDB: {
        cnx: process.env.MONGODB_URL || "url",
        secret: process.env.MONGODB_SECRET || "secreto",
        options: {
            serverSelectionTimeoutMS: 5000,
        },
    },
    nodemailer: {
        service: process.env.NODEMAILER_GMAIL_SERVICE,
        port: process.env.NODEMAILER_GMAIL_PORT,
        auth: {
            user: process.env.NODEMAILER_GMAIL_MAIL,
            pass: process.env.NODEMAILER_GMAIL_PASS,
        },
    },
    firebase: {
        credential: process.env.FIREBASE_CREDENTIAL || admin.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL || 'url'
    },
    configSession: {
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URL || "url",
            mongoOptions: advancedOptions,
        }),
        secret: process.env.MONGODB_SECRET || "secreto",
        resave: true,
        saveUninitialized: true,
        rolling: true,
        cookie: { maxAge: 600000 }
    }
};
export default Config;
