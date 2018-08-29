module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-author',
		documentation: 'Who and/or what authored the manifest.',
	},
	CONTENT_REF: {
		name: 'content-ref',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-content-ref',
		documentation: 'Contents of this set of documents.',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-created',
		documentation: 'When this document manifest created.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-description',
		documentation: 'Human-readable description (title).',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-identifier',
		documentation: 'Unique Identifier for the set of documents.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-patient',
		documentation: 'The subject of the set of documents.',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-recipient',
		documentation: 'Intended to get notified about this set of documents.',
	},
	RELATED_ID: {
		name: 'related-id',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-related-id',
		documentation: 'Identifiers of things that are related.',
	},
	RELATED_REF: {
		name: 'related-ref',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-related-ref',
		documentation: 'Related Resource.',
	},
	SOURCE: {
		name: 'source',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-source',
		documentation: 'The source system/application/software.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-status',
		documentation: 'current | superseded | entered-in-error.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-subject',
		documentation: 'The subject of the set of documents.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-type',
		documentation: 'Kind of document set.',
	},
};