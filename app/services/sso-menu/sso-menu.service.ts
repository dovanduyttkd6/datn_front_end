import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { MenuRouter } from 'src/app/utils';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root',
})
export class SSOMenuService {
  constructor(private httpClient: _HttpClient) {}

  getCurrentMenu(): Observable<any> {
    return this.httpClient.get(environment.BASE_API_URI.BASE_SERVICE_API + MenuRouter.getMenu);
  }
}
