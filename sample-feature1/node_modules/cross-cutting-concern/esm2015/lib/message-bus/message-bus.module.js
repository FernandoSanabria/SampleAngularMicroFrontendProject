import { NgModule } from '@angular/core';
import { MessagingService } from './messaging.service';
import { InjectionTokens } from './messaging.contract';
import * as i0 from "@angular/core";
export class MessageBusModule {
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
MessageBusModule.ɵmod = i0.ɵɵdefineNgModule({ type: MessageBusModule });
MessageBusModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MessageBusModule_Factory(t) { return new (t || MessageBusModule)(); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageBusModule, [{
        type: NgModule,
        args: [{
                declarations: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1idXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY3Jvc3MtY3V0dGluZy1jb25jZXJuL3NyYy9saWIvbWVzc2FnZS1idXMvbWVzc2FnZS1idXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFLdEQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZSxDQUFDLDhCQUE4QjtvQkFDdkQsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztvREFYVSxnQkFBZ0I7K0dBQWhCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBSDVCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsRUFBRTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWVzc2FnaW5nU2VydmljZSB9IGZyb20gJy4vbWVzc2FnaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW5zfSBmcm9tICcuL21lc3NhZ2luZy5jb250cmFjdCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW11cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ1c01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWVzc2FnZUJ1c01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWVzc2FnZUJ1c01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSW5qZWN0aW9uVG9rZW5zLm1lc3NhZ2luZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbixcbiAgICAgICAgICB1c2VDbGFzczogTWVzc2FnaW5nU2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19