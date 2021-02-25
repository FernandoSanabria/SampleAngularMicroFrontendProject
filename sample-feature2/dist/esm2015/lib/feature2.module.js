import { NgModule } from '@angular/core';
import { Feature2SubComponent } from './feature2-sub/feature2-sub.component';
import { Feature2Component } from './feature2.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FakeBackendInterceptor } from './mocks/fake-backend.interceptor';
import { Feature2Service } from './feature2.service';
import { CdkTableModule } from '@angular/cdk/table';
import { OverlayModule } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export class Feature2Module {
}
Feature2Module.ɵmod = i0.ɵɵdefineNgModule({ type: Feature2Module });
Feature2Module.ɵinj = i0.ɵɵdefineInjector({ factory: function Feature2Module_Factory(t) { return new (t || Feature2Module)(); }, providers: [
        Feature2Service,
        // Providing fake backend interceptor for simulating api calls. Remove this before using an actual api
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FakeBackendInterceptor,
            multi: true
        }
    ], imports: [[
            HttpClientModule,
            CdkTableModule,
            OverlayModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Feature2Module, { declarations: [Feature2SubComponent, Feature2Component], imports: [HttpClientModule,
        CdkTableModule,
        OverlayModule], exports: [Feature2SubComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Feature2Module, [{
        type: NgModule,
        args: [{
                declarations: [Feature2SubComponent, Feature2Component],
                imports: [
                    HttpClientModule,
                    CdkTableModule,
                    OverlayModule
                ],
                providers: [
                    Feature2Service,
                    // Providing fake backend interceptor for simulating api calls. Remove this before using an actual api
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: FakeBackendInterceptor,
                        multi: true
                    }
                ],
                exports: [
                    Feature2SubComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZTIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvc2FtcGxlLWZlYXR1cmUyL3NyYy9saWIvZmVhdHVyZTIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBc0JyRCxNQUFNLE9BQU8sY0FBYzs7a0RBQWQsY0FBYzsyR0FBZCxjQUFjLG1CQWJkO1FBQ1QsZUFBZTtRQUNmLHNHQUFzRztRQUN0RztZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsWUFiUTtZQUNQLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsYUFBYTtTQUNkO3dGQWNVLGNBQWMsbUJBbkJWLG9CQUFvQixFQUFFLGlCQUFpQixhQUVwRCxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGFBQWEsYUFZYixvQkFBb0I7dUZBR1gsY0FBYztjQXBCMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLGlCQUFpQixDQUFDO2dCQUN2RCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLGFBQWE7aUJBQ2Q7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2Ysc0dBQXNHO29CQUN0Rzt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmUyU3ViQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlMi1zdWIvZmVhdHVyZTItc3ViLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlMkNvbXBvbmVudCB9IGZyb20gJy4vZmVhdHVyZTIuY29tcG9uZW50JztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRmFrZUJhY2tlbmRJbnRlcmNlcHRvciB9IGZyb20gJy4vbW9ja3MvZmFrZS1iYWNrZW5kLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEZlYXR1cmUyU2VydmljZSB9IGZyb20gJy4vZmVhdHVyZTIuc2VydmljZSc7XG5pbXBvcnQgeyBDZGtUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGZWF0dXJlMlN1YkNvbXBvbmVudCwgRmVhdHVyZTJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEZlYXR1cmUyU2VydmljZSxcbiAgICAvLyBQcm92aWRpbmcgZmFrZSBiYWNrZW5kIGludGVyY2VwdG9yIGZvciBzaW11bGF0aW5nIGFwaSBjYWxscy4gUmVtb3ZlIHRoaXMgYmVmb3JlIHVzaW5nIGFuIGFjdHVhbCBhcGlcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBGYWtlQmFja2VuZEludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGZWF0dXJlMlN1YkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmUyTW9kdWxlIHsgfVxuIl19