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
        fullName = this.firstName + ' '+this.lastName;
    }

    @api
    getuppercasename(){
        return this.fullName.toUpperCase();
    }

    setuppercasename(value){
        this.fullName = value;
    }
}