import { Injectable } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { PrismaService } from 'src/configs/prisma/prisma.service';
import { QuoteEntity, QuoteResponse } from './entities/quote.entity';

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
        const createQuote = await this.prismaService.quote.create({
            data: {
                ...createQuoteDto,
            },
        });

        return {
            message: 'Quote created successfully',
            data: new QuoteEntity(createQuote),
        };
    }

    // NOTE - this function is for getting all quotes
    /**
     *
     * @returns
     */
    async findAll(): Promise<{ data: QuoteEntity[] }> {
        const quotes = await this.prismaService.quote.findMany();

        return {
            data: quotes.map((quote) => new QuoteEntity(quote)),
        };
    }

    // NOTE - this function is for getting a random quote
    /**
     *
     * @returns
     */
    async random() {
        const quotes = await this.prismaService.quote.findMany();

        if (quotes.length === 0) {
            return {
                message: 'No quotes found',
            };
        }

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        return {
            message: 'Random quote retrieved successfully',
            data: new QuoteEntity(randomQuote),
        };
    }

    // NOTE - this function is for getting a quote by id
    /**
     *
     * @param id
     * @returns
     */
    async findOne(id: string): Promise<QuoteResponse> {
        const quote = await this.prismaService.quote.findUnique({
            where: {
                id: id,
            },
        });

        return new QuoteResponse(quote);
    }

    // NOTE - this function is for updating a quote by id
    /**
     *
     * @param id
     * @param updateQuoteDto
     * @returns
     */
    async update(id: string, updateQuoteDto: UpdateQuoteDto): Promise<QuoteEntity> {
        const quote = await this.prismaService.quote.update({
            where: {
                id: id,
            },
            data: {
                ...updateQuoteDto,
            },
        });

        return new QuoteEntity(quote);
    }

    // NOTE - this function is for removing a quote by id
    /**
     *
     * @param id
     * @returns
     */
    async remove(id: string): Promise<{ message: string }> {
        await this.prismaService.quote.delete({
            where: {
                id: id,
            },
        });

        return {
            message: 'Quote deleted successfully',
        };
    }
}
