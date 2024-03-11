const { thoughts, users } = require("../models");

const thoughtController = {
	async getThought(req, res) {
		try {
			const thoughtdb = await thoughts.find();
			res.json(thoughtdb);
		} catch (err) {
			console.log(err);
		}
	},
	async getOneThought(req, res) {
		try {
			const thoughtdb = await thoughts.findOne({ _id: req.params.thoughtid });
			res.json(thoughtdb);
		} catch (err) {
			console.log(err);
		}
	},
	async postThought(req, res) {
		try {
			const thoughtdb = await thoughts.create(req.body);
			const userdb = await users.findOneAndUpdate({_id: req.body.userid}, {$push: {thoughts: thoughtdb._id}},
			{new: true})
			res.json({message: 'Thought posted.'});
		} catch (err) {
			console.log(err);
		}
	},
	async putThought(req, res) {
		try {
			const thoughtdb = await thoughts.findOneAndUpdate({ _id: req.params.thoughtid }, { $set: req.body }, { new: true });
			res.json(thoughtdb);
		} catch (err) {
			coneole.log(err);
		}
	},
	async removeThought(req, res) {
		try {
			const thoughtdb = await thoughts.findOneAndDelete({ _id: req.params.thoughtid });
			res.json({ message: "Thought Deleted." });
		} catch (err) {
			console.log(err);
		}
	},
	async addReaction(req, res) {
		try {
			const thoughtdb = await thoughts.findOneAndUpdate({ _id: req.params.thoughtid }, { $addToSet: { reactions: req.body } }, { new: true });
			res.json(thoughtdb);
		} catch (err) {
			console.log(err);
		}
	},
	async removeReaction(req, res) {
		try {
			const thoughtdb = await thoughts.findOneAndUpdate({ _id: req.params.thoughtid }, { $pull: { reactions: req.params.reactionid } }, { new: true });
			res.json(thoughtdb);
		} catch (err) {
			console.log(err);
		}
	},
};

module.exports = thoughtController;