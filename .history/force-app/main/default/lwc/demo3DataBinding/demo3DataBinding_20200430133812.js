import { LightningElement } from 'lwc';

export default class Demo3DataBinding extends LightningElement {
    greeting = 'Welcome to World of LWC';

    handleChange(event) {
        this.greeting = event.target.value;
        console.log(this.greeting);
    }
}