import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-anagram-test',
  templateUrl: './anagram-test.component.html',
  styleUrls: ['./anagram-test.component.css']
})
export class AnagramTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstString = "eat";
  secondString = "tea";

  validateAnagram = () => {
    //1. Compare Length of both Strings
    if(this.firstString.length === this.secondString.length){
     this.sorting()
    }
    //2. Sort String1 and String 2 alphabetical
    //3. Check the Strings....
  }

  sorting = () =>{
      for (let i= 0; i < this.firstString.length; i++) {
        console.log(this.firstString[i])
        console.log(this.firstString[i+1])
      if(this.firstString[i] > this.firstString[i+1]){
        console.log(this.firstString[i])
        console.log(this.firstString[i+1])
        console.log("YEAHHH")
      }      
    }
    
  } 

}