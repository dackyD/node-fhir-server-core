const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');

class CareTeam_Participant extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'CareTeam_Participant';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CareTeam_Participant';
	}

	// Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc.
	get role () {
		return this._role;
	}

	set role ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._role = new CodeableConcept(new_value);
	}

	// The specific person or organization who is participating/expected to participate in the care team.
	get member () {
		return this._member;
	}

	set member ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._member = new Reference(new_value);
	}

	// The organization of the practitioner.
	get onBehalfOf () {
		return this._onBehalfOf;
	}

	set onBehalfOf ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._onBehalfOf = new Reference(new_value);
	}

	// Indicates when the specific member or organization did (or is intended to) come into effect and end.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._period = new Period(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			role: this.role && this.role.toJSON(),
			member: this.member && this.member.toJSON(),
			onBehalfOf: this.onBehalfOf && this.onBehalfOf.toJSON(),
			period: this.period && this.period.toJSON()
		});
	}

}

module.exports = CareTeam_Participant;
