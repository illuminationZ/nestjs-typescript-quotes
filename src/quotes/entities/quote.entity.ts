export class QuoteEntity {
    id: string;
    author: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(quote: QuoteEntity) {
        this.author = quote.author;
        this.content = quote.content;
    }
}
