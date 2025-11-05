import Joi from 'joi';

const registerParentSchema = Joi.object({
    name: Joi.string().required("Name is required"),
    contactInfo: Joi.object({
        phone: Joi.string().required("Phone number is required"),
        email: Joi.string().email().required("Email is required"),
        address: Joi.string().optional()
    }),

})

export default registerParentSchema;