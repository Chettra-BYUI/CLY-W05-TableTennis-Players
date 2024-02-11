const Player = require('../models/Player');
const bcrypt = require('bcryptjs');

// Create a new player
exports.createPlayer = async (req, res) => {
  try {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newPlayer = new Player({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      state: req.body.state,
      clubAffiliation: req.body.clubAffiliation,
      paddleTypes: req.body.paddleTypes,
      daysAvailable: req.body.daysAvailable,
      preference: req.body.preference,
      aboutMe: req.body.aboutMe,
      userName: req.body.userName,
      password: hashedPassword // Use the hashed password
    });

    const savedPlayer = await newPlayer.save();
    res.status(201).json(savedPlayer);
  } catch (error) {
    res.status(500).json({ message: "Failed to create player", error: error.message });
  }
};

// Get all players
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: "Failed to get players", error: error.message });
  }
};

// You can add more functions here for updating, deleting, and fetching single player data
