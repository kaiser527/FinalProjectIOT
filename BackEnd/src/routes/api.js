import express from "express";
import {
  getAllTemperature,
  getHomePage,
  putTemperature,
} from "../controllers/homeController";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  //path, handler
  router.get("/", getHomePage);
  router.get("/api/temp/all", getAllTemperature);
  router.put("/api/temp/add/:id", putTemperature);

  return app.use("/", router);
};

export default initWebRoutes;
