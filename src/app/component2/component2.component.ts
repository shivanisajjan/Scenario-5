import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  constructor() { }
  @Output() child=new EventEmitter();
  show(event1){
    this.child.emit(event1);
  }
  ngOnInit() {
  }

}
