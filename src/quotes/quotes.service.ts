import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { QuoteEntity } from './entities/quote.entity';

@Injectable()
export class QuotesService {
    constructor(private readonly prismaService: PrismaService) {}

    // NOTE - this function is for creating a quote
    /**
     *
     * @param createQuoteDto
     * @returns
     */
    async create(createQuoteDto: CreateQuoteDto) {
        return await this.prismaService.quote.create({
            data: {
                ...createQuoteDto,
            },
        });
    }

    // NOTE - this function is for getting all quotes
    /**
     *
     * @returns
     */
    async findAll(): Promise<QuoteEntity[]> {
        const quotes = await this.prismaService.quote.findMany();

        return quotes.map((quote) => new QuoteEntity(quote));
    }

    // NOTE - this function is for getting a quote by id
    /**
     *
     * @param id
     * @returns
     */
    async findOne(id: string) {
        return await this.prismaService.quote.findUnique({
            where: {
                id: id,
            },
        });
    }

    // NOTE - this function is for updating a quote by id
    /**
     *
     * @param id
     * @param updateQuoteDto
     * @returns
     */
    async update(id: string, updateQuoteDto: UpdateQuoteDto) {
        return await this.prismaService.quote.update({
            where: {
                id: id,
            },
            data: {
                ...updateQuoteDto,
            },
        });
    }

    // NOTE - this function is for removing a quote by id
    /**
     *
     * @param id
     * @returns
     */
    async remove(id: string) {
        return await this.prismaService.quote.delete({
            where: {
                id: id,
            },
        });
    }
}
