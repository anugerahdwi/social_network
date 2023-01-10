import { Component, OnInit } from '@angular/core';

import { Menu } from '../../interfaces/menu';

import { MenuService } from '../../services/menu/menu.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor(private menuService: MenuService) { }

	// Data Menu
	allMenu: Menu[] = [];

	ngOnInit(): void {
		// mengambil data menu header
		this.dataMenuHeader();
	}

	// Get Data Menu Header
	// mengambil semua data menu header dari database
	dataMenuHeader() {
		this.menuService.getDataMenuPosisi('header').subscribe(res => {
			this.allMenu = res;
		});
	}
}
