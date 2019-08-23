"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentController_1 = require("../controllers/studentController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.stutdentController = new studentController_1.StudentController();
    }
    Routes.prototype.routes = function (app) {
        app.route("/").get(function (req, res) {
            res.status(200).send("Hello World!");
        });
        app.route("/student/new").get(this.stutdentController.addNewStudent);
        app.route("/student/all").get(this.stutdentController.getAllStudents);
    };
    return Routes;
}());
exports.Routes = Routes;
