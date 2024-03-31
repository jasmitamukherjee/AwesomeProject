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
  
  type: {
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
  //     required: true,
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
  likedProfiles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  receivedLikes: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
  visibility: {
    type: String,
    enum: ['public', 'hidden'],
    default: 'public',
  },
  blockedUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  notificationPreferences: {
    // Define notification preferences here
  },
});

// Load Employee and Employer schemas dynamically
userSchema.pre('save', async function(next) {
    // Load Employee schema if the user is an employee
    if (this.type === 'Employee') {
      try {
        await Employee.create({});
      } catch (err) {
        console.error('Error creating Employee document:', err);
      }
    }
    // Load Employer schema if the user is an employer
    else if (this.type === 'Employer') {
      try {
        await Employer.create({});
      } catch (err) {
        console.error('Error creating Employer document:', err);
      }
    }
  
    next();
  });

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;