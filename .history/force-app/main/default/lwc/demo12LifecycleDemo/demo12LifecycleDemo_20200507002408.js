import { LightningElement } from 'lwc';

export default class Demo12LifecycleDemo extends LightningElement {
    message = 'original message';
    constructor(){
        super();
        Console.log('Constructor Called');
    }

    connectedCallback(){
        Console.log('Connectedcallback Called');
    }

    renderedCallback(){
        Console.log('renderedcallback Called');
    }

    disconnectedCallback(){
        Console.log('dsiconnectedcallback Called');
    }

    updatemessage(){
        this.message = 'New Message';
    }
}