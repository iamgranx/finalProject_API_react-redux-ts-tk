export interface UsersProps {
    currentPage: number;
    perPage: number;
    onHandle (currentPage: number): void;
     
}