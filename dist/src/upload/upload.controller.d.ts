import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadFile(file: Express.Multer.File, req: any): Promise<{
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
    findAll(page?: string, limit?: string): Promise<{
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
