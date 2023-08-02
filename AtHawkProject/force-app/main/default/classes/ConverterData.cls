public with sharing class ConverterData {
    
    @AuraEnabled(cacheable=true)
    public static Double FetchExchanges ( string baseamount, string source, string target ){

       
        string amount = baseamount;
        string sourceCurrency = source ;          
        string targetCurrency = target ;
        string today = string.valueOf(date.today());

        HTTP http = new HTTP();
        HTTPRequest req = new HTTPRequest();       
        req.setEndpoint('https://api.apilayer.com/exchangerates_data/convert?to='+targetCurrency+'&from='+sourceCurrency+'&amount='+amount+'&date='+today); 
        req.setMethod('GET');  
        req.setHeader('apikey', 'S3fIfE2hBxZnRZe30yG0k7PmIgT47k4q');   
        //req.setBody();  In body we could have passed the param and there values in keyValue pair
        HTTPResponse resp = http.send(req);  // Callout
        map<string, object> response = (map<string, object>) JSON.deserializeuntyped( resp.getbody() );
        return (double) response.get('result');

        /*
            system.debug(resp);
            system.debug(resp.getStatus());
            system.debug(resp.getStatusCode());
            system.debug(resp.getBody());
        */

        // if(resp.getStatusCode()==200){
        //     map<string, object> response = (map<string, object>) JSON.deserializeuntyped( resp.getbody() );
        //     return (double) response.get('result');
        // }

        // if(resp==null){
        //     throw new auraHandledException('unable to get the response ');
        // }

        // return '';


    }
    /*
    if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
    */

    
   // https://api.apilayer.com/exchangerates_data/symbols





   
}



