/*========== Modulos globales para DAOs ==========*/
const CustomError = require('../Classes/CustomError.class.js');
const MongoDBClient = require('../Classes/MongoDBClient.class.js');
const logger = require('../utils/loggers.js');
/*========== Modulos especifico para DAOs ==========*/
const PersonaModel = require('../models/Persona.model.js');
const DAO = require('./DAO.class.js');

class PersonasDAOMongoDB extends DAO {
  constructor() {
    super();
    this.colecction = PersonaModel;
    this.conn = new MongoDBClient();
  }

  async listarAll() {
    let docs = [];
    try {
      await this.conn.connect();
      docs = await this.colecction.find({});
      return docs;
    } catch (error) {
      const cuserr = new CustomError(500, "Error al listarAll()", error);
      logger.error(cuserr);
      throw cuserr;
    } finally {
      this.conn.disconnect();
      logger.info(`Elementos listados ${docs.length}`);
    }
  }

  async listar(dni) {
    console.log(dni);
    let docs = [];
    try {
      await this.conn.connect();
      docs = await this.colecction.find({ dni: dni });
      return docs[0];
    } catch (error) {
      const cuserr = new CustomError(500, "Error at listar()", error);
      logger.error(cuserr);
      throw cuserr;
    } finally {
      this.conn.disconnect();
      logger.info(`Elementos listados ${docs.length}`);
    }
  }  

  async guardar(elemento) {
    try {
      await this.conn.connect();
      let doc = await this.colecction.create(elemento);
      return doc;
    } catch (error) {
      const cuserr = new CustomError(500, "Error al guardar()", error);
      logger.error(cuserr);
      throw cuserr;
    } finally {
      this.conn.disconnect();
      logger.info(`Elemento guardado ${elemento}`);
    }
  }
}

module.exports = PersonasDAOMongoDB;
