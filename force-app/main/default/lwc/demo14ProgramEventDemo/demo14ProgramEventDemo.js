import { LightningElement } from 'lwc';

export default class Demo14ProgramEventDemo extends LightningElement {
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
        const contactId = event.detail;
        this.selectedContact = this.contacts.find(contact => contact.Id === contactId);
    } 

    constructor(){
        super();
       // this.template.addEventListener('selected',this.contactSelected.bind(this));
       this.template.addEventListener('selected', evt => {
            const contactId = evt.detail;
            this.selectedContact = this.contacts.find(contact => contact.Id === contactId);
      });
    }

}