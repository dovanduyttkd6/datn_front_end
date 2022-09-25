import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { environment } from "@env/environment";
import { OfferRouter } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class OfferManagementService {

  constructor(private http: _HttpClient) { }

  search(form : any, page : any) {
    return this.http.post(environment.BASE_API_URI.BASE_SERVICE_API + OfferRouter.search + '?_allow_anonymous=true', form, page);
  }

  save(data : any) {
    if(data.id) {
      return this.http.put(environment.BASE_API_URI.BASE_SERVICE_API + OfferRouter.update + `${data.id}` + '?_allow_anonymous=true', data);
    } else {
      return this.http.post(environment.BASE_API_URI.BASE_SERVICE_API + OfferRouter.saveData + '?_allow_anonymous=true', data);
    }
  }

  detail(id) {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_API + OfferRouter.getDetail + `/${id}` + '?_allow_anonymous=true');
  }

  getAll(maDx) {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_API + OfferRouter.getAllOffer + `/${maDx}` + '?_allow_anonymous=true');
  }

  delete(id) {
    return this.http.delete(environment.BASE_API_URI.BASE_SERVICE_API + OfferRouter.delete + `/${id}` + '?_allow_anonymous=true');
  }
}
