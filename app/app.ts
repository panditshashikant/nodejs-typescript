import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";
class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }
  private config(): void {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "origin, x-requested-with");
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
      next();
    });
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
}
export default new App().app;
