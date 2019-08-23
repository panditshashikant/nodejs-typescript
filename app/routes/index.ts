import { Request, Response, Application } from "express";
import { StudentController } from "../controllers/studentController";

export class Routes {
  stutdentController: StudentController = new StudentController();
  public routes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send("Hello World!");
    });
    app.route("/student/new").get(this.stutdentController.addNewStudent);
    app.route("/student/all").get(this.stutdentController.getAllStudents);
  }
}
