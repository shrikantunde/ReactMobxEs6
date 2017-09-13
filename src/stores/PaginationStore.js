import {observable,action} from 'mobx';

class PaginationStore{

    @observable data;
    @observable pages;
    @observable columnHeads;
    @observable showProducts;
    current
    constructor()
    {
       this.pages=[];
       this.data=[];
       this.showProducts = [];
       this.current=this;
       this.addProducts(100);
       this.columnHeads=["Id","Name","Price"];
       this.asc = false;
    }
  
    totalRecords
    pageCount
    recordsPerPage


    @action addData(data)
    {
        data.push(data);
    }

    addProducts(quantity) {
        const pages = quantity/10;
            for(let i = 1; i < quantity; i++) {
                const id = i;
                this.data.push({
                    Id:id,
                    Name: 'item name' + id,
                    Price: 1500+i
                });
    }
//Creating Pagination buttons based on size of product list
    for(let i = 0; i < pages; i++) {
        this.pages.push({
            id:i
        });
    }
}

}

let pageStore=new PaginationStore();

export default pageStore;