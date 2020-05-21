import { LightningElement,track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountcontrollerImperative.getAccountList';
import getRelatedContact from '@salesforce/apex/AccountcontrollerImperative.getRelatedContact';

export default class Demo23ApexImperativeCall extends LightningElement {
    value = 'None';
    @track options=[];
    @track allContacts;

    handleChange(event){
        this.value = event.detail.value;
        getRelatedContact({accountId : this.value})
        .then(data => {
            this.allContacts = data;
        })
        .catch(error => {
            console.log('error');
        });
     }

     renderedCallback(){
         if(this.options.length == 0){
            getAccountList()
            .then(data => {
                if(data){
                    const temp = { label: 'None', value: 'None' };
                    this.options = [ ...this.options, temp ];
                    for(var item of data) {
                        var acc = { label: item.Name, value: item.Id };
                        this.options = [ ...this.options, acc ];
                    }
                }
            })
            .catch(error => {
                console.log('error');
            });
         }
     }

}