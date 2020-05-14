import { LightningElement,api,wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Demo16ContactDetails extends LightningElement {
    @api contactdetails;

    @wire(CurrentPageReference)pageRef;

    selectHandler(event){
    
        fireEvent(this.pageRef,'pubsubselected',this.contactdetails);
    }
}