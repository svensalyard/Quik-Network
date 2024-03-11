const router = require('express').Router();
const {
getThought,
getOneThought,
postThought,
putThought,
addReaction,
removeReaction,
removeThought,
} = require('../../controllers/thought-controller');

router.route('/').get(getThought).post(postThought);

router.route('/:thoughtId').get(getOneThought).put(putThought).delete(removeThought);

router.route('/:thoughtId/reaction').post(addReaction)

router.route('./:thoughtID/reaction/:reactionId').delete(removeReaction);

module.exports = router;