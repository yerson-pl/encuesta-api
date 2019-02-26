// ================
//  PORT
// ================
process.env.PORT = process.env.PORT || 3000;


// ================
//  ENTORNO
// ================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ================
//  Vencimiento del toke
// ================
process.env.CADUCIDAD_TOKEN = 60*60*24*30;

// ================
//  SEED
// ================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarollo';
// ================
//  DB
// ================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/db_encuesta';
} else {
    urlDB = process.env.MONGO_URI_DB;
}


process.env.URLDB = urlDB