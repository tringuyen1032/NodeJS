const express = require('express')
const router = express.Router()
const {
   getPerson,
   createPerson,
   createPersonPostman,
   updatePerson,
   deletePerson } = require('../controllers/people')

router.route('/').get(getPerson).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

// router.post('/', createPerson)

// router.post('/postman', createPersonPostman)

// router.put('/:id', updatePerson)

// router.delete('/:id', deletePerson)

module.exports = router