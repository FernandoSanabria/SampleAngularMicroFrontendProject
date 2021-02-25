import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
function Feature2SubComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵtext(2, "Item 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "li");
    i0.ɵɵtext(4, "Item 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "li");
    i0.ɵɵtext(6, "Item 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class Feature2SubComponent {
    constructor() {
        this.isOpen = false;
    }
    ngOnInit() {
    }
}
Feature2SubComponent.ɵfac = function Feature2SubComponent_Factory(t) { return new (t || Feature2SubComponent)(); };
Feature2SubComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Feature2SubComponent, selectors: [["feature2-sub"]], decls: 5, vars: 3, consts: [[1, "feature2-sub"], ["mat-button", "", "cdkOverlayOrigin", "", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "example-list"]], template: function Feature2SubComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1, 2);
        i0.ɵɵlistener("click", function Feature2SubComponent_Template_button_click_1_listener() { return ctx.isOpen = !ctx.isOpen; });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, Feature2SubComponent_ng_template_4_Template, 7, 0, "ng-template", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Feature 2 sub component ", ctx.isOpen ? "Opened" : "Closed", "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOpen);
    } }, directives: [i1.CdkOverlayOrigin, i1.CdkConnectedOverlay], styles: [".example-list[_ngcontent-%COMP%]{width:100px;border:1px solid #ccc;border-radius:5px;background:#fff;text-align:center;padding:10px;margin:0}.example-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style-type:none;border-bottom:1px solid #8b8b8b;padding:8px 0}.example-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:last-child{border-bottom:none}.feature2-sub[_ngcontent-%COMP%]{margin-left:30px}.feature2-sub[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:medium}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Feature2SubComponent, [{
        type: Component,
        args: [{
                selector: 'feature2-sub',
                templateUrl: './feature2-sub.component.html',
                styleUrls: ['./feature2-sub.component.scss']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZTItc3ViLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NhbXBsZS1mZWF0dXJlMi9zcmMvbGliL2ZlYXR1cmUyLXN1Yi9mZWF0dXJlMi1zdWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2FtcGxlLWZlYXR1cmUyL3NyYy9saWIvZmVhdHVyZTItc3ViL2ZlYXR1cmUyLXN1Yi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0lDUTlDLDZCQUF5QjtJQUN2QiwwQkFBSTtJQUFBLHNCQUFNO0lBQUEsaUJBQUs7SUFDZiwwQkFBSTtJQUFBLHNCQUFNO0lBQUEsaUJBQUs7SUFDZiwwQkFBSTtJQUFBLHNCQUFNO0lBQUEsaUJBQUs7SUFDakIsaUJBQUs7O0FETFQsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQjtRQUZBLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFFQyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzt3RkFOVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1BqQyw4QkFBMEI7UUFDeEIsb0NBQTJGO1FBQXhFLDZIQUEwQjtRQUE4QyxZQUF3RDtRQUFBLGlCQUFTO1FBRTVKLHFGQVVjO1FBQ2hCLGlCQUFNOzs7UUFidUYsZUFBd0Q7UUFBeEQsdUZBQXdEO1FBSWpKLGVBQXFDO1FBQXJDLCtDQUFxQyx1Q0FBQTs7dUZERTVCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmVhdHVyZTItc3ViJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmUyLXN1Yi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZlYXR1cmUyLXN1Yi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmUyU3ViQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNPcGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZmVhdHVyZTItc3ViXCI+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiaXNPcGVuID0gIWlzT3BlblwiIGNka092ZXJsYXlPcmlnaW4gI3RyaWdnZXI9XCJjZGtPdmVybGF5T3JpZ2luXCI+RmVhdHVyZSAyIHN1YiBjb21wb25lbnQge3tpc09wZW4gPyBcIk9wZW5lZFwiIDogXCJDbG9zZWRcIn19PC9idXR0b24+XG4gIDwhLS0gVGhpcyB0ZW1wbGF0ZSBkaXNwbGF5cyB0aGUgb3ZlcmxheSBjb250ZW50IGFuZCBpcyBjb25uZWN0ZWQgdG8gdGhlIGJ1dHRvbiAtLT5cbiAgPG5nLXRlbXBsYXRlXG4gICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cInRyaWdnZXJcIlxuICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJpc09wZW5cIlxuICA+XG4gICAgPHVsIGNsYXNzPVwiZXhhbXBsZS1saXN0XCI+XG4gICAgICA8bGk+SXRlbSAxPC9saT5cbiAgICAgIDxsaT5JdGVtIDI8L2xpPlxuICAgICAgPGxpPkl0ZW0gMzwvbGk+XG4gICAgPC91bD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuIl19