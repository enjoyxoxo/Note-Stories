const mongoose = require('mongoose')
//create schema that will allow data models
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true
   },
   password: {
     type: String,
     require: true
   },
   roles: [{
     type: String,
     default: "Employee"
   }],
   active: {
    type: Boolean,
    default: true
  },
})

module.exports = mongoose.model('user', userSchema)