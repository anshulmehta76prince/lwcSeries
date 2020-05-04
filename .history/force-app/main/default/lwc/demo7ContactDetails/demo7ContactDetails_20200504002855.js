import { LightningElement,api } from 'lwc';

export default class Demo7ContactDetails extends LightningElement {
    @api contactdetails;
    updateContactName() {
        this.contactdetails.name = 'Sahil Batra';
        console.log(this.contactdetails.name);
    }
}