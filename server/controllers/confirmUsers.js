const asyncHandler = require("express-async-handler");
const { ConfirmedUser, validateConfirmedUser } = require("../models/confirmedUser.js");

/*--------------------------------------------------
* @desc    Confirmed new User
* @router  /api/user/confirme
* @methode POST
* @access  only admin & chef
----------------------------------------------------*/
module.exports.confirmUserCtrl = asyncHandler(async (req, res) => {
    const { email, poste } = req.body;

    // Validation des données d'entrée
    const { error } = validateConfirmedUser({ email, poste });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await ConfirmedUser.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "L'utilisateur existe déjà." });
        }

        // Créer un nouvel utilisateur confirmé
        const newConfirmedUser = await ConfirmedUser.create({ email, poste });
        res.status(201).json({ message: "Utilisateur confirmé avec succès", user: newConfirmedUser });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
});
