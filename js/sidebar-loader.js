
const sidebarMount = document.getElementById('sidebar-mount');
if(sidebarMount){
  fetch('sidebar.html')
    .then(res => res.text())
    .then(html => { sidebarMount.outerHTML = html; })
    .catch(err => console.error('Failed to load sidebar:', err));
}
