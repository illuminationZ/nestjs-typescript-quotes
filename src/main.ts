import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './configs/swagger/swagger-config';
import { loadEnv } from './configs/env/config';
import helmet from 'helmet';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // NOTE - This is for swagger documentation
    setupSwagger(app);

    // NOTE - this is for helmet
    app.use(helmet());

    // NOTE - This is for cors
    app.enableCors();

    // test

    // NOTE - This is for the port and host
    await app.listen(loadEnv().PORT, '0.0.0.0', async () => {
        console.log(`🚀 Application is running on: ${await app.getUrl()}/api/docs`);
    });
}
bootstrap();
