import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  
  constructor() { }

  ngOnInit() { }
  

  // The annotation @Input declares that the text variable is an input
  // to this component

  @Input('placeholder')
  text = 'Type your search v1';

  clear(inputField) {
    console.log("Clear button pressed.");
    inputField.value='';
  }

  private consoleLog(text: any) {
    console.error('Value of text: ', text); // for demo purposes only
  }
}
