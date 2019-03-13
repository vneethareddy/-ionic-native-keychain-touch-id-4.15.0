var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name Keychain Touch Id
 * @description
 * A cordova plugin adding the iOS TouchID / Android fingerprint to your
 * app and allowing you to store a password securely in the device keychain.
 *
 * @usage
 * ```typescript
 * import { KeychainTouchId } from '@ionic-native/keychain-touch-id';
 *
 *
 * constructor(private keychainTouchId: KeychainTouchId) { }
 *
 * ...
 *
 *
 * this.keychainTouchId.isAvailable()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var KeychainTouchId = (function (_super) {
    __extends(KeychainTouchId, _super);
    function KeychainTouchId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if Touch ID / Fingerprint is supported by the device
     * @return {Promise<any>} Returns a promise that resolves when there is hardware support
     */
    /**
       * Check if Touch ID / Fingerprint is supported by the device
       * @return {Promise<any>} Returns a promise that resolves when there is hardware support
       */
    KeychainTouchId.prototype.isAvailable = /**
       * Check if Touch ID / Fingerprint is supported by the device
       * @return {Promise<any>} Returns a promise that resolves when there is hardware support
       */
    function () {
        return;
    };
    /**
     * Encrypts and Saves a password under the key in the device keychain, which can be retrieved after
     * successful authentication using fingerprint
     * @param key {string} the key you want to store
     * @param password {string} the password you want to encrypt and store
     * @return {Promise<any>} Returns a promise that resolves when there is a result
     */
    /**
       * Encrypts and Saves a password under the key in the device keychain, which can be retrieved after
       * successful authentication using fingerprint
       * @param key {string} the key you want to store
       * @param password {string} the password you want to encrypt and store
       * @return {Promise<any>} Returns a promise that resolves when there is a result
       */
    KeychainTouchId.prototype.save = /**
       * Encrypts and Saves a password under the key in the device keychain, which can be retrieved after
       * successful authentication using fingerprint
       * @param key {string} the key you want to store
       * @param password {string} the password you want to encrypt and store
       * @return {Promise<any>} Returns a promise that resolves when there is a result
       */
    function (key, password) { return; };
    /**
     * Opens the fingerprint dialog, for the given key, showing an additional message. Promise will resolve
     * with the password stored in keychain or will resolve an error code, where -1 indicated not available.
     * @param key {string} the key you want to retrieve from keychain
     * @param message {string} a message to the user
     * @return {Promise<any>} Returns a promise that resolves when the key value is successfully retrieved or an error
     */
    /**
       * Opens the fingerprint dialog, for the given key, showing an additional message. Promise will resolve
       * with the password stored in keychain or will resolve an error code, where -1 indicated not available.
       * @param key {string} the key you want to retrieve from keychain
       * @param message {string} a message to the user
       * @return {Promise<any>} Returns a promise that resolves when the key value is successfully retrieved or an error
       */
    KeychainTouchId.prototype.verify = /**
       * Opens the fingerprint dialog, for the given key, showing an additional message. Promise will resolve
       * with the password stored in keychain or will resolve an error code, where -1 indicated not available.
       * @param key {string} the key you want to retrieve from keychain
       * @param message {string} a message to the user
       * @return {Promise<any>} Returns a promise that resolves when the key value is successfully retrieved or an error
       */
    function (key, message) { return; };
    /**
     * Checks if there is a password stored within the keychain for the given key.
     * @param key {string} the key you want to check from keychain
     * @return {Promise<any>} Returns a promise that resolves with success if the key is available or failure if key is not.
     */
    /**
       * Checks if there is a password stored within the keychain for the given key.
       * @param key {string} the key you want to check from keychain
       * @return {Promise<any>} Returns a promise that resolves with success if the key is available or failure if key is not.
       */
    KeychainTouchId.prototype.has = /**
       * Checks if there is a password stored within the keychain for the given key.
       * @param key {string} the key you want to check from keychain
       * @return {Promise<any>} Returns a promise that resolves with success if the key is available or failure if key is not.
       */
    function (key) { return; };
    /**
     * Deletes the password stored under given key from the keychain.
     * @param key {string} the key you want to delete from keychain
     * @return {Promise<any>} Returns a promise that resolves with success if the key is deleted or failure if key is not
     */
    /**
       * Deletes the password stored under given key from the keychain.
       * @param key {string} the key you want to delete from keychain
       * @return {Promise<any>} Returns a promise that resolves with success if the key is deleted or failure if key is not
       */
    KeychainTouchId.prototype.delete = /**
       * Deletes the password stored under given key from the keychain.
       * @param key {string} the key you want to delete from keychain
       * @return {Promise<any>} Returns a promise that resolves with success if the key is deleted or failure if key is not
       */
    function (key) { return; };
    /**
     * Sets the language of the fingerprint dialog
     * @param locale {string} locale subtag from [this list](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
     */
    /**
       * Sets the language of the fingerprint dialog
       * @param locale {string} locale subtag from [this list](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
       */
    KeychainTouchId.prototype.setLocale = /**
       * Sets the language of the fingerprint dialog
       * @param locale {string} locale subtag from [this list](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
       */
    function (locale) { };
    KeychainTouchId.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], KeychainTouchId.prototype, "isAvailable", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], KeychainTouchId.prototype, "save", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], KeychainTouchId.prototype, "verify", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], KeychainTouchId.prototype, "has", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], KeychainTouchId.prototype, "delete", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], KeychainTouchId.prototype, "setLocale", null);
    /**
     * @name Keychain Touch Id
     * @description
     * A cordova plugin adding the iOS TouchID / Android fingerprint to your
     * app and allowing you to store a password securely in the device keychain.
     *
     * @usage
     * ```typescript
     * import { KeychainTouchId } from '@ionic-native/keychain-touch-id';
     *
     *
     * constructor(private keychainTouchId: KeychainTouchId) { }
     *
     * ...
     *
     *
     * this.keychainTouchId.isAvailable()
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    KeychainTouchId = __decorate([
        Plugin({
            pluginName: 'KeychainTouchId',
            plugin: 'cordova-plugin-keychain-touch-id',
            pluginRef: 'plugins.touchid',
            repo: 'https://github.com/sjhoeksma/cordova-plugin-keychain-touch-id',
            platforms: ['Android', 'iOS']
        })
    ], KeychainTouchId);
    return KeychainTouchId;
}(IonicNativePlugin));
export { KeychainTouchId };
//# sourceMappingURL=index.js.map