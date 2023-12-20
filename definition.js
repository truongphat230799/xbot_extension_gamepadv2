const ColorBlock = '#44cbc6';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/xbot_extension_robocon/images/';

Blockly.Blocks['gamepad_init'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_init",
        message0: "khởi tạo gamepad cổng %1",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "port",
            options: [
              ["4", "3"],
              ["5", "4"],
              ["6", "5"],
            ],
          },
        ],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    )
  }
};

Blockly.Python['gamepad_init'] = function (block) {
  var port = block.getFieldValue("port");
  Blockly.Python.definitions_['import_gamepad'] = 'from gamepad_handler import *';
  Blockly.Python.definitions_['create_gamepad'] = 'gamepad_handler = GamepadHandler(' + port + ')';
  // TODO: Assemble Python into code variable.
  var code = "";
  return code;
};

Blockly.Blocks['gamepad_btn_pressed'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_btn_pressed",
        message0: "nút %1 được nhấn ?",
        args0: [
          {
            type: "field_dropdown",
            name: "btn",
            options: [
              [
                {
                  "src": ImgUrl + 'ico-circle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "circle"
              ],
              [
                {
                  "src": ImgUrl + 'ico-cross.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "cross"
              ],
              [
                {
                  "src": ImgUrl + 'ico-square.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "square"
              ],
              [
                {
                  "src": ImgUrl + 'ico-triangle.png',
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "triangle"
              ],
              ["A", "a"],
              ["B", "b"],
              ["X", "x"],
              ["Y", "y"],
              ["dpad up", "dpad_up"],
              ["dpad down", "dpad_down"],
              ["dpad left", "dpad_left"],
              ["dpad right", "dpad_right"],
              ["R1", "r1"],
              ["L1", "l1"],
              ["R2", "r2"],
              ["L2", "l2"],
              ["options", "m2"],
              ["share", "m1"],
              ["nút joystick trái", "thumbl"],
              ["nút joystick phải", "thumbr"],
            ],
          }],
          colour: ColorBlock,
          output: Boolean,
          tooltip: "",
          helpUrl: ""
      }
    );
  }
};

Blockly.Python['gamepad_btn_pressed'] = function (block) {
  var btn = block.getFieldValue('btn');
  if (btn == 'square') btn1 = 'x';
  else if (btn == 'triangle') btn1 = 'y';
  else if (btn == 'cross') btn1 = 'a';
  else if (btn == 'circle') btn1 = 'b';

  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.data['" + btn + "']\n";
  return code;
};
Blockly.Blocks['gamepad_processing'] = {
  init: function () {
    this.jsonInit(
      {
        type: "gamepad_processing",
        message0: "cập nhật và xử lý gamepad",
        previousStatement: null,
        nextStatement: null,
        args0: [
        ],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    )
  }
};

Blockly.Python['gamepad_processing'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.process()\n";
  return code;
};

Blockly.Blocks['gamepad_set_led_rgb'] = {
  init: function () {
    this.jsonInit({
      "type": "gamepad_set_led_rgb",
      "message0": "đổi màu đèn trên gamepad thành %1",
      "args0": [
        {
          "type": "input_value",
          "name": "color"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": ColorBlock,
      "tooltip": "",
      "helpUrl": ""
    }
    );
  }
};

Blockly.Python['gamepad_set_led_rgb'] = function (block) {
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'gamepad_handler.set_led_color(' + value_color + ')\n';
  return code;
};

Blockly.Blocks['gamepad_set_rumble'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "gamepad_set_rumble",
        "message0": "rung gamepad mức %1 (0-100) trong %2 milli giây (0-2000)",
        "args0": [
          {
            min: 0,
            max: 100,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "force",
          },
          {
            min: 0,
            max: 2000,
            type: "input_value",
            check: "Number",
            value: 1000,
            name: "duration",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["gamepad_set_rumble"] = function (block) {
  var force = Blockly.Python.valueToCode(block, 'force', Blockly.Python.ORDER_ATOMIC);
  var duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.set_rumble(" + force + ", " + duration + ")\n";
  return code;
};

Blockly.Blocks['gamepad_is_connected'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "gamepad_is_connected",
        "message0": "đang kết nối gamepad",
        "args0": [
        ],
        "colour": ColorBlock,
        "output": "Boolean",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["gamepad_is_connected"] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "gamepad_handler.is_connected()";
  return [code, Blockly.Python.ORDER_NONE];
};