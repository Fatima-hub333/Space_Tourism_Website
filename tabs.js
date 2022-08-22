const tabLists = document.querySelector('[role="tablist"]');
const tabs = tabLists.querySelector('[role="tab"]');

tabLists.addEventListener('keydown', (e) => {
  console.log(e.keyCode);
})