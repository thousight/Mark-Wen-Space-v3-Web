# Mark-Wen-Space-v3-Web

[![Greenkeeper badge](https://badges.greenkeeper.io/thousight/Mark-Wen-Space-v3-Web.svg)](https://greenkeeper.io/)

This is the 3rd version of my personal website. The goal of this website is to give employers a better impression and to demonstrate my frontend design ability.

## Key Features
This new version has the following upgrades from the previous version:

- Following Material design guidelines
- Cleaner overall design than last version
- Uses Angular2 framework
- More to be added when I remember them...

## Known Bugs
There are some bugs that I know they exist, but for some reason I'm not able to fix them, and they are listed below with reasons:

- **Skills box-shadow overlap:** only the last card can show the box-shadow on 4 sides, and I've tried using z-index but it doesn't help.
- **Google Maps isn't centered at the markup point at start:** The plug-in I use is called [Angular2-Google-Maps](https://https://angular-maps.com/), and for some reason when I initiate the app with the latitude and longitude I want it to center on, that location will be at the top left corner of the map instead. I also tried getting the original google.maps object with the solution mentioned in this [post](https://github.com/SebastianM/angular2-google-maps/issues/139), but both getMap() and getNativeMap() can't get me any map object returned.
- **Card Reveal isn't functioning properly in iOS Safari:** Materializecss card reveal div opens up but shifted to the right, and it can't close because the close button is shifted as well.
- **Navbar has a delay when changing to fix on mobile:** In Android, when moving navbar from bottom to top, it doesn't stick to the top until half seconds later. In iOS, navbar shows unless you pull down a bit after it should stick to the top.

Feel free to submit me pull requests if you can help me solve these bugs, it would be greatly appreciated.

## License
The MIT License (MIT)
Copyright (c) 2016 Mark Wen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
