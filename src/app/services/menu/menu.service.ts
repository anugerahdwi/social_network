import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Menu } from '../../interfaces/menu';
import { Socmed } from '../../interfaces/socmed';

@Injectable({
	providedIn: 'root'
})
export class MenuService {
	constructor(private http: HttpClient) { }

	// Get Data Menu (by Menu Position)
	// mengambil semua data menu berdasarkan dari posisi menu
	getDataMenuPosisi(value: string) {
		return this.http.get<Menu[]>('http://localhost:3000/menu?position_like=' + value);
	}

	// Get Data Social Media
	// mengambil semua data social media
	getDataSocmed() {
		return this.http.get<Socmed[]>('http://localhost:3000/socmed');
	}
}
