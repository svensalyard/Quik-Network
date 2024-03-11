const { Schema, model } = require("mongoose");

const reactionsSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		reactionText: {
			type: String,
			required: true,
		},
		username: {
			type: String,
		},
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

module.exports = reactionsSchema;
