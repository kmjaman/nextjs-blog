export interface Category {
    id: number;
    name: string;
}


export interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    category: string;
    image: string;
}
  