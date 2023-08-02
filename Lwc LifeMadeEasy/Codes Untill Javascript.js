// MAINLY CONCEPTS THAT WILL BE DISCUSSED HERE

//  FILTER
//  MAP
//  REDUCE
//  WIRE
//  CONNECTED CALLBACK
//  ONCLICK/ONCHANGE
//  QUERYSELECTOR
//  PROMISE/SETTIMEOUT
//  LIGHTNING DATA TABLE CREATION
//  JAVASCRIPT BASCIS TO INTERMEDIATE

// FILTER  SECTION
// INCLUDE THE FILE FOR FILTER THAT YOU CREATED IN OTHER LAPTOP TO UNDERSTAND BETTER LIKE WHICH FILTER OPTIONS TO USE WHEN

// EXAMPLE 1 == >
let arry = [1, -1, 4, 5];
var filterred = arry.filter((val) => {
  return val >= 0;
});

let arry2 = [
  { name: "john", value: 24 },
  { name: "ambuja", value: 34 },
  { name: "petet", value: 44 },
];

arry2.forEach((n) => {});

// EXAMPLE 2 == >

/*
Items = ['apple', 'banana', 'kiwi', 'orange', 'Strawberry'];
filterValue = ' ';

handleChange ( event ) {
     filterValue = this.target.value;
};

result(){
     return this.Items.filter ( (i) => {
        i.tolowerCase().includes( this.filterValue.tolowerCase() );
     })
} */

// EXAMPLE 3 == >

/*   




    ACCOUNTS_FakeData = [
        {name: 'Apna', industry:'Cement', rating:'Hot'},
        {name: 'Tumhara', industry:'Ambujaa', rating:'Cold'}
    ]
    
    

    // Import Accounts From Apex Class
    allAccounts = [];
    name = '';
    industry = '';
    rating = '';


    filteredData=[];

    @wire ( ACCOUNTS , { Parameters } )
    wiredData({data,erro}){
        if(data){
            this.allAccounts = [...data];

        }if(error){
            console.log(Error);
        }

    }

    searchName(event){
        this.name = event.target.value;
    }
    searchIndustry(event){
        this.industry = event.target.value;
    }
    searchRating(event){
        this.rating = event.target.value;
    }

    

    // INCLUDE THE FILE FOR FILTER THAT YOU CREATED IN OTHER LAPTOP TO UNDERSTAND BETTER LIKE WHICH FILTER OPTIONS TO USE WHEN 
    onclick(event){
        if (this.searchName != null && this.searchIndustry === null && this.searchRating === null && this.searchName.length >= 2) {
          this.filteredData = this.allAccounts.filter((each) => {
            return Object.keys(each).some((key) => {
              return each[key].toLowerCase().includes(this.searchName.toLowerCase());
            });
          });
        } 

                                   // Overall search of text in all fields of every record. 
        // get filteredAccounts() {
        //     return this.wiredData.filter( account =>
        //       account.Name.toLowerCase().includes(this.searchKey)
        //       || account.Type.toLowerCase().includes(this.searchKey)
        //       || account.Industry.toLowerCase().includes(this.searchKey)
        //       || account.Phone.toLowerCase().includes(this.searchKey)
        //     );
        //  }



                                    // To check the typeof (A String method)
        // let myVariable = "Hello, world!";
        // if (typeof myVariable === "string") {
        // console.log(myVariable.toUpperCase()); // Output: "HELLO, WORLD!"
        // }


        
                                    // I WROTE THIS METHOD MAYBE HELPFULL TO SOMEWHERE TO APPLY FILTER BY FILTER
        // value = ['isma','final'];
        // value.filter( (v)=>{ 
        //     const v1 =v.toLowerCase(); 
        //     return stringArray.filter(val => 
        //         { return console.log(v1.includes(val) ) 
        //         });
        // })
        


        else if (this.searchRating != null && this.searchName === null && this.searchIndustry === null && this.searchRating.length >= 2) {
          this.filteredData = this.allAccounts.filter((each) => {
            return Object.keys(each).some((key) => {
              return each[key].toLowerCase().includes(this.searchRating.toLowerCase());
            });
          });
        } 
        
        else if (this.searchIndustry != null && this.searchName === null && this.searchRating === null && this.searchIndustry.length >= 2) {
          this.filteredData = this.allAccounts.filter((each) => {
            return Object.keys(each).some((key) => {
              return each[key].toLowerCase().includes(this.searchIndustry.toLowerCase());
            });
          });
        }




    }


*/

// MAP  SECTION

/*

    // EXAMPLE 1 == > 

    let vals = [5, 4, 9, 2, 1];

    function isEven( param ){
        if(param % 2 === 0){
        console.log('The parameter is even = ' , param);
        }
    }

    var filtered = vals.filter( n => {
        return n % 2 === 0;
    })


    const result = filtered.map( even => {
        return isEven(even) ; 
        }    
    )





    // EXAMPLE 2 == >
    customObjectOptions = [];
    arr = [];
    RegionSelectedValue= ' ' ;

    connectedCallback(){
    
        // RegionMethod is the data we get from apex 
        RegionMethod().then(data=> {        
            this.customObjectOptions = data.map( record => {
            //console.log(this.customObjectOptions); 
            return {
            label: record.Name,
            value: record.value
            };
            
        }
    }    
    


    OnChangeOfComboboxEvent(event){
        
        @wire(getCustomObjectRecords, { Region_key : this.RegionSelectedValue} )
        wiredCustomObjectRecords({ error, data }) {
        if (data) {
            this.customObjectOptions = data.map( record => {
                console.log(this.customObjectOptions);
                return {
                    label: record.Name,
                    value: record.value
                };                
            });
        } else if (error) {
            console.error(error);
            }
        }       
    }





        // EXAMPLE 2 == >





    
        @wire(getRecord, { 'Paramenters' })
        account;
        arry = [];
        get accountName() {
            if (this.account.data) {
                return this.arry = account.map( rec => {
                    return {
                        // if need to access data from an array of object
                        name: rec.Name;
                        //if need to access data from all the data
                        // this.account.data.fields.Name.value;
                    }
                })
            }
            return '';
        }
    
        get accountList() {
            return this.accounts.map((account) => {
                return {
                    // it is returnng the value from all the information of account object
                    name: account.fields.Name.value,
                };
            });
        }
        
        
        
        




    // EXAMPLE 4 == >

        accounts = [];
    
        @wire(getAccounts)
        wiredAccounts({ data, error }) {
            if (data) {
                this.accounts = data.map((account) => {
                    return {
                        id: account.Id,
                        name: account.Name,
                        industry: account.Industry,
                    };
                });
            } else if (error) {
                console.error(error);
            }
        }

*/
//
//
//
//
//
//
//
//
//
//
//

/////////////////////////////////////////////// REDUCE  SECTION

/*
    The reduce() method in JavaScript is used to reduce an array of values down to a 
    single value. The reduce() method iterates over each element of the array and 
    accumulates a single result that is returned at the end. The result can be of 
    any data type, depending on what is specified in the function that is passed to the 
    reduce() method.
    The function passed to reduce() takes two arguments: an accumulator and the 
    current value. The accumulator is the result of the previous iteration, and the 
    current value is the current element being processed. The function performs some 
    operation on the accumulator and the current value and returns the new value of the 
    accumulator, which is then used in the next iteration.
    At the end of the iteration, reduce() returns the final value of the accumulator. 
    This final value can be a number, string, object, or any other data type, depending 
    on the operations performed in the function passed to reduce().

    totalForEach = 0;
    get totalAmount(){
        return this.services.reduce((acc, service) => {
            return acc += service.amount;
        }, 0);
    }
*/
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

////////////////////////////// PROMISE  SECTION AND (HANDLE CUSTOM EVENTS IN SECTION 3)

//SECTION 1
// Firstly Methods will be explained to get the date
/*

    //METHOD NO 1 == >  BY CONNECTED CALL BACK METHOD
    connectedCallback(){

        // RegionMethod is the data we get from apex 
        RegionMethod().then(data=> {        
            this.customObjectOptions = data.map( record => {
            //console.log(this.customObjectOptions); 
            return {
            label: record.Name,
            value: record.value
            };
            
        }
    }      



    //METHOD NO 2 == >  ONCLICK OR ONCHANGE METHOD
    handleClick(event){                  
        getExchangeRates({ baseamount:this.initialAmount, source:this.fromValue,  target:this.toValue  }).then( data => {
        this.result=data;
        
        } )
        this.resultVisible=true;
    }



    //METHOD NO 2 == >  BY WIRE METHOD [ ONCHANGE/ONCLICK OR DIRECTLY  ]

    OnChangeOfComboboxEvent(event){
        
        @wire(getCustomObjectRecords, { Region_key : this.RegionSelectedValue} )
        wiredCustomObjectRecords({ error, data }) {
        if (data) {
            this.customObjectOptions = data.map( record => {
                console.log(this.customObjectOptions);
                return {
                    label: record.Name,
                    value: record.value
                };                
            });
        } else if (error) {
            console.error(error);
            }
        }       
    }


    
    handleClick(event){ 
        @wire(getExchangeRates, {'baseamount' : '$initialAmount', 'source' : '$fromValue', 'target' : '$toValue'} ) 
        getRates(response){
        this.result=[...response];  
        console.log('data-', response);
        }
        this.resultVisible=true; 
    }




// IMPORTANT NOTE == > TAKE DELETE RECORD EXAMPLE FROM THE FILE STORED IN YOYUR LAPTOP 



                                              

                                                           // SECTION 2
                                         // FINALLY HOW TO USE PROMISE CALLS IN LWC METHODS WHILE CALLING DATA


// EXAMPLE 1 == > ASYNC/AWAIT && .THEN/.CATCH METHOD
// BOTH THESE CODES WILL BE SERVING THE SAME OUTCOMES 

async handleClick(event) {
    try {
      const data = await getExchangeRates({ 
        baseamount: this.initialAmount, 
        source: this.fromValue, 
        target: this.toValue 
      });
      this.result = data;
      this.resultVisible = true;
    } catch (error) {
      console.error(error);
    }
  }


  handleClick(event) {
    getExchangeRates({ 
      baseamount: this.initialAmount, 
      source: this.fromValue, 
      target: this.toValue 
    }).then((response) => {
      this.result = response;
      console.log('data-', response);
      this.resultVisible = true;
    }).catch((error) => {
      console.error(error);
    });
  }




// EXAMPLE 2 == >  NOW WILL BE APPLYING THE PROMISE CALL TO WIRE DECORATORS
// WE WILL APPLY THE PRMIXE FUNCTIONS TO THE WIRE METHOD BELOW

handleClick(event){ 
    @wire(getExchangeRates, {'baseamount' : '$initialAmount', 'source' : '$fromValue', 'target' : '$toValue'} ) 
    getRates(response){
             this.result=response;  
             console.log('data-', response);
             } 
            this.resultVisible=true;
         }

// BELOW IS THE UPDATES VERSION OF WIRE 
    handleClick(event) {
        this.resultVisible = false;
        
        const promise = new Promise((resolve, reject) => {
            getExchangeRates({ baseamount: this.initialAmount, source: this.fromValue, target: this.toValue })
            .then(response => {
                this.result = response;
                this.resultVisible = true;
                resolve(response);
                console.log('data-', response);
            })
            .catch(error => {
                console.error(error);
                reject(error);
            });
        });
        
        return promise;
    }




                                                           // SECTION 3
                                            // NOW WITH DIFFERENT EXAMPLES LIKE SET TIMEOUT AND MORE

// EXAMPLE 1 == > 
    handleClick() {
            this.doAsyncOperation()
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.log(error);
                });
        }

    doAsyncOperation() {
        return new Promise((resolve, reject) => {
            getExchangeRates({ baseamount: this.initialAmount, source: this.fromValue, target: this.toValue })
            .then(response => {
                this.result = response;
                this.resultVisible = true;
                setTimeout(() => {
                    resolve(response);
                }, 3000);
                
            })
            
        });
    }


                      // HANDLE CUSTOM EVENT
// EXAMPLE 2 == >
    handleClick() {
        const myEvent = new CustomEvent('myevent', {
            detail: {
                message: 'Custom event dispatched!'
            }
        });
        
        this.dispatchEvent(myEvent);
    }

    handleCustomEvent() {
        this.waitForCustomEvent()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    }

    waitForCustomEvent() {
        return new Promise((resolve, reject) => {
            this.addEventListener('myevent', event => {
                resolve(event.detail.message);
            });
        });
    }
}



// EXAMPLE 3 == > QUERY SELECTOR OPERATIONS AND YOU CAN HAVE MORE EXAMPLES FROM THE USEMY COURSE OF LWC
handleClick() {
    const element = this.template.querySelector('.my-element');
    this.animateElement(element)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
}

animateElement(element) {
    return new Promise((resolve, reject) => {
        element.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(50px)' }
        ], {
            duration: 1000,
            fill: 'forwards'
        }).onfinish = () => {
            resolve('Animation complete!');
        };
    });
}


*/

// THE BIG CONCEPT
// LIGHTNING DATA TABLE CREATION

// JAVASCRIPT COURSE
