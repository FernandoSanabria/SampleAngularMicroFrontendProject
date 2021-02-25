import { Injector, OnDestroy, OnInit } from '@angular/core';
import { Feature1Service } from './feature1.service';
import { DataSource } from '@angular/cdk/collections';
import { IFeature1DataItem } from './feature1.model';
import { Observable, Subscription } from 'rxjs';
import { MessagingService } from 'cross-cutting-concern';
import * as i0 from "@angular/core";
export declare class Feature1Component implements OnInit, OnDestroy {
    private feature1Service;
    private injector;
    messagingService: MessagingService;
    messageToFeature1Sub: Subscription;
    message: string | null;
    displayedColumns: string[];
    dataSource: Feature1DataSource;
    constructor(feature1Service: Feature1Service, injector: Injector);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private handleMessageToFeature1;
    static ɵfac: i0.ɵɵFactoryDef<Feature1Component, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<Feature1Component, "feature1-component", never, {}, {}, never, never>;
}
export declare class Feature1DataSource extends DataSource<IFeature1DataItem> {
    private feature1Service;
    constructor(feature1Service: Feature1Service);
    connect(): Observable<IFeature1DataItem[]>;
    disconnect(): void;
}
//# sourceMappingURL=feature1.component.d.ts.map