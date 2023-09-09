import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Please provide an email"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  imgage: {
    type: String,
  }
}); 
 
// **
const User = models.User || model("User", UserSchema);

export default User;


// ** Explanation **
// This checks if a User model has already been defined in the models object, and if so, uses that model. If not, it creates a new User model using the model function provided by mongoose, passing in the name of the model ("User") and the UserSchema schema. The resulting User model is then exported. This ensures that we only create one User model, and that we can access it from anywhere in our application. 