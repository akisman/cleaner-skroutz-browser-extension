# Cleaner Skroutz

## Description
**Cleaner Skroutz** is a simple browser extension that removes ads and promotional elements from the webpage [Skroutz.gr](https://www.skroutz.gr), providing users with a cleaner and distraction-free browsing experience.

The extension works on Firefox, Chrome, and Edge, and should be compatible with other browsers that support the WebExtensions API, such as Opera, Brave, and Vivaldi.

## Features
- Removes ads from product listings.
- Eliminates promotional sections like "Best Budget Products" from product listings.
- Removes ads from product pages.

## Installation

Install directly from [Add-ons for Firefox](https://addons.mozilla.org/en-US/firefox/addon/cleaner-skroutz)

### For Development

#### Firefox
1. Clone or download this repository.
2. Open Firefox and go to `about:debugging`.
3. Click "This Firefox" on the left sidebar.
4. Click "Load Temporary Add-on".
5. Select the `manifest.json` file from this repository.

#### Chrome
1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer Mode" (top right).
4. Click "Load unpacked" and select the folder containing this repository.

## Usage
Once the extension is installed, it will automatically remove ads and promotional elements whenever you visit `https://www.skroutz.gr`.

## Development
If you want to contribute or customize this extension:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request with a clear description of your changes.

### File Structure
- `manifest.json`: The extension configuration file.
- `script.js`: The script that removes ads and elements from the page.
- `icons/`: Folder containing the extension icons.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
