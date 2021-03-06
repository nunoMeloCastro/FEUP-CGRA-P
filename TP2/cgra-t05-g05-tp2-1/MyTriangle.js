import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-Math.sqrt(2), 0, 0,	//0
			0, Math.sqrt(2), 0,	//1
			Math.sqrt(2), 0, 0,	//2
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

	draw(tangram){
		var sqrt_2 = Math.sqrt(2);

		var translation = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 0, 1,
			0, 2*sqrt_2, 0, 1
		]

		tangram.scene.pushMatrix();
		tangram.scene.multMatrix(translation);
	
		tangram.triangle.display();
	
		tangram.scene.popMatrix();
	}
}

