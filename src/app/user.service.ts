import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  message: string,
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomedata() {
    return this.http.get<myData>('api/database.php')
  }
}
