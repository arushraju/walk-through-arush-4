import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

import { Octree } from 'three/addons/math/Octree.js';
import { OctreeHelper } from 'three/addons/helpers/OctreeHelper.js';

import { Capsule } from 'three/addons/math/Capsule.js';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';




const clock = new THREE.Clock();



const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // Sky blue hexadecimal color


//const fillLight1 = new THREE.HemisphereLight( 0x8dc1de, 0x00668d, 1.5 );
//fillLight1.position.set( 2, 1, 1 );
//scene.add( fillLight1 );

/**************************************************  LIGHTS **************************************** */
const sun = new THREE.DirectionalLight(0xFFFFBF , 1.8);
sun.castShadow = true;
scene.add(sun);



sun.position.set(5,30,-8);
sun.shadow.camera.right = 700;
sun.shadow.camera.left = -700;
sun.shadow.camera.top = 700;
sun.shadow.camera.bottom = -80;
sun.shadow.bias = -0.0001;
//This is great;
sun.shadow.mapSize.width = 4096;
sun.shadow.mapSize.height = 4096;

/*****************ALL LIGHTS ARE GIVEN BELOW************* */
const light = new THREE.AmbientLight( 0xffffff, 0.3 ); // soft white light
scene.add( light );



//Computer lab notice board light
const cc_notice_board = new THREE.PointLight(0xF0F8FF, 1.5,10);
cc_notice_board.position.set(27,5,-40.5);
scene.add(cc_notice_board);


//Computer lab light
const Computer_lab_light_1 = new THREE.PointLight( 0xF0F8FF, 2,10 ); // soft white light
const Computer_lab_light_2 = new THREE.PointLight( 0xF0F8FF, 2,10 );
const Computer_lab_light_3 = new THREE.PointLight( 0xF0F8FF, 2,10 );
const Computer_lab_light_4 = new THREE.PointLight( 0xF0F8FF, 2,10 );
const Computer_lab_light_5 = new THREE.PointLight( 0xF0F8FF, 2,10 );
const Computer_lab_light_6 = new THREE.PointLight( 0xF0F8FF, 2,10 );
const Computer_lab_light_7 = new THREE.PointLight( 0xF0F8FF, 2,10 );
const Computer_lab_light_8 = new THREE.PointLight( 0xF0F8FF, 2,10 );
const Computer_lab_light_9 = new THREE.PointLight( 0xF0F8FF, 2,10 );
const Computer_lab_light_10 = new THREE.PointLight(0xF0F8FF, 2,10);
const Computer_lab_light_11 = new THREE.PointLight(0xF0F8FF, 2,10);
const Computer_lab_light_12 = new THREE.PointLight(0xF0F8FF, 2,10);
const Computer_lab_light_13 = new THREE.PointLight(0xF0F8FF, 2,10);
const Computer_lab_light_14 = new THREE.PointLight(0xF0F8FF, 2,10);
const Computer_lab_light_15 = new THREE.PointLight(0xF0F8FF, 2,10);

Computer_lab_light_1.position.set(5.79571,5,-46.137050);
Computer_lab_light_2.position.set(17.53,5,-46.137050);
Computer_lab_light_3.position.set(5.79571,5,-53.27);
Computer_lab_light_4.position.set(17.53,5,-53.27);
Computer_lab_light_5.position.set(5.79571,5,-59.855);
Computer_lab_light_6.position.set(17.53,5,-59.855);
Computer_lab_light_7.position.set(5.79571,5,-66.301);
Computer_lab_light_8.position.set(17.53,5,-66.301);
Computer_lab_light_9.position.set(5.79571,5,-73.057);
Computer_lab_light_10.position.set(17.53,5,-73.057);
Computer_lab_light_11.position.set(26.9553,5,-46.137050);
Computer_lab_light_12.position.set(26.9553,5,-53.27);
Computer_lab_light_13.position.set(26.9553,5,-59.855);
Computer_lab_light_14.position.set(26.9553,5,-66.301);
Computer_lab_light_15.position.set(26.9553,5,-73.057);

Computer_lab_light_1.castShadow = false;
Computer_lab_light_2.castShadow = false;
Computer_lab_light_3.castShadow = false;
Computer_lab_light_4.castShadow = false;
Computer_lab_light_5.castShadow = false;
Computer_lab_light_6.castShadow = false;
Computer_lab_light_7.castShadow = false;
Computer_lab_light_8.castShadow = false;
Computer_lab_light_9.castShadow = false;
Computer_lab_light_10.castShadow = false;
Computer_lab_light_11.castShadow = false;
Computer_lab_light_12.castShadow = false;
Computer_lab_light_13.castShadow = false;
Computer_lab_light_14.castShadow = false;
Computer_lab_light_15.castShadow = false;

scene.add( Computer_lab_light_1);
scene.add( Computer_lab_light_2);
scene.add( Computer_lab_light_3);
scene.add(Computer_lab_light_4);
scene.add(Computer_lab_light_5);
scene.add(Computer_lab_light_6);
scene.add(Computer_lab_light_7);
scene.add(Computer_lab_light_8);
scene.add(Computer_lab_light_9);
scene.add(Computer_lab_light_10);
scene.add(Computer_lab_light_11);
scene.add(Computer_lab_light_12);
scene.add(Computer_lab_light_13);
scene.add(Computer_lab_light_14);
scene.add(Computer_lab_light_15);


//Room light
const Tubelight_1 = new THREE.PointLight(0xF4FDFF,0.8,15);
const Tubelight_2 = new THREE.PointLight(0xF4FDFF,0.8,15);
Tubelight_1.position.set(39,8,-60);
Tubelight_2.position.set(39,8,-62);
scene.add(Tubelight_2);
scene.add(Tubelight_1);

//UGP-1 Light
const Crowd_Dynamics_Light = new THREE.PointLight(0xF4FDFF,1,15);
Crowd_Dynamics_Light.position.set(42.097,7,-11.38);
scene.add(Crowd_Dynamics_Light);

//Introduction board light
const introduction_light = new THREE.PointLight(0xF4FDFF,1,30);
introduction_light.position.set(35,7,-55);
scene.add(introduction_light);

//Introduction board light 2
const introduction_light_2 = new THREE.PointLight(0xFAEFC8,5,20);
introduction_light_2.position.set(44,5,-34);
scene.add(introduction_light_2);

//Cinema hall light
const cinema_hall_light = new THREE.PointLight(0xF0F8FF,1,20);
cinema_hall_light.position.set(-9.38,6,-63.53);
scene.add(cinema_hall_light);


const cinema_hall_light_2 = new THREE.PointLight(0xF0F8FF,1,20);
cinema_hall_light_2.position.set(-23,2.5,-67);
scene.add(cinema_hall_light_2);

const cinema_hall_light_3 = new THREE.PointLight(0xF0F8FF,1,20);
cinema_hall_light_3.position.set(-33.9,2.5,-44.02);
scene.add(cinema_hall_light_3);

const cinema_hall_light_4 = new THREE.PointLight(0xF4C430,0.7,15);
cinema_hall_light_4.position.set(-36.049,5,-74.515);
scene.add(cinema_hall_light_4);

const cinema_hall_light_5 = new THREE.PointLight(0xF4C430,0.7,15);
cinema_hall_light_5.position.set(-25.802,5,-74.515);
scene.add(cinema_hall_light_5);

//Library light
const library_light_1 = new THREE.PointLight(0xFDEFCD,1,25);
library_light_1.position.set(-33.33,14,64.30);
scene.add(library_light_1);

const library_light_2 = new THREE.PointLight(0xFDEFCD,1,25);
library_light_2.position.set(-38.59,14,64.27);
scene.add(library_light_2);

const library_light_3 = new THREE.PointLight(0xFDEFCD,1,25);
library_light_3.position.set(-28.23,14,41.13);
scene.add(library_light_3);

const library_light_4 = new THREE.PointLight(0xFDEFCD,1,25);
library_light_4.position.set(-39.104,14,41.836);
scene.add(library_light_4);

//Vollyball notice
const vollyball_notice_light = new THREE.PointLight(0xF0F8FF,1,20);
vollyball_notice_light.position.set(-41.0079,5,-6.76);
scene.add(vollyball_notice_light);

//Outer library
const outer_library_light_1 = new THREE.PointLight(0xFAEFC8,1,10);
outer_library_light_1.position.set(-45.2,5,24.5);
scene.add(outer_library_light_1);

//Rubiks cube lights
const rubiks_cube_green_light_1 = new THREE.PointLight(0x3B7A57,1.5,15);
rubiks_cube_green_light_1.position.set(-47.79,3,-26.42);
scene.add(rubiks_cube_green_light_1);

const rubiks_cube_yellow_light_2 = new THREE.PointLight(0xD4AF37,1.5,15);
rubiks_cube_yellow_light_2.position.set(-45.75,3,-32.3);
scene.add(rubiks_cube_yellow_light_2);

const rubiks_cube_red_light = new THREE.PointLight(0xB22222,1.5,10);
rubiks_cube_red_light.position.set(-35.706,10,-17.993);
scene.add(rubiks_cube_red_light);

const rubiks_cube_blue_light = new THREE.PointLight(0x4178BE,1.5,10);
rubiks_cube_blue_light.position.set(-35.127,11,-30.2440);
scene.add(rubiks_cube_blue_light);

const Rubiks_cube_notice_light = new THREE.PointLight(0xFAEFC8,1,20);
Rubiks_cube_notice_light.position.set(-26.26,7,-25.11);
scene.add(Rubiks_cube_notice_light);

const rubiks_cube_light_white = new THREE.PointLight(0xFDEFCD,1,25);
rubiks_cube_light_white.position.set(-41,10,-27.2);
scene.add(rubiks_cube_light_white);

//Gym light
const gym_light_1 = new THREE.PointLight(0xB3F5FF,1.5,15);
gym_light_1.position.set(1.5,5,22.79);
scene.add(gym_light_1);

const gym_notice_light_1 = new THREE.PointLight(0xF0F8FF,1,20);
gym_notice_light_1.position.set(-2.0552,5,29.089);
scene.add(gym_notice_light_1);

const gym_notice_light_2 = new THREE.PointLight(0xF0F8FF,1,25);
gym_notice_light_2.position.set(14.65,5,25.54);
scene.add(gym_notice_light_2);

//Project Notice board
const project_notice_light = new THREE.PointLight(0xFAEFC8,1,20);
project_notice_light.position.set(39.093,5,34.83);
scene.add(project_notice_light);

const project_notice_light_2 = new THREE.PointLight(0xFAEFC8,0.5,20);
project_notice_light_2.position.set(40.2,5,30.76);
scene.add(project_notice_light_2);

//Quantum computing
const Quantum_light_1 = new THREE.PointLight(0x00B4D8,1,15);
Quantum_light_1.position.set(35.081,7,63.07);
scene.add(Quantum_light_1);

const Quantum_light_2 = new THREE.PointLight(0x7B2CBF,1,15);
Quantum_light_2.position.set(45.081,7,63.07);
scene.add(Quantum_light_2);

const Quantum_light_3 = new THREE.PointLight(0x7B2CBF,1,15);
Quantum_light_3.position.set(50.21,7,53.43);
scene.add(Quantum_light_3);

//Chess light
const Chess_notice_light_1 = new THREE.PointLight(0xFF0040,0.4,15);
Chess_notice_light_1.position.set(5.5,5.5,69);
scene.add(Chess_notice_light_1);

const Chess_notice_light_2 = new THREE.PointLight(0xC000FF,0.4,15);
Chess_notice_light_2.position.set(3.4,5.5,69);
scene.add(Chess_notice_light_2);

//Hoarding lights
const spotLight_1 = new THREE.PointLight(0xffffff,2,20);
spotLight_1.position.set(16.550, 19, 4.2);
spotLight_1.castShadow = false;
scene.add(spotLight_1);

const spotLight_2 = new THREE.PointLight(0xffffff,2,20);
spotLight_2.position.set(12.262, 19, 6.695);
spotLight_2.castShadow = false;
scene.add(spotLight_2);

const spotLight_3 = new THREE.PointLight(0xffffff,2,20);
spotLight_3.position.set(6.8608, 19, 9.0004);
spotLight_3.castShadow = false;
scene.add(spotLight_3);

const spotLight_4 = new THREE.PointLight(0xffffff,2,20);
spotLight_4.position.set(0.64, 19, 3.199);
spotLight_4.castShadow = false;
scene.add(spotLight_4);

const spotLight_5 = new THREE.PointLight(0xffffff,2,20);
spotLight_5.position.set(1.1771, 19, -1.93);
spotLight_5.castShadow = false;
scene.add(spotLight_5);

const spotLight_6 = new THREE.PointLight(0xffffff,2,20);
spotLight_6.position.set(1.74,19,-7.451);
spotLight_6.castShadow = false;
scene.add(spotLight_6);

/************************************************************** */




/************************************************************/

const container = document.getElementById( 'experience-canvas' );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
container.appendChild( renderer.domElement );

//const stats = new Stats();
//stats.domElement.style.position = 'absolute';
//stats.domElement.style.top = '0px';
//ontainer.appendChild( stats.domElement );

const GRAVITY = 30;
const STEPS_PER_FRAME = 5;
const worldOctree = new Octree();
const playerCollider = new Capsule( 
	new THREE.Vector3( 42.39, 8.35, -61 ), 
	new THREE.Vector3( 42.39, 12, -61 ), 
	0.35 
);

const playerVelocity = new THREE.Vector3();
const playerDirection = new THREE.Vector3();
let playerOnFloor = false;
let mouseTime = 0;
const keyStates = {};

/********************************************** CAMERA *************************************** */
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.rotation.order = 'YXZ';


/*********************************************MOBILE CONTROLS *********************************** */


let mobile_control_knob_draggable = false;
const mobile_control_knob = document.getElementsByClassName('pointer')[0];
const mobile_forward_button = document.getElementsByClassName('mobile-control-forward')[0];
const joystick = document.getElementsByClassName('mobile-container')[0];

//I can make the pointer work by using the following
const turn_on_mobile_mode = document.getElementsByClassName("mobile-controls-button")[0];
turn_on_mobile_mode.addEventListener('touchstart', onMobileTouchStart);
//This is to see is the mobile mode is turned on
let is_Mobile_turn_on = false;


function onMobileTouchStart(){
	if(!is_Mobile_turn_on){
		console.log('Mobile mode has started');
		joystick.style.display = 'block';
		is_Mobile_turn_on = true;
	}
	else{
		console.log('Mobile mode has turned off');
		joystick.style.display = 'none';
		is_Mobile_turn_on = false;
	}
}



mobile_control_knob.addEventListener( 'touchstart' , onTouchStart );
function onTouchStart(e){
	mobile_control_knob_draggable = true;
	console.log('knob is touched');
	e.preventDefault();
};


// bounding box of the big circle
const rect = joystick.getBoundingClientRect();
const center_x = rect.left + rect.width / 2;
const center_y = rect.top + rect.height / 2;
let dx = 0;
let dy = 0;

mobile_control_knob.addEventListener('touchmove', onTouchmove);
function onTouchmove(e) {
	if (!mobile_control_knob_draggable) return;

	const touch = e.touches[0];
	const touch_x = touch.clientX;
	const touch_y = touch.clientY;

	const rawDx = touch_x - center_x;
	const rawDy = touch_y - center_y;

	const distance = Math.sqrt(rawDx * rawDx + rawDy * rawDy);
	const maxR = rect.width / 2;

	//console.log(dx);
	//console.log(dy);

	if (distance < maxR) {
		mobile_control_knob.style.transform = `translate(${rawDx}px, ${rawDy}px) scale(1.2)`;

		// store normalized offset in [-1, 1]
		dx = rawDx / maxR;
		dy = rawDy / maxR;
	}
	e.preventDefault();
}


mobile_control_knob.addEventListener('touchend' , onTouchend);
function onTouchend(){
	mobile_control_knob.style.transform = `translate(0,0) scale(1)`;
	dx = 0;
	dy = 0;
	mobile_control_knob_draggable = false;
}


let isForwardPressed = false;
mobile_forward_button.addEventListener('touchstart' , (e)=>{
	isForwardPressed = true;
	console.log("Forward button clicked");
})

mobile_forward_button.addEventListener('touchmove', (e) => {
  if(isForwardPressed){
	mobile_forward_button.style.transform = "scale(1.2)";
	e.preventDefault();
  }
});

mobile_forward_button.addEventListener('touchend', (e) => {
  isForwardPressed = false;
  mobile_forward_button.style.transform = "scale(1)";
  e.preventDefault();
});


//These are the Pointer Lock Event Listener, and they are used in the WASD movements.
document.addEventListener( 'keydown', ( event ) => {
keyStates[ event.code ] = true;
} );

document.addEventListener( 'keyup', ( event ) => {
	keyStates[ event.code ] = false;
} );

container.addEventListener( 'mousedown', () => {
	document.body.requestPointerLock();
	mouseTime = performance.now();
} );


document.body.addEventListener( 'mousemove', ( event ) => {
	if ( document.pointerLockElement === document.body ) {
		camera.rotation.y -= event.movementX / 500;
		camera.rotation.x -= event.movementY / 500;
	}
});

function onWindowResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize( window.innerWidth, window.innerHeight );

}

/*************************************************** RAY CASTING ************************/
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointMove( event ) {
	pointer.x = (event.clientX /window.innerWidth) * 2 - 1;
	pointer.y = -(event.clientY/ window.innerHeight) * 2 + 1 ;
}

window.addEventListener( 'resize', onWindowResize );
window.addEventListener('pointermove',onPointMove);


function playerCollisions() {
	const result = worldOctree.capsuleIntersect( playerCollider );
	playerOnFloor = false;
	if ( result ) {
		playerOnFloor = result.normal.y > 0;
		if ( ! playerOnFloor ) {
			playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) );
		}
		if ( result.depth >= 1e-10 ) {
			playerCollider.translate( result.normal.multiplyScalar( result.depth ) );
		}
	}
}


function updatePlayer( deltaTime ) {

	let damping =  Math.exp( - 4 * deltaTime ) - 1;
	if ( ! playerOnFloor ) {
		playerVelocity.y -= GRAVITY * deltaTime;
		// small air resistance
		damping *= 0.1;
	}

	playerVelocity.addScaledVector( playerVelocity, damping );
	const deltaPosition = playerVelocity.clone().multiplyScalar( deltaTime );
	playerCollider.translate( deltaPosition );
	playerCollisions();
	camera.position.copy( playerCollider.end );
}


function getForwardVector() {
	camera.getWorldDirection( playerDirection );
	playerDirection.y = 0;
	playerDirection.normalize();
	return playerDirection;

}


//Same is doen for the sidewards motion.
function getSideVector() {
	camera.getWorldDirection( playerDirection );
	playerDirection.y = 0;
	playerDirection.normalize();
	playerDirection.cross( camera.up );
	return playerDirection;
}

function controls( deltaTime ) {
	// gives a bit of air control
	const speedDelta = deltaTime * ( playerOnFloor ? 40 : 8 );
	if ( keyStates[ 'KeyW' ] ) {
		playerVelocity.add( getForwardVector().multiplyScalar( speedDelta ) );
	}
	if ( keyStates[ 'KeyS' ] ) {
		playerVelocity.add( getForwardVector().multiplyScalar( - speedDelta ) );
	}
	if ( keyStates[ 'KeyA' ] ) {
		playerVelocity.add( getSideVector().multiplyScalar( - speedDelta ) );
	}
	if ( keyStates[ 'KeyD' ] ) {
		playerVelocity.add( getSideVector().multiplyScalar( speedDelta ) );
	}
	if ( playerOnFloor ) {
		if ( keyStates[ 'Space' ] ) {
			playerVelocity.y = 15;
		}
	}
}

/*************************************** */
// 1. Create loading manager first
const loadingManager = new THREE.LoadingManager();

const progressBar = document.getElementById('progress-bar');
const progressContainer = document.querySelector('.progress-bar-container');

// 2. Setup callbacks
loadingManager.onStart = function(url,item,total){
	console.log(`Loading has started`);
	
}

loadingManager.onProgress = function(url,loaded,total){
	console.log('Into onProgress Function');
	progressBar.value = (loaded / total)*100;
	console.log(`Progress: ${loaded}/${total} - ${url}`);
};

loadingManager.onLoad  = function(){
	console.log('Loaded');
	progressContainer.style.display = 'none';
};

loadingManager.onError = function(url){
	console.log(`Got an Error ${url}`);
}

const glftLoader = new GLTFLoader(loadingManager);

/*************************************** */


/**************************************************** Load collision  **********************************/

const textureLoader = new THREE.TextureLoader(loadingManager);

const loader = new GLTFLoader(loadingManager);
loader.load('./My_World_Collision.glb', (gltf) => {
    worldOctree.fromGraphNode(gltf.scene);  // ONLY collision
});

async function loadAndInstance(refMesh, jsonPath) {
    try {
		if (!refMesh) {
	        console.error("Missing reference mesh:", jsonPath);
	        return;
	    }
        const response = await fetch(jsonPath, { cache: "no-store" });


        if (!response.ok) {
            throw new Error(
                `Fetch failed: ${response.status} ${response.statusText}`
            );
        }

        const transforms = await response.json();

        if (!refMesh) {
            throw new Error("Reference mesh is null or undefined");
        }

        createInstances(refMesh, transforms);

    } catch (e) {
        console.error("JSON load failed");
        console.error("Path:", jsonPath);
        console.error("Error:", e);
    }
}

function createInstances(refMesh, transforms) {

    const geometry = refMesh.geometry;
    const material = refMesh.material;
    const count = transforms.length;

    const instanced = new THREE.InstancedMesh(geometry, material, count);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {

        const t = transforms[i];

        // --- Position (Blender Z-up → Three.js Y-up) ---
        const [bx, by, bz] = t.location;
        dummy.position.set(bx, bz, -by);

        // --- Rotation ---
        const [rx, ry, rz] = t.rotation;
        dummy.rotation.set(rx, rz, -ry);

        // --- Scale (non-uniform axis remap) ---
        const [sx, sy, sz] = t.scale;
		dummy.scale.set(sx,sz,sy);

        dummy.updateMatrix();
        instanced.setMatrixAt(i, dummy.matrix);
    }

    instanced.instanceMatrix.needsUpdate = true;
    scene.add(instanced);
}

// Load visible world  
loader.load('./My_World.glb', (gltf) => {

    scene.add(gltf.scene);

    // --- Correct reference meshes inside the GLB ---
    // These MUST match object names inside Blender
	const ref_street_lights = gltf.scene.getObjectByName("Street_light_Instance");

	const ref_cone_tree_leave = gltf.scene.getObjectByName("Cone_Tree_Leaves_Instance");
	const ref_cone_tree_branch = gltf.scene.getObjectByName("Cone_Tree_Branch_Instance");
	const ref_bush_tree_leave_instance = gltf.scene.getObjectByName("Bush_tree_Leave_Instance");
	const ref_bush_tree_branch_instance = gltf.scene.getObjectByName("Bush_Tree_Branch_Instance");
	const ref_xlarge_tree_leaves_instance = gltf.scene.getObjectByName("XLarge_Tree_Leave_Instance");
	const ref_xlarge_tree_branch_instance = gltf.scene.getObjectByName("XLarge_Tree_Branch_Instance");
	const ref_large_tree_branch_instance = gltf.scene.getObjectByName("Large_Tree_Leave_Instance");
	const ref_large_tree_leave_instance = gltf.scene.getObjectByName("Large_Tree_Branch_Instance");
	const ref_regular_tree_branch_instance = gltf.scene.getObjectByName("Regular_Tree_Branch_Instance");
	const ref_regular_tree_leave_instance = gltf.scene.getObjectByName("Regular_Tree_Leave_Instance");
	const ref_small_cone_tree_leave = gltf.scene.getObjectByName("Small_cone_tree_leave_instance");
	const ref_small_cone_tree_branch = gltf.scene.getObjectByName("Small_cone_tree_branch_instance");
	const ref_medium_tree_branch_instance = gltf.scene.getObjectByName("Medium_Tree_Branch_Instance");
	const ref_medium_tree_leaves_instance = gltf.scene.getObjectByName("Medium_Tree_Leaves_Instance");

	const ref_fence_insatnce = gltf.scene.getObjectByName("Fence_wooden_Instance");
	const ref_fence_connector_insatnce = gltf.scene.getObjectByName("Fence_wooden_Connector_Instance");

	const ref_flower_pot_3_flower_instance = gltf.scene.getObjectByName("Flower_Pot_3_flower_instance");
	const ref_flower_pot_3_branch_instance = gltf.scene.getObjectByName("Flower_Pot_3_Branch_Instance");
	const ref_flower_pot_3_pot_instance = gltf.scene.getObjectByName("Flower_Pot_3_Pot_Instance");

	const ref_flower_pot_1_pot_instance = gltf.scene.getObjectByName("Flower_Pot_1_Pot_Instance");
	const ref_flower_pot_1_leaves_instance = gltf.scene.getObjectByName("Flower_Pot_1_Leave_Instance");
	const ref_flower_pot_1_branch_instance = gltf.scene.getObjectByName("Flower_Pot_1_Branch_Instance");
	const ref_flower_pot_1_mud_instance = gltf.scene.getObjectByName("Flower_Pot_1_Mud_Instance");

	const ref_flower_pot_5_pot_instance = gltf.scene.getObjectByName("Flower_Pot_5_Pot_Instance");
	const ref_flower_pot_5_leaves_instance = gltf.scene.getObjectByName("Flower_Pot_5_Leaves_Instance");

	const ref_flower_pot_2_pot_instance = gltf.scene.getObjectByName("Flower_Pot_2_Pot_Instance");
	const ref_flower_pot_2_leaves_instance = gltf.scene.getObjectByName("Flower_Pot_2_Leaves_Instance");
	const ref_flower_pot_2_branch_instance = gltf.scene.getObjectByName("Flower_Pot_2_Branch_Instance");
	const ref_flower_pot_2_flower_instance = gltf.scene.getObjectByName("Flower_Pot_2_Flower_Instance");

	const ref_flower_pot_4_leaves_instance = gltf.scene.getObjectByName("Flower_Pot_4_Leaves_Instance");
	const ref_flower_pot_4_branch_instance = gltf.scene.getObjectByName("Flower_Pot_4_Branch_Instance");
	const ref_flower_pot_4_pot_instance = gltf.scene.getObjectByName("Flower_Pot_4_Pot_Instance");

	const ref_small_rocks_instance = gltf.scene.getObjectByName("Small_Rock_Instance");
	const ref_medium_rock_instance = gltf.scene.getObjectByName("Medium_Rock_Instance");

	const ref_street_light_light_instance = gltf.scene.getObjectByName("Street_Light_Light_Instance");
	const ref_street_light_support_instance = gltf.scene.getObjectByName("Street_Light_Support_Instance");
	const ref_street_light_top_instance = gltf.scene.getObjectByName("Street_Light_Top_Instance");
	const ref_street_light_base_instance = gltf.scene.getObjectByName("Street_Light_Base_Instance");

	const ref_hoarding_light_base_instance = gltf.scene.getObjectByName("Hoarding_Light_Base_Instance");
	const ref_hoarding_light_support_instance = gltf.scene.getObjectByName("Hoarding_Light_Support_Instance");
	const ref_hoarding_light_light_instance = gltf.scene.getObjectByName("Hoarding_Light_Light_Instance");

	const ref_cc_table_3_1_instance = gltf.scene.getObjectByName("CCTable_3_CPU_Instance");
	const ref_cc_table_3_2_instance = gltf.scene.getObjectByName("CCTable_3_Instance_one");
	const ref_cc_table_3_3_instance = gltf.scene.getObjectByName("CCTable_3_Instance_three");
	const ref_cc_table_3_4_instance = gltf.scene.getObjectByName("CCTable_3_Instance_two");
	const ref_cc_table_3_5_instance = gltf.scene.getObjectByName("CCTable_3_Monitor_Instance");
	const ref_cc_table_3_6_instance = gltf.scene.getObjectByName("CCTable_3_Monitor_Screen_Instance");

	const ref_cc_table_4_1_instance = gltf.scene.getObjectByName("CCTable_4_Instance_one");
	const ref_cc_table_4_2_instance = gltf.scene.getObjectByName("CCTable_4_Instance_two");
	const ref_cc_table_4_3_instance = gltf.scene.getObjectByName("CCTable_4_Instance_three");
	const ref_cc_table_4_4_instance = gltf.scene.getObjectByName("CCTable_4_Instance_four");
	const ref_cc_table_4_5_instance = gltf.scene.getObjectByName("CCTable_4_Instance_five");
	const ref_cc_table_4_6_instance = gltf.scene.getObjectByName("CCTable_4_Instance_six");

	const ref_cc_chair_1 = gltf.scene.getObjectByName("CCChairs_Instance_Support_Instance");
	const ref_cc_chair_2 = gltf.scene.getObjectByName("CCChairs_Instance");

	const ref_lower_lib_bookshelf = gltf.scene.getObjectByName("Lower_Bookshelf_Instance");
	const ref_lower_lib_books = gltf.scene.getObjectByName("Lower_Bookshelf_Book_Instance");

    // --- Instancing calls ---
	loadAndInstance(ref_street_lights,"./Instance/Street_Lights_Transforms.json");

	loadAndInstance(ref_cone_tree_branch,"./Instance/Cone_Tree_Branches_Transform.json");
	loadAndInstance(ref_cone_tree_leave,"./Instance/Cone_Tree_Leaves_Transform.json");

	loadAndInstance(ref_bush_tree_leave_instance,"./Instance/Bush_Tree_Leaves_Transform.json");
	loadAndInstance(ref_bush_tree_branch_instance,"./Instance/Bush_Tree_Branches_Transform.json");

	loadAndInstance(ref_xlarge_tree_branch_instance,"./Instance/XLarge_Tree_Transform.json");
	loadAndInstance(ref_xlarge_tree_leaves_instance,"./Instance/XLarge_Tree_Transform.json");

	loadAndInstance(ref_large_tree_branch_instance,"./Instance/Large_Tree_Transform.json");
	loadAndInstance(ref_large_tree_leave_instance,"./Instance/Large_Tree_Transform.json");

	loadAndInstance(ref_regular_tree_branch_instance,"./Instance/Regular_Tree_Transform.json");
	loadAndInstance(ref_regular_tree_leave_instance,"./Instance/Regular_Tree_Transform.json");

	loadAndInstance(ref_small_cone_tree_branch,"./Instance/Small_Cone_tree_Transform.json");
	loadAndInstance(ref_small_cone_tree_leave,"./Instance/Small_Cone_tree_Transform.json");

	loadAndInstance(ref_medium_tree_branch_instance,"./Instance/Medium_Tree_Transform.json");
	loadAndInstance(ref_medium_tree_leaves_instance,"./Instance/Medium_Tree_Transform.json");

	loadAndInstance(ref_fence_connector_insatnce,"./Instance/Fence_Transform.json");
	loadAndInstance(ref_fence_insatnce,"./Instance/Fence_Transform.json");

	loadAndInstance(ref_flower_pot_3_branch_instance,"./Instance/Flower_Pot_3_Transform.json");
	loadAndInstance(ref_flower_pot_3_flower_instance,"./Instance/Flower_Pot_3_Transform.json");
	loadAndInstance(ref_flower_pot_3_pot_instance,"./Instance/Flower_Pot_3_Transform.json");

	loadAndInstance(ref_flower_pot_1_branch_instance,"./Instance/Flower_Pot_1_Transform.json");
	loadAndInstance(ref_flower_pot_1_leaves_instance,"./Instance/Flower_Pot_1_Transform.json");
	loadAndInstance(ref_flower_pot_1_pot_instance,"./Instance/Flower_Pot_1_Transform.json");
	loadAndInstance(ref_flower_pot_1_mud_instance,"./Instance/Flower_Pot_1_Transform.json");

	loadAndInstance(ref_flower_pot_5_leaves_instance,"./Instance/Flower_Pot_5_Transform.json");
	loadAndInstance(ref_flower_pot_5_pot_instance,"./Instance/Flower_Pot_5_Transform.json");

	loadAndInstance(ref_flower_pot_2_branch_instance,"./Instance/Flower_Pot_2_Transform.json");
	loadAndInstance(ref_flower_pot_2_pot_instance,"./Instance/Flower_Pot_2_Transform.json");
	loadAndInstance(ref_flower_pot_2_leaves_instance,"./Instance/Flower_Pot_2_Transform.json");
	loadAndInstance(ref_flower_pot_2_flower_instance,"./Instance/Flower_Pot_2_Transform.json");

	loadAndInstance(ref_flower_pot_4_leaves_instance,"./Instance/Flower_Pot_4_Transform.json");
	loadAndInstance(ref_flower_pot_4_branch_instance,"./Instance/Flower_Pot_4_Transform.json");
	loadAndInstance(ref_flower_pot_4_pot_instance,"./Instance/Flower_Pot_4_Transform.json");

	loadAndInstance(ref_small_rocks_instance,"./Instance/Small_Rock_Transform.json");
	loadAndInstance(ref_medium_rock_instance,"./Instance/Medium_Rock_Transform.json");

	loadAndInstance(ref_street_light_base_instance,"./Instance/StreetLights_Transform.json");
	loadAndInstance(ref_street_light_top_instance,"./Instance/StreetLights_Transform.json");
	loadAndInstance(ref_street_light_support_instance,"./Instance/StreetLights_Transform.json");
	loadAndInstance(ref_street_light_light_instance,"./Instance/StreetLights_Transform.json");

	loadAndInstance(ref_hoarding_light_base_instance,"./Instance/Hoarding_Lights_Transform.json");
	loadAndInstance(ref_hoarding_light_light_instance,"./Instance/Hoarding_Lights_Transform.json");
	loadAndInstance(ref_hoarding_light_support_instance,"./Instance/Hoarding_Lights_Transform.json");

	loadAndInstance(ref_cc_table_3_1_instance,"./Instance/CCtables_3_Transforms.json");
	loadAndInstance(ref_cc_table_3_2_instance,"./Instance/CCtables_3_Transforms.json");
	loadAndInstance(ref_cc_table_3_3_instance,"./Instance/CCtables_3_Transforms.json");
	loadAndInstance(ref_cc_table_3_4_instance,"./Instance/CCtables_3_Transforms.json");
	loadAndInstance(ref_cc_table_3_5_instance,"./Instance/CCtables_3_Transforms.json");
	loadAndInstance(ref_cc_table_3_6_instance,"./Instance/CCtables_3_Transforms.json");

	loadAndInstance(ref_cc_chair_1,"./Instance/CCChairs_Transforms.json");
	loadAndInstance(ref_cc_chair_2,"./Instance/CCChairs_Transforms.json");

	loadAndInstance(ref_cc_table_4_1_instance,"./Instance/CCtables_4_Transforms.json");
	loadAndInstance(ref_cc_table_4_2_instance,"./Instance/CCtables_4_Transforms.json");
	loadAndInstance(ref_cc_table_4_3_instance,"./Instance/CCtables_4_Transforms.json");
	loadAndInstance(ref_cc_table_4_4_instance,"./Instance/CCtables_4_Transforms.json");
	loadAndInstance(ref_cc_table_4_5_instance,"./Instance/CCtables_4_Transforms.json");
	loadAndInstance(ref_cc_table_4_6_instance,"./Instance/CCtables_4_Transforms.json");

	loadAndInstance(ref_lower_lib_bookshelf,"./Instance/Lower_Bookshelf_Transform.json");
	loadAndInstance(ref_lower_lib_books,"./Instance/Lower_Bookshelf_Transform.json");

    // Shadows + anisotropy
    gltf.scene.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material.map) {
                child.material.map.anisotropy = 4;
            }
        }
    });
});

//This function helps in player tonotfall of the world infinitly.
function teleportPlayerIfOob() {
	if ( camera.position.y <= - 10 ) {
		// Feet at your position, 0.35 above ground
		playerCollider.start.set( 42.39, 8.35, -61 );
		// Head 0.65 above feet (1.65m tall capsule)
		playerCollider.end.set( 42.39, 12, -61 );
		playerCollider.radius = 0.35;
		
		camera.position.copy( playerCollider.end );  // Camera at head: (42.39, 9, -61.01)
		camera.rotation.set( 0, 0, 0 );             // Face forward
	}
}

/********************************  POP UP   ************************** */

//Pop Up Content
const project = {
	"Chess_dot_com_Website":{
		title:"CHESS.COM",
		content:"This is my profile of chess dot com. Come join me and we can learn this game together.",
		link: "https://www.chess.com/member/arushification",
		image:"My Joker Image"
	},
	"Fitness_Website":{
		title:"Learning health Portfolio",
		content:"This website will be about sharing the fitness routine and also the diet. This will also contain the image of my profile everyday. Also the calisthenics skill progress.",
		link: "Link to my Fitness Website",
		image: "Cool pic"
	},
	"Cube13770":{
		title:"HHl Project",
		content:"This webpage will share my inspiration and the resources I used to study about the HHL algorithm. All the process the final result will also be shared",
		link: "../../../Projects/Quantum_computing/HHL/index.html",
		image:"Image of the Result"
	},
	"Cube13770_1":{
		title:"HHl Project",
		content:"This webpage will share my inspiration and the resources I used to study about the HHL algorithm. All the process the final result will also be shared",
		link: "../../../Projects/Quantum_computing/HHL/index.html",
		image:"Image of the Result"
	},
	"Laser_Chess_Website":{
		title:"Prism's Gambit",
		content:"This is my second game project, built using a Laser Chess engine I originally wrote in C. Later, I turned that engine into a working website by connecting it to a Node.js backend. The main goal of this project was to understand backend development and how to link C programs with a server, so the frontend is kept simple. You can try out the game using the link above.",
		link:"../../../Projects/Laser_Chess/The_Game/index.html",
		image:"./Media/Laser_chess_image.png"
	},
	"Laser_Chess_Website001":{
		title:"Prism's Gambit",
		content:"This is my second game project, built using a Laser Chess engine I originally wrote in C. Later, I turned that engine into a working website by connecting it to a Node.js backend. The main goal of this project was to understand backend development and how to link C programs with a server, so the frontend is kept simple. You can try out the game using the link above.",
		link:"../../../Projects/Laser_Chess/The_Game/index.html",
		image:"./Media/Laser_chess_image.png"
	},
	"Lichess_Website":{
		title:"My Lichess Profile",
		content:"This is my profile of Lichess. Come join me and we can learn this game together.",
		link: "https://lichess.org/@/Arushification",
		image:"My Joker Image"
	},
	"Movie_Review_Website_Link":{
		title:"Movie Recommendation",
		content:"This website will contain the list of all the movies that i have watched and will have my honest reviews on those movies. This will be a website and not a webpage",
		link:"../../../Movies/index.html",
		image:"May be a collage of all the movies that I have watched and linked"
	},
	//The ground floor of Rubiks cube building
	"Rubik's_Cube_Project_Website":{
		title:"Erno's grandson's code and Algorithm analysis",
		content:"This should explain the ways of solving the rubiks cube and the algorithm. Not how i actually programmed it. And also it should contain the comparsion of different alogirthms. This may also contain the algorithm for pyraminx and there analysis.",
		link:"../../../Projects/Rubiks_Cube/Rubiks_cube_Project.html",
		image:"Maybe a graph of entropy and time vs the steps which is also the final output of this project"
	},
	"Rubik's_Cube_Game_Website":{
		title:"NNN (Not Neccesarily Normal) Rubik's Cube Solver",
		content:"This is my first full project — a Rubik’s Cube solver. A couple of years ago, I wrote a generalized N×N×N Rubik’s Cube solver in C, and now I finally had the chance to use that code as the backend engine for this website.The focus of this project wasn’t on building a fancy front end; the main goal was to learn and practice backend web development. I used Node.js to handle the server-side logic, while the core solving algorithm remains written entirely in C.",
		link:"https://arushraju.github.io/NNN-Rubiks-Cube-Solver/",
		image:"./Media/Rubiks's_cube_solver.png"
	},
	//The top floor of the Rubiks cube building
	"Rubik's_Cube_Hobby_Website":{
		title:"Rubiks Cube Progression Website",
		content:"This website will explain about how I learnt to solve th rubiks cube., How I solve it and my history with it. This will also contain the video of me solving it and the time it took for me to solve it. Also this website will have the information about what are the types of rubiks cube I can solve. Thsi website will be the documentation. Which will explain my history with rubiks cube and the complete code explanation programatically and also about the openCV pipeline that I ahve used to make this shit.",
		link:"../../../Projects/Rubiks_Cube/Documentation.html",
		image:"Image of me solving the rubiks cube"
	},
	"Some_Other_movie_review_Website":{
		title:"Movie prediction Machine learning model (Future)",
		content:"Future Stuff",
		link:"Webpage link",
		image:"Image"
	},
	"Cube855":{
		title:"Tic Tac Toe With Feynman",
		content:"This project uses a quantum circuit (built in Qiskit) to figure out the best move in the simple game of Tic-Tac-Toe. It’s built with the quantum programming language Qiskit and demonstrates a practical application of Grover's search algorithm in game strategies. The link to the webpage explaining about the project in detail is given above.",
		link:"https://arushraju.github.io/Tic-Tac-Toe-with-Feynman/",
		image:"./Media/QC_TicTacToe_Wallpaper.jpeg"
	},
	"Cube855_1":{
		title:"Tic Tac Toe With Feynman",
		content:"This project uses a quantum circuit (built in Qiskit) to figure out the best move in the simple game of Tic-Tac-Toe. It’s built with the quantum programming language Qiskit and demonstrates a practical application of Grover's search algorithm in game strategies. The link to the webpage explaining about the project in detail is given above.",
		link:"https://arushraju.github.io/Tic-Tac-Toe-with-Feynman/",
		image:"./Media/QC_TicTacToe_Wallpaper.jpeg"
	},
	"Cube855_2":{
		title:"Tic Tac Toe With Feynman",
		content:"This project uses a quantum circuit (built in Qiskit) to figure out the best move in the simple game of Tic-Tac-Toe. It’s built with the quantum programming language Qiskit and demonstrates a practical application of Grover's search algorithm in game strategies. The link to the webpage explaining about the project in detail is given above.",
		link:"https://arushraju.github.io/Tic-Tac-Toe-with-Feynman/",
		image:"./Media/QC_TicTacToe_Wallpaper.jpeg"
	},
	"UGP2_Website_Link":{
		title:"FEA in structure mechanics",
		content:"Thsi will be about the project that I will be doing with professor C.S.Upadhaya, and this will be about the Abaqus and FEA",
		link:"../../../Projects/Structures_(UGP-2)/index.html",
		image:""
	},
	"UGP3_Website":{
		title:"Detonation and Deflaration Transition",
		content:"This will be a webpage which explain about my project in DDT",
		link:"../../../Projects/Propulsion_(UGP-3)/index.html",
		image:""
	},
	"UGP_1_Website":{
		title:"Crowdynamics",
		content:"This is my Undergraduate Project (UGP). It’s about simulating crowds to figure out better paths for people to walk on. The idea came from my own experience of being stuck in a huge crowd when I visited the Jyotirling in Omkareshwar. The project is still going on, and you can find all the details on the webpage linked above.",
		link:"https://arushraju.github.io/Human-Flow/",
		image:"./Media/UGP_1_Image.jpg"
	},
	"Notes_1":{
		title:"Incompressible Aerodynamics (ESO204,AE211)",
		content:"This is the notes of topic 1",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_2":{
		title:"Compressible Aerodynamics (AE311)",
		content:"This is the notes of topic 2",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_3":{
		title:"Hypersonic Aerodynamics (AE720)",
		content:"I have done this course in my seventh semester and the link given above will direct you to the webpage of my notes for this course.",
		link:"https://arushraju.github.io/Notes_Hypersonic_Aerodynamics/",
		image:"./Media/hypersonic_flow_wall.jpg"
	},
	"Notes_4":{
		title:"Quantum Computing (CS682)",
		content:"This is the notes of topic 4",
		link:"../../../Notes/Quantum_Computing/index.html",
		image:""
	},
	"Notes_5":{
		title:"Structural Mechanics (ESO202,AE333,AE343)",
		content:"Try covering the theory of the Solid mechnaics and ",
		link:"link",
		image:""
	},
	"Notes_6":{
		title:"Aerospace Propulsion (ESO201,AE341)",
		content:"This will include the notes of thermodynamics, Airospace Propulsion and also about combustion if possible",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_7":{
		title:"Web Development",
		content:"This is the notes of topic 7",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_8":{
		title:"Data Structures and Algorithm",
		content:"This is the notes of topic 8",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_9":{
		title:"Electronics",
		content:"This is the notes of topic 9",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_10":{
		title:"Operating System",
		content:"This is the notes of topic 10",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_11":{
		title:"Chess",
		content:"This is the notes of topic 11",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_12":{
		title:"Computational Engineering",
		content:"This is the notes of topic 12",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_13":{
		title:"Notes_13",
		content:"This is the notes of topic 13",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_14":{
		title:"Notes_14",
		content:"This is the notes of topic 14",
		link:"Link to this specific notes",
		image:""
	},
	"Notes_15":{
		title:"Notes_15",
		content:"This is the notes of topic 15",
		link:"Link to this specific notes",
		image:"Ic"
	},
	"Notes_16":{
		title:"Notes_16",
		content:"This is the notes of topic 16",
		link:"Link to this specific notes",
		image:""
	},
	"Aircraft_Project":{
		title:"AE463 Project",
		content:"This was both the first and last aeromodelling course I took, and it was entirely project-based. The aircraft shown here is the model my team and I designed. Unfortunately, it never managed to take off due to its excessive weight, but the experience taught us a valuable lesson about the importance of constraint management in aircraft design and manufacturing. A link to our final report is provided above.",
		link:"./Media/AE463_Report.pdf",
		image:"./Media/AE463_Pop_up_Image.jpg"
	},
	"PK_Kelkar_library":{
		title:"PK_Kelkar Catalog",
		content: "This projets was to make the 3D catalog of the library.",
		link:"../../../Projects/PK_Kelkar_Library/index.html",
		image:""
	},
	"Software_CloseFoam":{
		title:"CloseFOAM",
		content:"This is the Finite Difference based fluid simulation software that I made which had the ability to make simulate flows over the structure that were drawn on paper and is sent into the software in the florm of image. I had used OpenCV and C language to make this shit.",
		link:"../../../Projects/CloseFOAM/closefoam.html",
		image:""
	},
	"Software_Algotoon":{
		title:"Algotoon",
		content:"This is the application which could be used to make the animation of the code written in a go.",
		link:"../../../Projects/Algo-Toon/index.html",
		image:""
	},
	"Software_FlyFoam":{
		title:"FlyFOAM",
		content:"Draw on the paper the structure and the boundary condition and it solves the differencial equation of mechanics to simulate the rigid body dynamics",
		link:"../../../Projects/FlyFOAM/flyfoam.html",
		image:""
	},
	"Software_HardFoam":{
		title:"HardFOAM",
		content:"Draw on the paper set the boundary condition and see the deformation and stress distribution fo the structure drawn.",
		link:"../../../Projects/HardFOAM/hardfoam.html",
		image:""
	},
	"Blender":{
		title:"Blender",
		content:"If this software were a woman, I would marry her not just in this life, but also in all of my afterlives. This software is just magical. This will explain about my relation to this sofwtare and things like that.",
		link:"../../../Projects/Blender/blender.html",
		image:""
	},
	"Lower_Bookshelf_Instance":{
		title:"Books Recommendation",
		content:"This webpage is about my books which is simlar to movies website.",
		link:"../../../Books/index.html",
		image:""
	},
	"Journaling_Website_Link":{
		title:"Journaling Website",
		content:"This webpage will share my Diary Entires",
		link:"../../../Journal.html",
		image:""
	},
	"Introduction_Notice_Board":{
		title:"How I made this",
		content:"This will be about how I amde this website",
		link:"../../how_i_made_it.html",
		image:""
	},
	"Introduction_Notice_Texture":{
		title:"How I made this",
		content:"This will be about how I amde this website",
		link:"../../how_i_made_it.html",
		image:""
	}
}

const project_toggle = document.querySelector(".pop-up");
const project_heading = document.querySelector(".heading");
const project_content = document.querySelector(".content");
const project_link = document.querySelector(".link");
const project_image = document.querySelector("img");

function showProject(id){
	const this_project = project[id];
	//console.log(id);
	//console.log(this_project);
	if(this_project){
		 project_heading.textContent = this_project.title;
		 project_content.textContent = this_project.content;
		 project_link.innerHTML = 'Link';
		 project_link.style.color=  'aliceblue';
		 project_link.href = this_project.link;
		 project_image.src = this_project.image;
	}
	project_toggle.style.display = "grid";
}


/**Tic_Tac_Toe website -> cube855 cube855_1 cube_855_2 */
/**HHL Website -> cube13770 cube13770_1 */
/**Due to different materials */
const interative_Objects = [
	"Introduction_Notice_Board",
	"Introduction_Notice_Texture",
	"Chess_dot_com_Website",
	"Fitness_Website",
	"Cube13770",
	"Cube13770_1",
	"Laser_Chess_Website",
	"Laser_Chess_Website001",
	"Lichess_Website",
	"Movie_Review_Website_Link",
	"Rubik's_Cube_Project_Website",
	"Rubik's_Cube_Hobby_Website",
	"Some_Other_movie_review_Website",
	"Cube855",
	"Cube855_1",
	"Cube855_2",
	"UGP2_Website_Link",
	"UGP3_Website",
	"UGP_1_Website",
	"Notes_1",
	"Notes_2",
	"Notes_3",
	"Notes_4",
	"Notes_5",
	"Notes_6",
	"Notes_7",
	"Notes_8",
	"Notes_9",
	"Notes_10",
	"Notes_11",
	"Notes_12",
	"Notes_13",
	"Notes_14",
	"Notes_15",
	"Notes_16",
	"Aircraft_Project",
	"Rubik's_Cube_Game_Website",
	"PK_Kelkar_library",
	"Software_Algotoon",
	"Software_CloseFoam",
	"Software_FlyFoam",
	"Software_HardFoam",
	"Blender",
	"Lower_Bookshelf_Instance",
	"Journaling_Website_Link"
];


let currentHover = null;
//Checks if there is a pop up
let isPopUpClicked = false;


window.addEventListener("click", () => {
    if (!currentHover) return; // only when hovering
	if(isPopUpClicked) return;
    //console.log("Clicked:", currentHover);
	showProject(currentHover);
	document.exitPointerLock();
	isPopUpClicked = true;
});

//If the exit button is clicked
document.querySelector(".the-exit-button").addEventListener('click',()=>{
	document.querySelector(".pop-up").style.display = "none";
	
	currentHover = null;
	isPopUpClicked = false;
});


/*****************************    MUSIC     ************************************** */
let audioReady = false;

const listener = new THREE.AudioListener();
camera.add(listener);

const worldMusic = new THREE.Audio(listener);

const AudioLoader = new THREE.AudioLoader(loadingManager);
AudioLoader.load('./Media/Sadlands_Demo.ogg', (buffer) => {
    worldMusic.setBuffer(buffer);
    worldMusic.setLoop(true);
    worldMusic.setVolume(1);
    audioReady = true;
});

window.addEventListener("click", () => {
    if (audioReady && !worldMusic.isPlaying) {
        worldMusic.play();
        console.log("Audio started");
    }
});

/********************************************************************************************* */

function animate() {
	//console.log("The pop is clicked?",isPopUpClicked);
	//console.log("Current Hover ? ",currentHover);
	if(!isPopUpClicked)
	{
		raycaster.setFromCamera(pointer, camera);
		const intersects = raycaster.intersectObjects(scene.children, true);

		if (intersects.length > 0) {
			const hit = intersects[0].object;
			//console.log(hit.name);
			if (interative_Objects.includes(hit.name)) {
				document.body.style.cursor = "pointer";
				if (currentHover !== hit.name) {
				//console.log("Hovered:", hit.name);
				}
				currentHover = hit.name; // update hover
			} else {
				document.body.style.cursor = "default";
				currentHover = null; // << IMPORTANT (reset)
			}
		} else {
			document.body.style.cursor = "default";
			currentHover = null; // << IMPORTANT (reset)
		}
	}

	//console.log(isForwardPressed);
	//console.log(camera.position);
	
	const deltaTime = Math.min( 0.05, clock.getDelta() ) / STEPS_PER_FRAME;
	// we look for collisions in substeps to mitigate the risk of
	// an object traversing another too quickly for detection.
	for ( let i = 0; i < STEPS_PER_FRAME; i ++ ) {


		//Mobile Controls
		if (isForwardPressed) {
			//console.log("Moving, camera z:", camera.position.z);
			const speedDelta = deltaTime * (playerOnFloor ? 40 : 8);
			playerVelocity.add(getForwardVector().multiplyScalar(speedDelta));
		}
		if (mobile_control_knob_draggable) {
			const rotSpeed = 1.5;  // tweak this
			camera.rotation.order = 'YXZ';
			camera.rotation.y -= dx * rotSpeed * deltaTime;
			camera.rotation.x -= dy * rotSpeed * deltaTime;

			const limit = Math.PI / 2;
			camera.rotation.x = Math.max(-limit, Math.min(limit, camera.rotation.x));
		}


		//Desktop Controls
		controls( deltaTime );
		updatePlayer( deltaTime );
		teleportPlayerIfOob();
	}
	renderer.render( scene, camera );
	//stats.update();
}

