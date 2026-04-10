# Squint

A minimal Firefox/Chrome browser extension that renders web pages in greyscale.

## Installation

### Chrome

1. Go to the repository's **Releases** page
2. Download the latest archive (`.zip`)
3. Extract the archive locally
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable **Developer mode** (top right)
6. Click **Load unpacked**
7. Select the extracted extension folder

### Firefox

1. Go to the repository's **Releases** page
2. Download the latest archive (`.zip`)
3. Extract the archive locally
4. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
5. Click **Load Temporary Add-on`**
6. Select manifest.json in the extracted extension folder

## Usage

Once installed, go to any page and press `alt`+`1` on keyboard to turn whole page greyscale.

Press it again to go back to original look.

`alt`+`2`, `alt`+`3` and `alt`+`3` also blur and increse contrast in various ways to blob the image for study purposes.

## How it works

The extension works by applying a bunch of CSS styles to a `html` tag, something like this:

```css
html {
  filter: sepia(1) blur(2px) contrast(2) grayscale(1);
}
```
