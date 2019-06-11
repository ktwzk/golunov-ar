//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');

// How to access scene objects
const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties
const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('I am a console message logged from the script');


const Materials = require('Materials');
const TouchGestures = require('TouchGestures');

// Locate the plane in the Scene
const plane = Scene.root.find('plane0');

//==============================================================================
// Change the material applied to the plane when the plane is tapped
//==============================================================================

// Locate the materials in the Assets
const material = Materials.get('defaultMaterial0');
const material2 = Materials.get('defaultMaterial1');
const material3 = Materials.get('defaultMaterial2');
const material4 = Materials.get('defaultMaterial3');
var counter = 0;

// Subscribe to tap gestures on the plane
TouchGestures.onTap().subscribe(function (gesture) {

	counter += 1;
	plane.material = [material, material2, material3, material4][counter % 4];
	/*Diagnostics.log('changed');
	Diagnostics.log(counter);
	Diagnostics.log(counter%4);*/
 

});