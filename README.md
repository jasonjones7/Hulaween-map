# Hulaween 2026 Planner

Interactive map for Suwannee Hulaween (Oct 22–25, 2026, Spirit of the Suwannee Music Park). Search artists, add them to your own schedule, and see each one's stage and set time on the official map.

## Run it

- Open `index.html` in a browser (needs `data.js` and `assets/map.jpg` beside it), or
- open `hulaween-offline.html`, a single self-contained file that works with no network.

Your picks are saved in the browser's local storage on that device.

## Data

Set times are transcribed from the official schedule graphics at https://hulaween.com/schedule/. Edit `data.js` to fix a time or add a set. The Spirit Lake sub-venues (House of Lost, Incendia, Lake Show, Oasis) are not marked on the official map, so their pins are approximate.

`hulaween-offline.html` is `index.html` with `data.js` and the map image inlined; regenerate it after changing either.
