gdjs.antidiyabetiklerkonuanlat_305m_305Code = {};
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDantidepresankonuObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDantidepresankonuObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbaslikObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbaslikObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbackObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbackObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDNewBitmapTextObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDNewBitmapTextObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDantidiyabetiklerasilkonuObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDantidiyabetiklerasilkonuObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpointObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpointObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDmetforminObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDmetforminObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDTeplizumabObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDTeplizumabObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPramlintidObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPramlintidObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPioglitazonObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPioglitazonObjects2= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDlineObjects1= [];
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDlineObjects2= [];


gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDbackObjects1Objects = Hashtable.newFrom({"back": gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbackObjects1});
gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDanlatimantidiyabetObjects1Objects = Hashtable.newFrom({"anlatimantidiyabet": gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1});
gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDanlatimantidiyabetObjects1Objects = Hashtable.newFrom({"anlatimantidiyabet": gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1});
gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDmetforminObjects1Objects = Hashtable.newFrom({"metformin": gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDmetforminObjects1});
gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDTeplizumabObjects1Objects = Hashtable.newFrom({"Teplizumab": gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDTeplizumabObjects1});
gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDPramlintidObjects1Objects = Hashtable.newFrom({"Pramlintid": gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPramlintidObjects1});
gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDPioglitazonObjects1Objects = Hashtable.newFrom({"Pioglitazon": gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPioglitazonObjects1});
gdjs.antidiyabetiklerkonuanlat_305m_305Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (40), "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (40), "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > 3600;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 3600, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 600;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 600, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDbackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("anlatimantidiyabet"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDanlatimantidiyabetObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects1);
{for(var i = 0, len = gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1.length ;i < len;++i) {
    gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1[i].play();
}
}{for(var i = 0, len = gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects1.length ;i < len;++i) {
    gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("anlatimantidiyabet"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDanlatimantidiyabetObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects1);
{for(var i = 0, len = gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1.length ;i < len;++i) {
    gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1[i].pause();
}
}{for(var i = 0, len = gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects1.length ;i < len;++i) {
    gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("metformin"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDmetforminObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDmetforminObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anlatimantidiyabet"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1);
{for(var i = 0, len = gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1.length ;i < len;++i) {
    gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1[i].setCurrentTime(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Teplizumab"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDTeplizumabObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDTeplizumabObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anlatimantidiyabet"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1);
{for(var i = 0, len = gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1.length ;i < len;++i) {
    gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1[i].setCurrentTime(20);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pramlintid"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPramlintidObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDPramlintidObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anlatimantidiyabet"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1);
{for(var i = 0, len = gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1.length ;i < len;++i) {
    gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1[i].setCurrentTime(30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pioglitazon"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPioglitazonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.antidiyabetiklerkonuanlat_305m_305Code.mapOfGDgdjs_46antidiyabetiklerkonuanlat_95305m_95305Code_46GDPioglitazonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("anlatimantidiyabet"), gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1);
{for(var i = 0, len = gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1.length ;i < len;++i) {
    gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1[i].setCurrentTime(36);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.antidiyabetiklerkonuanlat_305m_305Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDantidepresankonuObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDantidepresankonuObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbaslikObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbaslikObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbackObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDbackObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDNewBitmapTextObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDNewBitmapTextObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDantidiyabetiklerasilkonuObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDantidiyabetiklerasilkonuObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDanlatimantidiyabetObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpauseObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpointObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDpointObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDmetforminObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDmetforminObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDTeplizumabObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDTeplizumabObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPramlintidObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPramlintidObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPioglitazonObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDPioglitazonObjects2.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDlineObjects1.length = 0;
gdjs.antidiyabetiklerkonuanlat_305m_305Code.GDlineObjects2.length = 0;

gdjs.antidiyabetiklerkonuanlat_305m_305Code.eventsList0(runtimeScene);

return;

}

gdjs['antidiyabetiklerkonuanlat_305m_305Code'] = gdjs.antidiyabetiklerkonuanlat_305m_305Code;
