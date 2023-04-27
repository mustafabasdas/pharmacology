gdjs.Giris_451Code = {};
gdjs.Giris_451Code.GDNewPanelSpriteObjects1= [];
gdjs.Giris_451Code.GDNewPanelSpriteObjects2= [];
gdjs.Giris_451Code.GDNewPanelSprite2Objects1= [];
gdjs.Giris_451Code.GDNewPanelSprite2Objects2= [];
gdjs.Giris_451Code.GDCopyrightObjects1= [];
gdjs.Giris_451Code.GDCopyrightObjects2= [];
gdjs.Giris_451Code.GDbasla_95buttonObjects1= [];
gdjs.Giris_451Code.GDbasla_95buttonObjects2= [];
gdjs.Giris_451Code.GDNewPanelSprite5Objects1= [];
gdjs.Giris_451Code.GDNewPanelSprite5Objects2= [];
gdjs.Giris_451Code.GDlogoObjects1= [];
gdjs.Giris_451Code.GDlogoObjects2= [];
gdjs.Giris_451Code.GDATLASTEXTObjects1= [];
gdjs.Giris_451Code.GDATLASTEXTObjects2= [];
gdjs.Giris_451Code.GDoutObjects1= [];
gdjs.Giris_451Code.GDoutObjects2= [];


gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDbasla_9595buttonObjects1Objects = Hashtable.newFrom({"basla_button": gdjs.Giris_451Code.GDbasla_95buttonObjects1});
gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDNewPanelSprite5Objects1Objects = Hashtable.newFrom({"NewPanelSprite5": gdjs.Giris_451Code.GDNewPanelSprite5Objects1});
gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDNewPanelSprite2Objects1Objects = Hashtable.newFrom({"NewPanelSprite2": gdjs.Giris_451Code.GDNewPanelSprite2Objects1});
gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDoutObjects1Objects = Hashtable.newFrom({"out": gdjs.Giris_451Code.GDoutObjects1});
gdjs.Giris_451Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("basla_button"), gdjs.Giris_451Code.GDbasla_95buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDbasla_9595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "girisyap", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite5"), gdjs.Giris_451Code.GDNewPanelSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDNewPanelSprite5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "info", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite2"), gdjs.Giris_451Code.GDNewPanelSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDNewPanelSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("out"), gdjs.Giris_451Code.GDoutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Giris_451Code.mapOfGDgdjs_46Giris_95451Code_46GDoutObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{firebase.auth().signOut();
}}

}


};

gdjs.Giris_451Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Giris_451Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Giris_451Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Giris_451Code.GDNewPanelSprite2Objects1.length = 0;
gdjs.Giris_451Code.GDNewPanelSprite2Objects2.length = 0;
gdjs.Giris_451Code.GDCopyrightObjects1.length = 0;
gdjs.Giris_451Code.GDCopyrightObjects2.length = 0;
gdjs.Giris_451Code.GDbasla_95buttonObjects1.length = 0;
gdjs.Giris_451Code.GDbasla_95buttonObjects2.length = 0;
gdjs.Giris_451Code.GDNewPanelSprite5Objects1.length = 0;
gdjs.Giris_451Code.GDNewPanelSprite5Objects2.length = 0;
gdjs.Giris_451Code.GDlogoObjects1.length = 0;
gdjs.Giris_451Code.GDlogoObjects2.length = 0;
gdjs.Giris_451Code.GDATLASTEXTObjects1.length = 0;
gdjs.Giris_451Code.GDATLASTEXTObjects2.length = 0;
gdjs.Giris_451Code.GDoutObjects1.length = 0;
gdjs.Giris_451Code.GDoutObjects2.length = 0;

gdjs.Giris_451Code.eventsList0(runtimeScene);

return;

}

gdjs['Giris_451Code'] = gdjs.Giris_451Code;
