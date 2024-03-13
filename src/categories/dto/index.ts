export class CreateCategoryDto {
    name    : string;
    marketId: string;
}

export class UpdateCategoryDto {
    categoryId: string;
    name: string;
    active: boolean;
}