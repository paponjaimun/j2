export interface Source{
    id?: any;
    name: string;
}
export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToimage: string;
    publishedAt: Date;
    content: string;
}
export interface News {
    status: string;
    totalResults: number;
    articles: Article[];
}