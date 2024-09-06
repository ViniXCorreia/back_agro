import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { PersonEntity } from 'src/infra/database/entities/person.entity';
// import { PersonService } from 'src/_modules/person/infra/controller/person.service';
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class AuthService {
	constructor(
		// @Inject(forwardRef(() => PersonService))
		// private personService: PersonService,
		private jwtService: JwtService,
		private cryptoService: CryptoService
	) {}

	// async validateUser(
	// 	email: string,
	// 	password: string
	// ): Promise<PersonEntity | string> {
	// 	const findUser = await this.personService.findOnePersonByEmail(email);
	// 	if (!findUser.validate) {
	// 		return 'Ative sua conta!';
	// 	}
	// 	const encryptPassword = this.cryptoService.encryptPassword(password);
	// 	if (findUser && findUser.password === encryptPassword) {
	// 		return findUser;
	// 	}
	// 	return null;
	// }

	async login(user: any) {
		return await this.jwtService.signAsync({ user });
	}

	async setRole(user: any, role: string) {
		user.role = role;
		return await this.jwtService.signAsync(user);
	}

	async decodeToken(token: string) {
		const decoded = this.jwtService.decode(token);
		return decoded;
	}
}
