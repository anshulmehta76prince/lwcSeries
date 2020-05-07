import { LightningElement,api } from 'lwc';

export default class Demo9GetterSetterProperties extends LightningElement {
    firstName = '';
    lastName = '';
    fullName = '';

    handleNameChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
        this.fullName = this.firstName + ' '+this.lastName;
    }

    @api
    get uppercasename(){
        return this.fullName.toUpperCase();
    }

    set uppercasename(value){
        this.fullName = value;
    }
}