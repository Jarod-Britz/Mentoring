import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
      $('#overlay').toggleClass('open')
    });
    
    $('.overlay-content a').click(function(){
      $('#nav-icon1').toggleClass('open');
      $('#overlay').toggleClass('open')
    });
  }

}
