import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFeature2DataItem } from './feature2.model';
import * as i0 from "@angular/core";
export declare class Feature2Service {
    private http;
    readonly feature2ApiUri = "/feature2api/feature2data";
    constructor(http: HttpClient);
    getFeature2Data(): Observable<Array<IFeature2DataItem>>;
    static ɵfac: i0.ɵɵFactoryDef<Feature2Service, never>;
    static ɵprov: i0.ɵɵInjectableDef<Feature2Service>;
}
//# sourceMappingURL=feature2.service.d.ts.map