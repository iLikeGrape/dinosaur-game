document.addEventListener('DOMContentLoaded', function () {
    const dinosaur = document.getElementById('dinosaur');
    const obstacle = document.getElementById('obstacle');
    let isJumping = false;

    function jump() {
        if (!isJumping) {
            isJumping = true;
            let position = 0;
            const jumpInterval = setInterval(() => {
                if (position >= 150) {
                    clearInterval(jumpInterval);
                    const fallInterval = setInterval(() => {
                        if (position <= 0) {
                            clearInterval(fallInterval);
                            isJumping = false;
                        }
                        position -= 5;
                        dinosaur.style.bottom = position + 'px';
                    }, 20);
                }
                position += 5;
                dinosaur.style.bottom = position + 'px';
            }, 20);
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            jump();
        }
    });

    function moveObstacle() {
        let obstaclePosition = 600;
        const moveInterval = setInterval(() => {
            if (obstaclePosition <= -20) {
                clearInterval(moveInterval);
                obstaclePosition = 600;
            }
            obstaclePosition -= 5;
            obstacle.style.right = obstaclePosition + 'px';
        }, 20);
    }

    moveObstacle();
    setInterval(moveObstacle, 2000);
});
