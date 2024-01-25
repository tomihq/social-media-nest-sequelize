import { PaginationDto } from "../dto/pagination.dto";

export const getFormattedPagination = (paginationDto: PaginationDto): {skip: number, take: number, end: number} => {
    const { page, limit: take } = paginationDto
    const skip = (page-1) * take;
    const end = skip + take;

    return { skip, take, end }
}