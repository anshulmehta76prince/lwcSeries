({
    doInit : function(component, event, helper) {
        var  contactList = [
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
 
         component.set('v.contacts',contactList);
     },
 
     contactSelectedHandler : function(component, event, helper) {
         console.log('sbsbs>>>>'+event.getParam('contactId'));
         component.set('v.selectedContact',event.getParam('contactId'));
     }
})
