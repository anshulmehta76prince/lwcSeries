import { LightningElement,api } from 'lwc';

export default class Demo15ContactDetails extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('Clicked');
        const selectedEvent = new CustomEvent('selected', {bubbles : true});
        this.dispatchEvent(selectedEvent);
    }
}