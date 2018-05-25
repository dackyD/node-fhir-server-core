const BackboneElement = require('./BackboneElement');
const ResourceList = require('./ResourceList');

class Bundle_Response extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Bundle_Response';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Bundle_Response';
	}

	// The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._status = new_value;
	}

	// The location header created by processing this operation.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._location = new_value;
	}

	// The etag for the resource, it the operation for the entry produced a versioned resource (see [Resource Metadata and Versioning](http.html#versioning) and [Managing Resource Contention](http.html#concurrency)).
	get etag () {
		return this._etag;
	}

	set etag ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._etag = new_value;
	}

	// The date/time that the resource was modified on the server.
	get lastModified () {
		return this._lastModified;
	}

	set lastModified ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._lastModified = new_value;
	}

	// An OperationOutcome containing hints and warnings produced as part of processing this entry in a batch or transaction.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._outcome = new ResourceList(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			status: this.status,
			location: this.location,
			etag: this.etag,
			lastModified: this.lastModified,
			outcome: this.outcome && this.outcome.toJSON()
		});
	}

}

module.exports = Bundle_Response;
