// --- SET UP
const mongoose = require('mongoose');

// --- CREAT A SCHEMA
const schema = mongoose.Schema(
	{
		email: {
			type: String,
			lowercase: true,
			required: true,
			unique: true,
		},
		adddate: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

// --- MODEL
const central = mongoose.model('central', schema);

module.exports = central;
