export class CreateCategoryDto {
    name: string;
}

export class UpdateCategoryDto {
    categoryId: string;
    name: string;
    active: boolean;
}