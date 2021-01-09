class Game {
	constructor() {
		player = new Player();
	}

	display() {
		if (gameState === 'Lobby') {
			form.display();
		}
		if (gameState === 'Play') {
			form.hide();
			form.greeting.hide();
			background(0);
			this.move();
			drawSprites();
		}
	}

	play() {
		this.move();
		this.time();

		if (form.player === 'Player 1') {
			for (var i = 0; i <= player1Sprite.powerupBad; i++) {
				image(slimeImg, 1010, 1000 - i * 50);
			}

			for (var i = 0; i <= player1Sprite.powerupGood; i++) {
				image(slimeImg, -30, 1000 - i * 50);
			}
			console.log('powerup');
		}

		if (form.player === 'Player 2') {
			for (var i = 0; i <= player1Sprite.powerupBad; i++) {
				image(slimeImg, 1000, 1000 - i * 50);
			}

			for (var i = 0; i <= player1Sprite.powerupGood; i++) {
				image(slimeImg, -30, 1000 - i * 50);
			}
			console.log('powerup');
		}

		if (playerCount === 2 && gameState === 'Lobby') {
			gameState = 'Play';
			database.ref('/').update({
				GameState: gameState,
			});
		}
		distance = int(dist(player1Sprite.x, player1Sprite.y, player2Sprite.x, player2Sprite.y));
		database.ref('Players').update({
			distance: distance,
		});

		if (distance <= 200) {
			if (form.player === 'Player 1') {
				player2Sprite.visible = true;
				player1Sprite.visible = true;
			} else {
				player1Sprite.visible = true;
				player2Sprite.visible = true;
			}
		} else {
			if (form.player === 'Player 1') {
				player2Sprite.visible = false;
				player1Sprite.visible = true;
			} else {
				player1Sprite.visible = false;
				player2Sprite.visible = true;
			}
		}

		if (player1Sprite.isTouching(player2Sprite)) {
			if (player1Sprite.role === 'hider') {
				player2Sprite.winner = true;
				player1Sprite.winner = false;
			} else {
				player2Sprite.winner = false;
				player1Sprite.winner = true;
			}
			database.ref('Players/Player1').update({
				winner: player1Sprite.winner,
			});

			database.ref('Players/Player2').update({
				winner: player2Sprite.winner,
			});
		}
	}

	getFromDatabase() {
		playerCountRef = database.ref('Players/PlayerCount');
		playerCountRef.on('value', (data) => {
			playerCount = data.val();
		});

		gameStateRef = database.ref('GameState');
		gameStateRef.on('value', (data) => {
			gameState = data.val();
		});
	}

	time() {
		if (timer.endMin === undefined && gameState === 'Play') {
			if (form.player === 'Player 1') {
				timer.endMin = date.getMinutes() + 5;
				timer.endSec = date.getSeconds();
				database.ref('/').update({
					endTime: {
						seconds: timer.endSec,
						minutes: timer.endMin,
					},
				});
			}
		}

		if (playerCount === 2) {
			timer.nowMin = date.getMinutes();
			timer.nowSec = date.getSeconds();
			var timeLeft = {mins: timer.endMin - timer.nowMin, secs: timer.endSec - timer.nowSec};
			timer.timeLeft = timeLeft.mins;
			timer.timeLeft += ':';
			timer.timeLeft += timeLeft.secs;
		}
		console.log(timer.timeLeft);
	}

	move() {
		player1Sprite.collide(wall1);
		player1Sprite.collide(wall2);
		player1Sprite.collide(wall3);
		player1Sprite.collide(wall4);
		player1Sprite.collide(wall5);
		player1Sprite.collide(wall6);
		player1Sprite.collide(wall7);
		player1Sprite.collide(wall8);
		player1Sprite.collide(wall9);
		player1Sprite.collide(wall10);
		player1Sprite.collide(wall11);
		player1Sprite.collide(wall12);
		player1Sprite.collide(wall13);
		player1Sprite.collide(wall14);
		player1Sprite.collide(wall15);
		player1Sprite.collide(wall16);
		player1Sprite.collide(wall17);
		player1Sprite.collide(wall18);
		player1Sprite.collide(wall19);
		player1Sprite.collide(wall20);
		player1Sprite.collide(wall21);
		player1Sprite.collide(wall22);
		player1Sprite.collide(wall23);
		player1Sprite.collide(wall24);
		player1Sprite.collide(wall25);
		player1Sprite.collide(wall26);
		player1Sprite.collide(wall27);
		player1Sprite.collide(wall28);
		player1Sprite.collide(wall29);
		player1Sprite.collide(wall30);
		player1Sprite.collide(wall31);
		player1Sprite.collide(wall32);
		player1Sprite.collide(wall33);
		player1Sprite.collide(wall34);
		player1Sprite.collide(wall35);

		player2Sprite.collide(wall1);
		player2Sprite.collide(wall2);
		player2Sprite.collide(wall3);
		player2Sprite.collide(wall4);
		player2Sprite.collide(wall5);
		player2Sprite.collide(wall6);
		player2Sprite.collide(wall7);
		player2Sprite.collide(wall8);
		player2Sprite.collide(wall9);
		player2Sprite.collide(wall10);
		player2Sprite.collide(wall11);
		player2Sprite.collide(wall12);
		player2Sprite.collide(wall13);
		player2Sprite.collide(wall14);
		player2Sprite.collide(wall15);
		player2Sprite.collide(wall16);
		player2Sprite.collide(wall17);
		player2Sprite.collide(wall18);
		player2Sprite.collide(wall19);
		player2Sprite.collide(wall20);
		player2Sprite.collide(wall21);
		player2Sprite.collide(wall22);
		player2Sprite.collide(wall23);
		player2Sprite.collide(wall24);
		player2Sprite.collide(wall25);
		player2Sprite.collide(wall26);
		player2Sprite.collide(wall27);
		player2Sprite.collide(wall28);
		player2Sprite.collide(wall29);
		player2Sprite.collide(wall30);
		player2Sprite.collide(wall31);
		player2Sprite.collide(wall32);
		player2Sprite.collide(wall33);
		player2Sprite.collide(wall34);
		player2Sprite.collide(wall35);
		if (form.player === 'Player 1') {
			if (player1Sprite.role === 'hider') {
				if (keyDown(UP_ARROW)) {
					player1Sprite.y = player1Sprite.y - 2;
				}

				if (keyDown(DOWN_ARROW)) {
					player1Sprite.y = player1Sprite.y + 2;
				}

				if (keyDown(LEFT_ARROW)) {
					player1Sprite.x = player1Sprite.x - 2;
				}

				if (keyDown(RIGHT_ARROW)) {
					player1Sprite.x = player1Sprite.x + 2;
				}
			} else if (player1Sprite.role === 'seeker') {
				if (keyDown(UP_ARROW)) {
					player1Sprite.y = player1Sprite.y - 4;
				}

				if (keyDown(DOWN_ARROW)) {
					player1Sprite.y = player1Sprite.y + 4;
				}

				if (keyDown(LEFT_ARROW)) {
					player1Sprite.x = player1Sprite.x - 4;
				}

				if (keyDown(RIGHT_ARROW)) {
					player1Sprite.x = player1Sprite.x + 4;
				}
			}
		} else {
			if (player2Sprite.role === 'hider') {
				if (keyDown(UP_ARROW)) {
					player2Sprite.y = player2Sprite.y - 2;
				}

				if (keyDown(DOWN_ARROW)) {
					player2Sprite.y = player2Sprite.y + 2;
				}

				if (keyDown(LEFT_ARROW)) {
					player2Sprite.x = player2Sprite.x - 2;
				}

				if (keyDown(RIGHT_ARROW)) {
					player2Sprite.x = player2Sprite.x + 2;
				}
			} else if (player2Sprite.role === 'seeker') {
				if (keyDown(UP_ARROW)) {
					player2Sprite.y = player2Sprite.y - 4;
				}

				if (keyDown(DOWN_ARROW)) {
					player2Sprite.y = player2Sprite.y + 4;
				}

				if (keyDown(LEFT_ARROW)) {
					player2Sprite.x = player2Sprite.x - 4;
				}

				if (keyDown(RIGHT_ARROW)) {
					player2Sprite.x = player2Sprite.x + 4;
				}
			}
		}
		player1Sprite.x = constrain(player1Sprite.x, 10, 1000);
		player1Sprite.y = constrain(player1Sprite.y, 10, 950);
		player2Sprite.x = constrain(player2Sprite.x, 10, 1000);
		player2Sprite.y = constrain(player2Sprite.y, 10, 950);

		player.update(player1Sprite.x, player1Sprite.y, player2Sprite.x, player2Sprite.y);

		/*var d1 = new Date(); //get current time
    var seconds = d1.getMinutes() * 60 + d1.getSeconds();

     var fiveMin = 60 * 5; //five minutes is 300 seconds!
    var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
    var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
    console.log(result);
  
    var timer1 = createInput(result);
  
  timer1.position(500,500);*/
	}
}
