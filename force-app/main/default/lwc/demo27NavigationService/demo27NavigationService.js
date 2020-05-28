import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class Demo27NavigationService extends NavigationMixin(LightningElement) {

    navigatetohomepage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            },
        });
    }

    navigateToAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015w00002ADVxNAAX',
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }

    navigateToEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015w00002ADVxNAAX',
                objectApiName: 'Account',
                actionName: 'edit'
            }
        });
    }

    navigateToContactTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'LWC_Demo'
            }
        });
    }

    navigateToNewAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }

    navigateToNewContactWithDefaults() {
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Sahil',
            LastName: 'Batra',
        });

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }


    navigateToWebPage() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'http://salesforce.com'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }
}