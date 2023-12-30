import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';

@Module({
    imports: [QuotesModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
