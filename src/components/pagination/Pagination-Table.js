import React from 'react';
import {observer} from 'mobx-react';
import PageStore from './../../stores/PaginationStore';

@observer
export default class PaginationTable extends React.Component {

// Default Constructor    
constructor(props){
    super(props);
    this.state=PageStore;
    this.data1 = this.state.data;
    this.pagination(0);
    this.asc = this.state.asc;  
}
state

//Sorting...
 sortProduct = (id, showProducts, order) => {
 if(order == true) {
           this.asc = false
       }else {
           this.asc = true
 }     

   var sProducts = this.showProducts.sort( (a, b) => {      
      //Assending Order       
      if(order) {
        if (a[id] < b[id]) {
            return 1;
        }
        if (a[id] > b[id]) {
                return -1;
            }
            return 0;
      } else {
          //Descending order
            if (a[id] > b[id]) {
                return 1;
            }
            if (a[id] < b[id]) {
                return -1;
            }
            return 0;
      }
    });
    this.setState({showProducts:sProducts});
 }

//Pagination with 10 records
 pagination(pageNumber) {
    this.showProducts  = [];
    const pageStart = pageNumber*10;
    const pageEnd = pageStart + 10;
        for(let i = pageStart; i < pageEnd; i++) {
            this.showProducts.push({        
                Id:this.data1[i].Id,
                Name: this.data1[i].Name,
                Price: this.data1[i].Price
            });
        }
        this.setState({showProducts:this.showProducts})
}
   
render() {   
   return(
    <div className="container">
    <table className="table table-striped table-bordered" cellpadding="10">
    <thead>
        <tr>     
        { 
        this.state.columnHeads.map((header)=>
        (<th onClick = {this.sortProduct.bind(this,header, this.showProducts, this.asc)}>{header}</th>))
            }
        </tr>
    </thead>
    <tbody>
            { this.showProducts.map((value) =>{
                return (
                <tr>
                        <td>{value.Id}</td>
                        <td>{value.Name}</td>
                        <td>{value.Price}</td>
                </tr>         
            )} )}
    </tbody>
    </table>
    <ul className="pagination pagination-lg">
    {
            this.state.pages.map((value) => (
                               
                <li><a href="#"  onClick = {this.pagination.bind(this,value.id)}>{value.id+1}</a></li>  
            ))
        } 
    </ul>
   
     
      
    </div>
            )
    }
}
