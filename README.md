


# 🎯 Trend Game: Guess Number
A fun, competitive 2-player Number Guessing Game built with React Native (Expo). This project is a perfect intermediate step for first-year students to move beyond basic UI and into complex state machines and conditional rendering.

Unlike a standard guessing game, this is a Head-to-Head battle. Players must keep their numbers secret from each other, requiring the app to manage a "Pass the Phone" flow to ensure privacy.

##  🎯 Learning Objectives
This project is designed to teach:

State Machines: Managing a multi-step game flow (p1-setup → pass-to-p2 → p2-setup → play → win).

Conditional Rendering: Dynamically changing the entire screen layout based on the current game state.

Input Validation: Handling strings vs. integers and preventing invalid guesses.

Turn-Based Logic: Swapping active players and checking guesses against the correct opponent's secret.

## 🚀 Features
Dual Setup: Individual screens for both players to enter names and secrets.

Privacy Screen: A "Pass the Phone" interstitial to prevent cheating.

Smart Feedback: Provides ⬆️ Higher! or ⬇️ Lower! hints.

Win State: Dedicated celebration screen with a "Play Again" reset trigger.

Modern Dark UI: A high-contrast, professional mobile interface.

## 🛠️ Tech Stack
Framework: React Native (Expo)

Language: TypeScript (Strict typing for game steps)

Hooks: useState for all game variables.

Styling: React Native StyleSheet with Flexbox.

## 📂 Project Structure
Plaintext
trend-Game-guess-number-game/
│
├── app/
│   └── index.tsx       # Main Game logic, State Machine, and UI
├── assets/             # Icons and adaptive-icon
├── app.json            # Expo configuration
└── package.json        # Project dependencies

## ⚙️ Installation & Setup
1. Clone the Repository
Bash
git clone https://github.com/your-username/trend-Game-guess-number-game.git
2. Install Dependencies
Bash
cd trend-Game-guess-number-game
npm install
3. Launch the App
Bash
npx expo start
How to play: Open the Expo Go app on your phone and scan the QR code to start the match!

## 🎮 Game Logic Flow
P1 Setup: Player 1 sets their name and a secret number.

The Handover: A screen appears telling Player 1 to give the phone to Player 2.

P2 Setup: Player 2 sets their name and a secret number.

The Battle: Players take turns guessing. The app tracks whose turn it is and checks the guess against the other player's secret number.

Victory: The first player to match the secret number triggers the win state.

## 👨‍💻 Author
Sadek Amine
Focusing on logical thinking and interactive mobile experiences.
