const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Immunization_Reaction extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Immunization_Reaction';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Immunization_Reaction';
	}

	// Date of reaction to the immunization.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// Details of the reaction.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._detail = new Reference(new_value);
	}

	// Self-reported indicator.
	get reported () {
		return this._reported;
	}

	set reported ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reported = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			date: this.date,
			detail: this.detail && this.detail.toJSON(),
			reported: this.reported
		});
	}

}

module.exports = Immunization_Reaction;
