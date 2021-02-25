import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { InjectionTokens } from 'cross-cutting-concern';
import * as i0 from "@angular/core";
import * as i1 from "./feature2.service";
import * as i2 from "@angular/cdk/table";
function Feature2Component_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 1 ");
    i0.ɵɵelementEnd();
} }
function Feature2Component_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.dataPoint1, " ");
} }
function Feature2Component_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 2 ");
    i0.ɵɵelementEnd();
} }
function Feature2Component_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.dataPoint2, " ");
} }
function Feature2Component_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 3 ");
    i0.ɵɵelementEnd();
} }
function Feature2Component_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r14.dataPoint3, " ");
} }
function Feature2Component_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 4 ");
    i0.ɵɵelementEnd();
} }
function Feature2Component_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r15.dataPoint4, " ");
} }
function Feature2Component_th_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Data Point 5 ");
    i0.ɵɵelementEnd();
} }
function Feature2Component_td_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r16.dataPoint5, " ");
} }
function Feature2Component_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
function Feature2Component_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 16);
} }
export class Feature2Component {
    constructor(feature2Service, injector) {
        this.feature2Service = feature2Service;
        this.injector = injector;
        this.messagingService = {};
        this.displayedColumns = ['dataPoint1', 'dataPoint2', 'dataPoint3', 'dataPoint4', 'dataPoint5'];
        this.dataSource = {};
    }
    ngOnInit() {
        this.messagingService = this.injector.get(InjectionTokens.messagingServiceInjectionToken);
        this.dataSource = new Feature2DataSource(this.feature2Service);
    }
    onMessageButtonClick() {
        this.messagingService.messageToFeature1({
            messageText: 'Message from feature1',
            messageTime: new Date()
        });
    }
}
Feature2Component.ɵfac = function Feature2Component_Factory(t) { return new (t || Feature2Component)(i0.ɵɵdirectiveInject(i1.Feature2Service), i0.ɵɵdirectiveInject(i0.Injector)); };
Feature2Component.ɵcmp = i0.ɵɵdefineComponent({ type: Feature2Component, selectors: [["app-feature2"]], decls: 26, vars: 3, consts: [[1, "feature2"], [1, "feature2-header"], ["cdk-table", "", 3, "dataSource"], ["cdkColumnDef", "dataPoint1"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "dataPoint2"], ["cdkColumnDef", "dataPoint3"], ["cdkColumnDef", "dataPoint4"], ["cdkColumnDef", "dataPoint5"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["mat-button", "", 3, "click"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function Feature2Component_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "b");
        i0.ɵɵtext(3, "Feature 2 Page");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementStart(5, "table", 2);
        i0.ɵɵelementContainerStart(6, 3);
        i0.ɵɵtemplate(7, Feature2Component_th_7_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(8, Feature2Component_td_8_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 6);
        i0.ɵɵtemplate(10, Feature2Component_th_10_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(11, Feature2Component_td_11_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 7);
        i0.ɵɵtemplate(13, Feature2Component_th_13_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(14, Feature2Component_td_14_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(15, 8);
        i0.ɵɵtemplate(16, Feature2Component_th_16_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(17, Feature2Component_td_17_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(18, 9);
        i0.ɵɵtemplate(19, Feature2Component_th_19_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(20, Feature2Component_td_20_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(21, Feature2Component_tr_21_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(22, Feature2Component_tr_22_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div");
        i0.ɵɵelementStart(24, "button", 12);
        i0.ɵɵlistener("click", function Feature2Component_Template_button_click_24_listener() { return ctx.onMessageButtonClick(); });
        i0.ɵɵtext(25, "Send Message To Feature 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
    } }, directives: [i2.CdkTable, i2.CdkColumnDef, i2.CdkHeaderCellDef, i2.CdkCellDef, i2.CdkHeaderRowDef, i2.CdkRowDef, i2.CdkHeaderCell, i2.CdkCell, i2.CdkHeaderRow, i2.CdkRow], styles: [".feature2[_ngcontent-%COMP%]{padding:20px}.feature2[_ngcontent-%COMP%]   .feature2-header[_ngcontent-%COMP%]{margin-bottom:30px;background-color:#f0f8ff}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]{width:70%}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-header-row[_ngcontent-%COMP%]{background-color:#f0f8ff}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-row[_ngcontent-%COMP%]{background-color:beige}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-cell[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Feature2Component, [{
        type: Component,
        args: [{
                selector: 'app-feature2',
                templateUrl: './feature2.component.html',
                styleUrls: ['./feature2.component.scss']
            }]
    }], function () { return [{ type: i1.Feature2Service }, { type: i0.Injector }]; }, null); })();
export class Feature2DataSource extends DataSource {
    constructor(feature2Service) {
        super();
        this.feature2Service = feature2Service;
    }
    connect() {
        return this.feature2Service.getFeature2Data();
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvc2FtcGxlLWZlYXR1cmUyL3NyYy9saWIvZmVhdHVyZTIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vcHJvamVjdHMvc2FtcGxlLWZlYXR1cmUyL3NyYy9saWIvZmVhdHVyZTIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSXRELE9BQU8sRUFBb0IsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0lDQWxFLDhCQUFzQztJQUFDLDhCQUFhO0lBQUEsaUJBQUs7OztJQUN6RCw4QkFBdUM7SUFBQyxZQUF1QjtJQUFBLGlCQUFLOzs7SUFBNUIsZUFBdUI7SUFBdkIsdURBQXVCOzs7SUFJL0QsOEJBQXNDO0lBQUMsOEJBQWE7SUFBQSxpQkFBSzs7O0lBQ3pELDhCQUF1QztJQUFDLFlBQXVCO0lBQUEsaUJBQUs7OztJQUE1QixlQUF1QjtJQUF2Qix1REFBdUI7OztJQUkvRCw4QkFBc0M7SUFBQyw4QkFBYTtJQUFBLGlCQUFLOzs7SUFDekQsOEJBQXVDO0lBQUMsWUFBdUI7SUFBQSxpQkFBSzs7O0lBQTVCLGVBQXVCO0lBQXZCLHVEQUF1Qjs7O0lBSS9ELDhCQUFzQztJQUFDLDhCQUFhO0lBQUEsaUJBQUs7OztJQUN6RCw4QkFBdUM7SUFBQyxZQUF1QjtJQUFBLGlCQUFLOzs7SUFBNUIsZUFBdUI7SUFBdkIsdURBQXVCOzs7SUFJL0QsOEJBQXNDO0lBQUMsOEJBQWE7SUFBQSxpQkFBSzs7O0lBQ3pELDhCQUF1QztJQUFDLFlBQXVCO0lBQUEsaUJBQUs7OztJQUE1QixlQUF1QjtJQUF2Qix1REFBdUI7OztJQUdqRSx5QkFBNEQ7OztJQUM1RCx5QkFBa0U7O0FEbEJ4RSxNQUFNLE9BQU8saUJBQWlCO0lBSzVCLFlBQW9CLGVBQWdDLEVBQVUsUUFBa0I7UUFBNUQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUpoRixxQkFBZ0IsR0FBcUIsRUFBc0IsQ0FBQztRQUM1RCxxQkFBZ0IsR0FBYSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNwRyxlQUFVLEdBQXVCLEVBQXdCLENBQUM7SUFFMEIsQ0FBQztJQUVyRixRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFNLGVBQWUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7WUFDdEMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7a0ZBakJVLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDWjlCLDhCQUFzQjtRQUNwQiw4QkFBNkI7UUFBQSx5QkFBRztRQUFBLDhCQUFjO1FBQUEsaUJBQUk7UUFBQSxpQkFBTTtRQUN4RCwyQkFBSztRQUNILGdDQUEyQztRQUN6QyxnQ0FBd0M7UUFDdEMsZ0VBQXlEO1FBQ3pELGdFQUFvRTtRQUN0RSwwQkFBZTtRQUVmLGdDQUF3QztRQUN0QyxrRUFBeUQ7UUFDekQsa0VBQW9FO1FBQ3RFLDBCQUFlO1FBRWYsaUNBQXdDO1FBQ3RDLGtFQUF5RDtRQUN6RCxrRUFBb0U7UUFDdEUsMEJBQWU7UUFFZixpQ0FBd0M7UUFDdEMsa0VBQXlEO1FBQ3pELGtFQUFvRTtRQUN0RSwwQkFBZTtRQUVmLGlDQUF3QztRQUN0QyxrRUFBeUQ7UUFDekQsa0VBQW9FO1FBQ3RFLDBCQUFlO1FBRWYsbUVBQTREO1FBQzVELG1FQUFrRTtRQUNwRSxpQkFBUTtRQUNWLGlCQUFNO1FBQ04sNEJBQUs7UUFDSCxtQ0FBb0Q7UUFBakMsK0ZBQVMsMEJBQXNCLElBQUM7UUFBQywwQ0FBeUI7UUFBQSxpQkFBUztRQUN4RixpQkFBTTtRQUNSLGlCQUFNOztRQWpDZSxlQUF5QjtRQUF6QiwyQ0FBeUI7UUEwQnBCLGdCQUFpQztRQUFqQyxzREFBaUM7UUFDcEIsZUFBMEI7UUFBMUIsdURBQTBCOzt1RkRsQnBELGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDOztBQXFCRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBNkI7SUFDbkUsWUFBb0IsZUFBZ0M7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFEVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFFcEQsQ0FBQztJQUNELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELFVBQVUsS0FBVyxDQUFDO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0b3IsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBJRmVhdHVyZTJEYXRhSXRlbSB9IGZyb20gJy4vZmVhdHVyZTIubW9kZWwnO1xuaW1wb3J0IHsgRmVhdHVyZTJTZXJ2aWNlIH0gZnJvbSAnLi9mZWF0dXJlMi5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1lc3NhZ2luZ1NlcnZpY2UsIEluamVjdGlvblRva2VucyB9IGZyb20gJ2Nyb3NzLWN1dHRpbmctY29uY2Vybic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mZWF0dXJlMicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWF0dXJlMi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZlYXR1cmUyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZTJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtZXNzYWdpbmdTZXJ2aWNlOiBNZXNzYWdpbmdTZXJ2aWNlID0ge30gYXMgTWVzc2FnaW5nU2VydmljZTtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2RhdGFQb2ludDEnLCAnZGF0YVBvaW50MicsICdkYXRhUG9pbnQzJywgJ2RhdGFQb2ludDQnLCAnZGF0YVBvaW50NSddO1xuICBkYXRhU291cmNlOiBGZWF0dXJlMkRhdGFTb3VyY2UgPSB7fSBhcyBGZWF0dXJlMkRhdGFTb3VyY2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmZWF0dXJlMlNlcnZpY2U6IEZlYXR1cmUyU2VydmljZSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnaW5nU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0PGFueT4oSW5qZWN0aW9uVG9rZW5zLm1lc3NhZ2luZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbik7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IEZlYXR1cmUyRGF0YVNvdXJjZSh0aGlzLmZlYXR1cmUyU2VydmljZSk7XG4gIH1cblxuICBvbk1lc3NhZ2VCdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2luZ1NlcnZpY2UubWVzc2FnZVRvRmVhdHVyZTEoe1xuICAgICAgbWVzc2FnZVRleHQ6ICdNZXNzYWdlIGZyb20gZmVhdHVyZTEnLFxuICAgICAgbWVzc2FnZVRpbWU6IG5ldyBEYXRlKClcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmVhdHVyZTJEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxJRmVhdHVyZTJEYXRhSXRlbT4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZlYXR1cmUyU2VydmljZTogRmVhdHVyZTJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8SUZlYXR1cmUyRGF0YUl0ZW1bXT4ge1xuICAgIHJldHVybiB0aGlzLmZlYXR1cmUyU2VydmljZS5nZXRGZWF0dXJlMkRhdGEoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKTogdm9pZCB7IH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmZWF0dXJlMlwiPlxuICA8ZGl2IGNsYXNzPVwiZmVhdHVyZTItaGVhZGVyXCI+PGI+RmVhdHVyZSAyIFBhZ2U8L2I+PC9kaXY+XG4gIDxkaXY+XG4gICAgPHRhYmxlIGNkay10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImRhdGFQb2ludDFcIj5cbiAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gRGF0YSBQb2ludCAxIDwvdGg+XG4gICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5kYXRhUG9pbnQxfX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImRhdGFQb2ludDJcIj5cbiAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gRGF0YSBQb2ludCAyIDwvdGg+XG4gICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5kYXRhUG9pbnQyfX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImRhdGFQb2ludDNcIj5cbiAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gRGF0YSBQb2ludCAzIDwvdGg+XG4gICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5kYXRhUG9pbnQzfX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImRhdGFQb2ludDRcIj5cbiAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gRGF0YSBQb2ludCA0IDwvdGg+XG4gICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5kYXRhUG9pbnQ0fX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImRhdGFQb2ludDVcIj5cbiAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gRGF0YSBQb2ludCA1IDwvdGg+XG4gICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5kYXRhUG9pbnQ1fX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8dHIgY2RrLWhlYWRlci1yb3cgKmNka0hlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgPHRyIGNkay1yb3cgKmNka1Jvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uTWVzc2FnZUJ1dHRvbkNsaWNrKClcIj5TZW5kIE1lc3NhZ2UgVG8gRmVhdHVyZSAxPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=