import { Component } from '@angular/core';
import { RecordsService } from './records.service'

interface myData {
  obj: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  records = []

  constructor(private myFirsService: RecordsService) { }

  ngOnInit() {
    this.myFirsService.getData()
    .subscribe(data => {
      this.records = data.obj
    })
  }
}
