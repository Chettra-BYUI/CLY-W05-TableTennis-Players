const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

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
 *                  
 *       500:
 *         description: Server error
 */

// Define routes
router.post('/', playerController.createPlayer);
router.get('/', playerController.getAllPlayers);
// router.put('/', playerController.updatePlayer);
// router.delete('/', playerController.deletePlayer);

module.exports = router;
