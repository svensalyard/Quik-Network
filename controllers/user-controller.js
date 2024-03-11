const { thoughts, users } = require("../models");

const userController = {
	async getUser(req, res) {
		try {
			const userdb = await users.find();
			res.json(userdb);
		} catch (err) {
			console.log(err);
		}
	},
	async getOneUser(req, res) {
		try {
			const userdb = await users.findOne({ _id: req.params.userid }).populate("friend").populate("thought");
			res.json(userdb);
		} catch (err) {
			console.log(err);
		}
	},
	async postUser(req, res) {
		try {
			const userdb = await users.create(req.body);
			res.json(userdb);
		} catch (err) {
			console.log(err);
		}
	},
	async putUser(req, res) {
		try {
			const userdb = await users.findOneAndUpdate({ _id: req.params.userid }, { $set: req.body }, { new: true });
			res.json(userdb);
		} catch (err) {
			coneole.log(err);
		}
	},
	async removeUser(req, res) {
		try {
			const userdb = await users.findOneAndDelete({ _id: req.params.userid });
			res.json({ message: "User Deleted." });
		} catch (err) {
			console.log(err);
		}
	},
	async addFriend(req, res) {
		try {
			const userdb = await users.findOneAndUpdate({ _id: req.params, userid }, { $addToSet: { friend: req.params.friendid } }, { new: true });
			res.json(userdb);
		} catch (err) {;
			console.log(err);
		}
	},
	async removeFriend(req, res) {
		try {
			const userdb = await users.findOneAndUpdate({ _id: req.params.userid }, { $pull: { friend: req.params.friendid } }, { new: true });
			res.json(userdb);
		} catch (err) {
			console.log(err);
		}
	},
};

module.exports = userController;
