// NOTE - this is the entity for the quote
export class QuoteEntity {
    id: string;
    author: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(quote: QuoteEntity) {
        this.id = quote.id;
        this.author = quote.author;
        this.content = quote.content;
    }
}

// NOTE - this is the response for the quote
export class QuoteResponse extends QuoteEntity {
    constructor(quote: QuoteEntity) {
        super(quote);

        this.createdAt = quote.createdAt;
        this.updatedAt = quote.updatedAt;
    }
}

export class QuoteRandomResponse extends QuoteEntity {
    constructor(quote: QuoteEntity) {
        super(quote);

        delete this.id;
    }
}
