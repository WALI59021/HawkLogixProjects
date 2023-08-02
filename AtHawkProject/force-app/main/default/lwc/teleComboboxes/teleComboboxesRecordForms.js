import { LightningElement, api, wire, track } from "lwc";

//import Fun1 from'@salesforce/apex/FacilityId.Fun1';
//import Fun2 from'@salesforce/apex/FacilityId.Fun2';
//import create from'@salesforce/apex/FacilityId.create';



export default class TeleComboboxes extends LightningElement {
  
	
	
	@track value = '';
	@track value1 = '';
	fc_name;
	fc_number;
	FacilitySystemLabel;
	FacilityRegionLabel;
	@track FacilityId = [];
	@track SystemValues = [];
	@track test = false;
		
		get options() {
		
			return this.FacilityId;
		
		} 
		
		get options2() {
		
			return this.SystemValues;
		
		} 
		
		connectedCallback(){
		
			Fun1()
			.then(result => {
				let arr = [];
				for (var i=0; i<result.length;i++){
					arr.push ({ label:result[i].Name , value : result[i].Region_Value__c })
				}
				this.FacilityId = arr; 
				})
		
		}
        /*
		WhenValueOnComboboxChanged_OnChangeOfComboboxEvent(event){
	
			@wire(getCustomObjectRecords, { Region_key : this.SelectedValue} )
			Fun2({ error, data }) {
				if (data) {
					this.customObjectOptions = data.map( record => {
						return {
						label: record.Name,
						value: record.value
						};
						console.log(this.customObjectOptions);
					});
				} else if (error) {
				console.error(error);
				}
			}       
     	}*/




		
		handleSourceChange(event){
		
			this.value = event.detail.value;  
			
			this.FacilitySystemLabel = event.target.options.find(opt => opt.value === event.detail.value).label;
		
			if(this.value != null){
				this.test = true;
			}
			Fun2({ 
				val: this.value  // sending parameter value to the apex class which is system value against the selected region
			}) 
			.then(result => {  
				let arr2 = [];
				for (var i=0; i<result.length;i++){
					arr2.push ({ label:result[i].Name , value : result[i].Value__c })
				}
				this.SystemValues = arr2;
				}) 
			}
		
		handleChange(event){
			
				this.value1 = event.detail.value;
				this.FacilityRegionLabel = event.target.options.find(opt => opt.value === event.detail.value).label;
		
				}
		
		hfChange(event){
		
				this.fc_name = event.target.value;
				}
		heChange(event){
		
				this.fc_number = event.target.value;
				}
			
		createFacility(){ 
		
				create({ name: this.fc_name, num: this.fc_number, systemlabel: this.FacilitySystemLabel, regonlabel:this.FacilityRegionLabel })
				.then(result=>{
					console.log("result"+JSON.stringify(result));
				})
				.catch(error=>{
					console.log("error"+json.stringify(error))
				})
			}
		





	 
}


























    
