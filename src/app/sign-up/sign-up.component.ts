import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router,ActivatedRoute }from '@angular/router';

 class  Data{
  UserName:string;
  PassWord:string;
  Email:string;
 }

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
data : Data;
user: User;
emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

constructor(private router: Router, private route:ActivatedRoute, private firestore:AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

resetForm(form?:NgForm)
{
  if(form != null)
  form.reset();  
  this.user={
    UserName:'',
    PassWord:'',
    Email:'',
    FirstName:'',
    LastName:'',
    Phone:''
}
}
onSubmit(form:NgForm){
  let data=form.value;
  this.firestore.collection('students').add(data);
  this.resetForm(form);
}


}


