import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			0, 2, 1,
			1, 3, 2,
			1, 2, 3
		];

		//double ang = Math.PI/4;

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	draw(tangram){
		var ang = Math.PI/4;
		var sqrt_2 = Math.sqrt(2);

		var rotation_z = [
			Math.cos(ang), Math.sin(ang), 0, 0,
			-Math.sin(ang), Math.cos(ang), 0, 0,
			0, 0, 0, 1,
			0, 0, 0, 1
		];
	
		var translation_x = [
		  1, 0, 0, 0,
		  0, 1, 0, 0,
		  0, 0, 0, 1,
		  sqrt_2/2, 0, 0, 1
		]
	
		var translation_y = [
		  1, 0, 0, 0,
		  0, 1, 0, 0,
		  0, 0, 0, 1,
		  0, -sqrt_2/2 + 2*sqrt_2, 0, 1
		]
	
		tangram.scene.pushMatrix();
		
		tangram.scene.multMatrix(translation_x);
		tangram.scene.multMatrix(translation_y);
		tangram.scene.multMatrix(rotation_z);
		
		tangram.diamond.display();
	
		tangram.scene.popMatrix();
	}
}

