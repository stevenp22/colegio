import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  educativos(){
    document.getElementById('educativos').style.display="block";
    document.getElementById('institucionales').style.display="none";
  }

  institucionales(){
    document.getElementById('educativos').style.display="none";
    document.getElementById('institucionales').style.display="block";
  }

}
