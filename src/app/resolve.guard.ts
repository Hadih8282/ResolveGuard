import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { delay, Observable, of, tap} from 'rxjs';

import { AlbumsService } from './albums.service';
import { album } from './interfaces/app-interface';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<album | null> {

  constructor(private albumService: AlbumsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): album | Observable<album | null> | Promise<album>  {
    const id = route.paramMap.get('id');
    let album = this.albumService.albums.find(album => album.id === +[id]);
    if (!album) {
      return of(null).pipe(
        delay(5000),
        tap(() => this.router.navigate(['/notfound']))
      );
    } else {
      return of(album).pipe( delay(5000) );
    }

  }
  
  
}
