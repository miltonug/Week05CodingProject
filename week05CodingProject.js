// Menu app listing students and corresponding courses in the PromineoTech bootcamp
class Courses {
    constructor(name, course){
        this.name = name;
        this.course = course;
    }

    list(){
        return `${this.name} is taking the ${this.course} course.`;
    }
} 
class Students {
    constructor(name){
        this.name = name;
        this.studentAssignment = [];
    }
}
    let registerStudent = newStudent => this.studentAssignment.push(newStudent);
    