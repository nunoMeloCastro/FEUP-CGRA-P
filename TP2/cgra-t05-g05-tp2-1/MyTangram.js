import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyParallelogram } from "./MyParallelogram.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        // Initialize Parallelogram
        this.diamond = new MyDiamond(scene);

        // Initialize Triangle
        this.triangle = new MyTriangle(scene);

        //Initialize Triangle Big
        this.triangleBig = new MyTriangleBig(scene);

        // Initializes Triangle Small 
        this.triangleSmall = new MyTriangleSmall(scene);

        // Initialize Parallelogram
        this.parallelogram = new MyParallelogram(scene);
                
	}
	
	display() {
        this.diamond.draw(this);
        this.triangle.draw(this);
        this.triangleBig.drawBlue(this);
        this.triangleBig.drawOrange(this);
        this.triangleSmall.drawPurple(this);
        this.triangleSmall.drawRed(this);
        this.parallelogram.draw(this);
	}
}

