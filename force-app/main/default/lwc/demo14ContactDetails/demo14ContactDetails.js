import { LightningElement,api } from 'lwc';

export default class Demo14ContactDetails extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('Clicked');
        const selectedEvent = new CustomEvent('selected', { detail: this.contactdetails.Id , bubbles : true});
        this.dispatchEvent(selectedEvent);
    }
}