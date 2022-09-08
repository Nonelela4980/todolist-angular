import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tfItem = new FormControl<String>('')

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    
  }

}
