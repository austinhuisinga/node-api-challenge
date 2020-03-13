const express = require('express');
const projects = require('../data/helpers/projectModel');
const router = express.Router();

// GET all Projects
router.get('/', (req, res) => {
  projects
  .get()
  .then(project => {
    res.status(200).json(project);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Error retrieving projects',
    });
  });
});

// GET Project by ID
router.get('/:id', (req, res) => {
  projects
  .get(req.params.id)
  .then(project => {
    if(project) {
      res.status(200).json(project);
    } else {
      res.status(400).json({
        message: 'Project not found',
      })
    };
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Error retrieving the project',
    });
  });
});

// GET Project Actions



// POST Project 

router.post('/', (req, res) => {
  projects
  .insert(req.body)
  .then(project => {
    res.status(201).json(project);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Error adding the project',
    });
  });
});

// UPDATE Project by ID



// DELETE Project by ID



// custom middleware

// function validateProjectId(req, res, next) {
//   const { id } = req.params;

// }

module.exports = router;