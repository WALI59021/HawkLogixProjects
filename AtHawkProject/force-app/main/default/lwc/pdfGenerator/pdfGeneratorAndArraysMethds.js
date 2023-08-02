import { LightningElement, wire, api, track } from "lwc";
import PDF_COMPANYIMAGE from '@salesforce/resourceUrl/pdfUrl';
import generatePdf from '@salesforce/apex/pdfController.GeneratePdf';
export default class PdfGenerator extends LightningElement {

    @api recordId;
    
    PDF_COMPANYIMAGE ;
 
    
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }

    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
    ]
    
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1, 2019',
        invoiceDue:'January 10, 2020',
        companyName:'Sparksuite, Inc.',
        address1:'12345 Sunny Road',
        address2:' Sunnyville, CA 12345'
    }
   
    
    
    
    pdfHandler(event){
        const content = this.template.querySelector('.comtainer');
        console.log(content.outerHTML)
        generatePdf( {recordId:this.recordId, htmlData:content.outerHTML } ).then( (result)=>{
        console.log(result) ;   
        window.open(`https://agility-fun-2547-dev-ed--c.documentforce.com/servlet/servlet.FileDownload?file=${result.id}`);
        }).catch( (error)=>{
            console.log(error)
        })

    }


    
    
    services = [
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
        ];

    totalForEach = 0;
        get totalAmount(){
            return this.services.reduce((acc, service) => {
                return acc += service.amount;
            }, 0);
        }
   
    totalReduce=0 ;
        get totalAmount(){
            this.services.forEach( (service) => {
                this.total += service.amount;
            });
            return this.total;
        }

        
        























        













































        




   

/*
In your code, you are using forEach function to iterate over the services array, but forEach function does not return a value, 
it just iterates over the elements in the array and performs an action on each element. Since forEach does not return a value, 
the totalAmount getter method will always return undefined.

If you want to calculate the sum of amount property from each element in the services array using forEach function, you need to modify the code as follows:


        total = 0;
        services = [
            {name:'Consultant fee', amount:1000.00},
            {name:'Website design', amount:300.00},
            {name:'Hosting (3 months)', amount:75.00}
        ];

        get totalAmount(){
            this.services.forEach( (service) => {
                this.total += service.amount;
            });
            return this.total;
        }
        Note that you can also use the reduce method to achieve the same result, like this:


        total = 0;
        services = [
            {name:'Consultant fee', amount:1000.00},
            {name:'Website design', amount:300.00},
            {name:'Hosting (3 months)', amount:75.00}
        ];

        get totalAmount(){
            return this.services.reduce((acc, service) => {
                return acc + service.amount;
            }, 0);
        }
 */  

        



}