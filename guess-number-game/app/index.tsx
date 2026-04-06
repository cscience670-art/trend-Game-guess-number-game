import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  const [step, setStep] = useState<
    "p1-setup" | "pass-to-p2" | "p2-setup" | "play" | "win"
  >("p1-setup");

  // 👤 player names
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  // 🔐 secret numbers
  const [secret1, setSecret1] = useState("");
  const [secret2, setSecret2] = useState("");

  // 🎮 game state
  const [turn, setTurn] = useState<1 | 2>(1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  // -------------------------
  // 🎯 CHECK GUESS
  // -------------------------
  const checkGuess = () => {
    const target = turn === 1 ? secret2 : secret1;

    const g = parseInt(guess);
    const t = parseInt(target);

    if (isNaN(g) || isNaN(t)) {
      setMessage("⚠️ Enter valid number");
      return;
    }

    if (g < t) {
      setMessage("⬆️ Higher!");
    } else if (g > t) {
      setMessage("⬇️ Lower!");
    } else {
      setMessage(`🎉 ${turn === 1 ? name1 : name2} Wins!`);
      setStep("win");
    }

    setGuess("");
  };

  // -------------------------
  // 🔁 SWITCH PLAYER TURN
  // -------------------------
  const switchTurn = () => {
    setTurn(turn === 1 ? 2 : 1);
    setMessage("");
    setGuess("");
  };

  // -------------------------
  // 🔄 RESET GAME
  // -------------------------
  const resetGame = () => {
    setStep("p1-setup");
    setName1("");
    setName2("");
    setSecret1("");
    setSecret2("");
    setGuess("");
    setMessage("");
    setTurn(1);
  };

  // =========================
  // 👤 PLAYER 1 SETUP
  // =========================
  if (step === "p1-setup") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🎮 Player 1 Setup</Text>

        <Text style={styles.text}>Enter Player 1 Name</Text>
        <TextInput
          style={styles.input}
          value={name1}
          onChangeText={setName1}
          placeholder="Player 1 name"
        />

        <Text style={styles.text}>Enter Secret Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={secret1}
          onChangeText={setSecret1}
          placeholder="Secret number"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setStep("pass-to-p2")}
        >
          <Text style={styles.buttonText}>Done ➡️ Pass Phone</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // =========================
  // 📱 PASS PHONE SCREEN
  // =========================
  if (step === "pass-to-p2") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>📱 Pass the Phone</Text>

        <Text style={styles.bigText}>
          Give phone to <Text style={{ color: "#22c55e" }}>Player 2</Text>
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setStep("p2-setup")}
        >
          <Text style={styles.buttonText}>I am Player 2 ▶️</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // =========================
  // 👤 PLAYER 2 SETUP
  // =========================
  if (step === "p2-setup") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🎮 Player 2 Setup</Text>

        <Text style={styles.text}>Enter Player 2 Name</Text>
        <TextInput
          style={styles.input}
          value={name2}
          onChangeText={setName2}
          placeholder="Player 2 name"
        />

        <Text style={styles.text}>Enter Secret Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={secret2}
          onChangeText={setSecret2}
          placeholder="Secret number"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setStep("play")}
        >
          <Text style={styles.buttonText}>Start Game 🚀</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // =========================
  // 🎯 PLAY SCREEN
  // =========================
  if (step === "play") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {turn === 1 ? name1 : name2} Turn 🎯
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your guess"
          keyboardType="numeric"
          value={guess}
          onChangeText={setGuess}
        />

        <TouchableOpacity style={styles.button} onPress={checkGuess}>
          <Text style={styles.buttonText}>Guess</Text>
        </TouchableOpacity>

        <Text style={styles.message}>{message}</Text>

        {(message === "⬆️ Higher!" || message === "⬇️ Lower!") && (
          <TouchableOpacity style={styles.button2} onPress={switchTurn}>
            <Text style={styles.buttonText}>Switch Player 🔄</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  // =========================
  // 🏆 WIN SCREEN
  // =========================
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>

      <TouchableOpacity style={styles.button} onPress={resetGame}>
        <Text style={styles.buttonText}>Play Again 🔁</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🎨 STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    color: "#fff",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginTop: 10,
  },

  bigText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    width: "80%",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 8,
  },

  button: {
    backgroundColor: "#22c55e",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },

  button2: {
    backgroundColor: "#3b82f6",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  message: {
    color: "#fff",
    fontSize: 18,
    marginTop: 15,
  },
});