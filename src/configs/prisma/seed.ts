import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const quotes = [
    {
        author: 'Maya Angelou',
        quote: 'If you don’t like something, change it. If you can’t change it, change your attitude.',
    },
    {
        author: 'Albert Einstein',
        quote: 'Imagination is more important than knowledge.',
    },
    {
        author: 'Ralph Waldo Emerson',
        quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    },
    {
        author: 'Oprah Winfrey',
        quote: 'The biggest adventure you can take is to live the life of your dreams.',
    },
    {
        author: 'Helen Keller',
        quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    },
    {
        author: 'Mark Twain',
        quote: 'The secret of getting ahead is getting started.',
    },
    {
        author: 'Nelson Mandela',
        quote: 'Education is the most powerful weapon which you can use to change the world.',
    },
    {
        author: 'Steve Jobs',
        quote: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.',
    },
    {
        author: 'Eleanor Roosevelt',
        quote: 'The future belongs to those who believe in the beauty of their dreams.',
    },
    {
        author: 'Walt Disney',
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
    },
    {
        author: 'Martin Luther King Jr.',
        quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    },
    {
        author: 'Vincent van Gogh',
        quote: 'I would rather die of passion than of boredom.',
    },
    {
        author: 'Confucius',
        quote: 'It does not matter how slowly you go as long as you do not stop.',
    },
    {
        author: 'Coco Chanel',
        quote: 'The most courageous act is still to think for yourself. Aloud.',
    },
    {
        author: 'John Lennon',
        quote: 'Count your age by friends, not years. Count your life by smiles, not tears.',
    },
    {
        author: 'Dalai Lama',
        quote: 'Happiness is not something ready-made. It comes from your own actions.',
    },
    {
        author: 'Anne Frank',
        quote: 'No one has ever become poor by giving.',
    },
    {
        author: 'Winston Churchill',
        quote: 'Success consists of going from failure to failure without loss of enthusiasm.',
    },
    {
        author: 'Aristotle',
        quote: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    },
    {
        author: 'Stephen Hawking',
        quote: 'However difficult life may seem, there is always something you can do and succeed at.',
    },
];
async function main() {
    for (const quote of quotes) {
        await prisma.quote.create({
            data: {
                author: quote.author,
                content: quote.quote,
            },
        });
    }
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
