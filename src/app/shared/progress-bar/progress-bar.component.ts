import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit {


  color: string = ''
  @Input() progress: number = 0;
  @Input() firstName: string = ''
  @Output() progressClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

    if (this.progress < 0 || this.progress > 100) {
      this.progress = 0;
    }

    if (this.progress < 25) {
      this.color = 'red'
    } else if (this.progress < 65) {
      this.color = 'yellow'
    } else {
      this.color = 'green'
    }

  }
  onClick() {
    this.progressClick.emit(` ${this.firstName}'s Progress is ${this.progress} %`);
  }

}
