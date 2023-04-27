gdjs.infoCode = {};
gdjs.infoCode.GDmustafaObjects1= [];
gdjs.infoCode.GDmustafaObjects2= [];
gdjs.infoCode.GDsirriObjects1= [];
gdjs.infoCode.GDsirriObjects2= [];
gdjs.infoCode.GDinfotextObjects1= [];
gdjs.infoCode.GDinfotextObjects2= [];
gdjs.infoCode.GDinfotext2Objects1= [];
gdjs.infoCode.GDinfotext2Objects2= [];
gdjs.infoCode.GDNewPanelSpriteObjects1= [];
gdjs.infoCode.GDNewPanelSpriteObjects2= [];
gdjs.infoCode.GDbackicon_95Objects1= [];
gdjs.infoCode.GDbackicon_95Objects2= [];
gdjs.infoCode.GDwebObjects1= [];
gdjs.infoCode.GDwebObjects2= [];
gdjs.infoCode.GDinstaObjects1= [];
gdjs.infoCode.GDinstaObjects2= [];
gdjs.infoCode.GDmaillogoObjects1= [];
gdjs.infoCode.GDmaillogoObjects2= [];
gdjs.infoCode.GDanketlogoObjects1= [];
gdjs.infoCode.GDanketlogoObjects2= [];


gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDbackicon_9595Objects1Objects = Hashtable.newFrom({"backicon_": gdjs.infoCode.GDbackicon_95Objects1});
gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDwebObjects1Objects = Hashtable.newFrom({"web": gdjs.infoCode.GDwebObjects1});
gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDinstaObjects1Objects = Hashtable.newFrom({"insta": gdjs.infoCode.GDinstaObjects1});
gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDmaillogoObjects1Objects = Hashtable.newFrom({"maillogo": gdjs.infoCode.GDmaillogoObjects1});
gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDanketlogoObjects1Objects = Hashtable.newFrom({"anketlogo": gdjs.infoCode.GDanketlogoObjects1});
gdjs.infoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("backicon_"), gdjs.infoCode.GDbackicon_95Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDbackicon_9595Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17120236);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Giris-1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("web"), gdjs.infoCode.GDwebObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDwebObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17121156);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.kinetekor.com/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("insta"), gdjs.infoCode.GDinstaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDinstaObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17121740);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/kinetekorillustrasyon/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("maillogo"), gdjs.infoCode.GDmaillogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDmaillogoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17123124);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("dr.mustafa.k12@gmail.com", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("anketlogo"), gdjs.infoCode.GDanketlogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.infoCode.mapOfGDgdjs_46infoCode_46GDanketlogoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17123708);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://docs.google.com/forms/d/e/1FAIpQLSfRBgdGj4DFQEmMlC2hQTN1NghbSEU-pDZCnNwuKg2pBy0bhA/viewform?usp=sf_link", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.infoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.infoCode.GDmustafaObjects1.length = 0;
gdjs.infoCode.GDmustafaObjects2.length = 0;
gdjs.infoCode.GDsirriObjects1.length = 0;
gdjs.infoCode.GDsirriObjects2.length = 0;
gdjs.infoCode.GDinfotextObjects1.length = 0;
gdjs.infoCode.GDinfotextObjects2.length = 0;
gdjs.infoCode.GDinfotext2Objects1.length = 0;
gdjs.infoCode.GDinfotext2Objects2.length = 0;
gdjs.infoCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.infoCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.infoCode.GDbackicon_95Objects1.length = 0;
gdjs.infoCode.GDbackicon_95Objects2.length = 0;
gdjs.infoCode.GDwebObjects1.length = 0;
gdjs.infoCode.GDwebObjects2.length = 0;
gdjs.infoCode.GDinstaObjects1.length = 0;
gdjs.infoCode.GDinstaObjects2.length = 0;
gdjs.infoCode.GDmaillogoObjects1.length = 0;
gdjs.infoCode.GDmaillogoObjects2.length = 0;
gdjs.infoCode.GDanketlogoObjects1.length = 0;
gdjs.infoCode.GDanketlogoObjects2.length = 0;

gdjs.infoCode.eventsList0(runtimeScene);

return;

}

gdjs['infoCode'] = gdjs.infoCode;
