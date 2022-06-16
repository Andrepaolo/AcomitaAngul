import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  selectActivity:Activity=new Activity();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })


  constructor(private http:HttpClient) {}
    baseurl='http://127.0.0.1:8000/api/';

    GetActivity():Observable<Activity>{
      return this.http.get<Activity>(this.baseurl+'activity/');
    }
    //metodo POST
    CreateActivity(activity:Activity):Observable<Activity>{
      return this.http.post(this.baseurl+'activity/',activity,{headers:this.reqHeader});
    }

    //metodo DELETE
    DeleteActivity(id:number){
      return this.http.delete(this.baseurl+'activity/'+id+'/');
    }

    UpdateActivity(id:number,activity:Activity){
      return this.http.put(this.baseurl+'activity/'+id+'/',activity,{headers:this.reqHeader});
    }
    Showoptions(){

    }
}
