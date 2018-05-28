import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  data = {};
  
  constructor(private mySecondService: RecordsService) { }

  ngOnInit() {
    this.mySecondService.updateData();
    this.data = this.mySecondService.getData();
  }

}
