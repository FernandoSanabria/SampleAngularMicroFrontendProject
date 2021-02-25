import { InjectionToken, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class InjectionTokens {
}
InjectionTokens.messagingServiceInjectionToken = new InjectionToken('MessagingService');

class MessagingService {
    constructor() {
        // Observable Source
        this.messageToFeature1Source = new BehaviorSubject(undefined);
        // Observable Streams
        this.messageToFeature1$ = this.messageToFeature1Source.asObservable();
    }
    // Message Commands
    messageToFeature1(message) {
        this.messageToFeature1Source.next(message);
    }
}
MessagingService.ɵfac = function MessagingService_Factory(t) { return new (t || MessagingService)(); };
MessagingService.ɵprov = ɵɵdefineInjectable({ token: MessagingService, factory: MessagingService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MessagingService, [{
        type: Injectable
    }], null, null); })();

class MessageBusModule {
    static forRoot() {
        return {
            ngModule: MessageBusModule,
            providers: [
                {
                    provide: InjectionTokens.messagingServiceInjectionToken,
                    useClass: MessagingService
                }
            ]
        };
    }
}
MessageBusModule.ɵmod = ɵɵdefineNgModule({ type: MessageBusModule });
MessageBusModule.ɵinj = ɵɵdefineInjector({ factory: function MessageBusModule_Factory(t) { return new (t || MessageBusModule)(); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MessageBusModule, [{
        type: NgModule,
        args: [{
                declarations: []
            }]
    }], null, null); })();

/*
 * Public API Surface of cross-cutting-concern
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InjectionTokens, MessageBusModule, MessagingService };
//# sourceMappingURL=cross-cutting-concern.js.map
