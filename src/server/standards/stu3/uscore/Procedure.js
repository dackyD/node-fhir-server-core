const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Procedure_Performer = require('./Procedure_Performer');
const Annotation = require('./Annotation');
const Procedure_FocalDevice = require('./Procedure_FocalDevice');

class Procedure extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Procedure';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Procedure';
	}

	// This is a Procedure resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['Procedure'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this procedure that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
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

	// A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this procedure.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._definition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A reference to a resource that contains details of the request for this procedure.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger event of which this particular procedure is a component or step.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A code specifying the state of the procedure. Generally this will be in-progress or completed state.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// Set this to true if the record is saying that the procedure was NOT performed.
	get notDone () {
		return this._notDone;
	}

	set notDone ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._notDone = new_value;
	}

	// A code indicating why the procedure was not performed.
	get notDoneReason () {
		return this._notDoneReason;
	}

	set notDoneReason ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._notDoneReason = new CodeableConcept(new_value);
	}

	// A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._category = new CodeableConcept(new_value);
	}

	// The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._code = new CodeableConcept(new_value);
	}

	// The person, animal or group on which the procedure was performed.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._subject = new Reference(new_value);
	}

	// The encounter during which the procedure was performed.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._context = new Reference(new_value);
	}

	// The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
	get performedDateTime () {
		return this._performedDateTime;
	}

	set performedDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field performedDateTime`);
		}
		this._performedDateTime = new_value;
	}

	// The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
	get performedPeriod () {
		return this._performedPeriod;
	}

	set performedPeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._performedPeriod = new Period(new_value);
	}

	// Limited to 'real' people rather than equipment.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._performer = Array.isArray(new_value) ? new_value.map(val => new Procedure_Performer(val)) : [new Procedure_Performer(new_value)];
	}

	// The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._location = new Reference(new_value);
	}

	// The coded reason why the procedure was performed. This may be coded entity of some type, or may simply be present as text.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The condition that is the reason why the procedure was performed.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._bodySite = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The outcome of the procedure - did it resolve reasons for the procedure being performed?
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._outcome = new CodeableConcept(new_value);
	}

	// This could be a histology result, pathology report, surgical report, etc..
	get report () {
		return this._report;
	}

	set report ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._report = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Any complications that occurred during the procedure, or in the immediate post-performance period. These are generally tracked separately from the notes, which will typically describe the procedure itself rather than any 'post procedure' issues.
	get complication () {
		return this._complication;
	}

	set complication ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._complication = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Any complications that occurred during the procedure, or in the immediate post-performance period.
	get complicationDetail () {
		return this._complicationDetail;
	}

	set complicationDetail ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._complicationDetail = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or could potentially be more complex in which case the CarePlan resource can be used.
	get followUp () {
		return this._followUp;
	}

	set followUp ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._followUp = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Any other notes about the procedure.  E.g. the operative notes.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
	get focalDevice () {
		return this._focalDevice;
	}

	set focalDevice ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._focalDevice = Array.isArray(new_value) ? new_value.map(val => new Procedure_FocalDevice(val)) : [new Procedure_FocalDevice(new_value)];
	}

	// Identifies medications, devices and any other substance used as part of the procedure.
	get usedReference () {
		return this._usedReference;
	}

	set usedReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._usedReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies coded items that were used as part of the procedure.
	get usedCode () {
		return this._usedCode;
	}

	set usedCode ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._usedCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			identifier: this.identifier && this.identifier.toJSON(),
			definition: this.definition && this.definition.toJSON(),
			basedOn: this.basedOn && this.basedOn.toJSON(),
			partOf: this.partOf && this.partOf.toJSON(),
			status: this.status,
			notDone: this.notDone,
			notDoneReason: this.notDoneReason && this.notDoneReason.toJSON(),
			category: this.category && this.category.toJSON(),
			code: this.code && this.code.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			context: this.context && this.context.toJSON(),
			performedDateTime: this.performedDateTime,
			performedPeriod: this.performedPeriod && this.performedPeriod.toJSON(),
			performer: this.performer && this.performer.toJSON(),
			location: this.location && this.location.toJSON(),
			reasonCode: this.reasonCode && this.reasonCode.toJSON(),
			reasonReference: this.reasonReference && this.reasonReference.toJSON(),
			bodySite: this.bodySite && this.bodySite.toJSON(),
			outcome: this.outcome && this.outcome.toJSON(),
			report: this.report && this.report.toJSON(),
			complication: this.complication && this.complication.toJSON(),
			complicationDetail: this.complicationDetail && this.complicationDetail.toJSON(),
			followUp: this.followUp && this.followUp.toJSON(),
			note: this.note && this.note.toJSON(),
			focalDevice: this.focalDevice && this.focalDevice.toJSON(),
			usedReference: this.usedReference && this.usedReference.toJSON(),
			usedCode: this.usedCode && this.usedCode.toJSON()
		});
	}

}

module.exports = Procedure;
