import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { PrismaModule } from 'src/configs/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [QuotesController],
    providers: [QuotesService],
})
export class QuotesModule {}
