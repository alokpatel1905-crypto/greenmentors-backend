import { PagesService } from './pages.service';
export declare class SeedController {
    private readonly pagesService;
    constructor(pagesService: PagesService);
    seedPage(): Promise<{
        id: string;
        title: string;
        slug: string;
        image: string | null;
        status: import("@prisma/client").$Enums.PageStatus;
        isActive: boolean;
        views: number;
        metaTitle: string | null;
        metaDescription: string | null;
        schemaMarkup: string | null;
        createdAt: Date;
        updatedAt: Date;
        content: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
}
