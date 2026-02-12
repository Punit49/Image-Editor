# 🖼️ Web-Based Image Editor

A **modern, lightweight web-based image editor** built using **Vanilla JavaScript, HTML5 Canvas, and CSS**.  
This project allows users to upload images, apply real-time filters, use preset effects, reset changes, and download the edited image — all **client-side with no backend required**.

---

## 🚀 Live Features Overview

- Upload images from local device
- Apply real-time image filters
- Use one-click preset effects
- Reset all filters instantly
- Download edited image as PNG
- Clean, dark-themed, responsive UI

---

## 🧠 How It Works

1. User uploads an image using the file input
2. Image is rendered on an **HTML5 Canvas**
3. Filters are applied using the Canvas `filter` property
4. Slider inputs update the canvas in real time
5. Presets apply multiple filters at once
6. Edited image is exported using `canvas.toDataURL()`

All processing happens **inside the browser**, ensuring speed and privacy.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---------|------|
| HTML5 | Structure and layout |
| CSS3 | Styling and responsiveness |
| CSS Variables | Theme and design system |
| JavaScript (Vanilla) | Core logic and interactivity |
| HTML5 Canvas API | Image rendering and filtering |
| Remix Icon | UI icons |

---

## 📁 Project Structure

```text
image-editor/
├── index.html      # Main HTML layout
├── app.js          # Image editor logic
├── styles.css      # Layout and component styling
├── theme.css       # Theme variables (colors, spacing, fonts)

```

## ✨ Core Features

### 📤 Image Upload
- Accepts all image formats (`accept="image/*"`)
- Displays placeholder UI when no image is selected
- Dynamically loads image into canvas

---

### 🎛️ Real-Time Filters

Each filter is controlled via a slider and applied instantly:

- Brightness
- Contrast
- Saturation
- Hue Rotate
- Blur
- Grayscale
- Sepia
- Opacity
- Invert

Filters are defined in a centralized object for easy scalability and maintenance.

---

### 🎨 Preset Effects

One-click presets that apply multiple filters together:

- `normal`
- `vintage`
- `blackWhite`
- `warm`
- `cool`
- `dramatic`
- `softFade`
- `pop`
- `retro`
- `negative`

Selecting a preset:
- Updates all filter values
- Synchronizes slider UI
- Redraws the canvas instantly

---

### 🔄 Reset Filters
- Resets all filters to default values
- Keeps UI sliders and internal state in sync
- Restores original image look

---

### ⬇️ Download Image
- Exports edited image as **PNG**
- Uses `canvas.toDataURL()`
- No server or external libraries required

---

## 🎨 UI & Styling

### 🌙 Dark Theme
- Custom dark UI using CSS variables
- Easy theme customization via `theme.css`

### 📐 Responsive Design
- Desktop: Side-by-side layout
- Mobile: Stacked layout for better usability

### 🎯 Design System
Centralized variables for:
- Font sizes
- Colors
- Spacing
- Border radius

---

## ⚙️ Technical Highlights

- Pure **Vanilla JavaScript**
- Canvas-based image processing
- No frameworks or dependencies
- Data-driven filters & presets
- Clean separation of logic, layout, and theme
- Offline-first and privacy-friendly

---

## 📌 Future Enhancements

- Crop and rotate tools
- Undo / redo functionality
- Custom preset saving
- Multiple export formats
- Zoom and pan support
- Performance optimization for large images

---

## 🧑‍💻 Author

**Punit Sahu**

This project demonstrates strong fundamentals in:
- DOM manipulation
- HTML5 Canvas API
- UI/UX design
- Clean and scalable JavaScript architecture

---

⭐ If you like this project, consider giving it a star!