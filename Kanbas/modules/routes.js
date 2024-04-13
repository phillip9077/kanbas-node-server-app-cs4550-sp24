import db from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
  const modules = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModules(cid);
    res.send(modules);  
  }
  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    await dao.updateModule(mid, module);
    res.sendStatus(204);
  };
  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(204);
  }
  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    await dao.createModule(newModule);
    res.send(newModule);
  }
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules", modules);
}
export default ModuleRoutes;