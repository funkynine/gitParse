import { Component, OnInit } from '@angular/core';
import { TakeDateService } from '../take-date.service';

@Component({
  selector: 'app-git-parse',
  templateUrl: './git-parse.component.html',
  styleUrls: ['./git-parse.component.sass']
})
export class GitParseComponent implements OnInit {

  response: any;
  userName: string;

  constructor(private takeDate: TakeDateService) {}

  ngOnInit() {
    this.answer();
  }

  answer(){
    this
      .takeDate
      .search(this.userName)
      .subscribe((response)=>{this.response = 
        response});
  }
}
