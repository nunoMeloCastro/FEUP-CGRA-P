import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
            0, 0, 0, //0
            1, 0, 0, //1
            2, 0, 0, //2
            1, 1, 0, //3
            2, 1, 0, //4
            3, 1, 0 //5
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 3,
            0, 3, 1,
            3, 1, 4,
            3, 4, 1,
            2, 1, 4,
            2, 4, 1,
            4, 2, 5,
            4, 5, 2
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	draw(tangram){
		var scaleFactor = -1;
		var ang = 3*Math.PI/8;
		var sqrt_2 =  Math.sqrt(2);

		var scale = [
			1, 0, 0, 0,
			0, scaleFactor, 0, 0, 
			0, 0, 1, 0,
			0, 0, 0, 1
		];

		var rotation = [
			Math.cos(ang), -Math.sin(ang), 0, 0,
			Math.sin(ang), Math.cos(ang), 0, 0,
			0, 0, 0, 1,
			0, 0, 0, 1
		];


		var translation = [
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 0, 1,
			2 + sqrt_2, -2 + sqrt_2, 0, 1
		]

		tangram.scene.pushMatrix();
		tangram.scene.multMatrix(translation);
		tangram.scene.multMatrix(rotation);
		tangram.scene.multMatrix(scale);
	
		tangram.parallelogram.display();
	
		tangram.scene.popMatrix();

	}
}
