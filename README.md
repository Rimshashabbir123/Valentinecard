# ❤️ Valentine's Card Creator ❤️

A beautiful, interactive Valentine's Day card creator with animations, image upload, and stunning red & white theme.

## ✨ Features

- **Beautiful Red & White Theme** - Elegant color scheme perfect for Valentine's Day
- **Image Upload** - Add your own photos to personalize the card
- **Smooth Animations** - Floating hearts, envelope opening, and confetti effects
- **Live Preview** - See your card update in real-time as you type
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Interactive Envelope** - Click to open and reveal your card with animation
- **Easy to Use** - Simple, intuitive interface for everyone

## 🚀 How to Use

### Option 1: Simple Way (No Server Needed)
1. Extract the ZIP file
2. Double-click on `index.html`
3. The card will open in your web browser
4. Start creating your card!

### Option 2: Using a Local Server (Recommended)
1. Extract the ZIP file
2. If you have Python installed:
   - Open terminal/command prompt in the folder
   - Run: `python -m http.server 8000`
   - Open browser and go to: `http://localhost:8000`

3. If you have Node.js installed:
   - Install: `npm install -g http-server`
   - Run: `http-server`
   - Open the URL shown in terminal

## 📝 Steps to Create Your Card

1. **Click "Create Your Card"** - Start the card creation process

2. **Fill in the Details:**
   - **To:** Enter your loved one's name
   - **From:** Enter your name
   - **Message:** Write your heartfelt message
   - **Photo (Optional):** Click to upload a photo or drag & drop

3. **Preview Your Card** - See how it looks in real-time on the right side

4. **Click "Preview Card"** - See the final version with envelope

5. **Click "Open Envelope"** - Beautiful animation reveals your card!

## 🎨 Customization Tips

### Change Colors
Edit `styles.css` and modify these variables:
```css
:root {
    --primary-red: #E63946;    /* Main red color */
    --deep-red: #C1121F;       /* Dark red */
    --light-red: #F77F8A;      /* Light red */
}
```

### Change Fonts
In `styles.css`, replace the Google Fonts import with your preferred fonts.

### Add More Features
The code is well-commented and easy to modify. Check `script.js` for functionality.

## 📱 Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 💡 Tips

- For best photo results, use square images (1:1 ratio)
- Keep your message concise for better visual impact
- Try the confetti effect when opening the envelope!
- Click the heart logo 7 times for a surprise! 😉

## 🎁 File Structure

```
valentine-card-app/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🐛 Troubleshooting

**Images not uploading?**
- Make sure the image is less than 5MB
- Use JPG or PNG format

**Animations not working?**
- Try using a modern browser (Chrome, Firefox, Edge)
- Clear your browser cache

**Card not displaying properly?**
- Make sure all three files (HTML, CSS, JS) are in the same folder
- Don't rename the files

## ❤️ Credits

Created with love for Valentine's Day!

Perfect for:
- Valentine's Day cards
- Anniversary messages
- Love letters
- Special occasions
- Just because messages!

## 📜 License

Free to use and modify for personal purposes. Share the love! ❤️

---

**Made with 💕 by Claude**

Enjoy creating your beautiful Valentine's card! 🌹
