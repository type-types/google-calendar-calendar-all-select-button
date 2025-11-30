# Chrome Web Store Deployment Guide 🚀

## Step 1: Package the Extension

### Create ZIP File

Create a ZIP file containing only the files needed for deployment:

**Files to include:**
- ✅ `manifest.json`
- ✅ `content.js`
- ✅ `popup.html`
- ✅ `popup.js`

**Files to exclude:**
- ❌ `README.md`
- ❌ `.gitignore`
- ❌ `.DS_Store`
- ❌ Other development files

### Create ZIP via Terminal:

```bash
cd "/Users/type/Dev Projects/google-calendar-calendar-all-select-button"
zip -r calendar-all-select-button-v1.0.0.zip manifest.json content.js popup.html popup.js
```

Or via Finder:
1. Select `manifest.json`, `content.js`, `popup.html`, `popup.js` files
2. Right-click → "Compress"
3. Rename to `calendar-all-select-button-v1.0.0.zip`

## Step 2: Access Chrome Web Store Developer Dashboard

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Sign in with your developer account

## Step 3: Add New Item

1. Click **"New Item"** button
2. Upload the ZIP file
3. The ZIP file will be automatically validated after upload

## Step 4: Enter Store Information

### Required Information:

#### 1. **Name**
```
Calendar All Select Button
```

#### 2. **Summary (132 characters max)**
```
Add a toggle button to select/deselect all calendars at once in Google Calendar.
```

#### 3. **Detailed Description (Markdown supported)**

```markdown
# Calendar All Select Button 📅

A Chrome extension that adds a toggle button to select/deselect all calendars at once in Google Calendar's left sidebar.

## Key Features

✅ **Easy All-Select**
- Adds a checkmark (✓) icon next to the "My calendars" header
- Toggle all calendars on/off with a single click

✅ **Smart Toggle Logic**
- If any calendar is off → turn all on
- If all are on → turn all off

✅ **Seamless Integration**
- Naturally integrated into the existing Google Calendar UI
- Clean user experience without additional buttons

## How to Use

1. Visit Google Calendar (https://calendar.google.com)
2. Look for the **✓** icon next to "My calendars" text in the left sidebar
3. Click the **✓** icon to select/deselect all calendars

## Developer Information

- 🐙 [GitHub](https://github.com/type-types/google-calendar-calendar-all-select-button)
- ☕ [Buy Me a Coffee](https://buymeacoffee.com/type_types)
- 📧 Business: [@type_types](https://instagram.com/type_types) (Instagram DM)

Made with ❤️ by type-types
```

#### 4. **Category**
- Select **Productivity**

#### 5. **Language**
- English (Primary)
- You can add more languages if needed

#### 6. **Icon**
- **128x128 PNG** image required
- Currently deployable without an icon, but adding one looks more professional
- Icon generator: [Favicon Generator](https://www.favicon-generator.org/)

#### 7. **Screenshots**
- **Minimum 1, maximum 5**
- **1280x800 or 640x400** recommended
- Capture the extension working in Google Calendar
- Examples:
  1. Screenshot showing the ✓ icon next to "My calendars"
  2. Screenshot after clicking ✓ with all calendars selected

#### 8. **Small Promotional Tile**
- **440x280 PNG** (optional but recommended)

#### 9. **Privacy Policy**
- **Required!** Even if you don't collect personal information
- Simple policy example:

```
Privacy Policy for Calendar All Select Button

Last updated: [Date]

This extension does not collect, store, or transmit any personal information or data.

All functionality is performed locally in your browser. We do not:
- Collect any user data
- Store any information
- Send data to external servers
- Use cookies or tracking technologies

The extension only interacts with Google Calendar's interface to add a toggle button for calendar selection.

For questions, contact: [@type_types on Instagram](https://instagram.com/type_types)
```

Host on GitHub Pages or a simple website, or use [Privacy Policy Generator](https://www.privacypolicygenerator.info/)

#### 10. **Single Purpose**
- ✅ Select "Yes"
- State that the extension performs only a single purpose (calendar selection)

#### 11. **User Data**
- ✅ Select "No" (no data collection)

## Step 5: Submit for Review

1. After entering all information, click **"Submit for Review"**
2. Review typically takes **1-3 days**
3. Status will show as "Under Review" during the process

## Step 6: After Approval

- Once approved, it will be automatically published to Chrome Web Store
- Users will be able to install it!

## How to Update

When updating the version:
1. Increment the `version` number in `manifest.json` (e.g., 1.0.0 → 1.0.1)
2. Create a new ZIP with updated files
3. Select the item in Developer Dashboard
4. Click "Upload new version"
5. Upload the new ZIP and enter change description

## Useful Links

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Chrome Extension Policies](https://developer.chrome.com/docs/webstore/program-policies/)
- [Manifest V3 Guide](https://developer.chrome.com/docs/extensions/mv3/)

## Important Notes

⚠️ **Important:**
- Extensions must comply with Google's policies
- Spam or misleading descriptions may be rejected
- Privacy Policy is required if collecting personal information
- Note that the extension may stop working if Google Calendar changes its DOM structure

---

Good luck with your deployment! 🎉
