import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { album } from '../interfaces/app-interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  constructor(private albumService: AlbumsService) {}
  albums!: album[];

  ngOnInit(): void {
    this.albums = this.albumService.albums;
  }
}
