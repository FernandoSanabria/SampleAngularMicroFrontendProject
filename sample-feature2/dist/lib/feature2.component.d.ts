import { Injector, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { IFeature2DataItem } from './feature2.model';
import { Feature2Service } from './feature2.service';
import { Observable } from 'rxjs';
import { MessagingService } from 'cross-cutting-concern';
import * as i0 from "@angular/core";
export declare class Feature2Component implements OnInit {
    private feature2Service;
    private injector;
    messagingService: MessagingService;
    displayedColumns: string[];
    dataSource: Feature2DataSource;
    constructor(feature2Service: Feature2Service, injector: Injector);
    ngOnInit(): void;
    onMessageButtonClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<Feature2Component, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<Feature2Component, "app-feature2", never, {}, {}, never, never>;
}
export declare class Feature2DataSource extends DataSource<IFeature2DataItem> {
    private feature2Service;
    constructor(feature2Service: Feature2Service);
    connect(): Observable<IFeature2DataItem[]>;
    disconnect(): void;
}
//# sourceMappingURL=feature2.component.d.ts.map