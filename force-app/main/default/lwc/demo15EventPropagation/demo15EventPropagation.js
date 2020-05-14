import { LightningElement } from 'lwc';

export default class Demo15EventPropagation extends LightningElement {
    selectedContact;
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

    contactSelected(event) {
        // const contactId = event.detail; - used in Demo13
       // const xyz =  event.target.detail;
       // xyz.mymessage; // undefined
        const tempContact = event.target.contactdetails;

        this.selectedContact = this.contacts.find(contact => contact.Id === tempContact.Id);
    }
}