import Joi from "joi";

const validateBody = (schemas) => async (req, res, next) => {
  try {
    await Joi.alternatives().try(schemas);

    // .validateAsync(req.body, { abortEarly: false });

    next();
  } catch (error) {
    next(error);
  }
};

export default validateBody;
