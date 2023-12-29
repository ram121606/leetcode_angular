import { Component } from '@angular/core';
import {Validators, FormControl} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment.development'
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  username : string = '';
  lt_name = new FormControl('',[Validators.required])
  result : any = '';

  constructor(private http: HttpClient){}

  onClick(){
    this.http.get<any>(environment.BACKEND_URL+this.username).subscribe(resp=>{
      console.log(resp);
      this.result = resp;
    })
  }
  // onClick(){
  //   this.http.get<any>('http://127.0.0.1:6969/'+this.username).subscribe(response=>{
  //     return response;
  //   })
  // }

  originalOrder = (a:KeyValue<string,any>, b:KeyValue<string,any>):number =>{
    return 0;
  }
  
  getErrorMessage(){
    if(this.lt_name.hasError('required')){
      return "Username cannot be empty"
    }
    return ""
  }
}
