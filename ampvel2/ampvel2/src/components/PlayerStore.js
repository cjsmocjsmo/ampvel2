import { writable } from 'svelte/store';

export const songURLstore = writable("fuck");
export const artiststore = writable("BAR");
export const songstore = writable("BAZ");
export const songidstore = writable("FOO");
// export const localplayURL = writable("URL")
export const TVlocalplayURL = writable("URL")


export const playliststore = writable("BOOZE");
export const playlistidstore = writable("HOUND");

//ampvel
export const ampvel = writable(`http://192.168.0.74:6790`)

//MediaCenter
export const omxaddr = writable(`http://192.168.0.42:8888`)


//movies http
// export const movaddr = writable(`http://192.168.0.42:8081`)
export const movaddr = writable(`http://192.168.0.42:8062`)

//omxserver
export const movhttp = writable(`192.168.0.42:8181`)
