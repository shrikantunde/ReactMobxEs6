import React,{Component, PropTypes} from 'react';
import {observer} from 'mobx-react';
import CustomerStore from './../stores/CustomerStore';

//Marking the Registration Form as the observer
//@observer
export default class RegistrationForm extends Component{

  constructor(props){
      super(props);
      //this.updateProperty = this.updateProperty.bind(this);
      //this.onChange = this.onChange.bind(this);
      this.customerState = CustomerStore;
      this.onChange = this.onChange.bind(this);
      this.validateField = this.validateField.bind(this);
      this.saveForm = this.saveForm.bind(this);
  }


  customerState

//Will be triggered by input field on the onChange event
  onChange(event){
      this.validateField(event.target.name, event.target.value);
      this.customerState.updateCustomerState(event.target.name, event.target.value);
  }

  validateField(key, value){
    //console.log('In validate function...' + key);
        if(key === 'firstname' || key === 'lastname'){
              console.log('In validate first name...');
              /*if(value === ''){
                  console.log('Please fill required fields...');
              }*/
        }
  }

  saveForm(){
    console.log("Form needs to be saved..." + customerState);
  }

//Render method for rendering the view
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div className ="container">
          <form className="form-horizontal">
            <fieldset>
            <legend>Customer Registration Form</legend>
            <h1>Hi, </h1>

            <div className="form-group">
                 <label htmlFor="firstname" className="col-lg-2 control-label">First Name: </label>
                 <div className="col-lg-10">
                      <input type="text" name="firstname" onChange={this.onChange}/>
                 </div>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="lastname" className="col-lg-2 control-label">Last Name: </label>
                <div className="col-lg-10">
                     <input type="text" name="lastname" onChange={this.onChange}/>
                </div>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="city" className="col-lg-2 control-label">City: </label>
                <div className="col-lg-10">
                    <select id="city" onChange={this.onChange}> 
                        {this.customerState.city.map(x => (<option value= {x.name} id = {x.id}> {x.name} </option>))}
                    </select>
                </div>
            </div>
            <br/>
            <div className="form-group">
             <label htmlFor="gender" className="col-lg-2 control-label">Gender: </label>
            <div className="col-lg-10">
              {this.customerState.gender.map(x => 
                              (<input type="radio" id={x.id} value ={x.name} checked={x.checked} onChange={this.onChange}/>)) }
            </div>
            </div>

            <div className="form-group">
                <div className="col-lg-10 col-lg-offset-2">
                    <button type="reset" className="btn btn-default">Cancel</button>
                    <button type="submit" className="btn btn-primary" onClick={this.saveForm}>Submit</button>
                </div>
            </div>
            </fieldset>
          </form>
        
      </div>
    );
  }

}
