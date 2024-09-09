import { ApiProperty } from '@nestjs/swagger';

export class OperationResultsDto {
	@ApiProperty()
	success: boolean;

	@ApiProperty()
	message: string;
}
