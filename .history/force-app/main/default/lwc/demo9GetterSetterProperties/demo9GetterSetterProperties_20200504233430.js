import { LightningElement,api } from 'lwc';

export default class Demo9GetterSetterProperties extends LightningElement {
    firstName = '';
    lastName = '';

    handleNameChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }

    @api
    getuppercasename(){

    }

    setuppercasename(value){

    }
}