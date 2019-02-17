import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DomLoggerService, Log } from './dom-logger.service';

@Component({
  selector: 'dom-logger',
  templateUrl: './dom-logger.component.html',
  styleUrls: ['./dom-logger.component.scss']
})
export class DomLoggerComponent implements OnInit {

  @ViewChild('container') container: ElementRef

  listOfVarsToFollow = [];

  @Log()
  varToFollow = 0;

  constructor(private renderer: Renderer2, private domLog: DomLoggerService) { }

  ngOnInit() { }

  clickMe() {
    this.varToFollow++;
  }

  scrollDown() {
    setTimeout(() => {
      this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    }, 600);
  }
}
