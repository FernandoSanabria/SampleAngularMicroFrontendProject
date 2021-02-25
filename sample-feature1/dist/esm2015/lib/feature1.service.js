import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class Feature1Service {
    constructor(http) {
        this.http = http;
        this.feature1ApiUri = '/feature1api/feature1data';
    }
    getFeature1Data() {
        const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(this.feature1ApiUri, { headers: httpHeaders });
    }
}
Feature1Service.ɵfac = function Feature1Service_Factory(t) { return new (t || Feature1Service)(i0.ɵɵinject(i1.HttpClient)); };
Feature1Service.ɵprov = i0.ɵɵdefineInjectable({ token: Feature1Service, factory: Feature1Service.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Feature1Service, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZTEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3NhbXBsZS1mZWF0dXJlMS9zcmMvbGliL2ZlYXR1cmUxLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUkzQyxNQUFNLE9BQU8sZUFBZTtJQUUxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRDNCLG1CQUFjLEdBQUcsMkJBQTJCLENBQUM7SUFDZixDQUFDO0lBRXhDLGVBQWU7UUFDYixNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUM3RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7OEVBUFUsZUFBZTt1REFBZixlQUFlLFdBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElGZWF0dXJlMURhdGFJdGVtIH0gZnJvbSAnLi9mZWF0dXJlMS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGZWF0dXJlMVNlcnZpY2Uge1xuICByZWFkb25seSBmZWF0dXJlMUFwaVVyaSA9ICcvZmVhdHVyZTFhcGkvZmVhdHVyZTFkYXRhJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldEZlYXR1cmUxRGF0YSgpOiBPYnNlcnZhYmxlPEFycmF5PElGZWF0dXJlMURhdGFJdGVtPj4ge1xuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFycmF5PElGZWF0dXJlMURhdGFJdGVtPj4odGhpcy5mZWF0dXJlMUFwaVVyaSwge2hlYWRlcnM6IGh0dHBIZWFkZXJzfSk7XG4gIH1cbn1cbiJdfQ==