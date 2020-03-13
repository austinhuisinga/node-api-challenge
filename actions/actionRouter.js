const express = require('express');
const actions = require('../data/helpers/actionModel');
const router = express.Router();

// GET all Actions
router.get('/', (req, res) => {
  actions
  .get()
  .then(action => {
    res.status(200).json(action);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Error retrieving actions',
    });
  });
});


// GET Action by ID
router.get('/:id', (req, res) => {
  actions
  .get(req.params.id)
  .then(action => {
    if(action) {
      res.status(200).json(action);
    } else {
      res.status(400).json({
        message: 'Action not found',
      });
    };
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Error retrieving the action',
    });
  });
});


// POST Action
router.post('/', (req, res) => {
  actions
  .insert(req.body)
  .then(action => {
    res.status(201).json(action);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Error adding the action',
    });
  });
});


// UPDATE Action
router.put('/:id', (req, res) => {
  if(!req.body) {
    res.status(400).json({
      message: 'oops!'
    });
  };

  actions
  .update(req.params.id, req.body)
  .then(action => {
    if(action) {
      res.status(200).json({
        message: 'Action updated successfully',
      });
    } else {
      res.status(404).json({
        message: 'Action could not be found',
      });
    };
  });
});


// DELETE Action
router.delete('/:id', async (req, res) => {
  try {
    await actions
    .remove(req.params.id);
    res.status(200).json({
      message: 'Action removed',
    });
  } catch(error) {
    res.status(500).json({
      message: 'Action could not be removed',
    });
  };
});

// not sure why this won't work
// router.delete(':/id', (req, res) => {
//   actions
//   .remove(req.params.id)
//   .then(action => {
//     action > 0
//       ? res.status(200).json({
//         message: 'Action removed',
//       })
//       : res.status(404).json({
//         message: 'Invalid action',
//       });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({
//       message: 'Action could not be removed',
//     });
//   });
// });



module.exports = router;