import { LightningElement,track } from 'lwc';

export default class Demo6PrivateProperty extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];

    updateContact(){
        this.contacts[0].Name = 'Sahil Batra';

    }
}