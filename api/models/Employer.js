const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employerSchema = new Schema({
    companyOffers: [
        {
          type: String,
        },
      ],
      lookingFor: [
        {
          type: String,
        },
      ],

})

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;