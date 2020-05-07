import { LightningElement,track } from 'lwc';

export default class Demo3DataBinding extends LightningElement {
    greeting = 'Welcome to World of LWC';

  /*  firstName = '';
    lastName = '';
    fullName = { firstName : '', lastName : ''};
    @track fullNameWithTrack = { firstName : '', lastName : ''}; */
        
    handleChange(event) {
        this.greeting = event.target.value;
        console.log(this.greeting);
    }

/*
    handleNameChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
     //   this.fullName.firstName = this.firstName;
     //   this.fullName.lastName = this.lastName;
        this.fullName = { firstName :this.firstName, lastName :this.lastName};
        
    }
    
    changeName(){
        this.fullNameWithTrack.firstName = 'John';
    } */
}