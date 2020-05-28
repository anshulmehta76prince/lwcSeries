import { LightningElement,api } from 'lwc';

export default class Demo13ContactDetails extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('Clicked');
        const message = this.contactdetails.Id;
    //  const selectedEvent = new CustomEvent('selected', { detail: this.contactdetails.Id});
        const selectedEvent = new CustomEvent('selected', { detail: { contactId: this.contactdetails.Id}});
        console.log('Clicked'+JSON.stringify(selectedEvent));
        this.dispatchEvent(selectedEvent);
    }
}