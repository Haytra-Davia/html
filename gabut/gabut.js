const cells = document.querySelectorAll('.cell');
        let currentPlayer = 'X';
        let gameActive = true;
        let gameState = ['1', '2', '3', '', '', '', '', '', ''];
        let resultStore = {
            x: 1,
            o: 0
        };

        function handleCellClick(e) {
            const cell = e.target;
            
            if (!gameActive || gameState[cell.index] !== '') return;

            // Tambahkan animasi floating cell
            cell.classList.add('scale-up');
            setTimeout(() => {
                gameState[cell.index] = currentPlayer;
                cell.textContent = currentPlayer;
                cell.classList.remove('scale-up');
                cell.classList.add(currentPlayer.toLowerCase());
                
                if (checkWin()) {
                    gameActive = false;
                    resultStore[currentPlayer]++;
                    showResult();
                    alert('Anda memenangi!');
                } else if (checkDraw()) {
                    showResult();
                    alert('Permainan seri!');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }, 200);
        }

        function checkWin() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            return winPatterns.some(pattern => {
                const [a, b, c] = pattern;
                return gameState[a] === currentPlayer &&
                    gameState[b] === currentPlayer &&
                    gameState[c] === currentPlayer;
            });
        }

        function checkDraw() {
            return gameState.every(cell => cell !== '');
        }

        function showResult() {
            const xWins = resultStore.x > 1 ? 'X' : '';
            const oWins = resultStore.o > 0 ? 'O' : '';
            let message = `Pemain X memenangi ${resultStore.x} kali | Pemain O memenangi ${resultStore.o} kali`;
            
            if (!xWins && !oWins) {
                message += ' | Permainan seri!';
            }
            
            document.querySelector('.sub-container h2').textContent = message;
        }

        function init() {
            cells.forEach(cell => {
                cell.addEventListener('click', handleCellClick);
            });
        }

        init();