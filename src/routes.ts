import express from 'express';
import ClassesController from './Controllers/ClassesConttoller';
import ConnectionController from './Controllers/ConnectionController';


const routes = express.Router();    

const classesController = new ClassesController();
const connectionsController = new ConnectionController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);


export default routes;