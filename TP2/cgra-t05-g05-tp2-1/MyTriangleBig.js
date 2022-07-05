import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
            2, 1, 0
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	drawBlue(tangram){
		var ang = Math.PI/4;

		var rotation = [
			Math.cos(ang), -Math.sin(ang), 0, 0,
			Math.sin(ang), Math.cos(ang), 0, 0,
			0, 0, 0, 1,
			0, 0, 0, 1
		];

		tangram.scene.pushMatrix();
		tangram.scene.multMatrix(rotation);

		tangram.triangleBig.display();

		tangram.scene.popMatrix();
	}

	drawOrange(tangram){
		var ang = Math.PI/2;
		var sqrt_2 = Math.sqrt(2);

		var rotation = [
			Math.cos(ang), -Math.sin(ang), 0, 0,
			Math.sin(ang), Math.cos(ang), 0, 0,
			0, 0, 0, 1,
			0, 0, 0, 1
		];

		var translation_x = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 0, 1,
			sqrt_2, 0, 0, 1
		]

		var translation_y = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 0, 1,
			0, -2 + sqrt_2, 0, 1
		]

		tangram.scene.pushMatrix();

		tangram.scene.multMatrix(translation_y);
		tangram.scene.multMatrix(translation_x);
		tangram.scene.multMatrix(rotation);

		tangram.triangleBig.display();

		tangram.scene.popMatrix();
	}
}

