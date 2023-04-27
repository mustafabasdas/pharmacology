gdjs.dezavantajCode = {};
gdjs.dezavantajCode.GDdezaObjects1= [];
gdjs.dezavantajCode.GDdezaObjects2= [];
gdjs.dezavantajCode.GDboxanketObjects1= [];
gdjs.dezavantajCode.GDboxanketObjects2= [];
gdjs.dezavantajCode.GDyardimObjects1= [];
gdjs.dezavantajCode.GDyardimObjects2= [];
gdjs.dezavantajCode.GDlogoObjects1= [];
gdjs.dezavantajCode.GDlogoObjects2= [];


gdjs.dezavantajCode.mapOfGDgdjs_46dezavantajCode_46GDboxanketObjects1Objects = Hashtable.newFrom({"boxanket": gdjs.dezavantajCode.GDboxanketObjects1});
gdjs.dezavantajCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("boxanket"), gdjs.dezavantajCode.GDboxanketObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.dezavantajCode.mapOfGDgdjs_46dezavantajCode_46GDboxanketObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18354004);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.kinetekor.com/hukum-ve-kosullar", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.dezavantajCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dezavantajCode.GDdezaObjects1.length = 0;
gdjs.dezavantajCode.GDdezaObjects2.length = 0;
gdjs.dezavantajCode.GDboxanketObjects1.length = 0;
gdjs.dezavantajCode.GDboxanketObjects2.length = 0;
gdjs.dezavantajCode.GDyardimObjects1.length = 0;
gdjs.dezavantajCode.GDyardimObjects2.length = 0;
gdjs.dezavantajCode.GDlogoObjects1.length = 0;
gdjs.dezavantajCode.GDlogoObjects2.length = 0;

gdjs.dezavantajCode.eventsList0(runtimeScene);

return;

}

gdjs['dezavantajCode'] = gdjs.dezavantajCode;
