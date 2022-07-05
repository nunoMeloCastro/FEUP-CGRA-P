import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
            -1, 0, 0, //0
            0, 1, 0, //1
            1, 0, 0 //2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 2, 1,
            0, 1, 2
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	drawPurple(tangram){
		var sqrt_2 = Math.sqrt(2);

		var translation = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 0, 1,
			-sqrt_2, sqrt_2 - 1, 0, 1
		]

		tangram.scene.pushMatrix();
		tangram.scene.multMatrix(translation);
	
		tangram.triangleSmall.display();
	
		tangram.scene.popMatrix();
	}

	drawRed(tangram){
		var sqrt_2 =  Math.sqrt(2);
		var ang = 3*Math.PI/4;

		var translation = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 0, 1,
			sqrt_2/2, -4 + sqrt_2, 0, 1
		]

		var rotation = [
			Math.cos(ang), -Math.sin(ang), 0, 0,
			Math.sin(ang), Math.cos(ang), 0, 0,
			0, 0, 0, 1,
			0, 0, 0, 1
		];

		tangram.scene.pushMatrix();
		tangram.scene.multMatrix(translation);
		tangram.scene.multMatrix(rotation);
	
		tangram.triangleSmall.display();
	
		tangram.scene.popMatrix();
	}
}

