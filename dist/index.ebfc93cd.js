// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bw1dR":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "da875f66ebfc93cd";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"awxug":[function(require,module,exports) {
var _controls = require("./engine/controls");
var _game = require("./canvas/game");
var _sky = require("./canvas/sky");
_controls.initControls();
_sky.animateSky();
_game.playGame();

},{"./engine/controls":"ewg6z","./canvas/sky":"7QlIS","./canvas/game":"jeWPq"}],"ewg6z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initControls", ()=>initControls
);
var _globalState = require("../global-state");
var _santa = require("../santa");
var _images = require("../data/images");
var _angry = require("../letters/angry");
var _letters = require("../letters");
function initControls() {
    document.onkeydown = (event)=>{
        switch(event.keyCode){
            case 13:
                restart();
                break;
        }
        if (_globalState.score >= 20 || _globalState.score <= 0) return;
        _santa.santa.startWalking();
        switch(event.keyCode){
            case 37:
                _santa.santa.image = _images.santaReverse;
                _santa.santa.x -= 20;
                break;
            case 39:
                _santa.santa.image = _images.santaImg;
                _santa.santa.x += 20;
                break;
        }
    };
    document.onkeyup = ()=>{
        _santa.santa.stopWalking();
    };
}
function restart() {
    _globalState.updateScore(8);
    _santa.santa.restart();
    _angry.fillAngryLetters();
    _letters.fillLetters();
}

},{"../global-state":"2y1HE","../santa":"dPR2M","../data/images":"lyQK9","../letters/angry":"4EMSg","../letters":"bxAPI","@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"2y1HE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "score", ()=>score
);
parcelHelpers.export(exports, "radius", ()=>radius
);
parcelHelpers.export(exports, "updateScore", ()=>updateScore
);
parcelHelpers.export(exports, "updateScoreRadius", ()=>updateScoreRadius
);
let score = 8;
let radius = 60;
const updateScore = (newScore)=>score = newScore
;
const updateScoreRadius = (newRadius)=>radius = newRadius
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"34qex":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dPR2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "santa", ()=>santa
);
var _images = require("../data/images");
var _canvas = require("../canvas");
var _data = require("../data");
const santa = {
    x: 300,
    y: _data.HEIGHT - 223,
    width: 150,
    height: 150,
    spriteX: 0,
    spriteY: 450,
    image: _images.santaImg,
    walkInterval: null,
    flashInterval: null,
    visible: true,
    draw () {
        if (this.visible) _canvas.canvasGame.drawImage(this.image, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
    },
    stopWalking () {
        clearInterval(this.walkInterval);
        this.walkInterval = null;
        this.spriteX = 0;
        this.spriteY = 450;
    },
    startWalking () {
        if (this.walkInterval) return null;
        this.walkInterval = setInterval(()=>{
            this.spriteX += 150;
            if (this.spriteX === 600) {
                this.spriteX = 0;
                this.spriteY += 150;
                if (this.spriteY === 600) this.spriteY = 0;
            }
        }, 75);
    },
    santaClick () {
        let count = 0;
        this.flashInterval = setInterval(()=>{
            this.visible = !this.visible;
            count++;
            if (count === 6) {
                clearInterval(this.flashInterval);
                this.visible = true;
            }
        }, 150);
    },
    restart () {
        this.x = 300;
        this.y = _data.HEIGHT - 223;
        this.stopWalking();
    }
};

},{"../data/images":"lyQK9","../canvas":"7zp4W","../data":"6PgIQ","@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"lyQK9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "santaImg", ()=>santaImg
);
parcelHelpers.export(exports, "santaReverse", ()=>santaReverse
);
parcelHelpers.export(exports, "angryLetterImg", ()=>angryLetterImg
);
parcelHelpers.export(exports, "snowImg", ()=>snowImg
);
parcelHelpers.export(exports, "letterImg", ()=>letterImg
);
parcelHelpers.export(exports, "letterCatch", ()=>letterCatch
);
parcelHelpers.export(exports, "gameoverImg", ()=>gameoverImg
);
parcelHelpers.export(exports, "winImg", ()=>winImg
);
const santaImg = new Image();
santaImg.src = "../../assets/sprites/santasprite.jpg";
const santaReverse = new Image();
santaReverse.src = "../../assets/sprites/santaspriteReverse.png";
const snowImg = new Image();
snowImg.src = "../../assets/images/snow.png";
const letterImg = new Image();
letterImg.src = "../../assets/images/letter.png";
const angryLetterImg = new Image();
angryLetterImg.src = "../../assets/images/angryletter.png";
const letterCatch = new Image();
letterCatch.src = "../../assets/sprites/spritecatch.png";
const gameoverImg = new Image();
gameoverImg.src = "../../assets/images/gameover.jpg";
const winImg = new Image();
winImg.src = "../../assets/images/win.jpg";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"7zp4W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canvasSky", ()=>canvasSky
);
parcelHelpers.export(exports, "canvasGame", ()=>canvasGame
);
var _data = require("../data");
const skyNode = document.querySelector("#sky");
skyNode.width = _data.WIDTH;
skyNode.height = _data.HEIGHT;
const canvasSky = skyNode.getContext("2d");
const gameNode = document.querySelector("#game");
gameNode.width = _data.WIDTH;
gameNode.height = _data.HEIGHT;
const canvasGame = gameNode.getContext("2d");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"34qex","../data":"6PgIQ"}],"6PgIQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WIDTH", ()=>WIDTH
);
parcelHelpers.export(exports, "HEIGHT", ()=>HEIGHT
);
parcelHelpers.export(exports, "MAX_FLAKES", ()=>MAX_FLAKES
);
parcelHelpers.export(exports, "FLOOR_HEIGHT", ()=>FLOOR_HEIGHT
);
parcelHelpers.export(exports, "COUNTER_RADIUSES", ()=>COUNTER_RADIUSES
);
parcelHelpers.export(exports, "COLORS", ()=>COLORS
);
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const MAX_FLAKES = 100;
const FLOOR_HEIGHT = 90;
const COUNTER_RADIUSES = [
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    70,
    69,
    68,
    67,
    66,
    65,
    64,
    63,
    62,
    61,
    60, 
];
const COLORS = {
    GREEN: "#42f462",
    SOFT_GREEN: "#b5f441",
    WHITE: "#fff",
    RED: "#e00d2d",
    SKY_BLUE: "#102a54",
    SNOW_WHITE: "#F7F4FA"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"4EMSg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillAngryLetters", ()=>fillAngryLetters
);
parcelHelpers.export(exports, "angryLetters", ()=>angryLetters
);
parcelHelpers.export(exports, "drawAngryLetters", ()=>drawAngryLetters
);
var _ = require(".");
var _globalState = require("../global-state");
var _data = require("../data");
var _images = require("../data/images");
var _canvas = require("../canvas");
class AngryLetter extends _.Letter {
    constructor(x, y, width, height){
        super(x, y, width, height);
    }
    draw() {
        if (_globalState.score > 0) this.y += 1;
        if (this.y > _data.HEIGHT && this.caught === false) this.y = -500;
        _canvas.canvasGame.drawImage(_images.angryLetterImg, this.x, this.y, this.width, this.height);
    }
}
const fillAngryLetters = ()=>[
        ...Array(3)
    ].map((_, i)=>new AngryLetter(Math.floor(Math.random() * _data.WIDTH), i * 600, 50, 50)
    )
;
const angryLetters = fillAngryLetters();
function drawAngryLetters(score) {
    return null;
}

},{".":"bxAPI","../global-state":"2y1HE","../data":"6PgIQ","../data/images":"lyQK9","../canvas":"7zp4W","@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"bxAPI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Letter", ()=>Letter
);
parcelHelpers.export(exports, "fillLetters", ()=>fillLetters
);
parcelHelpers.export(exports, "letters", ()=>letters
);
parcelHelpers.export(exports, "drawLetters", ()=>drawLetters
);
parcelHelpers.export(exports, "letterHit", ()=>letterHit
);
var _globalState = require("../global-state");
var _data = require("../data");
var _images = require("../data/images");
var _canvas = require("../canvas");
var _collision = require("../engine/collision");
var _score = require("../score");
var _audio = require("../data/audio");
class Letter {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.caught = false;
    }
    draw() {
        if (_globalState.score > 0) this.y += 1;
        if (this.y > _data.HEIGHT && this.caught === false) {
            this.y = -500;
            _globalState.updateScore(_globalState.score - 1);
        }
        _canvas.canvasGame.drawImage(_images.letterImg, this.x, this.y, this.width, this.height);
    }
}
const fillLetters = ()=>[
        ...Array(10)
    ].map((_, i)=>new Letter(Math.floor(Math.random() * _data.WIDTH), i * 200, 50, 50)
    )
;
let letters = fillLetters();
function drawLetters(score, santa) {
    letters.forEach((letter)=>{
        letter.draw();
        if (!letter.caught && _collision.isCollision(santa, letter)) {
            _globalState.updateScore(score + 1);
            letter.caught = true;
            letterHit.x = letter.x;
            letterHit.y = letter.y;
            letterHit.draw();
            if (score === 10 || score === 15) _score.scoreBox.scoreZoom();
            letters.push(new Letter(Math.floor(Math.random() * _data.WIDTH), 0, 50, 50));
            _audio.bell.play();
            setTimeout(function() {
                _audio.bell.pause();
                _audio.bell.currentTime = 0;
            }, 1000);
        }
    });
    letters = letters.filter((letter)=>!letter.caught
    );
}
const letterHit = {
    x: 500,
    y: 500,
    width: 150,
    height: 150,
    spriteX: 0,
    spriteY: 103,
    image: _images.letterCatch,
    draw () {
        _canvas.canvasGame.drawImage(_images.letterCatch, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
        setInterval(()=>{
            letterHit.spriteX += 128;
            if (letterHit.spriteX === 640) letterHit.spriteX = 0;
        }, 1000);
    }
};

},{"../global-state":"2y1HE","../data":"6PgIQ","../data/images":"lyQK9","../canvas":"7zp4W","../engine/collision":"2sYa7","../score":"2iekU","../data/audio":"8pqaN","@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"2sYa7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCollision", ()=>isCollision
);
function isCollision(santa, letter) {
    return santa.y + santa.height >= letter.y && santa.y <= letter.y + letter.height && santa.x + santa.width >= letter.x && santa.x <= letter.x + letter.width;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"2iekU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scoreBox", () => scoreBox);
parcelHelpers.export(exports, "getScoreColor", ()=>getScoreColor
);
parcelHelpers.export(exports, "playAudioBasedOnScore", ()=>playAudioBasedOnScore
);
var _data = require("../data");
var _globalState = require("../global-state");
var _audio = require("../data/audio");
let zoomInterval = null;
let scoreBox = {
  flashInterval: null,
  visible: true,
  scoreZoom() {
    let count = 0;
    zoomInterval = setInterval(() => {
      _globalState.updateScoreRadius(_data.COUNTER_RADIUSES[count]);
      count++;
      if (count === _data.COUNTER_RADIUSES.length) clearInterval(zoomInterval);
    }, 50);
  },
  scoreClick() {
    let count = 0;
    this.flashInterval = setInterval(() => {
      scoreBox.visible = !scoreBox.visible;
      count++;
      if (count === 6) {
        clearInterval(scoreBox.flashInterval);
        scoreBox.visible = true;
      }
    }, 150);
  },
};
function getScoreColor(score) {
    if (score > 15) return _data.COLORS.GREEN;
    if (score >= 10) return _data.COLORS.SOFT_GREEN;
    if (score > 5) return _data.COLORS.WHITE;
    return _data.COLORS.RED;
}
function playAudioBasedOnScore(score) {
    if (score <= 0) {
        _audio.laughLow.play();
        setTimeout(()=>{
            _audio.laughLow.pause();
            _audio.laughLow.currentTime = 0;
        }, 2000);
    }
    if (score === 10) {
        _audio.laugh.play();
        setTimeout(()=>{
            _audio.laugh.pause();
            _audio.laugh.currentTime = 0;
        }, 2000);
    }
    if (score === 15) {
        _audio.goodBoy.play();
        setTimeout(()=>{
            _audio.goodBoy.pause();
            _audio.goodBoy.currentTime = 0;
        }, 2500);
    }
    if (score === 20) {
        _audio.merry.play();
        setTimeout(()=>{
            _audio.merry.pause();
            _audio.merry.currentTime = 0;
        }, 2000);
    }
}

},{"../data":"6PgIQ","../global-state":"2y1HE","../data/audio":"8pqaN","@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"8pqaN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "laugh", ()=>laugh
);
parcelHelpers.export(exports, "laughLow", ()=>laughLow
);
parcelHelpers.export(exports, "goodBoy", ()=>goodBoy
);
parcelHelpers.export(exports, "merry", ()=>merry
);
parcelHelpers.export(exports, "bell", ()=>bell
);
parcelHelpers.export(exports, "pain", ()=>pain
);
const laugh = new Audio("../../assets/audio/santa-laugh.mp3");
const laughLow = new Audio("../../assets/audio/santa-lowlaugh.mp3");
const goodBoy = new Audio("../../assets/audio/santa-goodboy.mp3");
const merry = new Audio("../../assets/audio/santa-merry.mp3");
const bell = new Audio("../../assets/audio/santa-bell.mp3");
const pain = new Audio("../../assets/audio/santa-pain.mp3");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"7QlIS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSky", ()=>animateSky
);
var _ = require(".");
var _data = require("../data");
const flakes = [
    ...Array(_data.MAX_FLAKES)
].map((_)=>({
        x: Math.random() * _data.WIDTH,
        y: Math.random() * _data.HEIGHT,
        radius: Math.random() * 5 + 2,
        density: Math.random() + 1
    })
);
let angle = 0;
function moveFlakes() {
    angle += 0.01;
    flakes.forEach((flake, i)=>{
        flake.y += Math.pow(flake.density, 2) + 1, flake.x += Math.sin(angle) * 2;
        if (flake.y > _data.HEIGHT - _data.FLOOR_HEIGHT) flakes[i] = {
            x: Math.random() * _data.WIDTH,
            y: 0,
            radius: flake.radius,
            density: flake.density
        };
    });
}
function drawFlakes() {
    _.canvasSky.clearRect(0, 0, _data.WIDTH, _data.HEIGHT);
    _.canvasSky.fillStyle = "white";
    _.canvasSky.beginPath();
    flakes.forEach((flake)=>{
        _.canvasSky.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
        _.canvasSky.moveTo(flake.x, flake.y); // place the flakes to it x,y coordinates.
    });
    _.canvasSky.fill();
    moveFlakes();
}
function animateSky() {
    setInterval(drawFlakes, 25);
}

},{".":"7zp4W","../data":"6PgIQ","@parcel/transformer-js/src/esmodule-helpers.js":"34qex"}],"jeWPq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playGame", ()=>playGame
);
var _ = require(".");
var _images = require("../data/images");
var _data = require("../data");
var _globalState = require("../global-state");
var _score = require("../score");
var _letters = require("../letters");
var _angry = require("../letters/angry");
var _santa = require("../santa");
const snow = {
    x: 0,
    y: _data.HEIGHT - 235,
    width: _data.WIDTH,
    height: 300,
    image: _images.snowImg,
    draw () {
        _.canvasGame.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
};
function updateGame() {
    if (this.visible) {
        _.canvasGame.beginPath();
        _.canvasGame.arc(_data.WIDTH - 115, 120, _globalState.radius, 0, 2 * Math.PI);
        _.canvasGame.lineWidth = 6;
        _.canvasGame.stroke();
        _.canvasGame.font = "bold 70px monospace";
        _.canvasGame.fillStyle = _data.COLORS.WHITE;
        _.canvasGame.textAlign = "center";
        _.canvasGame.textBaseline = "middle";
        _.canvasGame.fillText(_globalState.score.toString(), _data.WIDTH - 115, 120);
        _.canvasGame.strokeStyle = _score.getScoreColor(_globalState.score);
        _score.playAudioBasedOnScore(_globalState.score);
        _.canvasGame.closePath();
    }
}
function drawGame() {
    _.canvasGame.fillStyle = _data.COLORS.SKY_BLUE;
    _.canvasGame.fillRect(0, 0, _data.WIDTH, _data.HEIGHT);
    _.canvasGame.fillStyle = _data.COLORS.SNOW_WHITE;
    _.canvasGame.fillRect(0, _data.HEIGHT - 80, _data.WIDTH, 210);
    _santa.santa.draw();
    updateGame();
    snow.draw();
    if (_globalState.score <= 0 || _globalState.score >= 20) {
        const newWidth = _data.HEIGHT * 0.64;
        _.canvasGame.drawImage(_globalState.score < 20 ? _images.gameoverImg : _images.winImg, _data.WIDTH / 2 - newWidth / 2, 100, newWidth, _data.HEIGHT * 0.7);
        _.canvasGame.font = "bold 25px monospace";
        _.canvasGame.fillText("PRESS ENTER TO PLAY AGAIN", _data.WIDTH / 2, 70);
        return;
    }
    _letters.drawLetters(_globalState.score, _santa.santa);
    _angry.drawAngryLetters(_globalState.score);
}
function playGame() {
    _.canvasGame.clearRect(0, 0, _data.WIDTH, _data.HEIGHT);
    drawGame();
    requestAnimationFrame(()=>playGame()
    );
}

},{".":"7zp4W","../data/images":"lyQK9","../data":"6PgIQ","../global-state":"2y1HE","../score":"2iekU","../santa":"dPR2M","@parcel/transformer-js/src/esmodule-helpers.js":"34qex","../letters":"bxAPI","../letters/angry":"4EMSg"}]},["bw1dR","awxug"], "awxug", "parcelRequire94c2")

//# sourceMappingURL=index.ebfc93cd.js.map
