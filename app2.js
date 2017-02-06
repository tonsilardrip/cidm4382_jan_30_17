var unitConverter = angular.module('UnitConverter', []);
// convert.french-property.co.uk
unitConverter.controller('volumeConversionController', [
	'$scope',  function($scope){
		var ucc = this;
		
		ucc.volumeUnits = 
		[
			{
				unit_name: "Cubic Centimeters",
				unit_code: "cm3",
				type: 'metric'
			},
			{
				unit_name: "Cubic Decimeters",
				unit_code: "dm3",
				type: 'metric'
			},
			{
				unit_name: "Cubic Meters",
				unit_code: "m3",
				type: 'metric'
			},
			{
				unit_name: "Liters",
				unit_code: "l",
				type: 'metric'
			},
			{
				unit_name: "Hectoliters",
				unit_code: "hl",
				type: 'metric'
			},
			{
				unit_name: "Cubic Inch/s",
				unit_code: "in3",
				type: 'imperial'
			},
			{
				unit_name: "Cubic feet",
				unit_code: "ft3",
				type: 'imperial'
			},
			{
				unit_name: "Fluid ounce",
				unit_code: "fl_oz",
				type: 'imperial'
			},
			{
				unit_name: "Pint/s",
				unit_code: "pt",
				type: 'imperial'
			},
			{
				unit_name: "Gallon/s",
				unit_code: "gl",
				type: 'imperial'
			},
		];
		
		ucc.convertVolume = function(){
			var convert = ucc.firstSelection.unit_code + 'to' + ucc.secondSelection.unit_code;
			alert(convert);
			switch(convert){
				case 'cm3todm3':
					ucc.resultVolume = ucc.input * 0.001;
					break;
				case 'dm3tocm3':
					ucc.resultVolume = ucc.input * 1000;
					break;
				case 'm3tocm3':
					ucc.resultVolume = ucc.input * 1000000;
					break;
				case 'cm3tom3':
					ucc.resultVolume = ucc.input / 1000000;
					break;
				case 'cm3tol':
					ucc.resultVolume = ucc.input / 1000;
					break;
				case 'ltocm3':
					ucc.resultVolume = ucc.input * 1000;
					break;
				case 'hltocm3':
					ucc.resultVolume = ucc.input / 1.0E-5;
					break;
				case 'cm3tohl':
					ucc.resultVolume = ucc.input * 1.0E-5;
					break;
				case 'cm3toin3':
					ucc.resultVolume = ucc.input * 0.061024;
					break;
				case 'in3tocm3':
					ucc.resultVolume = ucc.input / 0.061024;
					break;
				case 'cm3toft3':
					ucc.resultVolume = ucc.input * 0.000035315;
					break;
				case 'ft3tocm3':
					ucc.resultVolume = ucc.input / 0.000035315;
					break;
				case 'cm3tofl_oz':
					ucc.resultVolume = ucc.input * 0.033814;
					break;
				case 'fl_oztocm3':
					ucc.resultVolume = ucc.input / 0.033814;
					break;
				case 'cm3topt':
					ucc.resultVolume = ucc.input * 0.0021133764188652;
					break;
				case 'pttocm3':
					ucc.resultVolume = ucc.input / 0.0021133764188652;
					break;
				case 'cm3togl':
					ucc.resultVolume = ucc.input * 0.00026417;
					break;
				case 'gltocm3':
					ucc.resultVolume = ucc.input / 0.00026417;
					break;
				default:
					alert('No selection');
			}
		};
	}
]);