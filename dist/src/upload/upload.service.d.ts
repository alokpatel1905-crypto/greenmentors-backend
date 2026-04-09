import { PrismaService } from '../prisma/prisma.service';
export declare class UploadService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(file: Express.Multer.File, userId?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        filename: string;
        originalname: string;
        mimetype: string;
        size: number;
        url: string;
        uploadedById: string | null;
    }>;
    findAll(page?: number, limit?: number): Promise<{
        data: ({
            uploadedBy: {
                id: string;
                name: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            filename: string;
            originalname: string;
            mimetype: string;
            size: number;
            url: string;
            uploadedById: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        filename: string;
        originalname: string;
        mimetype: string;
        size: number;
        url: string;
        uploadedById: string | null;
    }>;
}
