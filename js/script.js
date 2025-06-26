/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
	Help: {
		title: "Help",
		subtitle: "Some useful Links",
		body: `
			<p style="text-align: center"><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p style="text-align: center"><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
	},
	GoodEnd: {
		title: "You finished the game and got a perfect score!",
		body: `
			<p style="text-align: center; font-size: 85%"><b>Congratulations!</b></p>
			<p style="text-align: center; font-size: 80%">Thanks for playing the game and learning about the Tajima Yahei Sericulture Farm. Why don't you let us know about your perfect score? Or if you have any comments about the game, let us know!</p>
			<p style="text-align: center; font-size: 70%"><a href='https://sites.google.com/isesaki-school.ed.jp/impress/contact'><b>Contact Us</b></a></p>
			<p style="text-align: center; font-size: 80%">If you want to play again, click the link below!</p>
			<p style="text-align: center; font-size: 70%"><a href='index.html'><b>Start Again</b></a></p>
		`,
	},
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
	Welcome: {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: "",
	},
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({
	universe: {
		autoPlay: true,
		background: {
			color: {
				value: "transparent",
			},
			image: "",
			position: "",
			repeat: "",
			size: "",
			opacity: 1,
		},
		backgroundMask: {
			composite: "destination-out",
			cover: {
				color: {
					value: "#fff",
				},
				opacity: 1,
			},
			enable: false,
		},
		clear: true,
		defaultThemes: {},
		delay: 0,
		fullScreen: {
			enable: true,
			zIndex: 0,
		},
		detectRetina: true,
		duration: 0,
		fpsLimit: 120,
		interactivity: {
			detectsOn: "window",
			events: {
				onClick: {
					enable: true,
					mode: "push",
				},
				onDiv: {
					selectors: [],
					enable: false,
					mode: [],
					type: "circle",
				},
				onHover: {
					enable: true,
					mode: "repulse",
					parallax: {
						enable: false,
						force: 2,
						smooth: 10,
					},
				},
				resize: {
					delay: 0.5,
					enable: true,
				},
			},
			modes: {
				trail: {
					delay: 1,
					pauseOnStop: false,
					quantity: 1,
				},
				attract: {
					distance: 200,
					duration: 0.4,
					easing: "ease-out-quad",
					factor: 1,
					maxSpeed: 50,
					speed: 1,
				},
				bounce: {
					distance: 200,
				},
				bubble: {
					distance: 200,
					duration: 0.4,
					mix: false,
					divs: {
						distance: 200,
						duration: 0.4,
						mix: false,
						selectors: [],
					},
				},
				connect: {
					distance: 80,
					links: {
						opacity: 0.5,
					},
					radius: 60,
				},
				grab: {
					distance: 100,
					links: {
						blink: false,
						consent: false,
						opacity: 1,
					},
				},
				push: {
					default: true,
					groups: [],
					quantity: 4,
				},
				remove: {
					quantity: 2,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: "ease-out-quad",
					divs: {
						distance: 200,
						duration: 0.4,
						factor: 100,
						speed: 1,
						maxSpeed: 50,
						easing: "ease-out-quad",
						selectors: [],
					},
				},
				slow: {
					factor: 3,
					radius: 200,
				},
				light: {
					area: {
						gradient: {
							start: {
								value: "#ffffff",
							},
							stop: {
								value: "#000000",
							},
						},
						radius: 1000,
					},
					shadow: {
						color: {
							value: "#000000",
						},
						length: 2000,
					},
				},
			},
		},
		manualParticles: [],
		particles: {
			bounce: {
				horizontal: {
					value: 1,
				},
				vertical: {
					value: 1,
				},
			},
			collisions: {
				absorb: {
					speed: 2,
				},
				bounce: {
					horizontal: {
						value: 1,
					},
					vertical: {
						value: 1,
					},
				},
				enable: false,
				maxSpeed: 10,
				mode: "bounce",
				overlap: {
					enable: true,
					retries: 0,
				},
			},
			color: {
				value: "#ff0000",
				animation: {
					h: {
						count: 0,
						enable: true,
						speed: 20,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
					s: {
						count: 0,
						enable: false,
						speed: 1,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
					l: {
						count: 0,
						enable: false,
						speed: 1,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
				},
			},
			effect: {
				close: true,
				fill: true,
				options: {},
				type: [],
			},
			groups: {},
			move: {
				angle: {
					offset: 0,
					value: 90,
				},
				attract: {
					distance: 200,
					enable: false,
					rotate: {
						x: 3000,
						y: 3000,
					},
				},
				center: {
					x: 50,
					y: 50,
					mode: "percent",
					radius: 0,
				},
				decay: 0,
				distance: {},
				direction: "none",
				drift: 0,
				enable: true,
				gravity: {
					acceleration: 9.81,
					enable: false,
					inverse: false,
					maxSpeed: 50,
				},
				path: {
					clamp: true,
					delay: {
						value: 0,
					},
					enable: false,
					options: {},
				},
				outModes: {
					default: "out",
					bottom: "out",
					left: "out",
					right: "out",
					top: "out",
				},
				random: false,
				size: false,
				speed: 1,
				spin: {
					acceleration: 0,
					enable: false,
				},
				straight: false,
				trail: {
					enable: false,
					length: 10,
					fill: {},
				},
				vibrate: false,
				warp: false,
			},
			number: {
				density: {
					enable: true,
					width: 1920,
					height: 1080,
				},
				limit: {
					mode: "delete",
					value: 0,
				},
				value: 80,
			},
			opacity: {
				value: 0.5,
				animation: {
					count: 0,
					enable: false,
					speed: 2,
					decay: 0,
					delay: 0,
					sync: false,
					mode: "auto",
					startValue: "random",
					destroy: "none",
				},
			},
			reduceDuplicates: false,
			shadow: {
				blur: 0,
				color: {
					value: "#000",
				},
				enable: false,
				offset: {
					x: 0,
					y: 0,
				},
			},
			shape: {
				close: true,
				fill: true,
				options: {},
				type: "circle",
			},
			size: {
				value: {
					min: 1,
					max: 3,
				},
				animation: {
					count: 0,
					enable: false,
					speed: 5,
					decay: 0,
					delay: 0,
					sync: false,
					mode: "auto",
					startValue: "random",
					destroy: "none",
				},
			},
			stroke: {
				width: 0,
			},
			zIndex: {
				value: 0,
				opacityRate: 1,
				sizeRate: 1,
				velocityRate: 1,
			},
			destroy: {
				bounds: {},
				mode: "none",
				split: {
					count: 1,
					factor: {
						value: 3,
					},
					rate: {
						value: {
							min: 4,
							max: 9,
						},
					},
					sizeOffset: true,
					particles: {},
				},
			},
			roll: {
				darken: {
					enable: false,
					value: 0,
				},
				enable: false,
				enlighten: {
					enable: false,
					value: 0,
				},
				mode: "vertical",
				speed: 25,
			},
			tilt: {
				value: 0,
				animation: {
					enable: false,
					speed: 0,
					decay: 0,
					sync: false,
				},
				direction: "clockwise",
				enable: false,
			},
			twinkle: {
				lines: {
					enable: false,
					frequency: 0.05,
					opacity: 1,
				},
				particles: {
					enable: false,
					frequency: 0.05,
					opacity: 1,
				},
			},
			wobble: {
				distance: 5,
				enable: false,
				speed: {
					angle: 50,
					move: 10,
				},
			},
			life: {
				count: 0,
				delay: {
					value: 0,
					sync: false,
				},
				duration: {
					value: 0,
					sync: false,
				},
			},
			rotate: {
				value: 0,
				animation: {
					enable: false,
					speed: 0,
					decay: 0,
					sync: false,
				},
				direction: "clockwise",
				path: false,
			},
			orbit: {
				animation: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: false,
				},
				enable: false,
				opacity: 1,
				rotation: {
					value: 45,
				},
				width: 1,
			},
			links: {
				blink: false,
				color: {
					value: "#ffffff",
				},
				consent: false,
				distance: 150,
				enable: false,
				frequency: 1,
				opacity: 0.4,
				shadow: {
					blur: 5,
					color: {
						value: "#000",
					},
					enable: false,
				},
				triangles: {
					enable: false,
					frequency: 1,
				},
				width: 1,
				warp: false,
			},
			repulse: {
				value: 0,
				enabled: false,
				distance: 1,
				duration: 1,
				factor: 1,
				speed: 1,
			},
		},
		pauseOnBlur: true,
		pauseOnOutsideViewport: true,
		responsive: [],
		smooth: false,
		style: {},
		themes: [],
		zLayers: 100,
		name: "Basic",
		motion: {
			disable: false,
			reduce: {
				factor: 4,
				value: true,
			},
		},
	},
});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {
	Artists: {
		Credits:
			'This story was created by teachers and students at Yotsuba Secondary School in Isesaki, Japan. Pictures were taken by George Liu. Kuwamaru images are from the City of Isesaki. Some of the art was generated by AI. Find more details on our ReadMe on our <a href="https://github.com/tgmgroup/Kuwamaru-s-Halloween-Adventure" target="_blank">Github Page</a>.',
	},
	Audio: {
		Credits:
			'Most of the music was produced by artists at Pixabay. Find a full list of sources on our ReadMe on our <a href="https://github.com/tgmgroup/Kuwamaru-s-Halloween-Adventure" target="_blank">Github Page</a>.',
	},
});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {
	mainTheme: "1-efek-sound-1-220034-bgm.mp3",
	quiz1Theme: "cool-hip-hop-loop-251857.mp3",
	quiz2Theme: "funky-and-jazzy-gang-loop-251858.mp3",
	drumRoll: "drum-roll-2-228358-loop.mp3",
	thinkingTheme: "1-efek-sound-5-220035-thinking.mp3",
});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {
	drumRollEnd: "drum-roll-2-228358-end.mp3",
	wrongAnswer: "error-8-206492.mp3",
	rightAnswer: "1-efek-sound-3-220030-right.mp3",
});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
	// Start

});

// Define the Characters
monogatari.characters({
	p: {
		name: "Player",
		color: "#ff3951",
		directory: "Player",
		sprites: {
			normal: "player (1).png",
			running: "player (2).png",
		},
		expressions: {
			normal: "player (1).png",
			running: "player (2).png",
		},
	},
	
});

const { Storage } = monogatari;
// Monogatari Visual Novel Script for "The Magic Door"

// Define the start scene.
// This is where the game will begin when it's launched.
// You can change 'Start' to any label you want to be the initial scene.
monogatari.script ({
    // The 'Start' label is the entry point of the game.
    // It's good practice to have a distinct start label.
    'Start': [
        // This 'jump' command immediately takes the player to 'Scene_1_Start'.
        // This is useful if you want to have an introductory splash screen
        // before the main story begins, but for now, we jump straight in.
        'jump Scene_1_Start'
    ],

    // --- Scene 1: The Terrible Morning and the Choice ---
    'Scene_1_Start': [
        // Narrative text is enclosed in double quotes.
        // Each string represents a single line or paragraph of text that
        // appears on screen. The player clicks to advance.
        'This morning was terrible for you. You got out of bed, but it was already 7:45!',
        'You were almost late for school, but you skipped your breakfast and your mother drove you to school.',
        'She had to drive really fast to get you to school on time! She almost hit two of your friends on the way.',
        'They saw you in the car, so you know they will be angry later.',
        '', // An empty string can be used to create a pause or a new line effect.
        'So you got to school, but then it started to rain!',
        'It was only 10 meters to go from the car to the school entrance, but you got really wet.',
        'And just as you entered the school, lightning flashed and thunder boomed.',
        'You have the feeling that it\'s going to be a really hard day.',
        '',
        'First period was OK. The English teacher was really funny, so you had a good time, but you were a little sleepy, so you missed some questions on the English quiz.',
        'Second period was a little better at first, but you started getting hungry. You like your math teacher, but you couldn\'t answer any questions because your stomach was growling.',
        'Third period, you almost died! You were so, so, so hungry. Tomorrow, you are going to get up early to eat your breakfast.',
        '',
        'Now it\'s lunchtime. At last! Now you can go buy some bread for lunch! You start to go down the stairs, but then you see a crowd of people!',
        'There are a lot of very hungry high school students here today! You don\'t know if you will be able to get any bread today. But you\'re so hungry!',
        '',
        'And then you hear a very angry voice. "Hey, you! Come here!"',
        'Uh-oh! It\'s one of your friends from this morning, the one your mother almost hit with her car because you were late! And your other friend is there, too. And they look so angry!',
        '',
        'You\'re hungry, but you don\'t want to talk to them today, so you want to get away, right away! You start to have a funny feeling, and you\'re panicking, so you look around.',
        'There\'s the hallway to the left to go do the high school area. But there are a lot of people there, so you don\'t know if you can get away.',
        'There\'s a door to the student council room, and it looks really good right now, almost shining in your eyes. Maybe you can escape that way.',
        'You can\'t go straight ahead because there are too many people waiting to buy bread.',
        'You can\'t go right to the junior high school area because there are too many students coming to buy bread.',
        'And you can\'t go back up the stairs because your angry friends are coming.',
        '',
        '"Hey, you! Get over here!!"',
        'What do you do?',

        // This is a 'choice' block, which presents options to the player.
        // Each option has a text (what the player sees) and a 'Do' action.
        // The 'Do' action is typically a 'jump' to another label in the script.
        {
            'Choice': {
                'Dialog': 'What do you do?', // This dialog appears above the choices.
                'Go_High_School': {
                    'Text': 'Go to the high school area and try to escape.',
                    'Do': 'jump Scene_1_Bad_Ending' // Jumps to the bad ending.
                },
                'Go_Student_Council': {
                    'Text': 'Go to the student council room and try to hide.',
                    'Do': 'jump Scene_1_Continuation_Ending' // Jumps to the continuation.
                },
                'Wait_In_Line': {
                    'Text': 'Wait in line to buy some bread because you are too hungry to worry about your friends.',
                    'Do': 'jump Scene_1_Good_Ending' // Jumps to the good ending.
                }
            }
        }
    ],

    // --- Scene 1: Bad Ending ---
    'Scene_1_Bad_Ending': [
        'You go to the high school area and try to escape. You start running, but you bump into a teacher, and the teacher gets very angry. "You can\'t run in the hallway! What are you doing?"',
        'You try to say sorry, but your friends join you, and they start yelling, too.',
        '"What were you doing this morning! You almost killed me!"',
        '"Don\'t you know you can\'t run in the hallway! It\'s dangerous!"',
        '"Why are you running away from me? You have to say sorry for this morning!"',
        '"Hey, are you listening to me? And you know what, you only got 10 points on your last test, too! What are you doing?"',
        'You feel really, really bad. And you are so hungry, too! You should have just stayed home this morning.',
        // The 'end' command stops the game. The player will typically see a "The End" screen
        // and can then restart the game or go back to the main menu.
        'end'
    ],

    // --- Scene 1: Continuation Ending (Placeholder for Scene 2) ---
    'Scene_1_Continuation_Ending': [
        'You run to the student council room and open the door. As you get closer, the door becomes really bright. But you have to get away, now!',
        'You open the door, jump in, and suddenly the whole world changes!',
        // This is where 'Scene 2' would begin.
        // You would uncomment the line below and define a 'Scene_2' label
        // in your monogatari.script object with its own content.
        // For now, it ends here as Scene 2 content wasn't provided.
        // 'jump Scene_2'
        'end' // Ends the game for now, as Scene 2 is not defined.
    ],

    // --- Scene 1: Good Ending ---
    'Scene_1_Good_Ending': [
        'You are just too hungry to care about your friends! You get in line and wait. Your friends come, and they are very angry!',
        '"Hey, what were you doing this morning? Your mother almost hit us!"',
        'You apologize. "I\'m so, so sorry! I was late, and I couldn\'t eat anything, and my mother had to drive really fast!"',
        '"But it was so dangerous!"',
        'Just then, you feel you have no energy. You fall down and can\'t get up.',
        '"Hey, are you OK?"',
        '"Is it because you couldn\'t eat your breakfast?"',
        'Your friends are worried about you. You made them angry, but they care a lot about you. They help you get up and get some bread, and you feel better. It was a really bad morning, but you know it\'s going to be a good day after all.',
        'end'
    ]
});

