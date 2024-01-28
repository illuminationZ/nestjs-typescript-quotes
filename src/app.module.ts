import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { PrismaModule } from './configs/prisma/prisma.module';

@Module({
    imports: [QuotesModule, PrismaModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
