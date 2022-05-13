import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router} from '@angular/router';
import { AlbumsService } from '../albums.service';
import { album } from '../interfaces/app-interface';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  
  constructor(private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router) {}
    
  warnnigMessage!: string;  
  album!: album ;

  ngOnInit(): void {
    // this.route.params.subscribe((res) =>{
    //   let selectedId: number = +res['id'];
    //   setTimeout(() => {
    //     this.album = this.albumsService.albums.find
    //       (album => album.id === selectedId)!;
    //     if (!this.album) {
    //       this.router.navigate(['/notfound']);
    //     }  
    //   },5000);

      this.route.data.subscribe((data: Data) => {
        this.album = data['hadi'];  
        console.log(this.route);
    });
    

    this.warnnigMessage = this.route.snapshot.data['message'];


  }


}
