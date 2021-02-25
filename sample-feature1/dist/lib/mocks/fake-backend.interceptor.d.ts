import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FakeBackendInterceptor implements HttpInterceptor {
    constructor();
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<FakeBackendInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<FakeBackendInterceptor>;
}
//# sourceMappingURL=fake-backend.interceptor.d.ts.map