// Create class for study courses
// Create class to enroll students in the different courses

// Create a class for courses
class Course {
  constructor(name) {
    this.name = name;
    this.students = [];
  }  

  enrollStudent = student => this.students.push(student);
  
  describe(){
    return `Students enrolled in "${this.name}" course: ${this.students.length}`;
  }
}

// Create a class for students
class Student {
  constructor(name) {
    this.name = name;
  }
  describe(){
    return `${this.name} is a student`;
  }
}

// Create a class for the menu app
class MenuApp {
  constructor() {
    this.courses = [];
    this.currentCourse = null;
  }

// user navigation
  userChoices() {
    let choice = this.getChoice();
    while(choice !=0) {
        switch (choice) {
            case "1":
              this.addCourse();
              break; 
            case "2":
               this.listCourses();
               break;
            case "3":
               this.manageCourse();   
            default:
              choice = 0;
          }
          choice = this.getChoice();
    } 
    alert('----Thank you----');   
  }

// Display the menu options
  getChoice() {
    return prompt(` 
    Main Menu:
    ----------
    What would you like to do?

    1. Add a course
    2. List all courses
    3. Manage a course
    or
    0. Exit application
    `);    
  }

// Add a course
  addCourse() {
    let name = prompt("Enter the course name:");
    this.courses.push(new Course(name));
  }

//  List all courses
  listCourses(){
    let allCourses = "";
    for (let i=0; i < this.courses.length; i++){
        allCourses += "Index [" + i + "] - " + this.courses[i].name + "\n"; 
    }
    alert("Current courses available: " + this.courses.length + "\n------\n" + allCourses);
  }

//  Identify course indexes as a reminder for the course selection prompt
  courseIndexes(){
    let cseIndex = "";
    for (let i=0; i < this.courses.length; i++){
        cseIndex += "Index [" + i + "] - " + this.courses[i].name + "\n"; 
    }
    return cseIndex;
  }

// Manage a course
  manageCourse(){
    let selection = prompt("Enter the index of course to manage student enrollment: \n------\n" + this.courseIndexes());
    if (selection > -1 && selection < this.courses.length){
        this.currentCourse = this.courses[selection];
        let description = `${this.currentCourse.describe()}`;

        for (let i = 0; i < this.currentCourse.students.length; i++){
            description += "\n Index [" + i + "] - " + this.currentCourse.students[i].name;
        }

        let subMenu = this.manageStudents(description);
        while(subMenu !=0){
            switch (subMenu) {
                case "1":
                    this.addStudent();
                    break;
                case "2":
                    this.removeStudent();
            }
            subMenu = this.manageStudents(description);
        }        
    }
  }
//  Add and remove students from course
  manageStudents(CourseName) {
    return prompt(`
    ${CourseName}
    ------------
    1. Add a student
    2. Remove a student    
    or
    0. Back to main menu
    `);
  }


// Add a student to a course
  addStudent() {
    let name = prompt("Enter the name of the student:");
    // this.currentCourse.students.push(new Student(name))
    this.currentCourse.enrollStudent(new Student(name));
  }

// Remove a student from a course
  removeStudent() {
    let studentIndex = prompt("Enter the index of student to remove: \n------\n" + this.studentIndexes());
    if (studentIndex > -1 && studentIndex < this.currentCourse.students.length && studentIndex != null){
        this.currentCourse.students.splice(studentIndex, 1);
        }
    }

//   Identify student indexes as a reminder for the student deletion prompt
 studentIndexes(){
    let sdtIndex = "";
    for (let i=0; i < this.currentCourse.students.length; i++){
        sdtIndex += "Index [" + i + "] - " + this.currentCourse.students[i].name + "\n"; 
        }
        return sdtIndex;
      }
}

// Create and call the menu app 
let menuApp = new MenuApp();
menuApp.userChoices();