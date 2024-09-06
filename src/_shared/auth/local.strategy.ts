import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({
			userNameField: 'documentNumber',
			passwordField: 'password',
		});
	}

	// async validate(documentNumber: string, password: string): Promise<any> {
	// 	const user = await this.authService.validateUser(documentNumber, password);
	// 	if (!user) {
	// 		throw new UnauthorizedException('Credenciais inválidas');
	// 	}
	// 	if (typeof user == 'string') {
	// 		throw new UnauthorizedException('Valide sua conta para continuar!');
	// 	}
	// 	return user;
	// }
}
