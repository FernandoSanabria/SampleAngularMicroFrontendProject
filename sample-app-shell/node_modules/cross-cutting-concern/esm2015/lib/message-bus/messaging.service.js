import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class MessagingService {
    constructor() {
        // Observable Source
        this.messageToFeature1Source = new BehaviorSubject(undefined);
        // Observable Streams
        this.messageToFeature1$ = this.messageToFeature1Source.asObservable();
    }
    // Message Commands
    messageToFeature1(message) {
        this.messageToFeature1Source.next(message);
    }
}
MessagingService.ɵfac = function MessagingService_Factory(t) { return new (t || MessagingService)(); };
MessagingService.ɵprov = i0.ɵɵdefineInjectable({ token: MessagingService, factory: MessagingService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessagingService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jcm9zcy1jdXR0aW5nLWNvbmNlcm4vc3JjL2xpYi9tZXNzYWdlLWJ1cy9tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSXZDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFFRSxvQkFBb0I7UUFDWiw0QkFBdUIsR0FBRyxJQUFJLGVBQWUsQ0FBaUMsU0FBUyxDQUFDLENBQUM7UUFDakcscUJBQXFCO1FBQ2QsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksRUFBRSxDQUFDO0tBS3pFO0lBSkMsbUJBQW1CO0lBQ1osaUJBQWlCLENBQUMsT0FBMkI7UUFDbEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnRkFSVSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJTWVzc2FnZVRvRmVhdHVyZTEgfSBmcm9tICcuL21lc3NhZ2luZy5jb250cmFjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdpbmdTZXJ2aWNlIHtcbiAgLy8gT2JzZXJ2YWJsZSBTb3VyY2VcbiAgcHJpdmF0ZSBtZXNzYWdlVG9GZWF0dXJlMVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SU1lc3NhZ2VUb0ZlYXR1cmUxIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICAvLyBPYnNlcnZhYmxlIFN0cmVhbXNcbiAgcHVibGljIG1lc3NhZ2VUb0ZlYXR1cmUxJCA9IHRoaXMubWVzc2FnZVRvRmVhdHVyZTFTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIC8vIE1lc3NhZ2UgQ29tbWFuZHNcbiAgcHVibGljIG1lc3NhZ2VUb0ZlYXR1cmUxKG1lc3NhZ2U6IElNZXNzYWdlVG9GZWF0dXJlMSk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZVRvRmVhdHVyZTFTb3VyY2UubmV4dChtZXNzYWdlKTtcbiAgfVxufVxuIl19