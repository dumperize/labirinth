// game.state { top,  bottom, left, right, start,finish }
// game.right
// game.left
// game.up
// game.down
export default function main(game, start) {
    return game.right(start.x, start.y)
        .then(() => game.right(start.x + 1, start.y))
        .then(() => game.right(start.x + 2, start.y))
        .then(() => game.right(start.x + 3, start.y))
        .then(() => ({ x: start.x + 4, y: start.y })); // это последняя клетка и мы надеемся что это финиш
}
