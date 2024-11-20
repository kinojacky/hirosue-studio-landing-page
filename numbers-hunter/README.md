# Number Hunter (0.0.1 beta)

A fun and engaging number matching game that generates random numbers and finds matches between different groups. The game comes in two variations: a 2-group version for balanced gameplay and a more challenging 4-group version.

## Game Files

- `index.html` - Main homepage with game description and version selection
- `2groups.html` - Standard version with two random number groups
- `4groups.html` - Challenging version with four random number groups
- `README.md` - Project documentation

## Features

### Common Features
- Random number generation (1-49 range)
- Real-time match detection
- Match highlighting system:
  - Red badge: New matches
  - Gray badge: Duplicate matches
- History tracking for all number generations
- Responsive design using Bootstrap
- Simple and intuitive interface

### Homepage Features
- Clean, modern interface
- Game description and overview
- Interactive cards for version selection
- Responsive layout for all devices
- Sticky footer with copyright information

### Version Differences

#### 2 Groups Version
- Two random number groups
- Higher probability of matches (1/2,401)
- More suitable for casual gameplay
- Average completion time: ~30 minutes

#### 4 Groups Version
- Four random number groups
- Much lower probability of matches (1/5,764,801)
- Extremely challenging
- Recommended for experimental purposes or long-running sessions

## How to Play

1. Open `index.html` in a web browser
2. Choose your preferred version (2 groups or 4 groups)
3. Click "Start Run" to begin generating random numbers
4. When matching numbers are found between groups, they'll be:
   - Added to the boxes at the top
   - Highlighted in red in the history
5. If a match is found again, it will be highlighted in gray
6. Game completes when all 7 boxes are filled with unique numbers
7. Use "Reset" to clear all numbers and start over

## Technical Requirements

- Modern web browser with JavaScript enabled
- No server required (runs locally)
- Internet connection (for Bootstrap CDN)

## Installation

1. Download or clone the repository
2. Ensure all files and directories are maintained in their original structure
3. No additional installation required
4. Open `index.html` in a web browser to start

## File Structure
```
number-hunter/
├── css/
│   └── styles.css          # Custom styles for all pages
│
├── favicons/              # Favicon files for various platforms
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── favicon.ico
│
├── index.html            # Homepage
├── 2groups.html          # 2 Groups version
├── 4groups.html          # 4 Groups version
├── LICENSE              # MIT License file
└── README.md            # Documentation
```

## License

MIT License

Copyright (c) 2024 Jacky Kiu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.