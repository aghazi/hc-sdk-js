import config from '../config';
import hcRequest from '../lib/hcRequest';

const apiUrl = config.api;

const userRoutes = {

	initRegistration(hcUsername) {
		const body = {
			email: hcUsername,
			user_data: { auto_validate: true },
		};

		return hcRequest('POST', `${apiUrl}/users/register/init`, body);
	},

	validateRegistration(validationVerifier, zerokitId) {
		const body = {
			validation_verifier: validationVerifier,
			zerokit_id: zerokitId,
		};

		return hcRequest('POST', `${apiUrl}/users/register/finish`, body);
	},

	resolveUserId(hcUsername) {
		const body = { value: hcUsername };

		return hcRequest('POST', `${apiUrl}/users/resolve`, body);
	},

	addTresor(userId, tresorId) {
		const body = { user_id: userId, tresor_id: tresorId };

		return hcRequest('POST', `${apiUrl}/tresors`, body);
	},

	addTagEncryptionKey(userId, secret) {
		const body = { tek: secret };

		return hcRequest('POST', `${apiUrl}/users/${userId}/tek`, body);
	},

};

export default userRoutes;
