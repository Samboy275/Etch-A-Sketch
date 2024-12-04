# **Etch-a-Sketch**

A simple and interactive pixel art drawing pad built using HTML, CSS, and JavaScript. The drawing pad allows you to create pixel art, clear the canvas, toggle between drawing modes, and customize your drawing experience.

---

## **Features**

- **Grid-based Drawing Pad**: Draw on a customizable grid of pixel squares.
- **Color Picker**: Choose your favorite color for drawing.
- **Rainbow Pen**: Toggle to use a rainbow color mode.
- **Eraser**: Erase specific pixels by toggling the eraser.
- **Clear Button**: Quickly clear the canvas to start fresh.
- **Grid Toggle**: Show or hide the grid lines for a cleaner look.
- **Customizable Grid Size**: Create a new grid with dimensions up to 100x100.

---

## **How to Use**

1. Open the project in a browser.
2. Use the buttons on the left to:
   - **New Page**: Enter a grid size to start a fresh canvas.
   - **Toggle Eraser**: Switch to erasing mode.
   - **Clear**: Clear the entire drawing pad.
   - **Rainbow Pen**: Activate a pen that changes color with each stroke.
   - **Grid Toggle**: Turn grid lines on or off for a seamless drawing experience.
3. Use the **Color Picker** to choose a drawing color.
4. Click or drag on the grid to draw or erase pixels.

---

## **Project Structure**

- **HTML (`index.html`)**: The main structure of the drawing pad.
- **CSS (`styles.css`)**: Styling for the drawing pad, buttons, and layout.
- **JavaScript (`app.js`)**: Implements grid creation, drawing logic, and interactive features.

---

## **Technologies Used**

- **HTML**: For structuring the drawing pad and controls.
- **CSS**: For styling the application.
- **JavaScript**: For dynamic grid creation, event handling, and functionality.

---

## **How to Run the Project**

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
    ```

2. Navigate to project folder:

    ```bash
    cd Etch-A-Sketch
    ```

3. Open the index.html file in your browser.

---

## **Customization**

you can adjust the grid size, colors, and other settings by modifying the javascript file `app.js`:

- Default grid size: change the size in the MakeGrid() function.
- Default colors: Update the chosenColor or rainbowColors array.

## **Acknowledgments**

- Inspired by [The Odin Project](https://www.theodinproject.com/)
