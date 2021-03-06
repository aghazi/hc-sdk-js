import ZeroKitAdapter from './services/ZeroKitAdapter';
import AuthService from './services/AuthService';
import DocumentService from './services/DocumentService';
import UserService from './services/UserService';
import FhirService from './services/FhirService';


class HealthCloud {
	constructor(options) {
		const authService = new AuthService(options);
		const zeroKitAdapter = new ZeroKitAdapter({ authService });
		const documentService = new DocumentService({ zeroKitAdapter });
		const fhirService = new FhirService({ zeroKitAdapter });
		this.getLoginForm = zeroKitAdapter.getLoginForm.bind(zeroKitAdapter);
		this.getRegistrationForm = zeroKitAdapter.getRegistrationForm.bind(zeroKitAdapter);
		this.downloadDocument = documentService.downloadDocument.bind(documentService);
		this.uploadDocument = documentService.uploadDocument.bind(documentService);
		this.getUser = UserService.getUser;
		this.searchRecords = fhirService.searchRecords.bind(fhirService);
		this.uploadFhirRecord = fhirService.uploadFhirRecord.bind(fhirService);
		this.downloadFhirRecord = fhirService.downloadFhirRecord.bind(fhirService);
	}
}

module.exports = HealthCloud;

