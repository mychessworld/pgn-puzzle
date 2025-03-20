const game = [
    {
        moves: `1. Rxg6+ $1 1... fxg6 (1... Kxg6 2. Qg3+ Kh6 3. Qf4+ Kg7 4. Qxf7+ Kh8 5. Nf6 $18) 2. Rf7+ $1 2... Kxf7 3. Qxh7+ Ke6 (3... Kf8 4. Nf4 Rec8 5. Nxg6+ Ke8 6. Qg8# {#}) 4. Qxg6+ Ke5 5. Qg7+ Kxe4 6. Nf6+ exf6 7. Qxd7 $18 *`,
        position: `4r3/p2qppkp/3p2b1/1p1N4/2r1P1RQ/2P4P/PP4P1/5RK1 w - - 0 1`,
        color: `white`,
        result: `White wins`,
    },
    {
        moves: `1... Nf4 $1 2. Nxe4 (2. gxf3 Qh3 3. Bxf4 3... exf3 $19) 2... Qh3 $1 3. gxh3 3... Nxh3# *`,
        position: `r4rk1/ppp2pp1/7p/2NP3n/2P1p1q1/5bB1/PPP2PPP/RN2QRK1 b - - 0 1`,
        color: `black`,
        result: `Black wins`,
    },
    {
        moves: `1. Qh6 $3 1... Bxh6+ (1... Ra8 2. Qh8+ Bxh8 3. Rxh8+ Kg7 4. R1h7# {#}) 2. Rxh6 g5 3. Rh8+ Kg7 4. R1h7+ Kg6 5. Bd3+ `,
        position: `1rr3k1/4ppb1/2q1bnp1/1p2B1Q1/6P1/2p2P2/P1P1B2R/2K4R w - - 0 1`,
        color: `white`,
        result: `White wins`,
    },
    {
        moves: `1... Bxf3 $1 2. Nxf3 Ne4+ 3. Ke1 3... Nxc3 $1 (3... Nxg3 $2 4. Bd1) 4. bxc3 Qxc3+ 5. Kf2 5... Qxa1 $19 *`,
        position: `6k1/5p1p/P1pb1n2/6p1/3P4/1BPq1PP1/1P1NbK1P/R1B5 b - - 0 1`,
        color: `black`,
        result: `Black wins`,
    },
];
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const result = document.querySelector('.result');

let currentIndex = 0; 
function updateBoard() {
    const currentGame = game[currentIndex];
    result.textContent = game[currentIndex].result;
    PGNV.pgnPuzzle('board', {
        pgn: currentGame.moves, 
        position: currentGame.position,
        orientation: currentGame.color, 
        showCoords: true,
        coordsInner: false,
        coordsFontSize: '12',
        pieceStyle: 'wikipedia',
        figurine: true,
    });

    btnNext.disabled = currentIndex >= game.length - 1;
    btnPrev.disabled = currentIndex <= 0;
}

btnNext.addEventListener('click', () => {
    if (currentIndex < game.length - 1) {
        currentIndex++;
        updateBoard();
    }
});

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateBoard();
    }
});
updateBoard();