function copyTextDiv() {
  var copyText = document.getElementById("copy-text");
  navigator.clipboard.writeText(copyText.innerHTML);
  var tooltip = document.getElementById("copy-tooltip");
  tooltip.innerHTML = "Copied: " + copyText.innerHTML;
}

function outText() {
  var tooltip = document.getElementById("copy-tooltip");
  tooltip.innerHTML = "Click to Copy";
}