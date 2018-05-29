import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { 

  }

  getData() {
    return this.http.get<myData>('/api/file.php');
  }

  updateData() {

  }
}
