gdjs.kayitolCode = {};
gdjs.kayitolCode.GDemailkayitolObjects1= [];
gdjs.kayitolCode.GDemailkayitolObjects2= [];
gdjs.kayitolCode.GDpasswordkayitolObjects1= [];
gdjs.kayitolCode.GDpasswordkayitolObjects2= [];
gdjs.kayitolCode.GDlogoObjects1= [];
gdjs.kayitolCode.GDlogoObjects2= [];
gdjs.kayitolCode.GDbuttonObjects1= [];
gdjs.kayitolCode.GDbuttonObjects2= [];
gdjs.kayitolCode.GDgirisyapObjects1= [];
gdjs.kayitolCode.GDgirisyapObjects2= [];
gdjs.kayitolCode.GDyaziObjects1= [];
gdjs.kayitolCode.GDyaziObjects2= [];
gdjs.kayitolCode.GDboxgirisObjects1= [];
gdjs.kayitolCode.GDboxgirisObjects2= [];
gdjs.kayitolCode.GDkayitemailObjects1= [];
gdjs.kayitolCode.GDkayitemailObjects2= [];
gdjs.kayitolCode.GDkayitsifreObjects1= [];
gdjs.kayitolCode.GDkayitsifreObjects2= [];
gdjs.kayitolCode.GDsiyahemailObjects1= [];
gdjs.kayitolCode.GDsiyahemailObjects2= [];
gdjs.kayitolCode.GDsiyahpasswordObjects1= [];
gdjs.kayitolCode.GDsiyahpasswordObjects2= [];
gdjs.kayitolCode.GDbackObjects1= [];
gdjs.kayitolCode.GDbackObjects2= [];


gdjs.kayitolCode.mapOfGDgdjs_46kayitolCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.kayitolCode.GDbuttonObjects1});
gdjs.kayitolCode.mapOfGDgdjs_46kayitolCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.kayitolCode.GDbackObjects1});
gdjs.kayitolCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.kayitolCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.kayitolCode.mapOfGDgdjs_46kayitolCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18306572);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("emailkayitol"), gdjs.kayitolCode.GDemailkayitolObjects1);
gdjs.copyArray(runtimeScene.getObjects("passwordkayitol"), gdjs.kayitolCode.GDpasswordkayitolObjects1);
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.kayitolCode.GDemailkayitolObjects1.length === 0 ) ? "" :gdjs.kayitolCode.GDemailkayitolObjects1[0].getString()), (( gdjs.kayitolCode.GDpasswordkayitolObjects1.length === 0 ) ? "" :gdjs.kayitolCode.GDpasswordkayitolObjects1[0].getString()), gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.kayitolCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.kayitolCode.mapOfGDgdjs_46kayitolCode_46GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "girisyap", false);
}}

}


};

gdjs.kayitolCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.kayitolCode.GDemailkayitolObjects1.length = 0;
gdjs.kayitolCode.GDemailkayitolObjects2.length = 0;
gdjs.kayitolCode.GDpasswordkayitolObjects1.length = 0;
gdjs.kayitolCode.GDpasswordkayitolObjects2.length = 0;
gdjs.kayitolCode.GDlogoObjects1.length = 0;
gdjs.kayitolCode.GDlogoObjects2.length = 0;
gdjs.kayitolCode.GDbuttonObjects1.length = 0;
gdjs.kayitolCode.GDbuttonObjects2.length = 0;
gdjs.kayitolCode.GDgirisyapObjects1.length = 0;
gdjs.kayitolCode.GDgirisyapObjects2.length = 0;
gdjs.kayitolCode.GDyaziObjects1.length = 0;
gdjs.kayitolCode.GDyaziObjects2.length = 0;
gdjs.kayitolCode.GDboxgirisObjects1.length = 0;
gdjs.kayitolCode.GDboxgirisObjects2.length = 0;
gdjs.kayitolCode.GDkayitemailObjects1.length = 0;
gdjs.kayitolCode.GDkayitemailObjects2.length = 0;
gdjs.kayitolCode.GDkayitsifreObjects1.length = 0;
gdjs.kayitolCode.GDkayitsifreObjects2.length = 0;
gdjs.kayitolCode.GDsiyahemailObjects1.length = 0;
gdjs.kayitolCode.GDsiyahemailObjects2.length = 0;
gdjs.kayitolCode.GDsiyahpasswordObjects1.length = 0;
gdjs.kayitolCode.GDsiyahpasswordObjects2.length = 0;
gdjs.kayitolCode.GDbackObjects1.length = 0;
gdjs.kayitolCode.GDbackObjects2.length = 0;

gdjs.kayitolCode.eventsList0(runtimeScene);

return;

}

gdjs['kayitolCode'] = gdjs.kayitolCode;
