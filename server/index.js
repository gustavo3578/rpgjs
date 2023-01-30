/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.Control = exports.SocketEvents = exports.SocketMethods = exports.Direction = exports.PlayerType = exports.Behavior = exports.MoveClientMode = exports.HitType = void 0;
var Hitbox_1 = __webpack_require__(12);
Object.defineProperty(exports, "HitType", { enumerable: true, get: function () { return Hitbox_1.HitType; } });
var Player_1 = __webpack_require__(13);
Object.defineProperty(exports, "MoveClientMode", { enumerable: true, get: function () { return Player_1.MoveClientMode; } });
Object.defineProperty(exports, "Behavior", { enumerable: true, get: function () { return Player_1.Behavior; } });
Object.defineProperty(exports, "PlayerType", { enumerable: true, get: function () { return Player_1.PlayerType; } });
Object.defineProperty(exports, "Direction", { enumerable: true, get: function () { return Player_1.Direction; } });
var Socket_1 = __webpack_require__(14);
Object.defineProperty(exports, "SocketMethods", { enumerable: true, get: function () { return Socket_1.SocketMethods; } });
Object.defineProperty(exports, "SocketEvents", { enumerable: true, get: function () { return Socket_1.SocketEvents; } });
var Input_1 = __webpack_require__(15);
Object.defineProperty(exports, "Control", { enumerable: true, get: function () { return Input_1.Control; } });
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return Input_1.Input; } });
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@rpgjs/server");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = null

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
    "maps": [
        {
            "fileName": "simplemap.tmx",
            "height": 640,
            "width": 800,
            "x": 64,
            "y": -160
        },
        {
            "fileName": "simplemap2.tmx",
            "height": 640,
            "width": 640,
            "x": -160,
            "y": 480
        }
    ],
    "onlyShowAdjacentMaps": false,
    "type": "world"
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = null

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = null

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = null

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HitType = void 0;
var HitType;
(function (HitType) {
    HitType["Box"] = "box";
    HitType["Circle"] = "circle";
    HitType["Polygon"] = "polygon";
})(HitType = exports.HitType || (exports.HitType = {}));
//# sourceMappingURL=Hitbox.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerType = exports.Direction = exports.Behavior = exports.MoveClientMode = void 0;
var MoveClientMode;
(function (MoveClientMode) {
    MoveClientMode[MoveClientMode["Disabled"] = 0] = "Disabled";
    MoveClientMode[MoveClientMode["ByDirection"] = 1] = "ByDirection";
    MoveClientMode[MoveClientMode["Drag"] = 2] = "Drag";
})(MoveClientMode = exports.MoveClientMode || (exports.MoveClientMode = {}));
var Behavior;
(function (Behavior) {
    Behavior[Behavior["Direction"] = 0] = "Direction";
    Behavior[Behavior["Target"] = 1] = "Target";
})(Behavior = exports.Behavior || (exports.Behavior = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["UpRight"] = 1.5] = "UpRight";
    Direction[Direction["DownRight"] = 2.5] = "DownRight";
    Direction[Direction["DownLeft"] = 3.5] = "DownLeft";
    Direction[Direction["UpLeft"] = 2.5] = "UpLeft";
})(Direction = exports.Direction || (exports.Direction = {}));
var PlayerType;
(function (PlayerType) {
    PlayerType["Player"] = "player";
    PlayerType["Event"] = "event";
    PlayerType["Shape"] = "shape";
})(PlayerType = exports.PlayerType || (exports.PlayerType = {}));
//# sourceMappingURL=Player.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEvents = exports.SocketMethods = void 0;
var SocketMethods;
(function (SocketMethods) {
    SocketMethods["CameraFollow"] = "cameraFollow";
    SocketMethods["ShowAnimation"] = "showAnimation";
    SocketMethods["PlaySound"] = "playSound";
    SocketMethods["ModeMove"] = "modeMove";
})(SocketMethods = exports.SocketMethods || (exports.SocketMethods = {}));
var SocketEvents;
(function (SocketEvents) {
    SocketEvents["CallMethod"] = "callMethod";
})(SocketEvents = exports.SocketEvents || (exports.SocketEvents = {}));
//# sourceMappingURL=Socket.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.Control = void 0;
var Control;
(function (Control) {
    Control["Action"] = "action";
    Control["Attack"] = "attack";
    Control["Defense"] = "defense";
    Control["Skill"] = "skill";
    Control["Back"] = "back";
    Control[Control["Up"] = 1] = "Up";
    Control[Control["Down"] = 3] = "Down";
    Control[Control["Right"] = 2] = "Right";
    Control[Control["Left"] = 4] = "Left";
})(Control = exports.Control || (exports.Control = {}));
var Input;
(function (Input) {
    Input["Break"] = "break";
    Input["Backspace"] = "backspace";
    Input["Tab"] = "tab";
    Input["Clear"] = "clear";
    Input["Enter"] = "enter";
    Input["Shift"] = "shift";
    Input["Ctrl"] = "ctrl";
    Input["Alt"] = "alt";
    Input["Pause"] = "pause/break";
    Input["CapsLock"] = "caps lock";
    Input["Escape"] = "escape";
    Input["Conversion"] = "conversion";
    Input["NonConversion"] = "non-conversion";
    Input["Space"] = "space";
    Input["PageUp"] = "page up";
    Input["PageDown"] = "page down";
    Input["End"] = "end";
    Input["Home"] = "home";
    Input[Input["Left"] = 4] = "Left";
    Input[Input["Up"] = 1] = "Up";
    Input[Input["Right"] = 2] = "Right";
    Input[Input["Down"] = 3] = "Down";
    Input["Select"] = "select";
    Input["Print"] = "print";
    Input["Execute"] = "execute";
    Input["PrintScreen"] = "Print Screen";
    Input["Insert"] = "insert";
    Input["Delete"] = "delete";
    Input["Zero"] = "0";
    Input["One"] = "1";
    Input["Two"] = "2";
    Input["Three"] = "3";
    Input["Four"] = "4";
    Input["Five"] = "5";
    Input["Six"] = "6";
    Input["Seven"] = "7";
    Input["Height"] = "8";
    Input["Nine"] = "9";
    Input["Equal"] = "=";
    Input["Semicolon"] = "semicolon (firefox), equals";
    Input["LessThan"] = "<";
    Input["Equals"] = "equals (firefox)";
    Input["Beta"] = "\u00DF";
    Input["At"] = "@";
    Input["A"] = "a";
    Input["B"] = "b";
    Input["C"] = "c";
    Input["D"] = "d";
    Input["E"] = "e";
    Input["F"] = "f";
    Input["G"] = "g";
    Input["H"] = "h";
    Input["I"] = "i";
    Input["J"] = "j";
    Input["K"] = "k";
    Input["L"] = "l";
    Input["M"] = "m";
    Input["N"] = "n";
    Input["O"] = "o";
    Input["P"] = "p";
    Input["Q"] = "q";
    Input["R"] = "r";
    Input["S"] = "s";
    Input["T"] = "t";
    Input["U"] = "u";
    Input["V"] = "v";
    Input["W"] = "w";
    Input["X"] = "x";
    Input["Y"] = "y";
    Input["Z"] = "z";
    Input["SearchKey"] = "Windows Key / Left \u2318 / Chromebook Search key";
    Input["NumPad0"] = "numpad 0";
    Input["NumPad1"] = "numpad 1";
    Input["NumPad2"] = "numpad 2";
    Input["NumPad3"] = "numpad 3";
    Input["NumPad4"] = "numpad 4";
    Input["NumPad5"] = "numpad 5";
    Input["NumPad6"] = "numpad 6";
    Input["NumPad7"] = "numpad 7";
    Input["NumPad8"] = "numpad 8";
    Input["NumPad9"] = "numpad 9";
    Input["Multiply"] = "multiply";
    Input["Add"] = "add";
    Input["Subtract"] = "subtract";
    Input["DecimalPoint"] = "decimal point";
    Input["Divide"] = "divide";
    Input["F1"] = "f1";
    Input["F2"] = "f2";
    Input["F3"] = "f3";
    Input["F4"] = "f4";
    Input["F5"] = "f5";
    Input["F6"] = "f6";
    Input["F7"] = "f7";
    Input["F8"] = "f8";
    Input["F9"] = "f9";
    Input["F10"] = "f10";
    Input["F11"] = "f11";
    Input["F12"] = "f12";
    Input["F13"] = "f13";
    Input["F14"] = "f14";
    Input["F15"] = "f15";
    Input["F16"] = "f16";
    Input["F17"] = "f17";
    Input["F18"] = "f18";
    Input["F19"] = "f19";
    Input["F20"] = "f20";
    Input["F21"] = "f21";
    Input["F22"] = "f22";
    Input["F23"] = "f23";
    Input["F24"] = "f24";
    Input["NumLock"] = "num lock";
    Input["ScrollLock"] = "scroll lock";
    Input["CircumflexAccent"] = "^";
    Input["ExclamationMark"] = "!";
    Input["Hash"] = "#";
    Input["Dollar"] = "$";
    Input["AccentU"] = "\u00F9";
    Input["PageBackward"] = "page backward";
    Input["PageForWard"] = "page forward";
    Input["Star"] = "*";
    Input["DecreaseVolume"] = "decrease volume level";
    Input["IncreaseVolume"] = "increase volume level";
    Input["Next"] = "next";
    Input["Previous"] = "previous";
    Input["Stop"] = "stop";
    Input["PlayPause"] = "play/pause";
    Input["Email"] = "e-mail";
    Input["SemiColon"] = "semi-colon / \u00F1";
    Input["EqualSign"] = "equal sign";
    Input["Comma"] = "comma";
    Input["Dash"] = "dash";
    Input["FowardSlach"] = "forward slash / \u00E7";
    Input["GraveAccent"] = "grave accent / \u00F1 / \u00E6";
    Input["OpenBracket"] = "open bracket";
    Input["BackSlach"] = "back slash";
    Input["CloseBracket"] = "close bracket / \u00E5";
    Input["SingleQuote"] = "single quote / \u00F8";
    Input["BackQuote"] = "`";
    Input["Altgr"] = "altgr";
})(Input = exports.Input || (exports.Input = {}));
//# sourceMappingURL=Input.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "8f539cf0c15ec6c9b4078fe5b2e85d1a.simplemap.tmx";

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(3);
var external_http_default = /*#__PURE__*/__webpack_require__.n(external_http_);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(2);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: external "body-parser"
var external_body_parser_ = __webpack_require__(4);
var external_body_parser_default = /*#__PURE__*/__webpack_require__.n(external_body_parser_);

// EXTERNAL MODULE: external "socket.io"
var external_socket_io_ = __webpack_require__(5);

// EXTERNAL MODULE: external "pretty-error"
var external_pretty_error_ = __webpack_require__(6);
var external_pretty_error_default = /*#__PURE__*/__webpack_require__.n(external_pretty_error_);

// EXTERNAL MODULE: external "@rpgjs/server"
var server_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@rpgjs/types/lib/index.js
var lib = __webpack_require__(0);

// CONCATENATED MODULE: ./src/config/inputs.ts

const inputs = {
    [lib["Control"].Up]: {
        repeat: true,
        bind: lib["Input"].Up
    },
    [lib["Control"].Down]: {
        repeat: true,
        bind: lib["Input"].Down
    },
    [lib["Control"].Right]: {
        repeat: true,
        bind: lib["Input"].Right
    },
    [lib["Control"].Left]: {
        repeat: true,
        bind: lib["Input"].Left
    },
    [lib["Control"].Action]: {
        bind: [lib["Input"].Space, lib["Input"].Enter]
    },
    [lib["Control"].Back]: {
        bind: lib["Input"].Escape
    }
};

// CONCATENATED MODULE: ./src/config/server/index.ts

/* harmony default export */ var server = ({
    inputs: inputs
});

// EXTERNAL MODULE: ./node_modules/@rpgjs/compiler/loaders/null.js!./src/modules/main/client/index.ts
var client = __webpack_require__(7);
var client_default = /*#__PURE__*/__webpack_require__.n(client);

// EXTERNAL MODULE: ./src/modules/main/server/maps/tmx/myworld.world
var myworld_world = __webpack_require__(8);
var myworld_world_default = /*#__PURE__*/__webpack_require__.n(myworld_world);

// CONCATENATED MODULE: ./src/modules/main/server/events/villager.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let villager_VillagerEvent = class VillagerEvent extends server_["RpgEvent"] {
    onInit() {
        this.setGraphic('female132');
    }
    onAction(player) {
        return __awaiter(this, void 0, void 0, function* () {
            yield player.showText('I give you 10 gold.', {
                talkWith: this
            });
            player.gold += 10;
        });
    }
};
villager_VillagerEvent = __decorate([
    Object(server_["EventData"])({
        name: 'EV-1',
        hitbox: {
            width: 32,
            height: 16
        }
    })
], villager_VillagerEvent);


// CONCATENATED MODULE: ./src/modules/main/server/maps/samplemap.ts
var samplemap_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let samplemap_SampleMap = class SampleMap extends server_["RpgMap"] {
};
samplemap_SampleMap = samplemap_decorate([
    Object(server_["MapData"])({
        id: 'simplemap',
        file: __webpack_require__(16),
        name: 'Forest',
        events: [
            villager_VillagerEvent
        ]
    })
], samplemap_SampleMap);


// CONCATENATED MODULE: ./src/modules/main/server/player.ts
var player_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const player_player = {
    onConnected(player) {
        player.setGraphic('male012');
        player.setHitbox(16, 16);
        player.changeMap('simplemap');
    },
    onInput(player, { input }) {
        if (input == server_["Control"].Back) {
            player.callMainMenu();
        }
    },
    onJoinMap(player) {
        return player_awaiter(this, void 0, void 0, function* () {
            if (player.getVariable('AFTER_INTRO')) {
                return;
            }
            yield player.showText('Welcome to the start of RPGJS. Short presentation of the structure:');
            yield player.showText('1. Open the map src/modules/main/server/maps/tmx/samplemap.tmx with Tiled Map Editor !');
            yield player.showText('2. All the modules are in src/modules/index.ts, it is a suite of systems to make a complete set. Remove modules or add some!');
            yield player.showText('3. The global configuration is done in src/config');
            yield player.showText('And, please, support the project on github https://github.com/RSamaium/RPG-JS ! :)');
            player.setVariable('AFTER_INTRO', true);
        });
    }
};

// CONCATENATED MODULE: ./node_modules/@rpgjs/compiler/loaders/content.js!./src/modules/main/server/index.ts
var server_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let RpgServerModuleEngine = class RpgServerModuleEngine {
};
RpgServerModuleEngine = server_decorate([
    Object(server_["RpgModule"])({
        player: player_player,
        /**
        * `world` contains two maps. The maps are created automatically. If a map already exists, it will take the existing map (identical ID). Here, it is the case of SampleMap
       The identifier of a map in a world is the file name. Here, we have the file `simplemap2.tmx`, so the identifier is `simplemap2`
        */
        worldMaps: [
            myworld_world_default.a
        ],
        /**
         * The fact of putting a map allows to have more possibilities on the manipulation of the map (put events, properties in the class, etc.)
         */
        maps: [
            samplemap_SampleMap
        ]
    })
], RpgServerModuleEngine);
/* harmony default export */ var main_server = (RpgServerModuleEngine);

// CONCATENATED MODULE: ./src/modules/main/index.ts


/* harmony default export */ var main = ({
    client: client_default.a,
    server: main_server
});

// EXTERNAL MODULE: ./node_modules/@rpgjs/compiler/loaders/null.js!./node_modules/@rpgjs/default-gui/src/client.ts
var src_client = __webpack_require__(9);
var src_client_default = /*#__PURE__*/__webpack_require__.n(src_client);

// CONCATENATED MODULE: ./node_modules/@rpgjs/default-gui/src/index.ts

/* harmony default export */ var src = ({
    client: src_client_default.a
});

// EXTERNAL MODULE: ./node_modules/@rpgjs/compiler/loaders/null.js!./node_modules/@rpgjs/mobile-gui/src/client.ts
var mobile_gui_src_client = __webpack_require__(10);
var mobile_gui_src_client_default = /*#__PURE__*/__webpack_require__.n(mobile_gui_src_client);

// CONCATENATED MODULE: ./node_modules/@rpgjs/mobile-gui/src/index.ts

/* harmony default export */ var mobile_gui_src = ({
    client: mobile_gui_src_client_default.a
});

// EXTERNAL MODULE: ./node_modules/@rpgjs/compiler/loaders/null.js!./node_modules/@rpgjs/gamepad/client/index.ts
var gamepad_client = __webpack_require__(11);
var gamepad_client_default = /*#__PURE__*/__webpack_require__.n(gamepad_client);

// CONCATENATED MODULE: ./node_modules/@rpgjs/gamepad/index.ts

/* harmony default export */ var gamepad = ({
    client: gamepad_client_default.a
});

// CONCATENATED MODULE: ./src/modules/index.ts




/* harmony default export */ var modules = ([
    main,
    src,
    mobile_gui_src,
    gamepad
]);

// CONCATENATED MODULE: ./src/server.ts
var server_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const PORT = process.env.PORT || 3000;
const pe = new external_pretty_error_default.a();
const app = external_express_default()();
const server_server = external_http_default.a.createServer(app);
const io = new external_socket_io_["Server"](server_server, {
    maxHttpBufferSize: 1e4
});
app.use(external_body_parser_default.a.json());
app.use('/', external_express_default.a.static(__dirname + '/../client'));
server_server.listen(PORT, () => server_awaiter(void 0, void 0, void 0, function* () {
    const rpgGame = yield Object(server_["entryPoint"])(modules, { io, basePath: __dirname, globalConfig: server });
    rpgGame.app = app; // Useful for plugins (monitoring, backend, etc.)
    rpgGame.start();
    console.log(`
        ===> MMORPG is running on http://localhost:${PORT} <===
    `);
}));
process.on('uncaughtException', function (error) {
    console.log(pe.render(error));
});
process.on('unhandledRejection', function (reason) {
    console.log(pe.render(reason));
});


/***/ })
/******/ ]);