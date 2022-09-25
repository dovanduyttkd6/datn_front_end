import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {AppParamsRouter} from '../../utils';
import {_HttpClient} from '@delon/theme';

@Injectable({
  providedIn: 'root',
})
export class AppParamsService {

  constructor(
    private http: _HttpClient,
  ) {
  }

  getAppParamsByType(type) {
    return this.http.get(
      environment.BASE_API_URI.BASE_SERVICE_API +
      AppParamsRouter.getAppParamsByType + '/getAllParamByType/' + type + '?_allow_anonymous=true');
  }

}
