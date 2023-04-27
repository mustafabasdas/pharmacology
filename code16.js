gdjs.searchCode = {};
gdjs.searchCode.GDsearchbarObjects1= [];
gdjs.searchCode.GDsearchbarObjects2= [];
gdjs.searchCode.GDNewTextInputObjects1= [];
gdjs.searchCode.GDNewTextInputObjects2= [];
gdjs.searchCode.GDalanObjects1= [];
gdjs.searchCode.GDalanObjects2= [];
gdjs.searchCode.GDaciklamaObjects1= [];
gdjs.searchCode.GDaciklamaObjects2= [];
gdjs.searchCode.GDantidiyabetiklerObjects1= [];
gdjs.searchCode.GDantidiyabetiklerObjects2= [];
gdjs.searchCode.GDampulObjects1= [];
gdjs.searchCode.GDampulObjects2= [];


gdjs.searchCode.mapOfGDgdjs_46searchCode_46GDantidiyabetiklerObjects1Objects = Hashtable.newFrom({"antidiyabetikler": gdjs.searchCode.GDantidiyabetiklerObjects1});
gdjs.searchCode.mapOfGDgdjs_46searchCode_46GDampulObjects1Objects = Hashtable.newFrom({"ampul": gdjs.searchCode.GDampulObjects1});
gdjs.searchCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.searchCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.searchCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.searchCode.GDNewTextInputObjects1[i].getString() == "Teplizumab" ) {
        isConditionTrue_0 = true;
        gdjs.searchCode.GDNewTextInputObjects1[k] = gdjs.searchCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.searchCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("aciklama"), gdjs.searchCode.GDaciklamaObjects1);
gdjs.copyArray(runtimeScene.getObjects("alan"), gdjs.searchCode.GDalanObjects1);
gdjs.searchCode.GDampulObjects1.length = 0;

gdjs.searchCode.GDantidiyabetiklerObjects1.length = 0;

{for(var i = 0, len = gdjs.searchCode.GDaciklamaObjects1.length ;i < len;++i) {
    gdjs.searchCode.GDaciklamaObjects1[i].setString("Tianeptine shows efficacy against serious\ndepressive episodes (major depression),\ncomparable to amitriptyline, imipramine\nand fluoxetine, but with significantly fewer\nside effects.[15] It was shown to be more\neffective than maprotiline in a group of\npeople with co-existing depression and\nanxiety.[7] Tianeptine also displays sign-\nificant anxiolytic properties and is useful \nspectrum of anxiety disorders including\ndisorder, as evidenced by a study. \nTianeptine shows efficacy against serious\ndepressive episodes (major depression),\ncomparable to amitriptyline, imipramine\nand fluoxetine, but with significantly fewer\nside effects.[15] It was shown to be more\neffective than maprotiline in a group of\npeople with co-existing depression and\nanxiety.[7] Tianeptine also displays sign\nanxiolytic properties and is useful in tre\nspectrum of anxiety disorders including\ndisorder, as evidenced by a study. ");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.searchCode.mapOfGDgdjs_46searchCode_46GDantidiyabetiklerObjects1Objects, (( gdjs.searchCode.GDalanObjects1.length === 0 ) ? 0 :gdjs.searchCode.GDalanObjects1[0].getX()), (( gdjs.searchCode.GDalanObjects1.length === 0 ) ? 0 :gdjs.searchCode.GDalanObjects1[0].getY()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.searchCode.mapOfGDgdjs_46searchCode_46GDampulObjects1Objects, 965, 339, "");
}}

}


};

gdjs.searchCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.searchCode.GDsearchbarObjects1.length = 0;
gdjs.searchCode.GDsearchbarObjects2.length = 0;
gdjs.searchCode.GDNewTextInputObjects1.length = 0;
gdjs.searchCode.GDNewTextInputObjects2.length = 0;
gdjs.searchCode.GDalanObjects1.length = 0;
gdjs.searchCode.GDalanObjects2.length = 0;
gdjs.searchCode.GDaciklamaObjects1.length = 0;
gdjs.searchCode.GDaciklamaObjects2.length = 0;
gdjs.searchCode.GDantidiyabetiklerObjects1.length = 0;
gdjs.searchCode.GDantidiyabetiklerObjects2.length = 0;
gdjs.searchCode.GDampulObjects1.length = 0;
gdjs.searchCode.GDampulObjects2.length = 0;

gdjs.searchCode.eventsList0(runtimeScene);

return;

}

gdjs['searchCode'] = gdjs.searchCode;
