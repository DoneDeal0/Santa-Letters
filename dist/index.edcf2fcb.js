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
})({"dSo4d":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "8d31e94bedcf2fcb";
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

},{}],"2RQX4":[function(require,module,exports) {
var _game = require("./canvas/game");
var _sky = require("./canvas/sky");
var _audio = require("./data/audio");
var _controls = require("./engine/controls");
const startScreen = document.querySelector("#start-screen");
const start = document.querySelector("#start-button");
_sky.animateSky();
start.onclick = ()=>{
    startScreen.remove();
    _audio.theme.play().then(()=>{
        _sky.animateSky();
        _controls.initControls();
        _game.playGame();
    }).catch((_)=>alert("An error occured")
    );
};

},{"./canvas/game":"120yC","./canvas/sky":"lgQH4","./engine/controls":"puiT9","./data/audio":"9IypU"}],"120yC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playGame", ()=>playGame
);
var _index = require("./index");
var _images = require("../data/images");
var _index1 = require("../data/index");
var _globalState = require("../global-state");
var _index2 = require("../score/index");
var _index3 = require("../letters/index");
var _snow = require("./snow");
var _index4 = require("../santa/index");
var _angry = require("../letters/angry");
function drawGame() {
    _index.canvasGame.fillStyle = _index1.COLORS.SNOW_WHITE;
    _index.canvasGame.fillRect(0, _index1.HEIGHT - 80, _index1.WIDTH, 210);
    _index4.santa.draw();
    _index2.scoreBox.update(_globalState.score);
    _snow.snow.draw();
    if (_globalState.score <= 0 || _globalState.score >= 20) {
        const newWidth = _index1.HEIGHT * 0.64;
        _index.canvasGame.drawImage(_globalState.score < 20 ? _images.gameoverImg : _images.winImg, _index1.WIDTH / 2 - newWidth / 2, 100, newWidth, _index1.HEIGHT * 0.7);
        _index.canvasGame.font = "bold 25px sans-serif";
        _index.canvasGame.fillText("PRESS ENTER TO PLAY AGAIN", _index1.WIDTH / 2, 70);
        _index4.santa.stopFlash();
        return;
    }
    _index3.drawLetters(_globalState.score, _index4.santa);
    _angry.drawAngryLetters(_globalState.score, _index4.santa);
}
function playGame() {
    _index.canvasGame.clearRect(0, 0, _index1.WIDTH, _index1.HEIGHT);
    drawGame();
    requestAnimationFrame(()=>playGame()
    );
}

},{"../data/images":"1tFbn","../global-state":"6Ocq5","../letters/angry":"guRhh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./index":"6Bx9b","../data/index":"f843F","../score/index":"lKOZb","../letters/index":"jRKZy","./snow":"3x1U5","../santa/index":"l1ME9"}],"1tFbn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "angryLetterImg", ()=>angryLetterImg
);
parcelHelpers.export(exports, "gameoverImg", ()=>gameoverImg
);
parcelHelpers.export(exports, "letterImg", ()=>letterImg
);
parcelHelpers.export(exports, "letterCatch", ()=>letterCatch
);
parcelHelpers.export(exports, "santaImg", ()=>santaImg
);
parcelHelpers.export(exports, "santaReverse", ()=>santaReverse
);
parcelHelpers.export(exports, "snowImg", ()=>snowImg
);
parcelHelpers.export(exports, "winImg", ()=>winImg
);
const angryLetterImg = new Image();
angryLetterImg.src = require("../../assets/images/angryletter.png");
const gameoverImg = new Image();
gameoverImg.src = require("../../assets/images/gameover.jpg");
const letterCatch = new Image();
letterCatch.src = require("../../assets/sprites/spritecatch.png");
const letterImg = new Image();
letterImg.src = require("../../assets/images/letter.png");
const santaImg = new Image();
santaImg.src = require("../../assets/sprites/santasprite.jpg");
const santaReverse = new Image();
santaReverse.src = require("../../assets/sprites/santaspriteReverse.png");
const snowImg = new Image();
snowImg.src = require("../../assets/images/snow.png");
const winImg = new Image();
winImg.src = require("../../assets/images/win.jpg");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../../assets/sprites/santasprite.jpg":"lqn2S","../../assets/sprites/santaspriteReverse.png":"4kfhA","../../assets/images/snow.png":"fDRca","../../assets/images/letter.png":"7DfIj","../../assets/images/angryletter.png":"3DvBI","../../assets/sprites/spritecatch.png":"cFf0N","../../assets/images/gameover.jpg":"ch9wk","../../assets/images/win.jpg":"eI5C5"}],"ciiiV":[function(require,module,exports) {
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

},{}],"lqn2S":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santasprite.8d442e3b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4kfhA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santaspriteReverse.6d84dc9b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fDRca":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "snow.5bf01972.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7DfIj":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "letter.2a08699f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3DvBI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "angryletter.ba6acbc7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"cFf0N":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "spritecatch.6c418a13.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ch9wk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "gameover.a5564860.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"eI5C5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "win.ff4511be.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6Ocq5":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"guRhh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "angryLetters", ()=>angryLetters
);
parcelHelpers.export(exports, "refillAngryLetters", ()=>refillAngryLetters
);
parcelHelpers.export(exports, "drawAngryLetters", ()=>drawAngryLetters
);
var _index = require("./index");
var _index1 = require("../canvas/index");
var _audio = require("../data/audio");
var _index2 = require("../data/index");
var _images = require("../data/images");
var _audio1 = require("../engine/audio");
var _collision = require("../engine/collision");
var _globalState = require("../global-state");
var _index3 = require("../score/index");
class AngryLetter extends _index.Letter {
    constructor(x, y, width, height){
        super(x, y, width, height);
    }
    draw() {
        if (_globalState.score > 0) this.y += 1;
        if (this.y > _index2.HEIGHT && this.caught === false) this.y = -500;
        _index1.canvasGame.drawImage(_images.angryLetterImg, this.x, this.y, this.width, this.height);
    }
}
const fillAngryLetters = ()=>[
        ...Array(3)
    ].map((_, i)=>new AngryLetter(Math.floor(Math.random() * _index2.WIDTH), i * -600, 50, 50)
    )
;
let angryLetters = fillAngryLetters();
const refillAngryLetters = ()=>{
    angryLetters = fillAngryLetters();
};
function drawAngryLetters(score, santa) {
    angryLetters.forEach((letter)=>{
        letter.draw();
        if (!letter.caught && _collision.isCollision(santa, letter)) {
            _globalState.updateScore(score - 3);
            letter.caught = true;
            santa.flash();
            _index3.scoreBox.flash();
            _audio1.playAudio(_audio.pain);
        }
    });
}

},{"../global-state":"6Ocq5","../data/images":"1tFbn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./index":"jRKZy","../canvas/index":"6Bx9b","../data/audio":"9IypU","../data/index":"f843F","../engine/audio":"gei8j","../engine/collision":"7okYP","../score/index":"lKOZb"}],"jRKZy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Letter", ()=>Letter
);
parcelHelpers.export(exports, "letters", ()=>letters
);
parcelHelpers.export(exports, "refillLetters", ()=>refillLetters
);
parcelHelpers.export(exports, "drawLetters", ()=>drawLetters
);
parcelHelpers.export(exports, "letterHit", ()=>letterHit
);
var _index = require("../canvas/index");
var _index1 = require("../data/index");
var _audio = require("../data/audio");
var _images = require("../data/images");
var _audio1 = require("../engine/audio");
var _collision = require("../engine/collision");
var _globalState = require("../global-state");
var _index2 = require("../score/index");
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
        if (this.y > _index1.HEIGHT && this.caught === false) {
            this.y = -500;
            _globalState.updateScore(_globalState.score - 1);
        }
        _index.canvasGame.drawImage(_images.letterImg, this.x, this.y, this.width, this.height);
    }
}
function createLetter(xPosition = 0) {
    return new Letter(Math.floor(Math.random() * _index1.WIDTH), xPosition, 50, 50);
}
const fillLetters = ()=>[
        ...Array(10)
    ].map((_, i)=>createLetter(i * -200)
    )
;
let letters = fillLetters();
const refillLetters = ()=>{
    letters = fillLetters();
};
function drawLetters(score, santa) {
    letters.forEach((letter)=>{
        letter.draw();
        if (!letter.caught && _collision.isCollision(santa, letter)) {
            _globalState.updateScore(score + 1);
            letter.caught = true;
            letterHit.x = letter.x;
            letterHit.y = letter.y;
            letterHit.draw();
            if (score === 10 || score === 15) _index2.scoreBox.zoom();
            letters.push(createLetter());
            _audio1.playAudio(_audio.bell);
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
    draw () {
        _index.canvasGame.drawImage(_images.letterCatch, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
        setInterval(()=>{
            letterHit.spriteX += 128;
            if (letterHit.spriteX === 640) letterHit.spriteX = 0;
        }, 1000);
    }
};

},{"../global-state":"6Ocq5","../data/images":"1tFbn","../engine/collision":"7okYP","../data/audio":"9IypU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../canvas/index":"6Bx9b","../data/index":"f843F","../engine/audio":"gei8j","../score/index":"lKOZb"}],"7okYP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCollision", ()=>isCollision
);
function isCollision(santa, letter) {
    return santa.y + santa.height >= letter.y && santa.y <= letter.y + letter.height && santa.x + santa.width >= letter.x && santa.x <= letter.x + letter.width;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9IypU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bell", ()=>bell
);
parcelHelpers.export(exports, "goodBoy", ()=>goodBoy
);
parcelHelpers.export(exports, "laugh", ()=>laugh
);
parcelHelpers.export(exports, "laughLow", ()=>laughLow
);
parcelHelpers.export(exports, "merry", ()=>merry
);
parcelHelpers.export(exports, "pain", ()=>pain
);
parcelHelpers.export(exports, "theme", ()=>theme
);
const bellSound = new URL(require("b8609188c9b78b2e"));
const goodBoySound = new URL(require("f0382ae608b3c8a2"));
const laughSound = new URL(require("60964366c47d6838"));
const laughLowSound = new URL(require("b106459aaba8e974"));
const merrySound = new URL(require("48673e6551545ada"));
const painSound = new URL(require("8d5f1b9d1bf58222"));
const themeSound = new URL(require("c9efe77b9b0bbec3"));
const bell = new Audio(bellSound);
const goodBoy = new Audio(goodBoySound);
const laugh = new Audio(laughSound);
const laughLow = new Audio(laughLowSound);
const merry = new Audio(merrySound);
const pain = new Audio(painSound);
const theme = new Audio(themeSound);
goodBoy.volume = 0.5;
laugh.volume = 0.3;
laughLow.volume = 0.3;
merry.volume = 0.6;
pain.volume = 0.4;
theme.volume = 0.3;
theme.loop = true;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","b8609188c9b78b2e":"6lA6r","f0382ae608b3c8a2":"7CYXs","60964366c47d6838":"3c92U","b106459aaba8e974":"kqn90","48673e6551545ada":"ibqhH","8d5f1b9d1bf58222":"22Nic","c9efe77b9b0bbec3":"9O4oF"}],"6lA6r":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santa-bell.9d55ac39.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7CYXs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santa-goodboy.8b6c8445.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3c92U":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santa-laugh.b8a23148.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kqn90":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santa-lowlaugh.717653ca.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ibqhH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santa-merry.f9fea409.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"22Nic":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santa-pain.ab0833ed.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9O4oF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('c7zNS') + "santa-loop.24edd962.mp3" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6Bx9b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canvasSky", ()=>canvasSky
);
parcelHelpers.export(exports, "canvasGame", ()=>canvasGame
);
var _index = require("../data/index");
const skyNode = document.querySelector("#sky");
skyNode.width = _index.WIDTH;
skyNode.height = _index.HEIGHT;
const canvasSky = skyNode.getContext("2d");
const gameNode = document.querySelector("#game");
gameNode.width = _index.WIDTH;
gameNode.height = _index.HEIGHT;
const canvasGame = gameNode.getContext("2d");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../data/index":"f843F"}],"f843F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COLORS", ()=>COLORS
);
parcelHelpers.export(exports, "COUNTER_RADIUSES", ()=>COUNTER_RADIUSES
);
parcelHelpers.export(exports, "FLOOR_HEIGHT", ()=>FLOOR_HEIGHT
);
parcelHelpers.export(exports, "HEIGHT", ()=>HEIGHT
);
parcelHelpers.export(exports, "MAX_FLAKES", ()=>MAX_FLAKES
);
parcelHelpers.export(exports, "WIDTH", ()=>WIDTH
);
const COLORS = {
    GREEN: "#42f462",
    SOFT_GREEN: "#b5f441",
    WHITE: "#fff",
    RED: "#e00d2d",
    SKY_BLUE: "#102a54",
    SNOW_WHITE: "#F7F4FA"
};
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
const FLOOR_HEIGHT = 90;
const HEIGHT = window.innerHeight;
const MAX_FLAKES = 100;
const WIDTH = window.innerWidth;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gei8j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playAudio", ()=>playAudio
);
function playAudio(audio, timeout = 2000) {
    audio.play();
    setTimeout(()=>{
        audio.pause();
        audio.currentTime = 0;
    }, timeout);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lKOZb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scoreBox", ()=>scoreBox
);
parcelHelpers.export(exports, "getScoreColor", ()=>getScoreColor
);
parcelHelpers.export(exports, "playAudioBasedOnScore", ()=>playAudioBasedOnScore
);
var _index = require("../canvas/index");
var _audio = require("../data/audio");
var _index1 = require("../data/index");
var _audio1 = require("../engine/audio");
var _globalState = require("../global-state");
let zoomInterval = null;
let scoreBox = {
    flashInterval: null,
    visible: true,
    zoom () {
        let count = 0;
        zoomInterval = setInterval(()=>{
            _globalState.updateScoreRadius(_index1.COUNTER_RADIUSES[count]);
            count++;
            if (count === _index1.COUNTER_RADIUSES.length) clearInterval(zoomInterval);
        }, 50);
    },
    flash () {
        let count = 0;
        this.flashInterval = setInterval(()=>{
            scoreBox.visible = !scoreBox.visible;
            count++;
            if (count === 6) {
                clearInterval(scoreBox.flashInterval);
                scoreBox.visible = true;
            }
        }, 150);
    },
    stopFlash () {
        this.flashInterval = null;
        this.visible = true;
    },
    update (score) {
        if (this.visible) {
            _index.canvasGame.beginPath();
            _index.canvasGame.arc(_index1.WIDTH - 115, 120, _globalState.radius, 0, 2 * Math.PI);
            _index.canvasGame.lineWidth = 6;
            _index.canvasGame.stroke();
            _index.canvasGame.font = "bold 70px sans-serif";
            _index.canvasGame.fillStyle = _index1.COLORS.WHITE;
            _index.canvasGame.textAlign = "center";
            _index.canvasGame.textBaseline = "middle";
            _index.canvasGame.fillText(score.toString(), _index1.WIDTH - 115, 120);
            _index.canvasGame.strokeStyle = getScoreColor(score);
            playAudioBasedOnScore(score);
            _index.canvasGame.closePath();
        }
    }
};
function getScoreColor(score) {
    if (score > 15) return _index1.COLORS.GREEN;
    if (score >= 10) return _index1.COLORS.SOFT_GREEN;
    if (score > 5) return _index1.COLORS.WHITE;
    return _index1.COLORS.RED;
}
function playAudioBasedOnScore(score) {
    if (score <= 0) _audio1.playAudio(_audio.laughLow);
    if (score === 10) _audio1.playAudio(_audio.laugh);
    if (score === 15) _audio1.playAudio(_audio.goodBoy, 2500);
    if (score === 20) _audio1.playAudio(_audio.merry);
}

},{"../global-state":"6Ocq5","../data/audio":"9IypU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../canvas/index":"6Bx9b","../data/index":"f843F","../engine/audio":"gei8j"}],"3x1U5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "snow", ()=>snow
);
var _index = require("./index");
var _index1 = require("../data/index");
var _images = require("../data/images");
const snow = {
    x: 0,
    y: _index1.HEIGHT - 235,
    width: _index1.WIDTH,
    height: 300,
    draw () {
        _index.canvasGame.drawImage(_images.snowImg, this.x, this.y, this.width, this.height);
    }
};

},{"./index":"6Bx9b","../data/index":"f843F","../data/images":"1tFbn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l1ME9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "santa", ()=>santa
);
var _index = require("../canvas/index");
var _images = require("../data/images");
var _index1 = require("../data/index");
const santa = {
    x: 300,
    y: _index1.HEIGHT - 223,
    width: 150,
    height: 150,
    spriteX: 0,
    spriteY: 450,
    image: _images.santaImg,
    walkInterval: null,
    flashInterval: null,
    visible: true,
    draw () {
        if (this.visible) _index.canvasGame.drawImage(this.image, this.spriteX, this.spriteY, this.width, this.height, this.x, this.y, this.width, this.height);
    },
    flash () {
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
    stopFlash () {
        clearInterval(this.flashInterval);
        this.visible = true;
    },
    stopWalk () {
        clearInterval(this.walkInterval);
        this.walkInterval = null;
        this.spriteX = 0;
        this.spriteY = 450;
    },
    reset () {
        this.x = 300;
        this.y = _index1.HEIGHT - 223;
        this.flashInterval = null;
        this.stopWalk();
    },
    walk () {
        if (this.walkInterval) return null;
        this.walkInterval = setInterval(()=>{
            this.spriteX += 150;
            if (this.spriteX === 600) {
                this.spriteX = 0;
                this.spriteY += 150;
                if (this.spriteY === 600) this.spriteY = 0;
            }
        }, 75);
    }
};

},{"../data/images":"1tFbn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../canvas/index":"6Bx9b","../data/index":"f843F"}],"lgQH4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSky", ()=>animateSky
);
var _index = require("./index");
var _index1 = require("../data/index");
const flakes = [
    ...Array(_index1.MAX_FLAKES)
].map((_)=>({
        x: Math.random() * _index1.WIDTH,
        y: Math.random() * _index1.HEIGHT,
        radius: Math.random() * 5 + 2,
        density: Math.random() + 1
    })
);
let angle = 0;
function moveFlakes() {
    angle += 0.01;
    flakes.forEach((flake, i)=>{
        flake.y += Math.pow(flake.density, 2) + 1, flake.x += Math.sin(angle) * 2;
        if (flake.y > _index1.HEIGHT - _index1.FLOOR_HEIGHT) flakes[i] = {
            x: Math.random() * _index1.WIDTH,
            y: 0,
            radius: flake.radius,
            density: flake.density
        };
    });
}
function drawFlakes() {
    _index.canvasSky.clearRect(0, 0, _index1.WIDTH, _index1.HEIGHT);
    _index.canvasSky.fillStyle = _index1.COLORS.WHITE;
    _index.canvasSky.beginPath();
    flakes.forEach((flake)=>{
        _index.canvasSky.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
        _index.canvasSky.moveTo(flake.x, flake.y);
    });
    _index.canvasSky.fill();
    moveFlakes();
}
function animateSky() {
    setInterval(drawFlakes, 25);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./index":"6Bx9b","../data/index":"f843F"}],"puiT9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initControls", ()=>initControls
);
var _images = require("../data/images");
var _globalState = require("../global-state");
var _angry = require("../letters/angry");
var _index = require("../letters/index");
var _index1 = require("../santa/index");
function initControls() {
    document.onkeydown = (event)=>{
        switch(event.keyCode){
            case 13:
                restart();
                break;
        }
        if (_globalState.score >= 20 || _globalState.score <= 0) return null;
        _index1.santa.walk();
        switch(event.keyCode){
            case 37:
                _index1.santa.image = _images.santaReverse;
                _index1.santa.x -= 20;
                break;
            case 39:
                _index1.santa.image = _images.santaImg;
                _index1.santa.x += 20;
                break;
        }
    };
    document.onkeyup = ()=>{
        _index1.santa.stopWalk();
    };
}
function restart() {
    _globalState.updateScore(8);
    _index1.santa.reset();
    _angry.refillAngryLetters();
    _index.refillLetters();
}

},{"../global-state":"6Ocq5","../data/images":"1tFbn","../letters/angry":"guRhh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../letters/index":"jRKZy","../santa/index":"l1ME9"}]},["dSo4d","2RQX4"], "2RQX4", "parcelRequireaedd")

//# sourceMappingURL=index.edcf2fcb.js.map
