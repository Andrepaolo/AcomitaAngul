import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
  opcionList:any=[
    {tipo:'realizado'},
    {tipo:'pendiente'}

  ]
  constructor(public activityService:ActivityService,
    private router:Router) { }

  ngOnInit(): void {
    this.submitForm
  }
  submitForm(ActivityForm:NgForm){
    if(ActivityForm.value.id==null){
      this.activityService.CreateActivity(ActivityForm.value)
      .subscribe((response)=>{
        this.router.navigate(["/list-activity"]);
      });
    }else{
      this.activityService.UpdateActivity(ActivityForm.value.id,ActivityForm.value)
      .subscribe((response)=>{
        this.router.navigate(["/list-activity"]);
      });
    }
    this.resetForm(ActivityForm);
  }

  resetForm(ActivityForm:NgForm){
    if(ActivityForm!=null){
      ActivityForm.reset();
      this.activityService.selectActivity=new Activity();
    }
  }

}
