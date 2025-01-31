const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    numTel: {
        type: String, // Changer en String pour éviter les erreurs avec les nombres
        trim: true,
        match: /^[0-9]{8}$/, // Assure que c'est un numéro de 8 chiffres
        default: null
    },
    profilePhoto: {
        type: Object,
        default: {
            url: "https://yourteachingmentor.com/wp-content/uploads/2020/12/istockphoto-1223671392-612x612-1.jpg",
            publicId: null
        }
    },
    poste: {
        type: String,
        enum: ["employé", "chef de département", "administrateur"],
        default: "employé"
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

// Vérification de l'inscription d'un nouvel utilisateur
function registerVerify(obj) {
    const schema = Joi.object({
        username: Joi.string().trim().min(2).max(100).required(),
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required(),
        numTel: Joi.string().trim().length(8).pattern(/^[0-9]{8}$/).allow(null, ""), // Permet null ou vide
        poste: Joi.string().valid("employé", "chef de département", "administrateur").default("employé")
    });
    return schema.validate(obj);
}

// Vérification de la connexion de l'utilisateur
function loginVerify(obj) {
    const schema = Joi.object({
        email: Joi.string().trim().min(5).max(100).required().email(),
        password: Joi.string().trim().min(8).required()
    });
    return schema.validate(obj);
}

module.exports = {
    User,
    registerVerify,
    loginVerify
};
