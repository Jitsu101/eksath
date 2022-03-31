const tabList = document.querySelector('[role="tablist"]');

const tabs = tabList.querySelectorAll('[role="tab"]');
tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const tabContainer = targetTab.parentNode;

  const mainContainer = tabContainer.parentNode.parentNode.parentNode;
  // alert(tabContainer.parentNode);
  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, [`#${targetPanel}`]);
  focusContent(mainContainer, '[role="tabpanel"]');

}

function hideContent(parent, content) {
  // alert(parent.querySelector(content))
  parent.querySelectorAll(content).forEach((element) => {
    element.setAttribute("hidden", true);
  });
}

function showContent(parent, content) {
  //alert(parent.querySelector(content))
  parent.querySelector(content).removeAttribute("hidden");
}

function focusContent(parent, content) {
    //alert(parent.querySelector(content))
    parent.querySelectorAll(content).forEach((element) => {
        element.focus();
      });
  }