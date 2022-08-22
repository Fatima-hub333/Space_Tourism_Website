const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabList.addEventListener('keydown', (e) => {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    // change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }
    
    // if the right key is pushed, move to the next tab on the right
    if (e.keyCode === keydownRight) {
        tabFocus++;
    }
    
    // if the left key is pushed, move to the next tab on the left
 if (e.keyCode === keydownLeft) {
        tabFocus--;
  }
  
  tabs[tabFocus].setAttribute("tabindex", -1);
  tabs[tabFocus].focus;
})