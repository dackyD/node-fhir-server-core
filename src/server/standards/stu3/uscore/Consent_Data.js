const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class Consent_Data extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Consent_Data';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Consent_Data';
	}

	// How the resource reference is interpreted when testing consent restrictions.
	get meaning () {
		return this._meaning;
	}

	set meaning ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['instance', 'related', 'dependents', 'authoredby'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field meaning`);
		}
		this._meaning = new_value;
	}

	// A reference to a specific resource that defines which resources are covered by this consent.
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reference = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			meaning: this.meaning,
			reference: this.reference && this.reference.toJSON()
		});
	}

}

module.exports = Consent_Data;
