import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { InjectionTokens } from 'cross-cutting-concern';
import * as i0 from "@angular/core";
import * as i1 from "./feature1.service";
import * as i2 from "@angular/cdk/table";
import * as i3 from "@angular/common";
function Feature1Component_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 1 ");
    i0.ɵɵelementEnd();
} }
function Feature1Component_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.dataPoint1, " ");
} }
function Feature1Component_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 2 ");
    i0.ɵɵelementEnd();
} }
function Feature1Component_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r14.dataPoint2, " ");
} }
function Feature1Component_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 3 ");
    i0.ɵɵelementEnd();
} }
function Feature1Component_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r15.dataPoint3, " ");
} }
function Feature1Component_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 4 ");
    i0.ɵɵelementEnd();
} }
function Feature1Component_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r16.dataPoint4, " ");
} }
function Feature1Component_th_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 5 ");
    i0.ɵɵelementEnd();
} }
function Feature1Component_td_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r17.dataPoint5, " ");
} }
function Feature1Component_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
function Feature1Component_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 16);
} }
function Feature1Component_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Message received: ", ctx_r12.message, "");
} }
export class Feature1Component {
    constructor(feature1Service, injector) {
        this.feature1Service = feature1Service;
        this.injector = injector;
        this.messagingService = {};
        this.messageToFeature1Sub = {};
        this.message = null;
        this.displayedColumns = ['dataPoint1', 'dataPoint2', 'dataPoint3', 'dataPoint4', 'dataPoint5'];
        this.dataSource = {};
    }
    ngOnInit() {
        this.messagingService = this.injector.get(InjectionTokens.messagingServiceInjectionToken);
        this.messageToFeature1Sub = this.messagingService.messageToFeature1$.subscribe(x => this.handleMessageToFeature1(x));
        this.dataSource = new Feature1DataSource(this.feature1Service);
    }
    ngOnDestroy() {
        if (this.messageToFeature1Sub) {
            this.messageToFeature1Sub.unsubscribe();
        }
    }
    handleMessageToFeature1(message) {
        if (message) {
            this.message = JSON.stringify(message);
        }
    }
}
Feature1Component.ɵfac = function Feature1Component_Factory(t) { return new (t || Feature1Component)(i0.ɵɵdirectiveInject(i1.Feature1Service), i0.ɵɵdirectiveInject(i0.Injector)); };
Feature1Component.ɵcmp = i0.ɵɵdefineComponent({ type: Feature1Component, selectors: [["feature1-component"]], decls: 25, vars: 4, consts: [[1, "feature1"], [1, "feature1-header"], ["cdk-table", "", 3, "dataSource"], ["cdkColumnDef", "dataPoint1"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "dataPoint2"], ["cdkColumnDef", "dataPoint3"], ["cdkColumnDef", "dataPoint4"], ["cdkColumnDef", "dataPoint5"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [4, "ngIf"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function Feature1Component_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "b");
        i0.ɵɵtext(3, "Feature 1 Page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "table", 2);
        i0.ɵɵelementContainerStart(6, 3);
        i0.ɵɵtemplate(7, Feature1Component_th_7_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(8, Feature1Component_td_8_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 6);
        i0.ɵɵtemplate(10, Feature1Component_th_10_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(11, Feature1Component_td_11_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 7);
        i0.ɵɵtemplate(13, Feature1Component_th_13_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(14, Feature1Component_td_14_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(15, 8);
        i0.ɵɵtemplate(16, Feature1Component_th_16_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(17, Feature1Component_td_17_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(18, 9);
        i0.ɵɵtemplate(19, Feature1Component_th_19_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(20, Feature1Component_td_20_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(21, Feature1Component_tr_21_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(22, Feature1Component_tr_22_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div");
        i0.ɵɵtemplate(24, Feature1Component_span_24_Template, 2, 1, "span", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.message);
    } }, directives: [i2.CdkTable, i2.CdkColumnDef, i2.CdkHeaderCellDef, i2.CdkCellDef, i2.CdkHeaderRowDef, i2.CdkRowDef, i3.NgIf, i2.CdkHeaderCell, i2.CdkCell, i2.CdkHeaderRow, i2.CdkRow], styles: [".feature1[_ngcontent-%COMP%]{padding:20px}.feature1[_ngcontent-%COMP%]   .feature1-header[_ngcontent-%COMP%]{margin-bottom:30px;background-color:#f0f8ff}.feature1[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]{width:70%}.feature1[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-header-row[_ngcontent-%COMP%]{background-color:#f0f8ff}.feature1[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-row[_ngcontent-%COMP%]{background-color:beige}.feature1[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-cell[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Feature1Component, [{
        type: Component,
        args: [{
                selector: 'feature1-component',
                templateUrl: './feature1.component.html',
                styleUrls: ['./feature1.component.scss']
            }]
    }], function () { return [{ type: i1.Feature1Service }, { type: i0.Injector }]; }, null); })();
export class Feature1DataSource extends DataSource {
    constructor(feature1Service) {
        super();
        this.feature1Service = feature1Service;
    }
    connect() {
        return this.feature1Service.getFeature1Data();
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZTEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvc2FtcGxlLWZlYXR1cmUxL3NyYy9saWIvZmVhdHVyZTEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vcHJvamVjdHMvc2FtcGxlLWZlYXR1cmUxL3NyYy9saWIvZmVhdHVyZTEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3RELE9BQU8sRUFBd0MsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztJQ0F0Riw4QkFBc0M7SUFBQyw4QkFBYTtJQUFBLGlCQUFLOzs7SUFDekQsOEJBQXVDO0lBQUMsWUFBdUI7SUFBQSxpQkFBSzs7O0lBQTVCLGVBQXVCO0lBQXZCLHVEQUF1Qjs7O0lBSS9ELDhCQUFzQztJQUFDLDhCQUFhO0lBQUEsaUJBQUs7OztJQUN6RCw4QkFBdUM7SUFBQyxZQUF1QjtJQUFBLGlCQUFLOzs7SUFBNUIsZUFBdUI7SUFBdkIsdURBQXVCOzs7SUFJL0QsOEJBQXNDO0lBQUMsOEJBQWE7SUFBQSxpQkFBSzs7O0lBQ3pELDhCQUF1QztJQUFDLFlBQXVCO0lBQUEsaUJBQUs7OztJQUE1QixlQUF1QjtJQUF2Qix1REFBdUI7OztJQUkvRCw4QkFBc0M7SUFBQyw4QkFBYTtJQUFBLGlCQUFLOzs7SUFDekQsOEJBQXVDO0lBQUMsWUFBdUI7SUFBQSxpQkFBSzs7O0lBQTVCLGVBQXVCO0lBQXZCLHVEQUF1Qjs7O0lBSS9ELDhCQUFzQztJQUFDLDhCQUFhO0lBQUEsaUJBQUs7OztJQUN6RCw4QkFBdUM7SUFBQyxZQUF1QjtJQUFBLGlCQUFLOzs7SUFBNUIsZUFBdUI7SUFBdkIsdURBQXVCOzs7SUFHakUseUJBQTREOzs7SUFDNUQseUJBQWtFOzs7SUFJ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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmUxU2VydmljZSB9IGZyb20gJy4vZmVhdHVyZTEuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IElGZWF0dXJlMURhdGFJdGVtIH0gZnJvbSAnLi9mZWF0dXJlMS5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1lc3NhZ2luZ1NlcnZpY2UsIElNZXNzYWdlVG9GZWF0dXJlMSwgSW5qZWN0aW9uVG9rZW5zIH0gZnJvbSAnY3Jvc3MtY3V0dGluZy1jb25jZXJuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmVhdHVyZTEtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZlYXR1cmUxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZTEuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlMUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbWVzc2FnaW5nU2VydmljZTogTWVzc2FnaW5nU2VydmljZSA9IHt9IGFzIE1lc3NhZ2luZ1NlcnZpY2U7XG4gIG1lc3NhZ2VUb0ZlYXR1cmUxU3ViOiBTdWJzY3JpcHRpb24gPSB7fSBhcyBTdWJzY3JpcHRpb247XG4gIG1lc3NhZ2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnZGF0YVBvaW50MScsICdkYXRhUG9pbnQyJywgJ2RhdGFQb2ludDMnLCAnZGF0YVBvaW50NCcsICdkYXRhUG9pbnQ1J107XG4gIGRhdGFTb3VyY2U6IEZlYXR1cmUxRGF0YVNvdXJjZSA9IHt9IGFzIEZlYXR1cmUxRGF0YVNvdXJjZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZlYXR1cmUxU2VydmljZTogRmVhdHVyZTFTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2luZ1NlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldDxhbnk+KEluamVjdGlvblRva2Vucy5tZXNzYWdpbmdTZXJ2aWNlSW5qZWN0aW9uVG9rZW4pO1xuICAgIHRoaXMubWVzc2FnZVRvRmVhdHVyZTFTdWIgPSB0aGlzLm1lc3NhZ2luZ1NlcnZpY2UubWVzc2FnZVRvRmVhdHVyZTEkLnN1YnNjcmliZShcbiAgICAgIHggPT4gdGhpcy5oYW5kbGVNZXNzYWdlVG9GZWF0dXJlMSh4KVxuICAgICk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IEZlYXR1cmUxRGF0YVNvdXJjZSh0aGlzLmZlYXR1cmUxU2VydmljZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgIGlmICh0aGlzLm1lc3NhZ2VUb0ZlYXR1cmUxU3ViKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VUb0ZlYXR1cmUxU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNZXNzYWdlVG9GZWF0dXJlMShtZXNzYWdlOiBJTWVzc2FnZVRvRmVhdHVyZTEgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlMURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPElGZWF0dXJlMURhdGFJdGVtPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmVhdHVyZTFTZXJ2aWNlOiBGZWF0dXJlMVNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxJRmVhdHVyZTFEYXRhSXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZTFTZXJ2aWNlLmdldEZlYXR1cmUxRGF0YSgpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHt9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmVhdHVyZTFcIj5cbiAgPGRpdiBjbGFzcz1cImZlYXR1cmUxLWhlYWRlclwiPjxiPkZlYXR1cmUgMSBQYWdlPC9iPjwvZGl2PlxuICA8ZGl2PlxuICAgIDx0YWJsZSBjZGstdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJkYXRhUG9pbnQxXCI+XG4gICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IERhdGEgUG9pbnQgMSA8L3RoPlxuICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZGF0YVBvaW50MX19IDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJkYXRhUG9pbnQyXCI+XG4gICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IERhdGEgUG9pbnQgMiA8L3RoPlxuICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZGF0YVBvaW50Mn19IDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJkYXRhUG9pbnQzXCI+XG4gICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IERhdGEgUG9pbnQgMyA8L3RoPlxuICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZGF0YVBvaW50M319IDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJkYXRhUG9pbnQ0XCI+XG4gICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IERhdGEgUG9pbnQgNCA8L3RoPlxuICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZGF0YVBvaW50NH19IDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJkYXRhUG9pbnQ1XCI+XG4gICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IERhdGEgUG9pbnQgNSA8L3RoPlxuICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuZGF0YVBvaW50NX19IDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPHRyIGNkay1oZWFkZXItcm93ICpjZGtIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgIDx0ciBjZGstcm93ICpjZGtSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPHNwYW4gKm5nSWY9XCJtZXNzYWdlXCI+TWVzc2FnZSByZWNlaXZlZDoge3sgbWVzc2FnZSB9fTwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==