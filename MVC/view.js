import Event from "./event.js";

class View {
  constructor() {
    this.playEvent = new Event();
  }

  render() {
    const container = document.createElement("div");
    container.className = "container";

    const board = document.createElement("div");
    board.className = "board";

    this.cells = Array(9)
      .fill()
      .map((_, i) => {
        const cell = document.createElement("div");
        cell.className = "cell";

        cell.addEventListener("click", () => {
          this.playEvent.trigger(i);
        });

        board.appendChild(cell);

        return cell;
      });

    this.message = document.createElement("div");
    this.message.className = "message";

    container.appendChild(board);
    container.appendChild(this.message);

    document.body.appendChild(container);
  }

  updateCell(data) {
    this.cells[data.move].innerHTML = data.player;
  }

  victory(winner) {
    this.message.innerHTML = `GANO LA: ${winner}`;
  }

  draw() {
    this.message.innerHTML = "EMPATE";
  }
}

export default View;
