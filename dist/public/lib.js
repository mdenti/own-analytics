var an = (function () {
    var defines = {};
    var entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies: dependencies, factory: factory };
        entry[0] = name;
    }
    define("require", ["exports"], function (exports) {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: function (name) { return resolve(name); } });
    });
    define("api/specs", ["require", "exports"], function (require, exports) {
        "use strict";
        exports.__esModule = true;
    });
    define("public/lib", ["require", "exports"], function (require, exports) {
        "use strict";
        exports.__esModule = true;
        function send(eventBase, callback) {
            var eventDefaults = {
                type: 'event',
                category: '',
                action: '',
                label: '',
                url: '',
                referrer: ''
            };
            var event = Object.assign({}, eventDefaults, eventBase);
        }
        function an(command, data, callback) {
            switch (command) {
                case 'send':
                    send(data, callback);
                    break;
                default:
                    break;
            }
        }
        var existing = window.an;
        existing.q.forEach(function (args) {
            an.call(null, args);
        });
        exports["default"] = an;
    });
    
    'marker:entry';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            var dependencies = ['exports'];
            var factory = function (exports) {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module ', name, ' not found.'].join(''));
                }
            };
            return { dependencies: dependencies, factory: factory };
        }
    }
    var instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        var define = get_define(name);
        instances[name] = {};
        var dependencies = define.dependencies.map(function (name) { return resolve(name); });
        define.factory.apply(define, dependencies);
        var exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports["default"] : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();