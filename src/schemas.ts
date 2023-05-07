import Joi, { ObjectSchema } from "joi";

const PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})"
);

const authSignup = Joi.object().keys({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(PASSWORD_REGEX).min(8).required(),
});

const authSignin = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default {
  "/auth/signin": authSignin,
  "/auth/signup": authSignup,
} as { [key: string]: ObjectSchema };
