import { LightningElement,api } from 'lwc';

export default class Demo13ContactDetails extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('Clicked');
        const selectedEvent = new CustomEvent('selected', { detail: this.contactdetails.Id });
        this.dispatchEvent(selectedEvent);
    }
}