import { LightningElement } from 'lwc';

export default class Demo4ConditionalRender extends LightningElement {
    areDetailsVisible = false;

    handleChange(event) {
        this.areDetailsVisible = event.target.checked;
    }
}