import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFeature1DataItem } from './feature1.model';
import * as i0 from "@angular/core";
export declare class Feature1Service {
    private http;
    readonly feature1ApiUri = "/feature1api/feature1data";
    constructor(http: HttpClient);
    getFeature1Data(): Observable<Array<IFeature1DataItem>>;
    static ɵfac: i0.ɵɵFactoryDef<Feature1Service, never>;
    static ɵprov: i0.ɵɵInjectableDef<Feature1Service>;
}
//# sourceMappingURL=feature1.service.d.ts.map