({
    handleEvent : function(component, event, helper) {
        console.log('Demo 30');
        var aurapubsub = component.find('aurapubsubmodule');

        var callbackMethod = $A.getCallback(function(payload){
            component.set('v.selectedContact',payload.Name);
        });
        aurapubsub.registerListener('pubsubselected',callbackMethod);

    }
})
