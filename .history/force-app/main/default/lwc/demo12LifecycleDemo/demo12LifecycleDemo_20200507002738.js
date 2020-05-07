import { LightningElement } from 'lwc';

export default class Demo12LifecycleDemo extends LightningElement {
    message = 'original message';
    constructor(){
        super();
        console.log('Constructor Called');
    }

    connectedCallback(){
        console.log('Connectedcallback Called');
    }

    renderedCallback(){
        console.log('renderedcallback Called');
    }

    disconnectedCallback(){
        console.log('dsiconnectedcallback Called');
    }

    updatemessage(){
        this.message = 'New Message';
    }
}