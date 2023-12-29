// NOTE - config is a function that loads the .env file
import { config } from 'dotenv';

config();

export function loadEnv() {
    const port = process.env.PORT || 3001;

    return {
        PORT: port,
    };
}
