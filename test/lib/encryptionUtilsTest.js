/* eslint-env mocha */
import 'babel-polyfill';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import encryptionUtils from '../../src/lib/EncryptionUtils';

chai.use(sinonChai);

const expect = chai.expect;

describe('encryption utils', () => {
	const key = encryptionUtils.generateKey();

	it('encryption key is generated successfully', (done) => {
		const encKey = encryptionUtils.generateKey();
		expect(typeof encKey).to.equal('string');
		expect(encKey.length).to.equal(128 / 4); // 4 because one hexadecimal digit contains 4 bits
		done();
	});

	it('decrypting the encrypted ciphertext gives back the initial plaintext', (done) => {
		const plainText = 'text to encrypt';
		const cipherText = encryptionUtils.encrypt(plainText, key);
		expect(encryptionUtils.decrypt(cipherText, key)).to.equal(plainText);
		done();
	});

	it('same ecrypted value is generated for same plaintext and key everytime', (done) => {
		const plainText = 'text to encrypt';
		const cipherText1 = encryptionUtils.encrypt(plainText, key);
		const cipherText2 = encryptionUtils.encrypt(plainText, key);
		expect(cipherText1).to.equal(cipherText2);
		done();
	});
});
