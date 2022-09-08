import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import Item from 'src/interfaces/Items';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tfItem = new FormControl<String>('')

  items : Item[] = []

  constructor(private itemService: ItemService) { 
    this.items = itemService.getItems()
  }

  ngOnInit(): void {
  }

  onAddItem(){
    const newOne:Item = {
      id:this.itemService.getItems().length,
      text:this.tfItem.value||"",
      isDone:false,
    }

    this.itemService.addItem(newOne)
    this.tfItem.setValue('')
  }
  onKeydown(event:any) {

  if (event.key === "Enter"|| this.tfItem.value!='') {
     this.onAddItem()
     
  }
}

}
