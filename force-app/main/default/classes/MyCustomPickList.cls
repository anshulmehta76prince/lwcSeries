global class MyCustomPickList extends VisualEditor.DynamicPickList{
    
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('Red', 'Red');
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {
        VisualEditor.DataRow value1 = new VisualEditor.DataRow('Red', 'Red');
        VisualEditor.DataRow value2 = new VisualEditor.DataRow('Yellow', 'Yellow');
        VisualEditor.DataRow value3 = new VisualEditor.DataRow('Blue', 'Blue');
        VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();
        myValues.addRow(value1);
        myValues.addRow(value2);
        myValues.addRow(value3);
        return myValues;
    }
}