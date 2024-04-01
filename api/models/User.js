const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Employee = require("./Employee")
const Employer= require("./Employer")
// Define the user schema
const userSchema = new Schema({
  firstName: {
    type: String,
     required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
     required: true,
    unique: true,
  },
  password: {
    type: String,
     required: true,
  },
  gender: {
    type: String,
     required: true,
  },
  dateOfBirth: {
    type: String,
     required: true,
  },
  location: {
    type: String,
     required: true,
  },
  
  userType: {
    type: String,
     required: true,
    enum: ['Employee', 'Employer']
  },
  imageUrls: [
    {
      type: String, // Store URLs of profile pictures
    },
  ],
  prompts: [
    {
      question: {
        type: String,
         required: true,
      },
      answer: {
        type: String,
         required: true,
      },
    },
  ],
  //   genderPreference: {
  //     type: String,
  //     enum: ['male', 'female', 'both'],
       //required: true,
  //   },
  //   ageRangePreference: {
  //     min: {
  //       type: Number,
  //       default: 18,
  //     },
  //     max: {
  //       type: Number,
  //       default: 99,
  //     },
  //   },
 
});

// // Load Employee and Employer schemas dynamically
// userSchema.pre('save', async function(next) {
//     // Load Employee schema if the user is an employee
//     if (this.type === 'Employee') {
//       try {
//         await Employee.create({});
//       } catch (err) {
//         console.error('Error creating Employee document:', err);
//       }
//     }
//     // Load Employer schema if the user is an employer
//     else if (this.type === 'Employer') {
//       try {
//         await Employer.create({});
//       } catch (err) {
//         console.error('Error creating Employer document:', err);
//       }
//     }
  
//     next();
//   });

// // Create the User model

userSchema.pre('save', async function(next) {
  if (this.userType === 'Employee') {
    try {
      // Create Employee document with relevant fields
      await Employee.create({
        lookingForEmployee: this.lookingForEmployee, // Include lookingForEmployee field
        employeeSkills: this.employeeSkills, // Include employeeSkills field
      });
    } catch (err) {
      console.error('Error creating Employee document:', err);
    }
  } else if (this.userType === 'Employer') {
    try {
      // Create Employer document with relevant fields
      await Employer.create({
        lookingFor: this.lookingFor, // Include lookingFor field
        companyOffers: this.companyOffers, // Include companyOffers field
      });
    } catch (err) {
      console.error('Error creating Employer document:', err);
    }
  }

  next();
});
const User = mongoose.model('User', userSchema);

module.exports = User;