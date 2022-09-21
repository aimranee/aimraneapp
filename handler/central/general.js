// SET UP
const fs = require('fs');
const centralData = require('../../data/central');
const userData = require('../../data/user');
const planAction = require('../../handler/central/planAction');
const rapport = require('../../handler/central/rapport');

// JSON
const region = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/region.json`)
);
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../static/json/province.json`)
);

// ERROR
const { newError } = require('../../util/error');

// redirection
async function redirection(req, res, next) {
	try {
		// collect data
		return res.redirect(
			req.baseUrl +
				'/' +
				req.params.id +
				'/tableau-de-bord/population-cible'
		);
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// SETTINGS
async function changePassword(req, res, next) {
	try {
		// collect data
		var data = {};
		// get the document
		data.document = await centralData.getDocument(req.params.id);
		// render the page
		res.status(200).render('central/changePassword', {
			title: 'Ministère de la Santé Direction de la Population Service de la Coordination et de la Collaboration Intersectorielle' + ' | Changer le mot de passe',
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// check the old passord
async function checkOldPassword(req, res, next) {
	try {
		// get the document
		var currentUser = await centralData.getDocument(req.params.id);
		// get the candidate
		var candidate = await userData.getUserByEmailAndPassword(
			currentUser.email,
			req.body.oldPassword
		);
		// check the candidate
		if (!candidate) {
			req.flash('err', 'L’ancien mot de passe est incorrect');
			return res.redirect(req.originalUrl);
		}
		return next();
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

// update the password
async function updatePassword(req, res, next) {
	try {
		// change the password
		await userData.updatePassword(req.params.id, req.body.newPassword);
		// check the candidate
		req.flash('succ', 'Le mot de passe a été mis à jour avec succès');
		return res.redirect('/sign-out');
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

async function changeDate(req, res, next) {
	try {
		// collect data
		var data = {};
		// get the document
		data.document = await centralData.getDocument(req.params.id);
		data.title = 'Delai de Remplissage';
		// render the page
		res.status(200).render('central/dateremplissage', {
			title: data.title + ' | Changer la Date',
			data,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

//change data
async function showdata(req, res, next) {  
	try {
		// collect data
		var data = {}
		// get the document of the central
		data.document = await centralData.getDocument(req.params.id);
		// taux de remplissage
		data.carte = {
			region: await planAction.tauxDataRegion(),
			province: await planAction.tauxDataProvince(),
		};
		// pla action
		data.planAction = {
			region: await planAction.dataRegion(),
			province: await planAction.dataProvince(),
		};
		// collect data
		var data2 = {},
			today = new Date();
		// get the document of the central
		data2.document = await centralData.getDocument(req.params.id);
		// taux de remplissage
		data2.carte = {
			region: await rapport.tauxDataRegion(parseInt(1)),
			province: await rapport.tauxDataProvince(parseInt(1)),
		};
		// rapport
		data2.rapport = {
			region: await rapport.dataRegion(1),
			province: await rapport.dataProvince(1),
		};
		data.title = 'Etat d\'avancement'
		// render the page
		res.status(200).render('central/changementvaleur', {
			title: data.title + ' | Tableau Des Donnees',
			data,
			data2,
			region,
			province,
			page: 'planAction',
			listItem: 'planAction',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// update the date
async function updatedate(req, res, next) {
	try {
		var today = new Date()
		var timeRemaining = ((30 - today.getDate())< 0) ? 0 : 30 - today.getDate() 
		if((timeRemaining+Number(req.body.date))<30){
			// change the date
			await centralData.updatedate(req.params.id, Number(req.body.date));
			// check the candidate
			req.flash('succ', 'La date a été mise à jour avec succès');
			return res.redirect(req.originalUrl);
		}else{
			req.flash(
				'err',
				"la date ancien faut pas depaser 30 jour"
			);
			return res.redirect(
				req.baseUrl + '/' + req.params.id + '/changer-le-date'
			);
		}
	} catch (error) {
		console.log(error);
		return next(error);
	}
}

module.exports = {
	redirection,
	changePassword,
	checkOldPassword,
	updatePassword,
	changeDate,
	updatedate,
	showdata,
};
