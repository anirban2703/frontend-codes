const change = document.getElementById("change_button");
const reset = document.getElementById("reset_button");

reset.addEventListener("click", resetColor);
change.addEventListener("click", changeColor);

function resetColor() {
  for (let i = 1; i <= 9; i++) {
    const boxItem = document.getElementById(i);
    // console.log(boxItem)
    boxItem.style.backgroundColor = "transparent";
  }
}

function changeColor() {
  const blockId = document.getElementById("block_id");
  const colorId = document.getElementById("color_id");

  if (!blockId.value) {
    alert("Please Enter the block Id");
  }
  if (!colorId.value) {
    alert("Please Enter the color Id");
  }
  if (blockId.value > 9 || blockId.value < 1) {
    alert("Please Enter a Valid Block Number");
  }
  resetColor()
  const blockNumber = document.getElementById(blockId.value);
  blockNumber.style.backgroundColor = colorId.value;

  blockId.value = "";
  colorId.value = "";
}
