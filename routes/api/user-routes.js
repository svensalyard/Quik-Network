const router = require('express').Router();
const {
	getUser,
	getOneUser,
	postUser,
	putUser,
	addFriend,
	removeFriend,
	removeUser,
} = require('../../controllers/user-controller');

router.route('/').get(getUser).post(postUser);

router.route('/:userId').get(getOneUser).put(putUser).delete(removeUser);

router.route('./:userId/friend/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;