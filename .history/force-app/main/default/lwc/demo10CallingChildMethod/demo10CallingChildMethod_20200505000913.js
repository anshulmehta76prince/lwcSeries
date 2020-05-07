import { LightningElement } from 'lwc';

export default class Demo10CallingChildMethod extends LightningElement {
    handleRefresh() {
        this.template.querySelector('c-demo10-clock').refresh();
    }
}