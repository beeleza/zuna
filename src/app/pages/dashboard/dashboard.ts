import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  sidebarOpen = false;

  dropdownPagesOpen = false;
  dropdownSalesOpen = false;
  dropdownAuthOpen = false;

  isMobile = window.innerWidth < 640;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 640;
    if (!this.isMobile) {
      this.sidebarOpen = true; // abrir sidebar em desktop
    } else {
      this.sidebarOpen = false; // fechar no mobile por padrão
    }
  }

  ngOnInit() {
    if (!this.isMobile) {
      this.sidebarOpen = true;
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleDropdown(dropdown: string) {
    if (dropdown === 'pages') {
      this.dropdownPagesOpen = !this.dropdownPagesOpen;
    } else if (dropdown === 'sales') {
      this.dropdownSalesOpen = !this.dropdownSalesOpen;
    } else if (dropdown === 'auth') {
      this.dropdownAuthOpen = !this.dropdownAuthOpen;
    }
  }

  isSmallScreen() {
    return this.isMobile;
  }
}
