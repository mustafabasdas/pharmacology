gdjs.subscriptionCode = {};
gdjs.subscriptionCode.GDsubscriptionObjects1= [];
gdjs.subscriptionCode.GDsubscriptionObjects2= [];
gdjs.subscriptionCode.GDlogoObjects1= [];
gdjs.subscriptionCode.GDlogoObjects2= [];
gdjs.subscriptionCode.GDrectengleObjects1= [];
gdjs.subscriptionCode.GDrectengleObjects2= [];
gdjs.subscriptionCode.GDbackiconObjects1= [];
gdjs.subscriptionCode.GDbackiconObjects2= [];
gdjs.subscriptionCode.GDTRObjects1= [];
gdjs.subscriptionCode.GDTRObjects2= [];
gdjs.subscriptionCode.GDENObjects1= [];
gdjs.subscriptionCode.GDENObjects2= [];
gdjs.subscriptionCode.GDBGCObjects1= [];
gdjs.subscriptionCode.GDBGCObjects2= [];


gdjs.subscriptionCode.mapOfGDgdjs_46subscriptionCode_46GDrectengleObjects1Objects = Hashtable.newFrom({"rectengle": gdjs.subscriptionCode.GDrectengleObjects1});
gdjs.subscriptionCode.mapOfGDgdjs_46subscriptionCode_46GDbackiconObjects1Objects = Hashtable.newFrom({"backicon": gdjs.subscriptionCode.GDbackiconObjects1});
gdjs.subscriptionCode.mapOfGDgdjs_46subscriptionCode_46GDBGCObjects1Objects = Hashtable.newFrom({"BGC": gdjs.subscriptionCode.GDBGCObjects1});
gdjs.subscriptionCode.mapOfGDgdjs_46subscriptionCode_46GDTRObjects1Objects = Hashtable.newFrom({"TR": gdjs.subscriptionCode.GDTRObjects1});
gdjs.subscriptionCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("rectengle"), gdjs.subscriptionCode.GDrectengleObjects1);
{for(var i = 0, len = gdjs.subscriptionCode.GDrectengleObjects1.length ;i < len;++i) {
    gdjs.subscriptionCode.GDrectengleObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rectengle"), gdjs.subscriptionCode.GDrectengleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionCode.mapOfGDgdjs_46subscriptionCode_46GDrectengleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.subscriptionCode.GDrectengleObjects1 */
{for(var i = 0, len = gdjs.subscriptionCode.GDrectengleObjects1.length ;i < len;++i) {
    gdjs.subscriptionCode.GDrectengleObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backicon"), gdjs.subscriptionCode.GDbackiconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionCode.mapOfGDgdjs_46subscriptionCode_46GDbackiconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Konular-2", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BGC"), gdjs.subscriptionCode.GDBGCObjects1);
{for(var i = 0, len = gdjs.subscriptionCode.GDBGCObjects1.length ;i < len;++i) {
    gdjs.subscriptionCode.GDBGCObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BGC"), gdjs.subscriptionCode.GDBGCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionCode.mapOfGDgdjs_46subscriptionCode_46GDBGCObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.subscriptionCode.GDBGCObjects1 */
{for(var i = 0, len = gdjs.subscriptionCode.GDBGCObjects1.length ;i < len;++i) {
    gdjs.subscriptionCode.GDBGCObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TR"), gdjs.subscriptionCode.GDTRObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionCode.mapOfGDgdjs_46subscriptionCode_46GDTRObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "subscriptionTR", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.subscriptionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.subscriptionCode.GDsubscriptionObjects1.length = 0;
gdjs.subscriptionCode.GDsubscriptionObjects2.length = 0;
gdjs.subscriptionCode.GDlogoObjects1.length = 0;
gdjs.subscriptionCode.GDlogoObjects2.length = 0;
gdjs.subscriptionCode.GDrectengleObjects1.length = 0;
gdjs.subscriptionCode.GDrectengleObjects2.length = 0;
gdjs.subscriptionCode.GDbackiconObjects1.length = 0;
gdjs.subscriptionCode.GDbackiconObjects2.length = 0;
gdjs.subscriptionCode.GDTRObjects1.length = 0;
gdjs.subscriptionCode.GDTRObjects2.length = 0;
gdjs.subscriptionCode.GDENObjects1.length = 0;
gdjs.subscriptionCode.GDENObjects2.length = 0;
gdjs.subscriptionCode.GDBGCObjects1.length = 0;
gdjs.subscriptionCode.GDBGCObjects2.length = 0;

gdjs.subscriptionCode.eventsList0(runtimeScene);

return;

}

gdjs['subscriptionCode'] = gdjs.subscriptionCode;
