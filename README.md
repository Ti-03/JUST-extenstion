# <img src="/icons/128.png" alt="JUST-extension-Logo" style="width:32px;"> JUST Extension

A Chrome extension designed specifically for students at [Jordan University of Science and Technology (JUST)](https://services.just.edu.jo/stuservices/login.aspx).

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue)](https://chrome.google.com/webstore/detail/just-extension/ckpjnaimhgfdngbhcojbmlmnncdmenef)

## 🎥 Demo

[![JUST Extension Demo](https://img.youtube.com/vi/7kzTqBQONBo/0.jpg)](https://www.youtube.com/watch?v=7kzTqBQONBo)

[Watch the video trailer on Twitter](https://twitter.com/i/status/1626635494212632602)

## ✨ Features

- **Dark Theme** - Enable dark mode for comfortable browsing
- **Auto Course Evaluation** - Automatically complete course evaluations
- **Registration Helper** - Assist with course registration
- **Quick Links** - Fast access to frequently used pages
- **Student Info Display** - Easy access to your student information
- **GPA Calculator** - Calculate your GPA quickly
- **Course Schedule Viewer** - View your courses in an organized manner
- And much more...

## 🚀 Installation

### From Chrome Web Store
[Download the extension from the Chrome Web Store](https://chrome.google.com/webstore/detail/just-extension/ckpjnaimhgfdngbhcojbmlmnncdmenef)

### Manual Installation (Developer Mode)
1. Clone this repository or download as ZIP
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The JUST Extension should now be installed and active

## 📁 Project Structure

```
├── src/
│   ├── background/         # Background scripts
│   │   └── background.js
│   ├── content/           # Content scripts injected into pages
│   │   ├── main.js
│   │   ├── login.js
│   │   ├── inject.js
│   │   ├── eva.js
│   │   └── RegHelperInject.js
│   ├── pages/             # Extension pages (popup, info, etc.)
│   │   ├── popup.html
│   │   ├── popup.js
│   │   ├── studentInfo.html
│   │   ├── studentInfo.js
│   │   ├── courses.html
│   │   ├── courses.js
│   │   ├── Calculator.html
│   │   ├── Calculator.js
│   │   ├── RegHelper.html
│   │   ├── RegHelper.js
│   │   └── info.html
│   ├── styles/            # CSS files
│   │   ├── buttonsStyle.css
│   │   └── fastButtons.css
│   └── utils/             # Utility scripts
│       ├── Ads.js
│       ├── fastButtons.js
│       └── studentCardFetch.js
├── icons/                 # Extension icons
├── manifest.json          # Extension manifest
├── LICENSE               # License file
└── README.md            # This file
```

## 🔧 Development

This extension is built using:
- Manifest V3
- Vanilla JavaScript
- Chrome Extension APIs

## 📝 License

See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ for JUST students
