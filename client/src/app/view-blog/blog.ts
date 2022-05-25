import { ITag } from "./tag"
export interface IBlog {
    body: String,
    header: String,
    image: String,
    subheader: String,
    author: String,
    tags: ITag[]
}
