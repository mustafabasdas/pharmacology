gdjs.TeplizumabCode = {};
gdjs.TeplizumabCode.GDteplizumabflakonObjects1= [];
gdjs.TeplizumabCode.GDteplizumabflakonObjects2= [];
gdjs.TeplizumabCode.GDNAObjects1= [];
gdjs.TeplizumabCode.GDNAObjects2= [];
gdjs.TeplizumabCode.GDteplizumabObjects1= [];
gdjs.TeplizumabCode.GDteplizumabObjects2= [];
gdjs.TeplizumabCode.GDbackObjects1= [];
gdjs.TeplizumabCode.GDbackObjects2= [];


gdjs.TeplizumabCode.mapOfGDgdjs_46TeplizumabCode_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.TeplizumabCode.GDbackObjects1});
gdjs.TeplizumabCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.TeplizumabCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TeplizumabCode.mapOfGDgdjs_46TeplizumabCode_46GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.TeplizumabCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TeplizumabCode.GDteplizumabflakonObjects1.length = 0;
gdjs.TeplizumabCode.GDteplizumabflakonObjects2.length = 0;
gdjs.TeplizumabCode.GDNAObjects1.length = 0;
gdjs.TeplizumabCode.GDNAObjects2.length = 0;
gdjs.TeplizumabCode.GDteplizumabObjects1.length = 0;
gdjs.TeplizumabCode.GDteplizumabObjects2.length = 0;
gdjs.TeplizumabCode.GDbackObjects1.length = 0;
gdjs.TeplizumabCode.GDbackObjects2.length = 0;

gdjs.TeplizumabCode.eventsList0(runtimeScene);

return;

}

gdjs['TeplizumabCode'] = gdjs.TeplizumabCode;
