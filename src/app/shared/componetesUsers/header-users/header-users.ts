import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header-users',
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterModule],
  templateUrl: './header-users.html',
  styleUrl: './header-users.css',
})
export class Header {
  isShrunk = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isShrunk = window.scrollY > 50;
  }
}

