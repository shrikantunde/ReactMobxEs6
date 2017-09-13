import {observable,action} from 'mobx';

class CustomerStore{
    @observable firstName;
    @observable lastName;
    @observable city;
    @observable gender;

    @observable selectedGender;
    //firstName;
    //lastName;


    constructor(){
        this.firstName = '';
        this.lastName = '';
        this.city = [{id:1, name:'Dallas'},{id: 2, name: 'Austin'}];
        this.gender = [{id: 1, name: 'Male', checked: true}, {id : 2, name: 'Female', checked: false}, {id : 3, name : 'Other', checked: false}];
    }


    updateCustomerState(key, value){
            console.log('value changed:: '+value);
            /*if(key == 'gender'){
                this.selectedGender = value;
            }
            console.log('Selected Gender:: '+selectedGender); */
    }
}

let customerStoreObj = new CustomerStore();

export default customerStoreObj;