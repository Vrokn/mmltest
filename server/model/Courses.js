const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
  },
  description: {
    type: String,
    required: true,
  },
  instructors: {
    type: Array,
    required: true,
    default: [],
  },
  subscribers: {
    type: Array,
    required: true,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Courses", CoursesSchema);
