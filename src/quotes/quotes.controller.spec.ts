import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { PrismaModule } from '.././configs/prisma/prisma.module';
import { QuoteEntity } from './entities/quote.entity';

describe('QuotesController', () => {
    let controller: QuotesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            controllers: [QuotesController],
            providers: [QuotesService],
        }).compile();

        controller = module.get<QuotesController>(QuotesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return a random quote', async () => {
        const quote = await controller.random();
        expect(quote).toBeDefined();
    });

    it('should return all quotes', async () => {
        const quotes = await controller.findAll('');
        expect(quotes).toBeDefined();
    });

    it('should create a quote', async () => {
        const quoteData = {
            content: 'test content',
            author: 'test author',
        } as QuoteEntity;

        jest.spyOn(controller, 'create').mockImplementation(async (): Promise<{ message: string; data: QuoteEntity }> => {
            return {
                message: 'Quote created successfully',
                data: new QuoteEntity(quoteData),
            };
        });
    });
});
