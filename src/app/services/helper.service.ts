import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private isVisible$ = new BehaviorSubject<boolean>(false);

  public isVisible = this.isVisible$.asObservable();
  
  public hideScroll() {
    this.isVisible$.next(true);
  }
  
  public showScroll() {
    this.isVisible$.next(false);
  }
}
