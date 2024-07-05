
import './App.css'
import React, {  useState } from 'react';



const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

    // Método para dibujar el fondo

// Dibuja el suelo negro
function drawGround() {
    ctx.fillStyle = "#133"; // Darker color for solid floor
    ctx.fillRect(0, canvas.height - 20, canvas.width, 20); // Altura del suelo: 20 píxeles
}


// Variables para la animación del sprite
const spriteWidth = 120;
const spriteHeight = 80;
let frameX = 0; // Coordenada X del primer frame en la sprite sheet
let frameY = 0; // Coordenada Y del primer frame en la sprite sheet
let frameCount = 8; // Número total de frames en la sprite sheet
let currentFrame = 0; // Frame actual de la animación
let frameRate = 15; // Velocidad de la animación (frames por segundo)
let frameIndex = 0; // Índice del frame actual

// Función para actualizar la animación del sprite
function updateSpriteFrame() {
    frameIndex++;

    if (frameIndex >= frameRate) {
        frameIndex = 0;
        currentFrame++;

        if (currentFrame >= frameCount) {
            currentFrame = 0;
        }

        // Calcular las coordenadas X e Y del siguiente frame en la sprite sheet
        frameX = currentFrame * spriteWidth;
        frameY = 0; // Suponiendo que todos los frames están en la misma fila (Y=0)
    }
}
function update() {
    let facingLeft = false; // Inicialmente el sprite mira hacia la derecha

    if (keys["ArrowLeft"]){
        velX = -speed ;
        facingLeft = true;
    }  // Mover hacia la izquierda;
    else if (keys["ArrowRight"]){
        velX = speed ;
        facingLeft = false;
    } 
    else velX = 0;

    if (keys["ArrowUp"] && !jumping) {
        velY = jumpForce;
        jumping = true;
    }

    // Aplica gravedad
    velY += gravity;

    // Aplica fricción
    velX *= friction;

    // Actualiza la posición
    x += velX;
    y += velY;

    // Limita la posición vertical al suelo
    if (y > canvas.height - 25) { // 25 es el radio de la pelota
        y = canvas.height - 25;
        velY = 1;
        jumping = false;
    }

 
    // Dibuja la pelota
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    updateSpriteFrame();
    const sprite = new Image();
    const sprite2= new Image()
    sprite.src = './src/assets/Colour1/NoOutline/120x80_PNGSheets/_Run.png'; // Ruta de tu sprite
    sprite2.src= "./src/assets/Colour1/NoOutline/120x80_PNGSheets/_Idle.png"
    ctx.save(); // Guardar el estado actual del contexto

 if (facingLeft && keys["ArrowLeft"]) {
    // Si el sprite mira hacia la izquierda, reflejar horizontalmente
    
    ctx.scale(-1, 1);
    ctx.drawImage(
        sprite, 
        frameX, frameY, spriteWidth, spriteHeight, // Recortar el frame correcto de la sprite sheet
        -(x - spriteWidth / 1.7) - spriteWidth, y - spriteHeight / 1.1, spriteWidth, spriteHeight // Dibujar en la posición correcta reflejada
    );


}else if(!facingLeft && keys["ArrowRight"]) {
    ctx.drawImage(
        sprite, 
        frameX, frameY, spriteWidth, spriteHeight, // Recortar el frame correcto de la sprite sheet
        x - spriteWidth / 1.7, y - spriteHeight / 1.1, spriteWidth, spriteHeight // Dibujar en la posición correcta en el canvas
    );
}

else {
    
    // Si el sprite mira hacia la derecha, dibujar normalmente
    ctx.drawImage(
        sprite2, 
        frameX, frameY, spriteWidth, spriteHeight, // Recortar el frame correcto de la sprite sheet
        x - spriteWidth / 1.7, y - spriteHeight / 1.1, spriteWidth, spriteHeight // Dibujar en la posición correcta en el canvas
    );
}
ctx.restore();

    drawGround()
   

    // Dibuja el bloque
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(blockX, blockY, blockRadius, 0, Math.PI * 2);
    ctx.fill();

    // Dibuja el texto "Level up!"
    ctx.fillStyle = "white";
    ctx.font = `${levelUpTextSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Level up!", blockX, blockY);

    // Dibuja el contador de golpes
    ctx.fillStyle = "white";
    ctx.font = "12px Arial";
    ctx.fillText(`Levels: ${hitCounter}`, blockX, blockY + blockRadius + 20);

    // Si el jugador golpea el bloque, rebota hacia abajo
    let dx = x - blockX;
    let dy = y - blockY;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 25 + blockRadius) {
        velY = -jumpForce;
        hitCounter++;

        // Hacer crecer el círculo un poco
        if (blockRadius < 40) {
            blockRadius += 1;
            levelUpTextSize += 0.2; // Make the text grow slightly with the circle
        }

        // Explotar si se ha golpeado el bloque 27 veces
        if (hitCounter === 27) {
            // Clear the canvas and display the "Happy Birthday!" message
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGround();
            ctx.fillStyle = "white";
            ctx.font = "30px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Happy Birthday!", canvas.width / 2, canvas.height / 2);
            // Draw restart button
            ctx.fillStyle = "gray";
            ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 + 30, 100, 40);
            ctx.fillStyle = "white";
            ctx.font = "20px Arial";
            ctx.fillText("Restart", canvas.width / 2, canvas.height / 2 + 55);
            return;
        }
    }

    // Solicita el siguiente fotograma
    requestAnimationFrame(update);
}


// Propiedades del personaje
let x = 150; // Posición inicial en X
let y = 150; // Posición inicial en Y
let velX = 0; // Velocidad en X
let velY = 0; // Velocidad en Y
let jumping = false; // Estado de salto
let jumpForce = -12; // Fuerza de salto
let speed = 2.5; // Velocidad máxima
let friction = 0.8; // Fricción
let gravity = 0.4; // Gravedad
let keys = {}; // Almacena las teclas presionadas
let blockRadius = 30; // Radio del bloque
let blockX = canvas.width / 2; // Posición inicial del bloque
let blockY = canvas.height / 2 - 50; // Posición vertical del bloque
let levelUpTextSize = 18; // Tamaño inicial de texto "Level up!"
let hitCounter = 0; // Contador de veces que se ha golpeado el bloque

// Escucha los eventos de teclado (para mover la pelota)
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});



// Inicia la animación
update();

// Agrega un evento de clic para el botón de reinicio
canvas.addEventListener("click", function(event) {
    // Verificar si se hizo clic en el botón de reinicio
    if (
        event.clientX >= canvas.width / 2 - 50 &&
        event.clientX <= canvas.width / 2 + 50 &&
        event.clientY >= canvas.height / 2 + 30 &&
        event.clientY <= canvas.height / 2 + 70
    ) {
        // Reiniciar juego
        resetGame();
    }
});

// Función para reiniciar el juego
function resetGame() {
    x = 150;
    y = 150;
    velX = 0;
    velY = 0;
    jumping = false;
    hitCounter = 0;
    blockRadius = 30;
    levelUpTextSize = 18;
    update();
}




function App() {
  return (
    <canvas id="myCanvas" width="1200" height="300"></canvas>

  );
}





export default App;