import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../interfaces/video';
import { People } from '../../interfaces/people';
import { Document } from '../../interfaces/document';
import { Activity } from '../../interfaces/activity';
import { Channel } from '../../interfaces/channel';

@Injectable({
	providedIn: 'root'
})
export class ContentService {
	constructor(private http: HttpClient) { }

	// Get Data Video
	// mengambil semua data video
	getDataVideo(limit: number) {
		return this.http.get<Video[]>('http://localhost:3000/video?_limit=' + limit);
	}

	// Get Data People
	// mengambil semua data people
	getDataPeople(limit: number) {
		return this.http.get<People[]>('http://localhost:3000/people?_limit=' + limit);
	}

	// Get Data Document
	// mengambil semua data document
	getDataDocument(limit: number) {
		return this.http.get<Document[]>('http://localhost:3000/document?_limit=' + limit);
	}

	// Get Data Activity
	// mengambil semua data activity
	getDataActivity(limit: number) {
		return this.http.get<Activity[]>('http://localhost:3000/activity?_limit=' + limit);
	}

	// Get Data Channel
	// mengambil semua data channel
	getDataChannel(limit: number) {
		return this.http.get<Channel[]>('http://localhost:3000/channel?_limit=' + limit);
	}
}
