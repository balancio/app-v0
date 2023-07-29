import { Injectable } from '@angular/core';
import api from '../config/api'

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {

  constructor() { }

  route: string = ''

  setRoute(r: string) {
    this.route = r
  }

  endpoint() {
    return api.url + this.route
  }
}
