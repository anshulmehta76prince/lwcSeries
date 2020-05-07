import { LightningElement,api } from 'lwc';

export default class Demo7ContactDetails extends LightningElement {
    @api contactdetails;
  /*  updateContactName() {
        this.contactdetails.name = 'Sahil Sahil';
        console.log(this.contactdetails.name);
    }

    updateContact(){
        this.contactdetails = {Id :'22',Name:'Sahil Batra',Title : 'Director'};
    } */
}