import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerRefreshApex.getAccountList';
import updateActive from '@salesforce/apex/AccountControllerRefreshApex.updateActive';
import { refreshApex } from '@salesforce/apex';

export default class Demo24RefreshApex extends LightningElement {

    @wire(getAccountList) allAccounts;

    handleClick(event){
        updateActive().then(() =>{
            console.log('>>>>>updated');
            return refreshApex(this.allAccounts);
        }).catch((error) => {
           // error
        });
    }

}