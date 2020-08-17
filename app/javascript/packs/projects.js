document.addEventListener("DOMContentLoaded", function() {
    // tab links
    const tabElements1 = document.querySelectorAll('.tab');
    
    function onTabClick(event) {
        var project = event.target.closest('div').getAttribute('id');
        // remove active class from tabs and panels that are currently active
        const activePanels = document.querySelectorAll(`#${project}-panels .active`);
        const activeTabLinks = document.querySelectorAll(`#${project}-tabs .active`);
        
        activePanels.forEach(function(panel) {
            panel.classList.toggle('active');
        });
        
         activeTabLinks.forEach(function(tab) {
            tab.classList.toggle('active');
        });
        
        // apply active class to panel whose id matches the href of the clicked element
        var tabPanel = document.getElementById(project + '-' + event.target.href.split("#")[1]);
        tabPanel.classList.toggle('active');
        
        // apply active class to parent element of tab link that was clicked
        event.target.parentElement.classList.add('active');
        event.preventDefault();
        
    }
    if(tabElements1 != null) {
        tabElements1.forEach(function(tab) {
            tab.addEventListener('click', (event) => {
                onTabClick(event);
            });
        });
    }
});