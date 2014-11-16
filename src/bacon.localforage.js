'use strict';

Bacon.localforage = {};

Bacon.localforage.INDEXEDDB = localforage.INDEXEDDB;
Bacon.localforage.WEBSQL = localforage.WEBSQL;
Bacon.localforage.LOCALSTORAGE = localforage.LOCALSTORAGE;

Bacon.localforage.setDriver = function setDriver(drivers) {
    return localforage.setDriver(drivers);
};

Bacon.localforage.config = function config(options) {
    return localforage.config(options);
};

Bacon.localforage.setItem = function setItem(key, value) {
    return Bacon.fromNodeCallback(localforage, 'setItem', key, value);
};

Bacon.localforage.getItem = function getItem(key) {
    return Bacon.fromNodeCallback(localforage, 'getItem', key);
};

Bacon.localforage.removeItem = function removeItem(key) {
    return Bacon.fromNodeCallback(localforage, 'removeItem', key);
};

Bacon.localforage.clear = function clear() {
    return Bacon.fromNodeCallback(localforage, 'clear');
};

Bacon.localforage.length = function length() {
    return Bacon.fromNodeCallback(localforage, 'length');
};

Bacon.localforage.key = function key(index) {
    return Bacon.fromNodeCallback(localforage, 'key', index);
};

Bacon.localforage.keys = function keys() {
    return Bacon.fromNodeCallback(localforage, 'keys');
};

module.exports = Bacon.localforage;
