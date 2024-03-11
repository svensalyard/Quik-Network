const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, 'Email address required.']
		},
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'users'
			}
		],
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'thoughts'
			}
		]
	},
	{
		toJSON: {
			virtuals: true
		},
		id: false,
	}
);

usersSchema.virtual('friendsList').get(function() {return this.friends.length;});

const users = model("users", usersSchema);

module.exports = users;
