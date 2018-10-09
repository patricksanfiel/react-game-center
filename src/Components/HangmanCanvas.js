import React, { Component } from "react";

class HangmanCanvas extends Component {
    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }
// Every time a letter is added to "Incorrect Guesses", the "Remaining Guesses Counter is decreased by one"
// Using the "remaining guesses" value and checking it against the if statements, each body part is revealed 
    updateCanvas() {
        let myCanvas = document.getElementById("hangman-canvas");

        if (myCanvas) {
            let context = myCanvas.getContext("2d");
            context.fillStyle = "#d8a200";
            context.fillRect(0, 0, 500, 250);
            // Gallows Floor
            context.strokeStyle = "white";
            context.moveTo(125, 105);
            context.lineTo(175, 105);
            context.stroke();
            // Gallows Pole
            context.moveTo(135, 105);
            context.lineTo(135, 40);
            context.stroke();
            // Gallows Arm
            context.moveTo(125, 45);
            context.lineTo(160, 45);
            context.stroke();
            // Rope
            context.moveTo(150, 45);
            context.lineTo(150, 65);
            context.stroke();
            let hangmanHead = () => {
                if (this.props.remainingGuesses < 6) {
                    // Head
                    context.beginPath();
                    context.arc(150, 70, 5, 0, 2 * Math.PI);
                    context.stroke();
                }
            };
            let hangmanTorso = () => {
                if (this.props.remainingGuesses < 5) {
                    // Torso
                    context.moveTo(150, 75);
                    context.lineTo(150, 90);
                    context.stroke();
                }
            };
            let hangmanLeftArm = () => {
                if (this.props.remainingGuesses < 4) {
                    // Left Arm
                    context.moveTo(150, 75);
                    context.lineTo(142, 82);
                    context.stroke();
                }
            };

            let hangmanRightArm = () => {
                if (this.props.remainingGuesses < 3) {
                    // Right Arm
                    context.moveTo(150, 75);
                    context.lineTo(158, 82);
                    context.stroke();
                }
            };

            let hangmanLeftLeg = () => {
                if (this.props.remainingGuesses < 2) {
                    // Left Leg
                    context.moveTo(150, 90);
                    context.lineTo(142, 97);
                    context.stroke();
                }
            };

            let hangmanRightLeg = () => {
                if (this.props.remainingGuesses < 1) {
                    // Right Leg
                    context.moveTo(150, 90);
                    context.lineTo(158, 97);
                    context.stroke();
                }
            };
            let hangmanArray = [
                hangmanRightLeg(),
                hangmanLeftLeg(),
                hangmanRightArm(),
                hangmanLeftArm(),
                hangmanTorso(),
                hangmanHead()
            ];
            return hangmanArray;
        }
    }

    render() {
        if (this.props.showCanvas === true) {
            return <canvas id="hangman-canvas" />;
        } else {
            return <canvas id="empty-canvas" />;
        }
    }
}

export default HangmanCanvas;
