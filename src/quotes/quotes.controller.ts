import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {
    constructor(private readonly quotesService: QuotesService) {}

    /**
     *
     * @param createQuoteDto
     * @returns
     */
    @Post()
    @ApiOperation({ summary: 'Create a quote' })
    @ApiCreatedResponse({ description: 'Quote created successfully' })
    @ApiOkResponse({ description: 'Quote created successfully' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    async create(@Body() createQuoteDto: CreateQuoteDto) {
        return this.quotesService.create(createQuoteDto);
    }

    /**
     *
     * @returns
     */
    @Get()
    @ApiOperation({ summary: 'Get all quotes' })
    @ApiOkResponse({ description: 'Quotes retrieved successfully' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiQuery({ name: 'content', required: false })
    async findAll(@Query('content') content: string) {
        return this.quotesService.findAll(content);
    }

    /**
     *
     * @returns
     */
    @Get('random')
    @ApiOperation({ summary: 'Get a random quote' })
    @ApiOkResponse({ description: 'Random quote retrieved successfully' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    async random() {
        return await this.quotesService.random();
    }

    /**
     *
     * @param id
     * @returns
     */
    @Get(':id')
    @ApiOperation({ summary: 'Get a quote by id' })
    @ApiOkResponse({ description: 'Quote retrieved successfully' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    async findOne(@Param('id') id: string) {
        return this.quotesService.findOne(id);
    }

    /**
     *
     * @param id
     * @param updateQuoteDto
     * @returns
     */
    @Patch(':id')
    @ApiOperation({ summary: 'Update a quote by id' })
    @ApiOkResponse({ description: 'Quote updated successfully' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    async update(@Param('id') id: string, @Body() updateQuoteDto: UpdateQuoteDto) {
        return this.quotesService.update(id, updateQuoteDto);
    }

    /**
     *
     * @param id
     * @returns
     */
    @Delete(':id')
    @ApiOperation({ summary: 'Delete a quote by id' })
    @ApiOkResponse({ description: 'Quote deleted successfully' })
    @ApiBadRequestResponse({ description: 'Bad request' })
    async remove(@Param('id') id: string) {
        return this.quotesService.remove(id);
    }
}
