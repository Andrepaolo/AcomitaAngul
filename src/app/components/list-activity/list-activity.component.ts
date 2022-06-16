import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {
  activityList:any=[]

  constructor(public activityService:ActivityService,private router:Router) { }

  ngOnInit(): void {
    this.loadActivity();
  }
  loadActivity(){
    return this.activityService.GetActivity().subscribe((data:{})=>{
      this.activityList=data;
      console.log(data);
    });
  }

  deleteActivity(id:number){
    this.activityService.DeleteActivity(id).subscribe((response)=>{
      this.loadActivity();
    });
  }

  onEdit(activity:Activity){
    console.log(activity);
    this.activityService.selectActivity=Object.assign({},activity);
    this.router.navigate(["/add-activity"]);//cambiar con la nueva ruta en un mpoemnto
  }



}
