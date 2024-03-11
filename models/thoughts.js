const { Schema, model } = require("mongoose");
const reactionsSchema = require('./reactions');

const thoughtsSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true
		},
		reaction: [reactionsSchema]
	},
	{
		toJSON: {
			getters: true
		},
		id: false
	}
);

thoughtsSchema.virtual('reactionList').get(function(){
	return this.reaction.length;
}
)
const thoughts = model("thoughts", thoughtsSchema);

module.exports = thoughts;
