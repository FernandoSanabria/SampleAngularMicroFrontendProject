import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate1, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵinject, ɵɵdefineInjectable, Injectable, ɵɵelement, ɵɵdirectiveInject, Injector, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { HttpHeaders, HttpClient, HttpResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { InjectionTokens } from 'cross-cutting-concern';
import { CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow, CdkTableModule } from '@angular/cdk/table';
import { of } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';

function Feature2SubComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul", 4);
    ɵɵelementStart(1, "li");
    ɵɵtext(2, "Item 1");
    ɵɵelementEnd();
    ɵɵelementStart(3, "li");
    ɵɵtext(4, "Item 2");
    ɵɵelementEnd();
    ɵɵelementStart(5, "li");
    ɵɵtext(6, "Item 3");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
class Feature2SubComponent {
    constructor() {
        this.isOpen = false;
    }
    ngOnInit() {
    }
}
Feature2SubComponent.ɵfac = function Feature2SubComponent_Factory(t) { return new (t || Feature2SubComponent)(); };
Feature2SubComponent.ɵcmp = ɵɵdefineComponent({ type: Feature2SubComponent, selectors: [["feature2-sub"]], decls: 5, vars: 3, consts: [[1, "feature2-sub"], ["mat-button", "", "cdkOverlayOrigin", "", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "example-list"]], template: function Feature2SubComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1, 2);
        ɵɵlistener("click", function Feature2SubComponent_Template_button_click_1_listener() { return ctx.isOpen = !ctx.isOpen; });
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵtemplate(4, Feature2SubComponent_ng_template_4_Template, 7, 0, "ng-template", 3);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(2);
        ɵɵadvance(3);
        ɵɵtextInterpolate1("Feature 2 sub component ", ctx.isOpen ? "Opened" : "Closed", "");
        ɵɵadvance(1);
        ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOpen);
    } }, directives: [CdkOverlayOrigin, CdkConnectedOverlay], styles: [".example-list[_ngcontent-%COMP%]{width:100px;border:1px solid #ccc;border-radius:5px;background:#fff;text-align:center;padding:10px;margin:0}.example-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style-type:none;border-bottom:1px solid #8b8b8b;padding:8px 0}.example-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:last-child{border-bottom:none}.feature2-sub[_ngcontent-%COMP%]{margin-left:30px}.feature2-sub[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:medium}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Feature2SubComponent, [{
        type: Component,
        args: [{
                selector: 'feature2-sub',
                templateUrl: './feature2-sub.component.html',
                styleUrls: ['./feature2-sub.component.scss']
            }]
    }], function () { return []; }, null); })();

class Feature2Service {
    constructor(http) {
        this.http = http;
        this.feature2ApiUri = '/feature2api/feature2data';
    }
    getFeature2Data() {
        const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(this.feature2ApiUri, { headers: httpHeaders });
    }
}
Feature2Service.ɵfac = function Feature2Service_Factory(t) { return new (t || Feature2Service)(ɵɵinject(HttpClient)); };
Feature2Service.ɵprov = ɵɵdefineInjectable({ token: Feature2Service, factory: Feature2Service.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Feature2Service, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }]; }, null); })();

function Feature2Component_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 1 ");
    ɵɵelementEnd();
} }
function Feature2Component_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.dataPoint1, " ");
} }
function Feature2Component_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 2 ");
    ɵɵelementEnd();
} }
function Feature2Component_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.dataPoint2, " ");
} }
function Feature2Component_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 3 ");
    ɵɵelementEnd();
} }
function Feature2Component_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r14.dataPoint3, " ");
} }
function Feature2Component_th_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 4 ");
    ɵɵelementEnd();
} }
function Feature2Component_td_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r15.dataPoint4, " ");
} }
function Feature2Component_th_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 5 ");
    ɵɵelementEnd();
} }
function Feature2Component_td_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r16.dataPoint5, " ");
} }
function Feature2Component_tr_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 15);
} }
function Feature2Component_tr_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 16);
} }
class Feature2Component {
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
Feature2Component.ɵfac = function Feature2Component_Factory(t) { return new (t || Feature2Component)(ɵɵdirectiveInject(Feature2Service), ɵɵdirectiveInject(Injector)); };
Feature2Component.ɵcmp = ɵɵdefineComponent({ type: Feature2Component, selectors: [["app-feature2"]], decls: 26, vars: 3, consts: [[1, "feature2"], [1, "feature2-header"], ["cdk-table", "", 3, "dataSource"], ["cdkColumnDef", "dataPoint1"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "dataPoint2"], ["cdkColumnDef", "dataPoint3"], ["cdkColumnDef", "dataPoint4"], ["cdkColumnDef", "dataPoint5"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["mat-button", "", 3, "click"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function Feature2Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "b");
        ɵɵtext(3, "Feature 2 Page");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div");
        ɵɵelementStart(5, "table", 2);
        ɵɵelementContainerStart(6, 3);
        ɵɵtemplate(7, Feature2Component_th_7_Template, 2, 0, "th", 4);
        ɵɵtemplate(8, Feature2Component_td_8_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 6);
        ɵɵtemplate(10, Feature2Component_th_10_Template, 2, 0, "th", 4);
        ɵɵtemplate(11, Feature2Component_td_11_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 7);
        ɵɵtemplate(13, Feature2Component_th_13_Template, 2, 0, "th", 4);
        ɵɵtemplate(14, Feature2Component_td_14_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(15, 8);
        ɵɵtemplate(16, Feature2Component_th_16_Template, 2, 0, "th", 4);
        ɵɵtemplate(17, Feature2Component_td_17_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(18, 9);
        ɵɵtemplate(19, Feature2Component_th_19_Template, 2, 0, "th", 4);
        ɵɵtemplate(20, Feature2Component_td_20_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵtemplate(21, Feature2Component_tr_21_Template, 1, 0, "tr", 10);
        ɵɵtemplate(22, Feature2Component_tr_22_Template, 1, 0, "tr", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "div");
        ɵɵelementStart(24, "button", 12);
        ɵɵlistener("click", function Feature2Component_Template_button_click_24_listener() { return ctx.onMessageButtonClick(); });
        ɵɵtext(25, "Send Message To Feature 1");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(16);
        ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
    } }, directives: [CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow], styles: [".feature2[_ngcontent-%COMP%]{padding:20px}.feature2[_ngcontent-%COMP%]   .feature2-header[_ngcontent-%COMP%]{margin-bottom:30px;background-color:#f0f8ff}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]{width:70%}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-header-row[_ngcontent-%COMP%]{background-color:#f0f8ff}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-row[_ngcontent-%COMP%]{background-color:beige}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-cell[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Feature2Component, [{
        type: Component,
        args: [{
                selector: 'app-feature2',
                templateUrl: './feature2.component.html',
                styleUrls: ['./feature2.component.scss']
            }]
    }], function () { return [{ type: Feature2Service }, { type: Injector }]; }, null); })();
class Feature2DataSource extends DataSource {
    constructor(feature2Service) {
        super();
        this.feature2Service = feature2Service;
    }
    connect() {
        return this.feature2Service.getFeature2Data();
    }
    disconnect() { }
}

class FakeBackendInterceptor {
    constructor() { }
    intercept(request, next) {
        // return delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(() => {
            if (request.url.endsWith('feature2api/feature2data')) {
                return of(new HttpResponse({ status: 200, body: [
                        { dataPoint1: 1, dataPoint2: 'testval1', dataPoint3: 'testval1', dataPoint4: 'testval1', dataPoint5: 'testval1' },
                        { dataPoint1: 2, dataPoint2: 'testval2', dataPoint3: 'testval2', dataPoint4: 'testval2', dataPoint5: 'testval2' },
                        { dataPoint1: 3, dataPoint2: 'testval3', dataPoint3: 'testval3', dataPoint4: 'testval3', dataPoint5: 'testval3' },
                        { dataPoint1: 4, dataPoint2: 'testval4', dataPoint3: 'testval4', dataPoint4: 'testval4', dataPoint5: 'testval4' },
                        { dataPoint1: 5, dataPoint2: 'testval5', dataPoint3: 'testval5', dataPoint4: 'testval5', dataPoint5: 'testval5' },
                        { dataPoint1: 6, dataPoint2: 'testval6', dataPoint3: 'testval6', dataPoint4: 'testval6', dataPoint5: 'testval6' },
                        { dataPoint1: 7, dataPoint2: 'testval7', dataPoint3: 'testval7', dataPoint4: 'testval7', dataPoint5: 'testval7' },
                        { dataPoint1: 8, dataPoint2: 'testval8', dataPoint3: 'testval8', dataPoint4: 'testval8', dataPoint5: 'testval8' }
                    ] }));
            }
            return next.handle(request);
        }))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = ɵɵdefineInjectable({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FakeBackendInterceptor, [{
        type: Injectable
    }], function () { return []; }, null); })();

class Feature2Module {
}
Feature2Module.ɵmod = ɵɵdefineNgModule({ type: Feature2Module });
Feature2Module.ɵinj = ɵɵdefineInjector({ factory: function Feature2Module_Factory(t) { return new (t || Feature2Module)(); }, providers: [
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Feature2Module, { declarations: [Feature2SubComponent, Feature2Component], imports: [HttpClientModule,
        CdkTableModule,
        OverlayModule], exports: [Feature2SubComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Feature2Module, [{
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

/*
 * Public API Surface of sample-feature2
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Feature2Component, Feature2DataSource, Feature2Module, Feature2Service, Feature2SubComponent };
//# sourceMappingURL=sample-feature2.js.map
