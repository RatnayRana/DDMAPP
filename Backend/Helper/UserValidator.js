import { check } from "express-validator";

const registerValidator = [
  check("name", "Name is required").not().isEmpty(),
  check("phone No#", "phone No# is required").not().isEmpty(),
  check("password", "password is required").not().isEmpty(),
];

export default registerValidator;