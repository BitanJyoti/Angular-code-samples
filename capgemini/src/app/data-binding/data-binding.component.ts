import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent  {
  search = "Iphone";
  flag = false;
  name = "Bitan";
  imgURL = "https://cdn.pixabay.com/photo/2019/08/03/12/22/hot-air-balloons-4381674__340.jpg"
  constructor() { 
    setInterval(()=>{
      this.flag = !this.flag;
    },2000)
  }
  printInput(tag){
    console.log(tag)
  }
  printSearch(search){
    console.log(search)
  }

  


}
