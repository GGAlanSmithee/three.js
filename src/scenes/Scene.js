import { Object3D } from '../core/Object3D';

/**
 * @author mrdoob / http://mrdoob.com/
 */

function Scene () {
	
	Object3D.call( this );

	this.type = 'Scene';

	this.background = null;
	this.fog = null;
	this.overrideMaterial = null;

	this.autoUpdate = true; // checked by the renderer

}

Scene.prototype = Object.create( Object3D.prototype );

Scene.prototype.constructor = Scene;

Scene.prototype.copy = function ( source, recursive ) {

	Object3D.prototype.copy.call( this, source, recursive );

	if ( source.background !== null ) this.background = source.background.clone();
	if ( source.fog !== null ) this.fog = source.fog.clone();
	if ( source.overrideMaterial !== null ) this.overrideMaterial = source.overrideMaterial.clone();

	this.autoUpdate = source.autoUpdate;
	this.matrixAutoUpdate = source.matrixAutoUpdate;

	return this;

};

Scene.prototype.toJSON = function ( meta ) {

	var data = Object3D.prototype.toJSON.call( this, meta );
	
	if ( this.fog != null ) {
		
		data.object.fog = this.fog.toJSON();

<<<<<<< HEAD
export { Scene };
=======
	}

	return data;

};
	
export { Scene };
>>>>>>> adds toJSON methods to scene and fog objects
