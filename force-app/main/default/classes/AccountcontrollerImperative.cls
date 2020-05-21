public with sharing class AccountcontrollerImperative {

@AuraEnabled
public static List<Account> getAccountList(){
    return [SELECT Id,Name FROM Account LIMIT 10];
}

@AuraEnabled(cacheable = true)
public static List<Contact> getRelatedContact(String accountId){
    return [SELECT Id,Name FROM Contact WHERE AccountId = :accountId];
}

}
