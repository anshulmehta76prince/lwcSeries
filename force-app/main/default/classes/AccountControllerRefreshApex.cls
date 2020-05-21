public with sharing class AccountControllerRefreshApex {
    public AccountControllerRefreshApex() {

    }

    @AuraEnabled(cacheable = true)
public static List<Account> getAccountList(){
    return [SELECT Id,Name,Active__c FROM Account WHERE AnnualRevenue >= 200000];
}

@AuraEnabled
public static void updateActive(){
    List<Account> accountList = new List<Account>();
    for(Account acc : [SELECT Id,Name,Active__c FROM Account WHERE  AnnualRevenue >= 200000]){
        acc.Active__c = 'No';
        accountList.add(acc);
    }
    update accountList;
}
}
