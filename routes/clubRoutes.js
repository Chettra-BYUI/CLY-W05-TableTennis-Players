const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');  
const { requiresAuth } = require('express-openid-connect');

 

/**
 * @swagger
 * /api/clubs:
 *   post:
 *     summary: Create a new club
 *     tags: [Clubs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               description:
 *                 type: string
 *               members:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Club created successfully
 *       400:
 *         description: Bad request
 */

/**
  * @swagger
 * /api/clubs:
 *   get:
 *     summary: Returns a list of clubs
 *     tags: [Clubs]
 *     responses:
 *       200:
 *         description: A list of clubs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/clubs/{id}:
 *   get:
 *     summary: Get a club by ID
 *     tags: [Clubs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The club ID
 *     responses:
 *       200:
 *         description: A club object
 *         content:
 *           application/json:
 *             schema:
 *                
 *       400:
 *         description: Club not found
 */

/**
 * @swagger
 * /api/clubs/{id}:
 *   put:
 *     summary: Update a club
 *     tags: [Clubs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The club ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              
 *     responses:
 *       204:
 *         description: Club updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Club not found
 */

/**
 * @swagger
 * /api/clubs/{id}:
 *   delete:
 *     summary: Delete a club
 *     tags: [Clubs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The club ID
 *     responses:
 *       200:
 *         description: Club deleted successfully
 *       400:
 *         description: Club not found
 */

// Define routes for clubs

// Route to create a club
router.post('/', clubController.createClub);

// Route to get all clubs
router.get('/', clubController.getAllClubs);

// Route to get a club by ID
router.get('/:id', clubController.getClubById);

// Route to update a club
router.put('/:id', clubController.updateClub);

// Route to delete a club
router.delete('/:id', clubController.deleteClub);

module.exports = router;
