const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({

    employeeSkills: [
        {
          type: String,
        },
      ],
      lookingForEmployee: [
        {
          type: String,
        },
      ],

})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;