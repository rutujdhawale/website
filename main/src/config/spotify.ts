export type SpotifyTrack = {
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  songUrl: string;
  audioSrc?: string;
};

export const playlistTracks: SpotifyTrack[] = [
  {
    title: "Hysteria",
    artist: "Def Leppard",
    album: "Hysteria",
    albumArt: "/assets/hysteria-vinyl.png",
    songUrl: "https://open.spotify.com/track/2PFIZFcGry0po3ZfRZkzKc",
    audioSrc: "/assets/hysteria.mp3",
  },
  {
    title: "Eye of the Tiger",
    artist: "Survivor",
    album: "Eye of the Tiger",
    albumArt: "/assets/hysteria-vinyl.png",
    songUrl: "https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2",
    audioSrc: "/assets/hysteria.mp3",
  },
];

export const lastPlayedTrack = playlistTracks[0];
