const Joi = require('joi');
const models = require('../db/models');
const { setToken } = require('../middlewares/tokenMiddleware');
const ValidateError = require('../middlewares/ValidateError');

const schema = Joi.object({
  name: Joi.string().required().min(12),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
}).messages({
  'string.empty': 'All fields must be filled',
  'any.required': 'All fields must be filled',
});

const registerService = {
  async register(body) {
    const { error } = schema.validate(body);
    if (error) throw new ValidateError(401, error.message);

    const { name, email, password } = body;
    console.log(body);

    const dataValues = await models.Users.findOne({
      where: { name, email },
    });
    if (dataValues) throw new ValidateError(400, 'User already exists');

    const jwtPass = setToken({ name, email, password })
    const newUser = { name, email, password: jwtPass };
    const createUser = await models.Users.create(newUser);
    return createUser;
  },
};

module.exports = registerService;