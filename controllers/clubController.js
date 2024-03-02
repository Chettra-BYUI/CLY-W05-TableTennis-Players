const Club = require('../models/Club'); 

exports.createClub = async (req, res) => {
  try {
    // Check for duplicate club name
    const existingClub = await Club.findOne({ name: req.body.name }); 
    if (existingClub) {
      return res.status(400).json({ message: "Club name already exists" });
    }

    const newClub = new Club({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      description: req.body.description,
      members: req.body.members 
    });

    const savedClub = await newClub.save();
    res.status(201).json(savedClub);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: "Validation failed", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to create club", error: error.message });
  }
};

// Get all clubs
exports.getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find().populate('members', 'firstName lastName');
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ message: "Failed to get clubs", error: error.message });
  }
};

// Get club by ID
exports.getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id).populate('members', 'firstName lastName');
    if (!club) {
      return res.status(400).json({ message: "Club not found" });
    }
    res.status(200).json(club);
  } catch (error) {
    res.status(500).json({ message: "Failed to get club", error: error.message });
  }
};

// Update club
exports.updateClub = async (req, res) => {
  try {
    const updatedClub = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClub) {
      return res.status(404).json({ message: "Club not found" });
    }
    res.status(204).json(updatedClub);
  } catch (error) {
    res.status(500).json({ message: "Failed to update club", error: error.message });
  }
};

// Delete club
exports.deleteClub = async (req, res) => {
  try {
    const deletedClub = await Club.findByIdAndDelete(req.params.id);
    if (!deletedClub) {
      return res.status(400).json({ message: "Club not found" });
    }
    res.status(200).send(); // No content to send back
  } catch (error) {
    res.status(500).json({ message: "Failed to delete club", error: error.message });
  }
};
