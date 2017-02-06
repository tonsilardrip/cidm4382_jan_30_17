var unitConverter = angular.module('UnitConverter', []);
// convert.french-property.co.uk
unitConverter.controller('unitConversionController', [
	'$scope',  function($scope){
		var ucc = this;
		ucc.volumeUnits = 
		[
			{
				unitname: "Cubic Centimeters",
				unitcode: "cm3",
				type: 'metric'
			},
			{
				unitname: "Cubic Decimeters",
				unitcode: "dm3",
				type: 'metric'
			},
			{
				unitname: "Cubic Meters",
				unitcode: "m3",
				type: 'metric'
			},
			{
				unitname: "Liters",
				unitcode: "l",
				type: 'metric'
			},
			{
				unitname: "Hectoliters",
				unitcode: "hl",
				type: 'metric'
			},
			{
				unitname: "Cubic Inch/s",
				unitcode: "in3",
				type: 'imperial'
			},
			{
				unitname: "Cubic feet",
				unitcode: "ft3",
				type: 'imperial'
			},
			{
				unitname: "Fluid ounce",
				unitcode: "floz",
				type: 'imperial'
			},
			{
				unitname: "Pint/s",
				unitcode: "pt",
				type: 'imperial'
			},
			{
				unitname: "Gallon/s",
				unitcode: "gl",
				type: 'imperial'
			},
		];
		
		ucc.convertVolume = function(){
			var convserion = ucc.firstSelection.unitcode + 'to' + ucc.secondSelection.unitcode;
			alert(convserion);
			switch(convserion){
				case 'cm3todm3':
					ucc.conversionResults = ucc.input * 0.001;
					break;
				case 'dm3tocm3':
					ucc.conversionResults = ucc.input * 1000;
					break;
				case 'm3tocm3':
					ucc.conversionResults = ucc.input * 1000000;
					break;
				case 'cm3tom3':
					ucc.conversionResults = ucc.input / 1000000;
					break;
				case 'cm3tol':
					ucc.conversionResults = ucc.input / 1000;
					break;
				case 'ltocm3':
					ucc.conversionResults = ucc.input * 1000;
					break;
				case 'hltocm3':
					ucc.conversionResults = ucc.input / 1.0E-5;
					break;
				case 'cm3tohl':
					ucc.conversionResults = ucc.input * 1.0E-5;
					break;
				case 'cm3toin3':
					ucc.conversionResults = ucc.input * 0.061024;
					break;
				case 'in3tocm3':
					ucc.conversionResults = ucc.input / 0.061024;
					break;
				case 'cm3toft3':
					ucc.conversionResults = ucc.input * 0.000035315;
					break;
				case 'ft3tocm3':
					ucc.conversionResults = ucc.input / 0.000035315;
					break;
				case 'cm3tofloz':
					ucc.conversionResults = ucc.input * 0.033814;
					break;
				case 'floztocm3':
					ucc.conversionResults = ucc.input / 0.033814;
					break;
				case 'cm3topt':
					ucc.conversionResults = ucc.input * 0.0021133764188652;
					break;
				case 'pttocm3':
					ucc.conversionResults = ucc.input / 0.0021133764188652;
					break;
				case 'cm3togl':
					ucc.conversionResults = ucc.input * 0.00026417;
					break;
				case 'gltocm3':
					ucc.conversionResults = ucc.input / 0.00026417;
					break;
				case 'dm3tom3':
					ucc.conversionResults = ucc.input / 1000;
					break;
				case 'm3todm3':
					ucc.conversionResults = ucc.input * 1000;
					break;
				case 'dm3tol':
					ucc.conversionResults = ucc.input;
					break;
				case 'ltodm3':
					ucc.conversionResults = ucc.input;
					break;
				case 'dm3tohl':
					ucc.conversionResults = ucc.input / 100;
					break;
				case 'hltodm3':
					ucc.conversionResults = ucc.input * 100;
					break;
				case 'dm3toin3':
					ucc.conversionResults = ucc.input * 61.02374409;
					break;
				case 'in3todm3':
					ucc.conversionResults = ucc.input / 61.02374409;
					break;
				case 'dm3toft3':
					ucc.conversionResults = ucc.input * 0.03531467;
					break;
				case 'ft3todm3':
					ucc.conversionResults = ucc.input / 0.03531467;
					break;
				case 'dm3tofloz':
					ucc.conversionResults = ucc.input * 35.195079727854;
					break;
				case 'floztodm3':
					ucc.conversionResults = ucc.input / 35.195079727854;
					break;
				case 'dm3topt':
					ucc.conversionResults = ucc.input * 1.7597539863927;
					break;
				case 'pttodm3':
					ucc.conversionResults = ucc.input / 1.7597539863927;
					break;
				case 'dm3togl':
					ucc.conversionResults = ucc.input * 0.21996925;
					break;
				case 'gltodm3':
					ucc.conversionResults = ucc.input / 0.21996925;
					break;
				case 'm3tol':
					ucc.conversionResults = ucc.input / 0.0010000;
					break;
				case 'ltom3':
					ucc.conversionResults = ucc.input * 0.0010000;
					break;
				case 'm3tohl':
					ucc.conversionResults = ucc.input * 10;
					break;
				case 'hltom3':
					ucc.conversionResults = ucc.input / 10;
					break;
				case 'm3toin3':
					ucc.conversionResults = ucc.input * 61024;
					break;
				case 'in3tom3':
					ucc.conversionResults = ucc.input / 61024;
					break;
				case 'm3toft3':
					ucc.conversionResults = ucc.input * 35.315;
					break;
				case 'ft3tom3':
					ucc.conversionResults = ucc.input / 35.315;
					break;
				case 'm3tofloz':
					ucc.conversionResults = ucc.input * 33814.022702;
					break;
				case 'floztom3':
					ucc.conversionResults = ucc.input / 33814.022702;
					break;
				case 'm3topt':
					ucc.conversionResults = ucc.input * 1759.8;
					break;
				case 'pttom3':
					ucc.conversionResults = ucc.input / 1759.8;
					break;
				case 'm3togl':
					ucc.conversionResults = ucc.input / 0.00454609;
					break;
				case 'gltom3':
					ucc.conversionResults = ucc.input * 0.00454609;
					break;
				case 'ltohl':
					ucc.conversionResults = ucc.input / 100;
					break;
				case 'hltol':
					ucc.conversionResults = ucc.input * 100;
					break;
				case 'ltoin3':
					ucc.conversionResults = ucc.input * 61.024;
					break;
				case 'in3tol':
					ucc.conversionResults = ucc.input / 61.024;
					break;
				case 'ltoft3':
					ucc.conversionResults = ucc.input * 0.035315;
					break;
				case 'ft3tol':
					ucc.conversionResults = ucc.input / 0.035315;
					break;
				case 'ltofloz':
					ucc.conversionResults = ucc.input * 35.195;
					break;
				case 'floztol':
					ucc.conversionResults = ucc.input / 35.195;
					break;
				case 'ltopt':
					ucc.conversionResults = ucc.input * 1.7598;
					break;
				case 'pttol':
					ucc.conversionResults = ucc.input / 1.7598;
					break;
				case 'ltogl':
					ucc.conversionResults = ucc.input / 4.54609;
					break;
				case 'gltol':
					ucc.conversionResults = ucc.input * 4.54609;
					break;
				case 'hltoin3':
					ucc.conversionResults = ucc.input * 6102.37;
					break;
				case 'in3tohl':
					ucc.conversionResults = ucc.input / 6102.37;
					break;
				case 'hltoft3':
					ucc.conversionResults = ucc.input * 3.5314666721489;
					break;
				case 'ft3tohl':
					ucc.conversionResults = ucc.input / 3.5314666721489;
					break;
				case 'hltofloz':
					ucc.conversionResults = ucc.input / 0.000284130742;
					break;
				case 'floztohl':
					ucc.conversionResults = ucc.input * 0.000284130742;
					break;
				case 'hltopt':
					ucc.conversionResults = ucc.input * 175.97532587;
					break;
				case 'pttohl':
					ucc.conversionResults = ucc.input / 175.97532587;
					break;
				case 'hltogl':
					ucc.conversionResults = ucc.input / 0.0454609;
					break;
				case 'gltohl':
					ucc.conversionResults = ucc.input * 0.0454609;
					break;
				case 'in3toft3':
					ucc.conversionResults = ucc.input * 0.00057870;
					break;
				case 'ft3toin3':
					ucc.conversionResults = ucc.input / 0.00057870;
					break;
				case 'in3tofloz':
					ucc.conversionResults = ucc.input / 1.7338714549476;
					break;
				case 'floztoin3':
					ucc.conversionResults = ucc.input * 1.7338714549476;
					break;
				case 'in3topt':
					ucc.conversionResults = ucc.input / 34.68;
					break;
				case 'pttoin3':
					ucc.conversionResults = ucc.input * 34.68;
					break;
				case 'in3togl':
					ucc.conversionResults = ucc.input * 0.0036047;
					break;
				case 'gltoin3':
					ucc.conversionResults = ucc.input / 0.0036047;
					break;
				case 'ft3tofloz':
					ucc.conversionResults = ucc.input * 957.504918;
					break;
				case 'floztoft3':
					ucc.conversionResults = ucc.input / 957.504918;
					break;
				case 'ft3topt':
					ucc.conversionResults = ucc.input * 51.4280927;
					break;
				case 'pttoft3':
					ucc.conversionResults = ucc.input / 51.4280927;
					break;
				case 'ft3togl':
					ucc.conversionResults = ucc.input * 6.2288354590428;
					break;
				case 'gltoft3':
					ucc.conversionResults = ucc.input / 6.2288354590428;
					break;
				case 'floztopt':
					ucc.conversionResults = ucc.input / 0.052042115;
					break;
				case 'pttofloz':
					ucc.conversionResults = ucc.input * 0.052042115;
					break;
				case 'floztogl':
					ucc.conversionResults = ucc.input / 1.0408423;
					break;
				case 'gltofloz':
					ucc.conversionResults = ucc.input * 1.0408423;
					break;
				default:
					alert('not anywhere near');
			}
		};
	}
]);