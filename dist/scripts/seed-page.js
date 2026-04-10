"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is not set');
}
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    const page = await prisma.page.create({
        data: {
            title: 'Home Page',
            slug: 'home',
            status: 'PUBLISHED',
            content: {
                hero: {
                    title: "Welcome to Green Mentors",
                    subtitle: "Empowering the next generation of eco-leaders"
                },
                sections: [
                    {
                        id: 1,
                        title: "Our Mission",
                        text: "To transform education for a sustainable future."
                    }
                ]
            }
        },
    });
    console.log('Created PAGE:', page);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
});
//# sourceMappingURL=seed-page.js.map