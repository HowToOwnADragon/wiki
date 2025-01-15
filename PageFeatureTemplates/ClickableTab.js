function openTab(evt, tabName) {
  var i, tabcontent, tablinks, tabs;
  tabcontent = document.getElementsByClassName("tabcontent"); // look for tabcontents per tab
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabs = document.getElementsByClassName("tab");
  tablinks = document.getElementsByClassName("tablinks");
  var isActive = evt.currentTarget.className.includes(" active");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (!isActive) {
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
