const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employerSchema = new Schema({
    offerToEmployee: [
        {
          type: String,
        },
      ],
      employeePreferences: [
        {
          type: String,
        },
      ],

})

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;