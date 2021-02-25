import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { Feature1Service } from './feature1.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { FakeBackendInterceptor } from './mocks/fake-backend.interceptor';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
export class Feature1Module {
}
Feature1Module.ɵmod = i0.ɵɵdefineNgModule({ type: Feature1Module });
Feature1Module.ɵinj = i0.ɵɵdefineInjector({ factory: function Feature1Module_Factory(t) { return new (t || Feature1Module)(); }, providers: [
        Feature1Service,
        // Providing fake backend interceptor for simulating api calls. Remove this before using an actual api
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FakeBackendInterceptor,
            multi: true
        }
    ], imports: [[
            CommonModule,
            HttpClientModule,
            CdkTableModule,
            MatTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Feature1Module, { declarations: [Feature1Component], imports: [CommonModule,
        HttpClientModule,
        CdkTableModule,
        MatTableModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Feature1Module, [{
        type: NgModule,
        args: [{
                declarations: [Feature1Component],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    CdkTableModule,
                    MatTableModule
                ],
                providers: [
                    Feature1Service,
                    // Providing fake backend interceptor for simulating api calls. Remove this before using an actual api
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: FakeBackendInterceptor,
                        multi: true
                    }
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZTEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvc2FtcGxlLWZlYXR1cmUxL3NyYy9saWIvZmVhdHVyZTEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFBOztBQXVCeEQsTUFBTSxPQUFPLGNBQWM7O2tEQUFkLGNBQWM7MkdBQWQsY0FBYyxtQkFWZDtRQUNULGVBQWU7UUFDZixzR0FBc0c7UUFDdEc7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLFlBZFE7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxjQUFjO1NBQ2Y7d0ZBV1UsY0FBYyxtQkFqQlYsaUJBQWlCLGFBRTlCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGNBQWM7dUZBWUwsY0FBYztjQWxCMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsY0FBYztpQkFDZjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsZUFBZTtvQkFDZixzR0FBc0c7b0JBQ3RHO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZlYXR1cmUxQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlMS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVhdHVyZTFTZXJ2aWNlIH0gZnJvbSAnLi9mZWF0dXJlMS5zZXJ2aWNlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHsgRmFrZUJhY2tlbmRJbnRlcmNlcHRvciB9IGZyb20gJy4vbW9ja3MvZmFrZS1iYWNrZW5kLmludGVyY2VwdG9yJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnXG5cblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ZlYXR1cmUxQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEZlYXR1cmUxU2VydmljZSxcbiAgICAvLyBQcm92aWRpbmcgZmFrZSBiYWNrZW5kIGludGVyY2VwdG9yIGZvciBzaW11bGF0aW5nIGFwaSBjYWxscy4gUmVtb3ZlIHRoaXMgYmVmb3JlIHVzaW5nIGFuIGFjdHVhbCBhcGlcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBGYWtlQmFja2VuZEludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZTFNb2R1bGUgeyB9XG4iXX0=