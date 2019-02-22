// ================
//  PORT
// ================
process.env.PORT = process.env.PORT || 3000;


// ================
//  ENTORNO
// ================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ================
//  DB
// ================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/db_encuesta';
} else {
    urlDB = 'mongodb://encuesta-user:encuesta123@ds249035.mlab.com:49035/encuesta';
}


process.env.URLDB = urlDB