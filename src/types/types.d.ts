export interface BikeItemType {
    id: number;
    thumb: string;
    title: string;
    description: string;
    stolen_location: string
}

export interface PaginationType {
    page: number,
    setPage: function
    totalPage: number
}