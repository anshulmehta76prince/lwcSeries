import { LightningElement,api,wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Demo16ContactDetails extends LightningElement {
    @api contactdetails = {Id: "1", Name: "Sahil" , Title: "Director"};

    @wire(CurrentPageReference)pageRef;

    selectHandler(event){
    
        fireEvent(this.pageRef,'pubsubselected',this.contactdetails);
    }
}