"use strict";
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:

// plugin.js

(function (Monogatari) {
	// This is the main plugin object
	Monogatari.plugin("TypeChoice", {
		// Initialization method
		init() {
			console.log("TypeChoice plugin initialized");
		},
		// Hook into the `choices` function to customize how choices are displayed
		choice(options) {
			// Hide the default choice buttons
			$(".choices").hide();

			// Create an input field for typing the choice
			const inputField = $(
				'<input type="text" id="type-choice-input" placeholder="Type your choice here..." />'
			);
			$("body").append(inputField);

			// Focus on the input field automatically
			inputField.focus();

			// Listen for the "Enter" key to confirm the choice
			inputField.on("keypress", (e) => {
				if (e.key === "Enter") {
					const userChoice = inputField.val().trim().toLowerCase();
					// Check if the user's input matches one of the options
					const matchedOption = options.find(
						(option) => option.text.toLowerCase() === userChoice
					);

					if (matchedOption) {
						// If a match is found, proceed to the next story node
						Monogatari.engine().story.addChoice(matchedOption);
						// Hide the input field and show the next scene
						inputField.remove();
						$(".choices").show();
					} else {
						// If no match is found, show an error or re-focus the input field
						alert("Invalid choice. Please try again.");
						inputField.val("");
						inputField.focus();
					}
				}
			});
		},
	});
})(Monogatari);

$_ready(() => {
	// 2. Inside the $_ready function:

	monogatari.init("#monogatari").then(() => {
		// 3. Inside the init function:
	});
});
