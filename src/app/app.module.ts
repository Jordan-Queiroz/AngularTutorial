import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecordsService } from './records.service'
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
