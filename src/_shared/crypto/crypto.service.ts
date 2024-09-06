import { Injectable } from '@nestjs/common';
require('dotenv').config({ path: '.env' });

@Injectable()
export class CryptoService {
	encryptPassword(text: string) {
		const crypto = require('crypto');
		const cipher = crypto.createCipher(
			process.env.CRYPTO_ALGORITHM,
			process.env.CRYPTO_KEY
		);
		let encrypted = cipher.update(text);
		encrypted = Buffer.concat([encrypted, cipher.final()]).toString('hex');
		return encrypted;
	}

	decryptPassword(text: string) {
		const crypto = require('crypto');
		const decipher = crypto.createDecipher(
			process.env.CRYPTO_ALGORITHM,
			process.env.CRYPTO_KEY
		);
		let decrypted = decipher.update(text, 'hex');
		decrypted = Buffer.concat([decrypted, decipher.final()]).toString('utf-8');
		return decrypted;
	}
}
