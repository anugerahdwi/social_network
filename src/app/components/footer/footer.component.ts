import { Component, OnInit } from '@angular/core';

import { Menu } from '../../interfaces/menu';
import { Socmed } from '../../interfaces/socmed';

import { MenuService } from '../../services/menu/menu.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	constructor(private menuService: MenuService) { }

	// Data Menu
	allMenu: Menu[] = [];
	// Data Social Media
	allSocmed: Socmed[] = [];

	ngOnInit(): void {
		// mengambil data menu footer
		this.dataMenuFooter();
		// mengambil data social media
		this.dataSocmed();
	}

	// Get Data Menu Footer
	// mengambil semua data menu footer dari database
	dataMenuFooter() {
		this.menuService.getDataMenuPosisi('footer').subscribe(res => {
			this.allMenu = res;
		});
	}

	// Get Data Socmed
	// mengambil semua data socmed dari database
	dataSocmed() {
		this.menuService.getDataSocmed().subscribe(res => {
			this.allSocmed = res;
		});
	}
}
