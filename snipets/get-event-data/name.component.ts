import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = '';

  constructor() {
  }

  ngOnInit() {
  }

  onInputType(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
