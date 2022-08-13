import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {
  isDisabled:boolean =false;
  isEdited:boolean =false;
  iscreated:boolean =false;
  indexs:any;
  userdata:User[]=[];
  fillUsersArray():void{
    this.person={id:"1",name:{first:"Belal",last:"Yasin"},birthdate:"7-5-2000",email:"Belal@admin.com",phone:"2876845168",address:"Gaza"};
    this.userdata.push(this.person);
    this.person={id:"2",name:{first:"Ahmed",last:"Adnan"},birthdate:"6-8-1998",email:"Ahmed@admin.com",phone:"4036643542",address:"Rafh"};
    this.userdata.push(this.person);
    this.person={id:"3",name:{first:"Mohammed",last:"Kalil"},birthdate:"7-5-1996",email:"Mohammed@admin.com",phone:"3068774646",address:"KanYonus"};
    this.userdata.push(this.person);
    this.person={id:"4",name:{first:"Kaled",last:"Ahmed"},birthdate:"29-6-2001",email:"Kaled@admin.com",phone:"2086468744",address:"Jenen"};
    this.userdata.push(this.person);
    this.person={id:"5",name:{first:"Abd",last:"Anwar"},birthdate:"10-3-2003",email:"Abd@admin.com",phone:"2763213873",address:"Alnasra"};
    this.userdata.push(this.person);
    this.person={id:"6",name:{first:"Sameer",last:"Samery"},birthdate:"20-5-1994",email:"Sameer@admin.com",phone:"2075538645",address:"Nuserat"};
    this.userdata.push(this.person);
    this.person={id:"7",name:{first:"Tawfiq",last:"Btsh"},birthdate:"15-11-1995",email:"Tawfiq@admin.com",phone:"9132546837",address:"Breaj"};
    this.userdata.push(this.person);
    this.person={id:"8",name:{first:"Amer",last:"Sohil"},birthdate:"23-9-2000",email:"Amer@admin.com",phone:"4687432036",address:"DerBalah"};
    this.userdata.push(this.person);
    this.person={id:"9",name:{first:"Marwa",last:"Mohameed"},birthdate:"17-12-2004",email:"Marwa@admin.com",phone:"6353415970",address:"Rafah"};
    this.userdata.push(this.person);
    this.person={id:"10",name:{first:"Maram",last:"Kaled"},birthdate:"30-10-1999",email:"Maram@admin.com",phone:"5430876413",address:"Gaza"};
    this.userdata.push(this.person);
  }
  person:Required<User> ={
    id: '',
    name: {
      first: '',
      last: ''
    },
    birthdate: '',
    email: '',
    phone: '',
    address: ''
  }

  onClick():void{
    this.person={id:"",name:{first:"",last:""},birthdate:"",email:"",phone:"",address:""};
    this.isDisabled=true;
    this.iscreated=true;
    this.isEdited=false;
  }
  onEdit(index:any):void{
    this.person={id:this.userdata[index].id,name:{first:this.userdata[index].name.first,last:this.userdata[index].name.last},birthdate:this.userdata[index].birthdate,email:this.userdata[index].email,phone:this.userdata[index].phone,address:this.userdata[index].address};
    this.indexs=index;
    this.isDisabled=true;
    this.isEdited=true;
    this.iscreated=false;
  }
  onRemove(index:any){
    this.person={id:this.userdata[index].id,name:{first:this.userdata[index].name.first,last:this.userdata[index].name.last},birthdate:this.userdata[index].birthdate,email:this.userdata[index].email,phone:this.userdata[index].phone,address:this.userdata[index].address};
    this.userdata.pop();
    this.person={id:"",name:{first:"",last:""},birthdate:"",email:"",phone:"",address:""};
  }

  onCreate(){
        this.userdata.push(this.person={id:this.person.id,name:{first:this.person.name.first,last:this.person.name.last},birthdate:this.person.birthdate,email:this.person.email,phone:this.person.phone,address:this.person.address});
        this.person={id:"",name:{first:"",last:""},birthdate:"",email:"",phone:"",address:""};
  }

  onUpdate(index:any){
    console.log(index);
    this.userdata[index]=this.person={id:this.person.id,name:{first:this.person.name.first,last:this.person.name.last},birthdate:this.person.birthdate,email:this.person.email,phone:this.person.phone,address:this.person.address};
    this.isDisabled=false;
    this.person={id:"",name:{first:"",last:""},birthdate:"",email:"",phone:"",address:""};
    }
  // constructor() {}
  ngOnInit(): void {
    this.fillUsersArray();
  }


}
interface User{
  id: String;
  name:{
    first: String;
    last: String;
  };
  birthdate: String;
  email: String;
  phone: String;
  address: String;

}
