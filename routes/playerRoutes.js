const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const { requiresAuth } = require('express-openid-connect');

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

/**
 * @swagger
 * /api/players:
 *   post:
 *     summary: Create a new player
 *     tags: [Players]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               clubAffiliation:
 *                 type: string
 *               paddleTypes:
 *                 type: array
 *                 items:
 *                   type: string
 *               daysAvailable:
 *                 type: array
 *                 items:
 *                   type: string
 *               preference:
 *                 type: string
 *               aboutMe:
 *                 type: string
 *               userName:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Player created successfully
 *       400:
 *         description: Bad request
 */

/**
  * @swagger
 * /api/players:
 *   get:
 *     summary: Returns a list of players
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: A list of players
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   city:
 *                     type: string
 *                   state:
 *                     type: string
 *       500:
 *         description: Server error
 */
 /**
 * @swagger
 * /api/players/{id}:
 *   get:
 *     summary: Get a player by ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The player ID
 *     responses:
 *       200:
 *         description: A player object
 *         content:
 *           application/json:
 *             schema:
 *                
 *       400:
 *         description: Player not found
 */

/**
 * @swagger
 * /api/players/{id}:
 *   put:
 *     summary: Update a player
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The player ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               clubAffiliation:
 *                 type: string
 *               paddleTypes:
 *                 type: array
 *                 items:
 *                   type: string
 *               daysAvailable:
 *                 type: array
 *                 items:
 *                   type: string
 *               preference:
 *                 type: string
 *               aboutMe:
 *                 type: string
 *               userName:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       204:
 *         description: Player updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Player not found
 */

/**
 * @swagger
 * /api/players/{id}:
 *   delete:
 *     summary: Delete a player
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The player ID
 *     responses:
 *       200:
 *         description: Player deleted successfully
 *       400:
 *         description: Player not found
 */

// Define routes

// Route to create a player
router.post('/', playerController.createPlayer);

// Route to get all players
router.get('/', playerController.getAllPlayers);

// Route to get a player by ID
router.get('/:id', playerController.getPlayerById);

// Route to update a player
router.put('/:id', playerController.updatePlayer);

// Route to delete a player
router.delete('/:id', playerController.deletePlayer);

module.exports = router;
