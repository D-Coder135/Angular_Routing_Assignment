import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs-compat";

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    
}