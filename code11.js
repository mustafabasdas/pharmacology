gdjs.girisyapCode = {};
gdjs.girisyapCode.GDemailObjects1= [];
gdjs.girisyapCode.GDemailObjects2= [];
gdjs.girisyapCode.GDpasswordObjects1= [];
gdjs.girisyapCode.GDpasswordObjects2= [];
gdjs.girisyapCode.GDlogoObjects1= [];
gdjs.girisyapCode.GDlogoObjects2= [];
gdjs.girisyapCode.GDgirisObjects1= [];
gdjs.girisyapCode.GDgirisObjects2= [];
gdjs.girisyapCode.GDboxgirisObjects1= [];
gdjs.girisyapCode.GDboxgirisObjects2= [];
gdjs.girisyapCode.GDkayitemailObjects1= [];
gdjs.girisyapCode.GDkayitemailObjects2= [];
gdjs.girisyapCode.GDkayitsifreObjects1= [];
gdjs.girisyapCode.GDkayitsifreObjects2= [];
gdjs.girisyapCode.GDhenuzObjects1= [];
gdjs.girisyapCode.GDhenuzObjects2= [];


gdjs.girisyapCode.mapOfGDgdjs_46girisyapCode_46GDhenuzObjects1Objects = Hashtable.newFrom({"henuz": gdjs.girisyapCode.GDhenuzObjects1});
gdjs.girisyapCode.mapOfGDgdjs_46girisyapCode_46GDgirisObjects1Objects = Hashtable.newFrom({"giris": gdjs.girisyapCode.GDgirisObjects1});
gdjs.girisyapCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("henuz"), gdjs.girisyapCode.GDhenuzObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.girisyapCode.mapOfGDgdjs_46girisyapCode_46GDhenuzObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "kayitol", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("giris"), gdjs.girisyapCode.GDgirisObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.girisyapCode.mapOfGDgdjs_46girisyapCode_46GDgirisObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18318748);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("email"), gdjs.girisyapCode.GDemailObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.girisyapCode.GDpasswordObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.girisyapCode.GDemailObjects1.length === 0 ) ? "" :gdjs.girisyapCode.GDemailObjects1[0].getString()), (( gdjs.girisyapCode.GDpasswordObjects1.length === 0 ) ? "" :gdjs.girisyapCode.GDpasswordObjects1[0].getString()), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthentified();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Konular-2", false);
}}

}


};

gdjs.girisyapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.girisyapCode.GDemailObjects1.length = 0;
gdjs.girisyapCode.GDemailObjects2.length = 0;
gdjs.girisyapCode.GDpasswordObjects1.length = 0;
gdjs.girisyapCode.GDpasswordObjects2.length = 0;
gdjs.girisyapCode.GDlogoObjects1.length = 0;
gdjs.girisyapCode.GDlogoObjects2.length = 0;
gdjs.girisyapCode.GDgirisObjects1.length = 0;
gdjs.girisyapCode.GDgirisObjects2.length = 0;
gdjs.girisyapCode.GDboxgirisObjects1.length = 0;
gdjs.girisyapCode.GDboxgirisObjects2.length = 0;
gdjs.girisyapCode.GDkayitemailObjects1.length = 0;
gdjs.girisyapCode.GDkayitemailObjects2.length = 0;
gdjs.girisyapCode.GDkayitsifreObjects1.length = 0;
gdjs.girisyapCode.GDkayitsifreObjects2.length = 0;
gdjs.girisyapCode.GDhenuzObjects1.length = 0;
gdjs.girisyapCode.GDhenuzObjects2.length = 0;

gdjs.girisyapCode.eventsList0(runtimeScene);

return;

}

gdjs['girisyapCode'] = gdjs.girisyapCode;
