# Calendar All Select Button 📅

A Chrome extension that adds a toggle button to select/deselect all calendars at once in Google Calendar's left sidebar.

## Features

- ✅ Adds a checkmark (✓) icon next to the "My calendars" header
- 🔄 Toggle all calendars on/off with a single click
- 🎯 Seamlessly integrated into the existing UI

## Installation

### Load as Unpacked Extension (Development)

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable **Developer mode** toggle in the top right
4. Click **Load unpacked**
5. Select this project folder
6. Visit Google Calendar (https://calendar.google.com)

## File Structure

```
calendar-all-select-button/
├── manifest.json       # Extension configuration
├── content.js         # Main logic (injected into calendar page)
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic
└── README.md          # This file
```

## Usage

### Toggle All Calendars
1. Open Google Calendar
2. Look for the **✓** icon next to "My calendars" text in the left sidebar
3. Click the **✓** icon to select/deselect all calendars at once

### Developer Info & Support
- Click the extension icon in Chrome toolbar to open the popup
- View GitHub repository, support links, and more

## How It Works

- **Smart Toggle Logic**: If any calendar is off → turn all on. If all are on → turn all off.
- **Auto-Detection**: Automatically detects when the calendar list loads and adds the icon
- **Dynamic Updates**: Re-adds the icon if the DOM changes (for SPA navigation)

## Tech Stack

- Manifest V3
- Vanilla JavaScript
- Chrome Extensions API

## Notes

- The extension may stop working if Google Calendar changes its DOM structure
- If the icon doesn't appear on first load, refresh the page
- The extension uses Chrome's default icon

## License

MIT

## Support 💖

If you find this extension useful, please consider supporting the developer!

- ☕ [Buy Me a Coffee](https://buymeacoffee.com/type_types)

## Contributing

Bug reports, feature suggestions, and Pull Requests are all welcome!

- 🐙 [GitHub Repository](https://github.com/type-types/google-calendar-calendar-all-select-button)
- 📝 [Issues](https://github.com/type-types/google-calendar-calendar-all-select-button/issues)

## Developer

Made with ❤️ by [type-types](https://github.com/type-types)

## Contact

- 📧 Business Contact: [@type_types](https://instagram.com/type_types) (Instagram DM)
