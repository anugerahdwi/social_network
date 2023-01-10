import { Component, OnInit } from '@angular/core';

import { Video } from '../../interfaces/video';
import { People } from '../../interfaces/people';
import { Document } from '../../interfaces/document';
import { Activity } from '../../interfaces/activity';
import { Channel } from '../../interfaces/channel';

import { ContentService } from '../../services/content/content.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	constructor(private contentService: ContentService) { }

	// Data Video
	allVideo: Video[] = [];
	// Data People
	allPeople: People[] = [];
	// Data Document
	allDocument: Document[] = [];
	// Data Activity
	allActivity: Activity[] = [];
	// Data Channel
	allChannel: Channel[] = [];

	ngOnInit(): void {
		// mengambil data video
		this.dataVideo();
		// mengambil data people
		this.dataPeople();
		// mengambil data document
		this.dataDocument();
		// mengambil data activity
		this.dataActivity();
		// mengambil data channel
		this.dataChannel();
	}

	// Get Data Video
	// mengambil semua data video dari database
	dataVideo() {
		this.contentService.getDataVideo(5).subscribe(res => {
			this.allVideo = res;
		});
	}

	// Get Data People
	// mengambil semua data people dari database
	dataPeople() {
		this.contentService.getDataPeople(5).subscribe(res => {
			this.allPeople = res;
		});
	}

	// Get Data Document
	// mengambil semua data document dari database
	dataDocument() {
		this.contentService.getDataDocument(5).subscribe(res => {
			this.allDocument = res;
		});
	}

	// Get Data Activity
	// mengambil semua data activity dari database
	dataActivity() {
		this.contentService.getDataActivity(6).subscribe(res => {
			this.allActivity = res;
		});
	}

	// Get Data Channel
	// mengambil semua data channel dari database
	dataChannel() {
		this.contentService.getDataChannel(10).subscribe(res => {
			this.allChannel = res;
		});
	}
}
