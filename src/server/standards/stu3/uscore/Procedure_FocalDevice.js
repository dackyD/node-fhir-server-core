const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Procedure_FocalDevice extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Procedure_FocalDevice';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Procedure_FocalDevice';
	}

	// The kind of change that happened to the device during the procedure.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._action = new CodeableConcept(new_value);
	}

	// The device that was manipulated (changed) during the procedure.
	get manipulated () {
		return this._manipulated;
	}

	set manipulated ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._manipulated = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			action: this.action && this.action.toJSON(),
			manipulated: this.manipulated && this.manipulated.toJSON()
		});
	}

}

module.exports = Procedure_FocalDevice;
