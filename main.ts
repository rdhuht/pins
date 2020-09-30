/**
 * 硬件：
 * 
 * p1-鳄鱼夹1
 * 
 * GND-鳄鱼夹2
 * 
 * 设置拉引脚p1为上
 * 
 * 一直显示1，知道连接鳄鱼夹1和2，变为0
 * 
 * 模拟开关
 */
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showNumber(1)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showNumber(0)
    }
})
