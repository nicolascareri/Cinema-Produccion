import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public open: Boolean = false;
  @Input() logeado;

  constructor() {
   }

  ngOnInit() {
  }
  toggleOverlay() {
    let sidenav = document.getElementsByClassName("sidenav")[0] as HTMLElement;
    let menu = document.getElementById("buttonsidenav") as HTMLElement;
    if(!this.open){
      sidenav.style.width = "250px";
      sidenav.style.display = "block";
      this.open = true;
      menu.style.display = "none";
    }
    else{
      sidenav.style.width = "0px";
      this.open = false;
      menu.style.display = "block";
    }
  }

}
