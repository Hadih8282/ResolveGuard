export interface album {
    id: number;
    name: string;
    albumArt: string;
    year: number;
    songs: song[]
}

export interface song {
    trackNumber: number;
    name: string;
    duration: string;
}