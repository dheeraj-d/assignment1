import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InMemoryDbService } from 'angular-in-memory-web-api';

declare const gettimage:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements InMemoryDbService{
  createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
    throw new Error("Method not implemented.");
  }
  selectedFile=null;
  title = 'thaiform';
  gtevent(event){
    this.selectedFile=event;
  }
  onFileUpload(){
    var image = document.getElementById('dynamicimg') as HTMLInputElement;
    image.src = URL.createObjectURL(this.selectedFile.target.files[0]);
  }
}
