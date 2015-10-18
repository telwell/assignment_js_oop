// Constants
var ENV = {
	INITIAL_ASTERIOD_SIZE: 10,
	INITIAL_ASTERIOD_VELOCITY: 10, 
	INITIAL_ASTEROID_COUNT: 50, 
	MAX_VELOCITY: 20
}

// Model
var model = {
	// init
		// Build initial asteroids based on initial count
		//  and add these objects to the asteroids array
		// Build ship
	
	// An array which will store all of the asteroid objects created
	var asteroids = [];

	// The model will hold the asteroid constructor which 
	// will be used to actually create our asteroids.
	var Asteroid = function(){
		this.size = ENV.INITIAL_ASTERIOD_SIZE;
		this.vel_x = random_velocity;
		this.vel_y = random_velocity;
		// The number of times the asteroid has been broken apart
		this.split_count = 0;
		this.pos_x = random_valid_x;
		this.pos_y = random_valid_y;
	},

	// The model will also hold the space ship object
	// of which there will ONLY BE ONE.
	var ship = {
		this.vel_x: 0,
		this.vel_y: 0,
		// or wherever the center of the canvas is.
		this.pos_x: 50,
		this.pos_y: 50,
		// I figure I'll store the ship's direction as a degree 1-360
		//  which will indicate where the ship is pointing and will 
		//  also serve to adjust the pos/vel.
		this.direction: 90
	}

	// random_valid_x
		// check within bounds of canvas
		// check not on another asteriod

	// random_valid_y
		// check within bounds of canvas
		// check not on another asteriod

	// random_velocity
		// check if under ENV.MAX_VELOCITY (positive OR negative)
}

// View
var view = {
	// init
		// render board
		// config

	// config
		// Setup listeners. Really only need the left, up and right arrow 
		//  along with spacebar for future weapons.

	// render board
		// render asteroids
		// render ship

	// render asteroids
		// go through model.asteroids array and
		//  build each asteroid object

	// render ship
		// display ship based on model.ship position/velocity
}

// Controller
var controller = {
	// init
		// model.init();
		// view.init();
		// run_game;

	// run_game
		// Start the game off and set the turn interval 

	// Make a 'turn'
		// Any asteroids' position changes
		// check collisions

	// Check for user input
		// adjust ship direction based on left/right arrows
		// increase ship velocity based on up arrow
		// check for weapons eventually

	// check collisions
		// if two or more asteroids have the same position 
		//  accounting for their SIZE as well then increase
		//  each asteroid's split_count, reduce the size, and 
		//  give each asteroid a new random x/y velocity.
		//  if split_count > 3 then remove that asteroid object 
		//  from model.asteroids entirely.
		//
		//  check loss
		//   if ship position is within bounds of any asteroid
		//   then initiate losing process

	// NOTES: There is definitely some more housekeeping to do in the controller here
	//   but this is the general idea. 

}