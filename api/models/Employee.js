const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({

    offerToCompany: [
        {
          type: String,
        },
      ],
      jobPreferences: [
        {
          type: String,
        },
      ],

})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;