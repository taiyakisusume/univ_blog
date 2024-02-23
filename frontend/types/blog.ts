import type {MicroCMSListContent} from "microcms-js-sdk";
import type {Category} from "@/types/category";

export type Blog = {
    title?: string;
    content?: string;
    category: (MicroCMSListContent & Category) | null;
};
