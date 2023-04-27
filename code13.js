gdjs.subscriptionTRCode = {};
gdjs.subscriptionTRCode.GDsubscriptiontrObjects1= [];
gdjs.subscriptionTRCode.GDsubscriptiontrObjects2= [];
gdjs.subscriptionTRCode.GDlogoObjects1= [];
gdjs.subscriptionTRCode.GDlogoObjects2= [];
gdjs.subscriptionTRCode.GDrectengleObjects1= [];
gdjs.subscriptionTRCode.GDrectengleObjects2= [];
gdjs.subscriptionTRCode.GDbackiconObjects1= [];
gdjs.subscriptionTRCode.GDbackiconObjects2= [];
gdjs.subscriptionTRCode.GDTRObjects1= [];
gdjs.subscriptionTRCode.GDTRObjects2= [];
gdjs.subscriptionTRCode.GDENObjects1= [];
gdjs.subscriptionTRCode.GDENObjects2= [];
gdjs.subscriptionTRCode.GDBGCObjects1= [];
gdjs.subscriptionTRCode.GDBGCObjects2= [];
gdjs.subscriptionTRCode.GDdezavantajObjects1= [];
gdjs.subscriptionTRCode.GDdezavantajObjects2= [];


gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDrectengleObjects1Objects = Hashtable.newFrom({"rectengle": gdjs.subscriptionTRCode.GDrectengleObjects1});
gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDbackiconObjects1Objects = Hashtable.newFrom({"backicon": gdjs.subscriptionTRCode.GDbackiconObjects1});
gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDBGCObjects1Objects = Hashtable.newFrom({"BGC": gdjs.subscriptionTRCode.GDBGCObjects1});
gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDENObjects1Objects = Hashtable.newFrom({"EN": gdjs.subscriptionTRCode.GDENObjects1});
gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDdezavantajObjects1Objects = Hashtable.newFrom({"dezavantaj": gdjs.subscriptionTRCode.GDdezavantajObjects1});
gdjs.subscriptionTRCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("rectengle"), gdjs.subscriptionTRCode.GDrectengleObjects1);
{for(var i = 0, len = gdjs.subscriptionTRCode.GDrectengleObjects1.length ;i < len;++i) {
    gdjs.subscriptionTRCode.GDrectengleObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rectengle"), gdjs.subscriptionTRCode.GDrectengleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDrectengleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.subscriptionTRCode.GDrectengleObjects1 */
{for(var i = 0, len = gdjs.subscriptionTRCode.GDrectengleObjects1.length ;i < len;++i) {
    gdjs.subscriptionTRCode.GDrectengleObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backicon"), gdjs.subscriptionTRCode.GDbackiconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDbackiconObjects1Objects, runtimeScene, true, false);
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
gdjs.copyArray(runtimeScene.getObjects("BGC"), gdjs.subscriptionTRCode.GDBGCObjects1);
{for(var i = 0, len = gdjs.subscriptionTRCode.GDBGCObjects1.length ;i < len;++i) {
    gdjs.subscriptionTRCode.GDBGCObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BGC"), gdjs.subscriptionTRCode.GDBGCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDBGCObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.subscriptionTRCode.GDBGCObjects1 */
{for(var i = 0, len = gdjs.subscriptionTRCode.GDBGCObjects1.length ;i < len;++i) {
    gdjs.subscriptionTRCode.GDBGCObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EN"), gdjs.subscriptionTRCode.GDENObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDENObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "subscription", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dezavantaj"), gdjs.subscriptionTRCode.GDdezavantajObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.subscriptionTRCode.mapOfGDgdjs_46subscriptionTRCode_46GDdezavantajObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "dezavantaj", false);
}}

}


};

gdjs.subscriptionTRCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.subscriptionTRCode.GDsubscriptiontrObjects1.length = 0;
gdjs.subscriptionTRCode.GDsubscriptiontrObjects2.length = 0;
gdjs.subscriptionTRCode.GDlogoObjects1.length = 0;
gdjs.subscriptionTRCode.GDlogoObjects2.length = 0;
gdjs.subscriptionTRCode.GDrectengleObjects1.length = 0;
gdjs.subscriptionTRCode.GDrectengleObjects2.length = 0;
gdjs.subscriptionTRCode.GDbackiconObjects1.length = 0;
gdjs.subscriptionTRCode.GDbackiconObjects2.length = 0;
gdjs.subscriptionTRCode.GDTRObjects1.length = 0;
gdjs.subscriptionTRCode.GDTRObjects2.length = 0;
gdjs.subscriptionTRCode.GDENObjects1.length = 0;
gdjs.subscriptionTRCode.GDENObjects2.length = 0;
gdjs.subscriptionTRCode.GDBGCObjects1.length = 0;
gdjs.subscriptionTRCode.GDBGCObjects2.length = 0;
gdjs.subscriptionTRCode.GDdezavantajObjects1.length = 0;
gdjs.subscriptionTRCode.GDdezavantajObjects2.length = 0;

gdjs.subscriptionTRCode.eventsList0(runtimeScene);

return;

}

gdjs['subscriptionTRCode'] = gdjs.subscriptionTRCode;
