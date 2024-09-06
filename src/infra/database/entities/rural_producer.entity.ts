import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { CropEntity } from './crop.entity';

@Entity({ name: 'ruralProducer' })
export class RuralProducerEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	cpfCpnf: string;

	@Column()
	nameProducer: string;

	@Column()
	farmName: string;

	@Column()
	city: string;

	@Column()
	federalState: string;

	@Column()
	totalArea: number;

	@Column()
	arableArea: number;

	@Column()
	vegetationArea: number;

	@ManyToMany(() => CropEntity)
	@JoinTable({ name: 'farmCrops' })
	farmCrops: CropEntity[];
}
