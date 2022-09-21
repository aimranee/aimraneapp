// --- SET UP
const central = require('../model/central');

// --- ERROR
const { newError } = require('../util/error');
// ==================================================================== GENERAL
// get the user document

async function getDocument(id) {
	try {
		return await central.findById(id);
	} catch (error) {
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function getDocumentusual(document, data) {
	try {
		return await central.findById('60fb57920c226d3edabe430c');
	} catch (error) {
		throw newError(500, "quelque chose s'est mal passé");
	}
}

async function updatedate(document, adddate) {
	try {
		return await central.
			updateOne(
				{ _id: document },
				{
					$set: {
						"adddate": adddate
					}
				}
			)
	} catch (error) {
		throw newError(500, "quelque chose s'est mal passé");
	}
}

module.exports = {
	getDocument,
	updatedate,
	getDocumentusual,
};
