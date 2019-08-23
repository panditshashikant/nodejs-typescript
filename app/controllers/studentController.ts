import { Request, Response } from "express";
export class StudentController {
  public addNewStudent(req: Request, res: Response) {
    res.status(200).send("new student created.");
  }
  public getAllStudents(req: Request, res: Response) {
    res
      .status(200)
      .send([{ firstName: "Shashikant" }, { firstName: "Rajesh" }]);
  }
}
