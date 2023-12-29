import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

/**
 * Swagger
 *
 * @param {INestApplication} app
 */
export function setupSwagger(app: INestApplication): void {
    const options = new DocumentBuilder().setTitle('Quotes API Docs').setDescription('### Quotes API for management').setVersion('1.0').build();

    const document = SwaggerModule.createDocument(app, options);
    const customSiteTitle: SwaggerCustomOptions = {
        customSiteTitle: 'Quote API Docs',
        customCss: '.swagger-ui .topbar { display: none } .swagger-ui background-color: #f8f8f8;',
        swaggerOptions: {
            docExpansion: 'list',
            filter: true,
            showRequestDuration: true,
        },
    };
    SwaggerModule.setup('api/docs', app, document, customSiteTitle);
}
