import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0.5, -0.5, -0.5,	//0
			0.5, 0.5, -0.5,	    //1
			-0.5, 0.5, -0.5,	//2
			-0.5, -0.5, -0.5,	//3
            0.5, -0.5, 0.5,	    //4
			0.5, 0.5, 0.5,	    //5
			-0.5, 0.5, 0.5,	    //6
			-0.5, -0.5, 0.5	    //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			4, 5, 6,            //front face
			//6, 5, 4,
			6, 7, 4,
			//4, 7, 6,          //end of front face
            4, 0, 1,            //right face
            //1, 0, 4,
            1, 5, 4,
            //4, 5, 1,          //end of right face
            //0, 1, 2,          //back face
            2, 1, 0,
            //2, 3, 0,
            0, 3, 2,            //end of face
            //3, 2, 6,          //left face
            6, 2, 3,
            //6, 7, 3,
            3, 7, 6,            //end of left face
            6, 5, 2,            //top face
            //2, 5, 6,
            //2, 1, 5,
            5, 1, 2,          //end of top face
            //0, 3, 4,            //down face
            4, 3, 0,
            4, 7, 3
            //3, 7, 4           //end of down face


		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

