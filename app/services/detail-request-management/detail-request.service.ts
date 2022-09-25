import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { environment } from "@env/environment";
import { DetailRequestRouter } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class DetailRequestService {

  constructor(private http: _HttpClient) { }

  search(form : any, page : any) {
    return this.http.post(environment.BASE_API_URI.BASE_SERVICE_API + DetailRequestRouter.search + '?_allow_anonymous=true', form, page);
  }

  save(data : any) {
    if(data.id) {
      return this.http.put(environment.BASE_API_URI.BASE_SERVICE_API + DetailRequestRouter.update + `${data.id}` + '?_allow_anonymous=true', data);
    } else {
      return this.http.post(environment.BASE_API_URI.BASE_SERVICE_API + DetailRequestRouter.saveData + '?_allow_anonymous=true', data);
    }
  }

  detail(id) {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_API + DetailRequestRouter.getDetail + `/${id}` + '?_allow_anonymous=true');
  }

  getAll(maYC) {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_API + DetailRequestRouter.getAllDetail + `/${maYC}` + '?_allow_anonymous=true');
  }

  delete(id) {
    return this.http.delete(environment.BASE_API_URI.BASE_SERVICE_API + DetailRequestRouter.delete + `/${id}` + '?_allow_anonymous=true');
  }
}
