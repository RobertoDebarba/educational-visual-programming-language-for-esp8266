Blockly.JavaScript['event_setup'] = function (block) {
    let statements_loop = Blockly.JavaScript.statementToCode(block, 'loop');

    let containsMotionDanceBlock = OttoCodeGenerator.isBLockOnWorkspace('motion_dance');
    let motionDanceSetupCode = containsMotionDanceBlock ? MotionDanceBlock.getSetupCode() : '';

    let containsMotionSingBlock = OttoCodeGenerator.isBLockOnWorkspace('motion_sing');
    let motionSingSetupCode = containsMotionSingBlock ? MotionSingBlock.getSetupCode() : '';

    let containsMotionFeelingBlock = OttoCodeGenerator.isBLockOnWorkspace('motion_feeling');
    let motionFeelingSetupCode = containsMotionFeelingBlock ? MotionFeelingBlock.getSetupCode() : '';

    let containsSensorTouchHeadBlock = OttoCodeGenerator.isBLockOnWorkspace('sensor_touchhead');
    let SensorTouchHeadSetupCode = containsSensorTouchHeadBlock ? SensorTouchHeadBlock.getSetupCode() : '';

    return `
    ///////////////////////////////////////////////////////////////////
    //-- Setup ------------------------------------------------------//
    ///////////////////////////////////////////////////////////////////
    void setup() {
        Otto.init(PIN_LEFTLEG,PIN_RIGHTLEG,PIN_LEFTFOOT,PIN_RIGHTFOOT,true); //Set the servo pins
        Otto.sing(S_connection); //Otto wake up!
        Otto.home(); //Otto at rest position
        delay(50);
        
        ${motionDanceSetupCode}
        ${motionSingSetupCode}
        ${motionFeelingSetupCode}
        ${SensorTouchHeadSetupCode}
        
        ${statements_loop}
    }\n`;
};