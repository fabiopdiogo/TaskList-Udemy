import { Router } from 'express';


const routes = new Router();

routes.get('/teste', (req, res)=>{
  return res.json({message: "Hello World!"});
})

export default routes;