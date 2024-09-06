import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'crop' })
export class CropEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	crop: string;
}
