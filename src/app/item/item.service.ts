import { Injectable } from '@angular/core';

import Item from 'src/interfaces/Items';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[]=[
    {
        id:1,
        text:'Do programming prac',
        isDone:false
    }
]
  constructor() { }

  getItems():Item[]{
    return this.items
  }

  addItem(item:Item){
    this.items.push(item)
    console.log('adedd')
  }

  deleteItem(id:Number){
   this.items = this.items.filter(item=>item.id!=id)

    console.log('ite,s',this.items)
    console.log('delted')
  }

}
