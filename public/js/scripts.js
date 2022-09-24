function copyTextDiv(elementid,copy_tooltip) {
  var copyText = document.getElementById(elementid);
  navigator.clipboard.writeText(copyText.innerHTML);
  var tooltip = document.getElementById(copy_tooltip);
  // tooltip.innerHTML = "Copied: " + copyText.innerHTML;
    tooltip.innerHTML = "Copied ";
}

function outText(tooltipID) {
  var tooltip = document.getElementById(tooltipID);
  tooltip.innerHTML = "Copy";
}