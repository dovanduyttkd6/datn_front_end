import { _HttpClient } from '@delon/theme';
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { RequestRouter } from '../../utils';

@Injectable({
  providedIn: 'root',
})

export class RequestService {

  constructor(private http: _HttpClient){}

  search(form : any, page : any) {
    return this.http.post(environment.BASE_API_URI.BASE_SERVICE_API + RequestRouter.search + '?_allow_anonymous=true', form, page);
  }

  save(data : any) {
    if(data.id) {
      return this.http.put(environment.BASE_API_URI.BASE_SERVICE_API + RequestRouter.update + `${data.id}` + '?_allow_anonymous=true', data);
    } else {
      return this.http.post(environment.BASE_API_URI.BASE_SERVICE_API + RequestRouter.saveData + '?_allow_anonymous=true', data);
    }
  }

  detail(id) {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_API + RequestRouter.getDetail + `/${id}` + '?_allow_anonymous=true');
  }

  delete(id) {
    return this.http.delete(environment.BASE_API_URI.BASE_SERVICE_API + RequestRouter.delete + `/${id}` + '?_allow_anonymous=true');
  }
}
