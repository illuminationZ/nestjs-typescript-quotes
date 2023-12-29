import { ApiProperty } from '@nestjs/swagger';

export class CreateQuoteDto {
    @ApiProperty({
        description: 'The author of the quote',
        type: String,
        example: 'John Doe',
        required: false,
    })
    author: string;

    @ApiProperty({
        description: 'The content of the quote',
        type: String,
        example: 'This is a quote',
        required: true,
    })
    content: string;
}
