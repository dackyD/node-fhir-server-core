const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const ContactPoint = require('./ContactPoint');
const Address = require('./Address');
const Reference = require('./Reference');
const Organization_Contact = require('./Organization_Contact');

class Organization extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Organization';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Organization';
	}

	// This is a Organization resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['Organization'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier for the organization that is used to identify the organization across multiple disparate systems.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Whether the organization's record is still in active use.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._active = new_value;
	}

	// The kind(s) of organization that this is.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A name associated with the organization.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._name = new_value;
	}

	// A list of alternate names that the organization is known as, or was known as in the past.
	get alias () {
		return this._alias;
	}

	set alias ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._alias = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A contact detail for the organization.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// An address for the organization.
	get address () {
		return this._address;
	}

	set address ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._address = Array.isArray(new_value) ? new_value.map(val => new Address(val)) : [new Address(new_value)];
	}

	// The organization of which this organization forms a part.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._partOf = new Reference(new_value);
	}

	// Contact for the organization for a certain purpose.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._contact = Array.isArray(new_value) ? new_value.map(val => new Organization_Contact(val)) : [new Organization_Contact(new_value)];
	}

	// Technical endpoints providing access to services operated for the organization.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			identifier: this.identifier && this.identifier.toJSON(),
			active: this.active,
			type: this.type && this.type.toJSON(),
			name: this.name,
			alias: this.alias,
			telecom: this.telecom && this.telecom.toJSON(),
			address: this.address && this.address.toJSON(),
			partOf: this.partOf && this.partOf.toJSON(),
			contact: this.contact && this.contact.toJSON(),
			endpoint: this.endpoint && this.endpoint.toJSON()
		});
	}

}

module.exports = Organization;
