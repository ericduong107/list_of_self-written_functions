const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const PADDLE_WIDTH = 16;
const PADDLE_HEIGHT = 100;
const BALL_SIZE = 16;

const PADDLE_MARGIN = 20;
const PLAYER_X = PADDLE_MARGIN;
const AI_X = WIDTH - PADDLE_MARGIN - PADDLE_WIDTH;

let playerY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
let aiY = HEIGHT / 2 - PADDLE_HEIGHT / 2;

let ballX = WIDTH / 2 - BALL_SIZE / 2;
let ballY = HEIGHT / 2 - BALL_SIZE / 2;
let ballVX = Math.random() < 0.5 ? 5 : -5;
let ballVY = (Math.random() * 4) - 2;

let playerScore = 0;
let aiScore = 0;

// Mouse controls for player paddle
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    playerY = mouseY - PADDLE_HEIGHT / 2;
    // Clamp to canvas
    playerY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, playerY));
});

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawBall(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
}

function resetBall(direction) {
    ballX = WIDTH / 2 - BALL_SIZE / 2;
    ballY = HEIGHT / 2 - BALL_SIZE / 2;
    ballVX = direction * 5;
    ballVY = (Math.random() * 4) - 2; // random vertical speed
}

function updateAI() {
    // Simple AI: follow the ball with some smoothing
    const aiCenter = aiY + PADDLE_HEIGHT / 2;
    if (aiCenter < ballY + BALL_SIZE / 2 - 10) {
        aiY += 5;
    } else if (aiCenter > ballY + BALL_SIZE / 2 + 10) {
        aiY -= 5;
    }
    // Clamp to canvas
    aiY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, aiY));
}

function checkCollision(px, py, bx, by) {
    // Paddle-ball collision
    return (
        bx < px + PADDLE_WIDTH &&
        bx + BALL_SIZE > px &&
        by < py + PADDLE_HEIGHT &&
        by + BALL_SIZE > py
    );
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Draw paddles
    drawRect(PLAYER_X, playerY, PADDLE_WIDTH, PADDLE_HEIGHT, "#fff");
    drawRect(AI_X, aiY, PADDLE_WIDTH, PADDLE_HEIGHT, "#fff");

    // Draw ball
    drawBall(ballX, ballY, BALL_SIZE, "#ff9800");

    // Draw middle line
    ctx.strokeStyle = "#555";
    ctx.beginPath();
    ctx.setLineDash([8, 16]);
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw scores (update DOM)
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('aiScore').textContent = aiScore;
}

function update() {
    // Move ball
    ballX += ballVX;
    ballY += ballVY;

    // Ball collision with top/bottom walls
    if (ballY <= 0 || ballY + BALL_SIZE >= HEIGHT) {
        ballVY = -ballVY;
        // Clamp position inside
        ballY = Math.max(0, Math.min(HEIGHT - BALL_SIZE, ballY));
    }

    // Ball collision with paddles
    if (checkCollision(PLAYER_X, playerY, ballX, ballY)) {
        ballVX = Math.abs(ballVX);
        // Add a bit of "spin" depending on where hit
        let intersectY = (ballY + BALL_SIZE / 2) - (playerY + PADDLE_HEIGHT / 2);
        ballVY += intersectY * 0.15;
    } else if (checkCollision(AI_X, aiY, ballX, ballY)) {
        ballVX = -Math.abs(ballVX);
        let intersectY = (ballY + BALL_SIZE / 2) - (aiY + PADDLE_HEIGHT / 2);
        ballVY += intersectY * 0.15;
    }

    // Ball out of bounds (score)
    if (ballX < 0) {
        aiScore += 1;
        resetBall(1);
    } else if (ballX + BALL_SIZE > WIDTH) {
        playerScore += 1;
        resetBall(-1);
    }

    updateAI();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();