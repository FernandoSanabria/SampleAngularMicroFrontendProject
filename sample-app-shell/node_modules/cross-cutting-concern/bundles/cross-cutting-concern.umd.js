(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('cross-cutting-concern', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['cross-cutting-concern'] = {}, global.ng.core, global.rxjs));
}(this, (function (exports, i0, rxjs) { 'use strict';

    var InjectionTokens = /** @class */ (function () {
        function InjectionTokens() {
        }
        return InjectionTokens;
    }());
    InjectionTokens.messagingServiceInjectionToken = new i0.InjectionToken('MessagingService');

    var MessagingService = /** @class */ (function () {
        function MessagingService() {
            // Observable Source
            this.messageToFeature1Source = new rxjs.BehaviorSubject(undefined);
            // Observable Streams
            this.messageToFeature1$ = this.messageToFeature1Source.asObservable();
        }
        // Message Commands
        MessagingService.prototype.messageToFeature1 = function (message) {
            this.messageToFeature1Source.next(message);
        };
        return MessagingService;
    }());
    MessagingService.ɵfac = function MessagingService_Factory(t) { return new (t || MessagingService)(); };
    MessagingService.ɵprov = i0.ɵɵdefineInjectable({ token: MessagingService, factory: MessagingService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessagingService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var MessageBusModule = /** @class */ (function () {
        function MessageBusModule() {
        }
        MessageBusModule.forRoot = function () {
            return {
                ngModule: MessageBusModule,
                providers: [
                    {
                        provide: InjectionTokens.messagingServiceInjectionToken,
                        useClass: MessagingService
                    }
                ]
            };
        };
        return MessageBusModule;
    }());
    MessageBusModule.ɵmod = i0.ɵɵdefineNgModule({ type: MessageBusModule });
    MessageBusModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MessageBusModule_Factory(t) { return new (t || MessageBusModule)(); } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageBusModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: []
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of cross-cutting-concern
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InjectionTokens = InjectionTokens;
    exports.MessageBusModule = MessageBusModule;
    exports.MessagingService = MessagingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cross-cutting-concern.umd.js.map
