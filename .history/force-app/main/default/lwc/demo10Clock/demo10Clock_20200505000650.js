import { LightningElement,api } from 'lwc';

export default class Demo10Clock extends LightningElement {
    timestamp = new Date();

    @api
    refresh() {
        this.timestamp = new Date();
    }
}