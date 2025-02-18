const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number }
});

// ✅ Exporting the Model Correctly
const User = mongoose.models.users || mongoose.model("users", UserSchema);
module.exports = User;