import { Injectable } from '@angular/core';

import { album, song } from './interfaces/app-interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  public albums: album[] =[
    {
      id: 1,
      name: 'The Piper at the Gates of Dawn',
      year: 1967,
      albumArt: '/assets/images/piper.jpg',
      songs: [
        {
          trackNumber: 1,
          name: 'Astronomy Domine',
          duration: '4:17'
        },
        {
          trackNumber: 3,
          name: 'Matilda Mother',
          duration: '3:05'
        }
      ]
    },
    {
      id: 2,
      name: 'Animals',
      year: 1977,
      albumArt: '/assets/images/animals.jpg',
      songs: [
        {
          trackNumber: 1,
          name: 'Pigs On The Wing (Part One)',
          duration: '1:24'
        },
        {
          trackNumber: 2,
          name: 'Dogs',
          duration: '17:04'
        }
      ]
    },
    {
      id: 3,
      name: 'The Dark Side of the Moon',
      year: 1973,
      albumArt: '/assets/images/dark.jpg',
      songs: [
        {
          trackNumber: 1,
          name: 'Speak to Me',
          duration: '1:13'
        },
        {
          trackNumber: 2,
          name: 'Breathe',
          duration: '2:43'
        },
        {
          trackNumber: 6,
          name: 'Money',
          duration: '6:23'
        }
      ]
    },
    {
      id: 4,
      name: 'The Division Bell',
      year: 1994,
      albumArt: '/assets/images/division.jpg',
      songs: [
        {
          trackNumber: 10,
          name: 'Lost for Words',
          duration: '5:13'
        },
        {
          trackNumber: 11,
          name: 'High Hopes',
          duration: '8:34'
        }
      ]
    },
    {
      id: 5,
      name: 'Wish You Were Here',
      year: 1975,
      albumArt: '/assets/images/wish.jpeg',
      songs: [
        {
          trackNumber: 1,
          name: 'Shine On You Crazy Diamond (Parts IV)',
          duration: '13:32'
        },
        {
          trackNumber: 2,
          name: 'Welcome to the Machine',
          duration: '7:28'
        }
      ]
    }

  ];
}
