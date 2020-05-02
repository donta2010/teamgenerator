// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id, email, github){
        //only thing is being added is the git hib, all the information is coming from super
        //old informaiton is in the super and new is in the constructer
        super(name,id,email)
        this.github =github;
        this.role="engineer"
    }
    getRole(){
        return this.role
    }
    getGithub(){
        return this.github
    }
}
module.exports=Engineer;
