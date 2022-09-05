import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IssDataModel} from './models/three.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'three-iss';

constructor(private dataService:DataService){}
  issData$: Observable<any> |undefined;
  seconds:number = 5;
  things: IssDataModel = {  iss_position: {latitude:'string', longitude:''},
  message: '',
  timestamp: 0
};





    ngOnInit(): void {
      // this.dataService.getApiData().subscribe((data: IssDataModel)=> {
      //   this.things = data;
      // })

      // setInterval(()=>{
      // this.button1();
      // }, this.seconds * 1000
      // );

    }


    button1(){
      this.issData$ = this.dataService.test();
      this.issData$.subscribe((data:IssDataModel)=>console.log(data)
      )
    }

    button2() {
      // NOT WORKING on GITHUB UPLOAD
      this.dataService.getApiData().subscribe((data:IssDataModel[])=>{
        console.log('data', data);

        // console.log(data);

      })
    }
}
