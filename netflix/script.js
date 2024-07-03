const GLOBAL = {
  tabItems: document.querySelectorAll(".tab-item"),
  tabContentItems: document.querySelectorAll(".tab-content-item"),
};

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  GLOBAL.tabItems.forEach((i) => {
    i.classList.remove("tab-border");
  });
}

function removeShow() {
  GLOBAL.tabContentItems.forEach((i) => {
    i.classList.remove("show");
  });
}

GLOBAL.tabItems.forEach((i) => {
  i.addEventListener("click", selectItem);
});
