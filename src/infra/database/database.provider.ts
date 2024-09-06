import { postgres } from './postgres.ormconfig';
require('dotenv').config({ path: './.env' });
export const DB_POSTGRES = 'DB_POSTGRES';

export const databaseProviders = [
	{
		provide: DB_POSTGRES,
		useFactory: async () => {
			return await postgres.initialize();
		},
	},
];
