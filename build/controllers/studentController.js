"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentController = /** @class */ (function () {
    function StudentController() {
    }
    StudentController.prototype.addNewStudent = function (req, res) {
        res.status(200).send("new student created.");
    };
    StudentController.prototype.getAllStudents = function (req, res) {
        res
            .status(200)
            .send([{ firstName: "Shashikant" }, { firstName: "Rajesh" }]);
    };
    return StudentController;
}());
exports.StudentController = StudentController;
