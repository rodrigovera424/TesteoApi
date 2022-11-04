const dotenv = require('dotenv');
dotenv.config();

const config = {
  mongodb: {
    connstr: `mongodb+srv://test:123456alison@cluster0.piknkma.mongodb.net/?retryWrites=true&w=majority`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  filedb: {
    pathdb: "./db",
  },
  srv: {
    port: process.env.PORT,
    logger: process.env.LOG || "DEV",
    persistencia: "mongodb",
  },
};

module.exports = config;
