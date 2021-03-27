import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-gallary',
  templateUrl: './new-gallary.component.html',
  styleUrls: ['./new-gallary.component.css']
})
export class NewGallaryComponent implements OnInit {
  state = false;
  src = '';
  constructor() { }

  ngOnInit(): void {
  }

  openImage(path) {
    this.src = path;
    this.state = true;
  }

  closeModal() {
    this.state = false;
    this.src = '';
  }
}
