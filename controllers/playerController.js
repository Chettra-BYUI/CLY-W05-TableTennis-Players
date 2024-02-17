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

// Get player by ID
exports.getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: "Failed to get player", error: error.message });
  }
};

// Update player
exports.updatePlayer = async (req, res) => {
  try {
    // Optionally hash password if it's being updated
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    }

    const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlayer) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ message: "Failed to update player", error: error.message });
  }
};

// Delete player
exports.deletePlayer = async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(204).send(); // No content to send back
  } catch (error) {
    res.status(500).json({ message: "Failed to delete player", error: error.message });
  }
};

// more CRUD to come
