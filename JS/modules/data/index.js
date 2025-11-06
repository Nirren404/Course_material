// * This will be your main file, where you bring everything together.
import logger from "./utils.js";
import { students, getStudentsCount } from "./data.js";
import { schoolName } from "./extra.js";

logger(`Welcome to ${schoolName}!`);

logger(`We have ${getStudentsCount()} students enrolled.`);

logger("Student List:");
students.forEach((student, index) => {
  logger(`${index + 1}. ${student}`);
});
