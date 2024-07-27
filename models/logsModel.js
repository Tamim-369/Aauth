import mongoose, { Schema } from "mongoose";

const logsSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  Log: {
    type: String,
    required: [true, "Log is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists before creating a new one
const Logs = mongoose.models.Logs || mongoose.model("Logs", logsSchema);

export default Logs;
