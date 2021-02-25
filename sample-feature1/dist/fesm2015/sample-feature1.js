import { HttpHeaders, HttpClient, HttpResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelement, ɵɵnextContext, ɵɵdirectiveInject, Injector, ɵɵdefineComponent, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵproperty, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { InjectionTokens } from 'cross-cutting-concern';
import { CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow, CdkTableModule } from '@angular/cdk/table';
import { NgIf, CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';

class Feature1Service {
    constructor(http) {
        this.http = http;
        this.feature1ApiUri = '/feature1api/feature1data';
    }
    getFeature1Data() {
        const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(this.feature1ApiUri, { headers: httpHeaders });
    }
}
Feature1Service.ɵfac = function Feature1Service_Factory(t) { return new (t || Feature1Service)(ɵɵinject(HttpClient)); };
Feature1Service.ɵprov = ɵɵdefineInjectable({ token: Feature1Service, factory: Feature1Service.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Feature1Service, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }]; }, null); })();

function Feature1Component_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 1 ");
    ɵɵelementEnd();
} }
function Feature1Component_td_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.dataPoint1, " ");
} }
function Feature1Component_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 2 ");
    ɵɵelementEnd();
} }
function Feature1Component_td_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r14.dataPoint2, " ");
} }
function Feature1Component_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 3 ");
    ɵɵelementEnd();
} }
function Feature1Component_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r15.dataPoint3, " ");
} }
function Feature1Component_th_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 4 ");
    ɵɵelementEnd();
} }
function Feature1Component_td_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r16.dataPoint4, " ");
} }
function Feature1Component_th_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1, " Data Point 5 ");
    ɵɵelementEnd();
} }
function Feature1Component_td_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r17.dataPoint5, " ");
} }
function Feature1Component_tr_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 15);
} }
function Feature1Component_tr_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 16);
} }
function Feature1Component_span_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1("Message received: ", ctx_r12.message, "");
} }
class Feature1Component {
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
Feature1Component.ɵfac = function Feature1Component_Factory(t) { return new (t || Feature1Component)(ɵɵdirectiveInject(Feature1Service), ɵɵdirectiveInject(Injector)); };
Feature1Component.ɵcmp = ɵɵdefineComponent({ type: Feature1Component, selectors: [["feature1-component"]], decls: 25, vars: 4, consts: [[1, "feature1"], [1, "feature1-header"], ["cdk-table", "", 3, "dataSource"], ["cdkColumnDef", "dataPoint1"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "dataPoint2"], ["cdkColumnDef", "dataPoint3"], ["cdkColumnDef", "dataPoint4"], ["cdkColumnDef", "dataPoint5"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [4, "ngIf"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function Feature1Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "b");
        ɵɵtext(3, "Feature 1 Page");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div");
        ɵɵelementStart(5, "table", 2);
        ɵɵelementContainerStart(6, 3);
        ɵɵtemplate(7, Feature1Component_th_7_Template, 2, 0, "th", 4);
        ɵɵtemplate(8, Feature1Component_td_8_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(9, 6);
        ɵɵtemplate(10, Feature1Component_th_10_Template, 2, 0, "th", 4);
        ɵɵtemplate(11, Feature1Component_td_11_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(12, 7);
        ɵɵtemplate(13, Feature1Component_th_13_Template, 2, 0, "th", 4);
        ɵɵtemplate(14, Feature1Component_td_14_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(15, 8);
        ɵɵtemplate(16, Feature1Component_th_16_Template, 2, 0, "th", 4);
        ɵɵtemplate(17, Feature1Component_td_17_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(18, 9);
        ɵɵtemplate(19, Feature1Component_th_19_Template, 2, 0, "th", 4);
        ɵɵtemplate(20, Feature1Component_td_20_Template, 2, 1, "td", 5);
        ɵɵelementContainerEnd();
        ɵɵtemplate(21, Feature1Component_tr_21_Template, 1, 0, "tr", 10);
        ɵɵtemplate(22, Feature1Component_tr_22_Template, 1, 0, "tr", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "div");
        ɵɵtemplate(24, Feature1Component_span_24_Template, 2, 1, "span", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(16);
        ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.message);
    } }, directives: [CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, NgIf, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow], styles: [".feature1[_ngcontent-%COMP%]{padding:20px}.feature1[_ngcontent-%COMP%]   .feature1-header[_ngcontent-%COMP%]{margin-bottom:30px;background-color:#f0f8ff}.feature1[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]{width:70%}.feature1[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-header-row[_ngcontent-%COMP%]{background-color:#f0f8ff}.feature1[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-row[_ngcontent-%COMP%]{background-color:beige}.feature1[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-cell[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Feature1Component, [{
        type: Component,
        args: [{
                selector: 'feature1-component',
                templateUrl: './feature1.component.html',
                styleUrls: ['./feature1.component.scss']
            }]
    }], function () { return [{ type: Feature1Service }, { type: Injector }]; }, null); })();
class Feature1DataSource extends DataSource {
    constructor(feature1Service) {
        super();
        this.feature1Service = feature1Service;
    }
    connect() {
        return this.feature1Service.getFeature1Data();
    }
    disconnect() { }
}

class FakeBackendInterceptor {
    constructor() { }
    intercept(request, next) {
        // return delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(() => {
            if (request.url.endsWith('feature1api/feature1data')) {
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

class Feature1Module {
}
Feature1Module.ɵmod = ɵɵdefineNgModule({ type: Feature1Module });
Feature1Module.ɵinj = ɵɵdefineInjector({ factory: function Feature1Module_Factory(t) { return new (t || Feature1Module)(); }, providers: [
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Feature1Module, { declarations: [Feature1Component], imports: [CommonModule,
        HttpClientModule,
        CdkTableModule,
        MatTableModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(Feature1Module, [{
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

/*
 * Public API Surface of sample-feature1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Feature1Component, Feature1DataSource, Feature1Module, Feature1Service };
//# sourceMappingURL=sample-feature1.js.map
