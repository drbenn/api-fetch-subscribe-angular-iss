import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IssDataModel} from '../models/three.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // issData$: Observable<any> |undefined;


  constructor(private http: HttpClient) { }

  // private iss$ = this.http.get<any>(this.url);

  test():Observable<IssDataModel> {
    const basicUrl = 'http://api.open-notify.org/iss-now.json';
    console.log('test click');
    let response = this.http.get<IssDataModel>(basicUrl)

    return response;

  }



  getApiData():Observable<IssDataModel[]> {
     return this.http.get<IssDataModel[]>('http://api.open-notify.org/iss-now.json')
     .pipe(
      map((IssApiData: IssDataModel[])=>{
      //   return IssApiData.map(data => ({
      //     iss_position: {
      //         latitude: data.iss_position.latitude,
      //         longitude: data.iss_position.longitude
      //       },
      //     message: data.message,
      //     timestamp: `${data.timestamp} timestamp`
      //   }))
      // })
      return IssApiData.map(data => ({
        ...data,
        timestamp:`${data.timestamp} timestamp`
      }))
    })
    )
  }
}


// // Returns all API Data
// getApiData():Observable<IssDataModel> {
//   return this.http.get<IssDataModel>('http://api.open-notify.org/iss-now.json')
//   .pipe(
//    map((IssApiData: IssDataModel)=>{
//      return IssApiData
//    })
//   )
// }

// // Component data service function to receive data in component
// componentDataCall() {
//   this.dataService.getApiData().subscribe((data:any)=>{
//     console.log(data);
//   })
// }
