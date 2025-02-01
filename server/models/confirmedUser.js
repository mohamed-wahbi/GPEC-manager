const mongoose = require('mongoose');
const Joi = require('joi');

const confirmedUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Veuillez entrer une adresse email valide']
    },
    poste: {
        type: String,
        enum: ["employé", "chef de département", "administrateur"],
        default: "employé"
    }
}, {
    timestamps: true
});

const ConfirmedUser = mongoose.model('confirmedUser', confirmedUserSchema);

// Validation avec Joi
const validateConfirmedUser = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': "L'email doit être valide.",
            'any.required': "L'email est requis."
        }),
        poste: Joi.string().valid("employé", "chef de département", "administrateur").messages({
            'any.only': 'Le poste doit être soit "employé", "chef de département" ou "administrateur".'
        })
    });
    return schema.validate(data);
};

module.exports = {
    ConfirmedUser,
    validateConfirmedUser
};
