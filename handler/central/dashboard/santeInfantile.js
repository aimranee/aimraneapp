// SET UP
const fs = require('fs');
const centralData = require('../../../data/central');
const santeInfantileData = require('../../../data/csr/rapport/santeInfantile');

// ERROR
const { newError } = require('../../../util/error');

// JSON
const region = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/region.json`)
);
const province = JSON.parse(
	fs.readFileSync(`${__dirname}/../../../static/json/province.json`)
);

// DATA REGION
async function dataRegion() {
	try {
		var data = {
			enfantPrisesCharge: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			vaccinationRr: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			vaccinationPentavalent: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			vaccinationBcg: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			vitamineA: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			vitamineD: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			enfantsAvecInsuffisancePonderale: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			enfantsAvecRetardCroissance: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			diarrhe: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			ira: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
			reference: {
				data: {
					1: 0,
					2: 0,
					3: 0,
					4: 0,
					5: 0,
					6: 0,
					7: 0,
					8: 0,
					9: 0,
					10: 0,
					11: 0,
					12: 0,
				},
			},
		},
		santeInfantile = await santeInfantileData.getSanteInfantile();
		// ------------------------
		// region
		for (let i = 0; i < region.length; i++) {
			const regionElement = region[i];
			// santeInfantile
			for (let j = 0; j < santeInfantile.length; j++) {
				const santeInfantileElement = santeInfantile[j];
				if (regionElement.region === santeInfantileElement.csr.region) {
							// enfantPrisesCharge
							data.enfantPrisesCharge.data[regionElement.codeRegion] += santeInfantileElement.enfantPrisesCharge
							// vaccinationRr
							data.vaccinationRr.data[regionElement.codeRegion] += santeInfantileElement.vaccination.pentavalent
							// vaccinationPentavalent
							data.vaccinationPentavalent.data[regionElement.codeRegion] += santeInfantileElement.vaccination.rr
							// vaccinationBcg
							data.vaccinationBcg.data[regionElement.codeRegion] += santeInfantileElement.vaccination.bcg
							// vitamineA
							data.vitamineA.data[regionElement.codeRegion] += santeInfantileElement.vitamineA
							// vitamineD
							data.vitamineD.data[regionElement.codeRegion] += santeInfantileElement.vitamineD
							// enfantsAvecInsuffisancePonderale
							data.enfantsAvecInsuffisancePonderale.data[regionElement.codeRegion] += santeInfantileElement.enfantsAvecInsuffisancePonderale
							// enfantsAvecRetardCroissance
							data.enfantsAvecRetardCroissance.data[regionElement.codeRegion] += santeInfantileElement.enfantsAvecRetardCroissance
							// diarrhe
							data.diarrhe.data[regionElement.codeRegion] += santeInfantileElement.diarrhe
							// ira
							data.ira.data[regionElement.codeRegion] += santeInfantileElement.ira
							// reference
							data.reference.data[regionElement.codeRegion] += santeInfantileElement.reference
				}
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// DATA REGION
async function dataProvince() {
	try {
		var data = {
			enfantPrisesCharge: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			vaccinationRr: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			vaccinationPentavalent: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			vaccinationBcg: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			vitamineA: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			vitamineD: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			enfantsAvecInsuffisancePonderale: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			enfantsAvecRetardCroissance: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			diarrhe: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			ira: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
			reference: {
				data: {
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 0,
						11: 0,
						12: 0,
						13: 0,
						14: 0,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 0,
						20: 0,
						21: 0,
						22: 0,
						23: 0,
						24: 0,
						25: 0,
						26: 0,
						27: 0,
						28: 0,
						29: 0,
						30: 0,
						31: 0,
						32: 0,
						33: 0,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 0,
						39: 0,
						40: 0,
						41: 0,
						42: 0,
						43: 0,
						44: 0,
						45: 0,
						46: 0,
						47: 0,
						48: 0,
						49: 0,
						50: 0,
						51: 0,
						52: 0,
						53: 0,
						54: 0,
						55: 0,
						56: 0,
						57: 0,
						58: 0,
						59: 0,
						60: 0,
						61: 0,
						62: 0,
						63: 0,
						64: 0,
						65: 0,
						66: 0,
						67: 0,
						68: 0,
						69: 0,
						70: 0,
						71: 0,
						72: 0,
						73: 0,
						74: 0,
						75: 0,
					},
			},
		},
			santeInfantile = await santeInfantileData.getSanteInfantile();
		// ------------------------
		// province
		for (let i = 0; i < province.length; i++) {
			const provinceElement = province[i];
			// santeInfantile
			for (let j = 0; j < santeInfantile.length; j++) {
				const santeInfantileElement = santeInfantile[j];
				if (
					provinceElement.province ===
					santeInfantileElement.csr.province
				) {
			// enfantPrisesCharge
			data.enfantPrisesCharge.data[provinceElement.codeProvince] += santeInfantileElement.enfantPrisesCharge
			// vaccinationRr
			data.vaccinationRr.data[provinceElement.codeProvince] += santeInfantileElement.vaccination.pentavalent
			// vaccinationPentavalent
			data.vaccinationPentavalent.data[provinceElement.codeProvince] += santeInfantileElement.vaccination.rr
			// vaccinationBcg
			data.vaccinationBcg.data[provinceElement.codeProvince] += santeInfantileElement.vaccination.bcg
			// vitamineA
			data.vitamineA.data[provinceElement.codeProvince] += santeInfantileElement.vitamineA
			// vitamineD
			data.vitamineD.data[provinceElement.codeProvince] += santeInfantileElement.vitamineD
			// enfantsAvecInsuffisancePonderale
			data.enfantsAvecInsuffisancePonderale.data[provinceElement.codeProvince] += santeInfantileElement.enfantsAvecInsuffisancePonderale
			// enfantsAvecRetardCroissance
			data.enfantsAvecRetardCroissance.data[provinceElement.codeProvince] += santeInfantileElement.enfantsAvecRetardCroissance
			// diarrhe
			data.diarrhe.data[provinceElement.codeProvince] += santeInfantileElement.diarrhe
			// ira
			data.ira.data[provinceElement.codeProvince] += santeInfantileElement.ira
			// reference
			data.reference.data[provinceElement.codeProvince] += santeInfantileElement.reference
				}
			}
		}
		return data;
	} catch (error) {
		console.log(error);
		throw newError(500, "quelque chose s'est mal passé");
	}
}

// get the dashbord
async function santeInfantile(req, res, next) {
	try {
		// collect data
		var data = {},
			today = new Date();
		// get the document of the central
		data.document = await centralData.getDocument(req.params.id);
		// taux pdr visite
		data.carte = {
			region: await dataRegion(),
			province: await dataProvince(),
		};
		// render the page
		res.status(200).render('central/dashboard/santeInfantile', {
			title: 'Tableau de bord | Santé infantile | ' + today.getFullYear(),
			url: req.originalUrl,
			data,
			region,
			province,
			page: 'prestation',
			listItem: 'santeInfantile',
		});
	} catch (error) {
		console.log(error);
		return next(newError(500, "quelque chose s'est mal passé"));
	}
}

// output
module.exports = {
	santeInfantile,
};
