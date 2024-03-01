const Joi = require('joi');
const jwt_decode = require('jwt-decode');
const db = require('../db/models');
const ValidateError = require('../middlewares/ValidateError');

const schema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
}).messages({
  'string.empty': 'All fields must be filled',
  'any.required': 'All fields must be filled',
});

const loginService = {
  async login(body) {
    const { error } = schema.validate(body);
    if (error) throw new ValidateError(401, error.message);

    const { email, password } = body;

    const dataValues = await db.Users.findOne({
      where: { email }, raw: true,
    });

    if (!dataValues) throw new ValidateError(400, 'Incorrect email or password');

    const JwtDecode = jwt_decode(dataValues.password);

    if (JwtDecode.password !== password) {
      throw new ValidateError(401, 'Incorrect email or password');
    }
    console.log(dataValues);
    const token = dataValues.password;
    const { name, id } = dataValues;

    return { id, name, email, token };
  },
};

module.exports = loginService;
