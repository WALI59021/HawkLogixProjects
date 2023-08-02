import { LightningElement, api, wire } from "lwc";
export default class ToDoList extends LightningElement {
	// @api recordId;
	// @api objectApiName;
    country='america';

    get getcountry(){
        return this.country==='america';
    }


      changeHandler(event){
        this.country=event.target.value.toLowerCase();
      }
            
       

      students = false;
      get getLabel(){
        return this.students? 'Hide Stuidents':'Show Students' ; 
      }
      buttonHandler(event){
        this.students=!this.students;
      }


}