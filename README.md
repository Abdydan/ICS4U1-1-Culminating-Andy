# Rock-Paper-Scissors with Elements

## Overview
Rock-Paper-Scissors with Elements is an extended version of the classic Rock-Paper-Scissors game. In addition to the traditional rock, paper, and scissors, this game includes five additional elements: fire, water, earth, air, and lightning. Each element has its own set of strengths and weaknesses against other elements, making the game more interesting (the elements makes a lot of sense if you think hard enough.)

## Features
- **Extended Choices**: Choose from eight different elements: Rock, Paper, Scissors, Fire, Water, Earth, Air, and Lightning.
- **Score Tracking**: The game keeps track of the user's and computer's scores.
- **Persistent Scores**: Scores are saved using localStorage
- **Reset Scores**: Reset the scores to zero
- **Light/Dark Mode**: Toggle between light and dark themes

## Game Mechanics
Each element can defeat specific other elements:
- **Rock** 🏔️ beats Scissors ✂️, Fire 🔥, Earth 🌍
- **Paper** 📄 beats Rock 🏔️, Water 💧, Air 🌬️
- **Scissors** ✂️ beats Paper 📄, Air 🌬️, Lightning ⚡
- **Fire** 🔥 beats Paper 📄, Air 🌬️, Earth 🌍
- **Water** 💧 beats Fire 🔥, Rock 🏔️, Lightning ⚡
- **Earth** 🌍 beats Lightning ⚡, Water 💧, Scissors ✂️
- **Air** 🌬️ beats Earth 🌍, Fire 🔥, Rock 🏔️
- **Lightning** ⚡ beats Water 💧, Air 🌬️, Scissors ✂️

## Usage
- **Start the Game**: Open the `index.html` file in your browser.
- **Make a Choice**: Click on one of the element buttons to make your choice.
- **See the Result**: The computer makes a random choice, and the result is displayed along with both choices.
- **Play Again**: Click the "Play Again" button to reset the choices and play another round.
- **Reset Scores**: Click the "Reset Score" button to reset the scores to zero.
- **Toggle Theme**: Use the "switch to dark" and "switch to light" buttons to toggle between light and dark modes.

## Files
- `index.html`: The main HTML file containing the structure of the web page.
- `styles.css`: The CSS file containing the styles for the web page.
- `script.js`: The JavaScript file containing the game logic and interactivity.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the web page.
- **JavaScript**: For game logic and interactivity.
- **localStorage**: For saving and loading persistent scores.
