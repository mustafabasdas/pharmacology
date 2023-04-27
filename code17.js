gdjs.arkadasaonerCode = {};
gdjs.arkadasaonerCode.GDhediyekusObjects1= [];
gdjs.arkadasaonerCode.GDhediyekusObjects2= [];
gdjs.arkadasaonerCode.GDNewTextObjects1= [];
gdjs.arkadasaonerCode.GDNewTextObjects2= [];
gdjs.arkadasaonerCode.GDboxObjects1= [];
gdjs.arkadasaonerCode.GDboxObjects2= [];
gdjs.arkadasaonerCode.GDcodeObjects1= [];
gdjs.arkadasaonerCode.GDcodeObjects2= [];
gdjs.arkadasaonerCode.GDaciklamaObjects1= [];
gdjs.arkadasaonerCode.GDaciklamaObjects2= [];
gdjs.arkadasaonerCode.GDbackonerokObjects1= [];
gdjs.arkadasaonerCode.GDbackonerokObjects2= [];


gdjs.arkadasaonerCode.mapOfGDgdjs_46arkadasaonerCode_46GDbackonerokObjects1Objects = Hashtable.newFrom({"backonerok": gdjs.arkadasaonerCode.GDbackonerokObjects1});
gdjs.arkadasaonerCode.asyncCallback18368276 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.arkadasaonerCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.arkadasaonerCode.asyncCallback18368276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.arkadasaonerCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.arkadasaonerCode.GDcodeObjects1);
{for(var i = 0, len = gdjs.arkadasaonerCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.arkadasaonerCode.GDcodeObjects1[i].setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backonerok"), gdjs.arkadasaonerCode.GDbackonerokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.arkadasaonerCode.mapOfGDgdjs_46arkadasaonerCode_46GDbackonerokObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.arkadasaonerCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.arkadasaonerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.arkadasaonerCode.GDhediyekusObjects1.length = 0;
gdjs.arkadasaonerCode.GDhediyekusObjects2.length = 0;
gdjs.arkadasaonerCode.GDNewTextObjects1.length = 0;
gdjs.arkadasaonerCode.GDNewTextObjects2.length = 0;
gdjs.arkadasaonerCode.GDboxObjects1.length = 0;
gdjs.arkadasaonerCode.GDboxObjects2.length = 0;
gdjs.arkadasaonerCode.GDcodeObjects1.length = 0;
gdjs.arkadasaonerCode.GDcodeObjects2.length = 0;
gdjs.arkadasaonerCode.GDaciklamaObjects1.length = 0;
gdjs.arkadasaonerCode.GDaciklamaObjects2.length = 0;
gdjs.arkadasaonerCode.GDbackonerokObjects1.length = 0;
gdjs.arkadasaonerCode.GDbackonerokObjects2.length = 0;

gdjs.arkadasaonerCode.eventsList1(runtimeScene);

return;

}

gdjs['arkadasaonerCode'] = gdjs.arkadasaonerCode;
