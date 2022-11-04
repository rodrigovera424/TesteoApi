/*========== Modulos globales para DAOs ==========*/
const CustomError = require('../classes/CustomError.class.js');
const MongoDBClient = require('../Classes/MongoDBClient.class.js');
const logger = require('../utils/loggers.js');
/*========== Modulos especifico para DAOs ==========*/
const ProductoModel = require('../models/productos.model.js');

class ProductosDAO {
    constructor(){
        this.colecction = ProductoModel;
        this.conn = new MongoDBClient();
    }
    
    async listarAll() {
        let docs = [];
        try {
            await this.conn.connect();
            docs = await this.colecction.find({})
            return docs;
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
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
            const cuserr = new CustomError(500, 'Error al guardar()', error);
            logger.error(cuserr);
            throw cuserr;
        } finally {
            this.conn.disconnect();
            logger.info(`Elemento guardado ${elemento}`);
        }
    }
}

module.exports = ProductosDAO;