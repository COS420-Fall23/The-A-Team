import { AComment } from "./AComment";

export interface APost {
    author: string;
    course: string;
    title: string;
    body: string;
    comments: AComment[];
}
