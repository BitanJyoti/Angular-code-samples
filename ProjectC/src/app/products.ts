export class Product {
    constructor(
        public name : string,
        public imgurl : string,
        public price : number,
        public description : string,
        public id ?: string 
    ) {}
}