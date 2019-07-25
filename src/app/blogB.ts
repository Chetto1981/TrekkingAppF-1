export class MBlogP {
    id: number;
    title: string;
    description: string;
    url: string;
    date: string;

    constructor(id: number, title: string, description: string, url: string, date:string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.date = date;
    }
}