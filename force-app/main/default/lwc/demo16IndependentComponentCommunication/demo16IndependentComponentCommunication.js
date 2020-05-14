import { LightningElement,wire } from 'lwc';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Demo16IndependentComponentCommunication extends LightningElement {
    selectedcontactdetails  = {};

    @wire(CurrentPageReference)pageRef;

    contactSelectHandler(data){
        this.selectedcontactdetails = data;
    }

    connectedCallback(){
        registerListener('pubsubselected',this.contactSelectHandler,this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
}