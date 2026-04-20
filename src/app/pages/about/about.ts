import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,   // ✅ IMPORTANT
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements AfterViewInit {

  team = [
    {
      name: 'Hrishikesh S. Salunkhe',
      role: 'Founder',
      image: 'assets/images/sir.png'
    },
    {
      name: 'Aditi H. Salunkhe',
      role: 'Trainer',
      image: 'assets/images/mam.png'
    }
  ];

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}