import { Professional } from '../professional/professional';

export class SearchResult {
    response: string;
    searchResult: Array<Professional>;

    constructor() {
        this.searchResult = new Array<Professional>();
        }
}
