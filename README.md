# ytmusic-no-fullscreen-on-select

# ytmusic-no-fullscreen

A lightweight Tampermonkey userscript that prevents YouTube Music from automatically opening the fullscreen player page when selecting or switching tracks.

This script keeps playback in the compact mini player unless the user explicitly opens the player page.

---

## Features

- Blocks automatic fullscreen player page
- Works on modern YouTube Music UI updates
- No permissions required
- Runs entirely client side
- Minimal and fast

---

## Installation

### 1. Install a userscript manager

You need one of the following browser extensions:

- Tampermonkey (Chrome, Edge, Brave, Opera, Firefox)
- Greasemonkey (Firefox)

---

### 2. Add the script

1. Open the Tampermonkey dashboard
2. Create a new script
3. Delete any existing code
4. Paste the contents of the script file from this repository
5. Save the script

---

### 3. Open YouTube Music

Navigate to:

https://music.youtube.com

If the site was already open, perform a hard refresh.

Windows or Linux: Ctrl + Shift + R

macOS: Cmd + Shift + R

## How it works

YouTube Music opens the fullscreen player using internal navigation events rather than stable DOM attributes.

This script:
- Observes navigation changes
- Forces the layout back to mini player mode
- Runs early in the page lifecycle to prevent UI flicker

No network requests or external libraries are used.

---

## Compatibility

- Chrome based browsers
- Firefox
- Desktop only

Mobile browsers are not supported.

---

## Limitations

- Fullscreen player may briefly appear before being closed
- Explicit user actions that force the player page may still succeed
- YouTube UI changes may require future updates

---

## Contributing

Pull requests are welcome.

If YouTube Music changes behavior, feel free to open an issue with:
- Browser name and version
- Steps to reproduce
- Console errors if any

---

## License

MIT License
