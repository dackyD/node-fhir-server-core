const BackboneElement = require('./BackboneElement');

class ElementDefinition_Base extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ElementDefinition_Base';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ElementDefinition_Base';
	}

	// The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._path = new_value;
	}

	// Minimum cardinality of the base element identified by the path.
	get min () {
		return this._min;
	}

	set min ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field min`);
		}
		this._min = new_value;
	}

	// Maximum cardinality of the base element identified by the path.
	get max () {
		return this._max;
	}

	set max ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._max = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			path: this.path,
			min: this.min,
			max: this.max
		});
	}

}

module.exports = ElementDefinition_Base;
