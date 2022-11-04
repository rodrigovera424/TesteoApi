const PersonasDAOFile = require('../services/PersonasDAO.file.js');
const PersonaDTO = require('../classes/PersonaDTO.class.js');
const config = require('../utils/config.js');
const PersonasDAOMem = require('../services/PersonasDAO.mem.js');
const PersonasDAOMongoDB = require('../services/PersonasDAO.mongodb.js');


let prdDAO = null;

switch (config.srv.persistencia) {
    case 'mongodb':
        prdDAO = new PersonasDAOMongoDB();
        break;
    case 'file':
        prdDAO = new PersonasDAOFile();
        break;
    case 'memoria':
        prdDAO = new PersonasDAOMem();
        break;
    default:
        break;
}

const PersonaController = {
    async listar(dni){
        let doc = await prdDAO.listar(dni);
        return new PersonaDTO(doc.dni, doc.nombre, doc.apellido);
    },
    async listarAll(){
        let docs = await prdDAO.listarAll();

        let prdDTOs = docs.map(o=>{
            return new PersonaDTO(o.dni, o.nombre, o.apellido);
        })

        return prdDTOs;
    },
    async guardar(elem){
        await prdDAO.guardar(elem);
    },
    async actualizar(dni){
        await prdDAO.actualizar(dni);
    },
    async borrar(dni){
        await prdDAO.borrar(dni);
    },
    async borrarAll(){
        await prdDAO.borrarAll();
    }
}

module.exports = PersonaController;