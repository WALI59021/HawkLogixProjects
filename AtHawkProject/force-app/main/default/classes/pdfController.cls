public with sharing class pdfController {
    public pdfController() {}

    @AuraEnabled
    public static Attachment GeneratePdf(Id recordId, String htmlData){
        try {
            PageReference page ;
            page.getParameters().put('pdfText', htmlData);
            // Page.renderAsPDF;
            Contact con = [SELECT Id FROM Contact WHERE Id = :recordId];
            if (con == null) {
                throw new AuraHandledException('Contact record not found');
            }
            Attachment objAttachment = new Attachment();
            objAttachment.Name = 'invoice.pdf';
            objAttachment.ParentId = con.Id;
            objAttachment.Body = page.getContentAsPDF();
            objAttachment.IsPrivate = false;
            insert objAttachment;
            return objAttachment;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}