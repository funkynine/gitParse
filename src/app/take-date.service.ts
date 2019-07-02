import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TakeDateService {
  
  
  constructor(public http: HttpClient) { }

  search(name){
    return this.http.get(`https:/api.github.com/users/${name}`);
    // .subscribe((promise)=>{
    //   console.log(promise)
    // })
  }

}