import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class Feature2Service {
    constructor(http) {
        this.http = http;
        this.feature2ApiUri = '/feature2api/feature2data';
    }
    getFeature2Data() {
        const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(this.feature2ApiUri, { headers: httpHeaders });
    }
}
Feature2Service.ɵfac = function Feature2Service_Factory(t) { return new (t || Feature2Service)(i0.ɵɵinject(i1.HttpClient)); };
Feature2Service.ɵprov = i0.ɵɵdefineInjectable({ token: Feature2Service, factory: Feature2Service.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Feature2Service, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZTIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL3NhbXBsZS1mZWF0dXJlMi9zcmMvbGliL2ZlYXR1cmUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUkzQyxNQUFNLE9BQU8sZUFBZTtJQUUxQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRDNCLG1CQUFjLEdBQUcsMkJBQTJCLENBQUM7SUFDZixDQUFDO0lBRXhDLGVBQWU7UUFDYixNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUM3RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEyQixJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7OEVBUFUsZUFBZTt1REFBZixlQUFlLFdBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElGZWF0dXJlMkRhdGFJdGVtIH0gZnJvbSAnLi9mZWF0dXJlMi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGZWF0dXJlMlNlcnZpY2Uge1xuICByZWFkb25seSBmZWF0dXJlMkFwaVVyaSA9ICcvZmVhdHVyZTJhcGkvZmVhdHVyZTJkYXRhJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldEZlYXR1cmUyRGF0YSgpOiBPYnNlcnZhYmxlPEFycmF5PElGZWF0dXJlMkRhdGFJdGVtPj4ge1xuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFycmF5PElGZWF0dXJlMkRhdGFJdGVtPj4odGhpcy5mZWF0dXJlMkFwaVVyaSwge2hlYWRlcnM6IGh0dHBIZWFkZXJzfSk7XG4gIH1cbn1cbiJdfQ==