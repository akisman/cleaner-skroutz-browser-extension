/**
 * Function to hide elements by adding the custom class.
 * This function iterates through a list of CSS selectors and adds the 
 * 'hidden-by-extension' class to all matching elements to hide them.
 */
function hideElements() {
    // List of CSS selectors for elements to hide
    const selectors = [
        '.cf.card.labeled-item.labeled-product',
        '.sku-pick-shelf',
        '.user-help-shelf',
        '.sku-pick-shelf.guide-pick-shelf',
        '.listing-reels-shelf',
        // Product Page
        '.sponsored-product-cards'
    ];

    // Iterate over each selector and add the custom class to hide matching elements
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            // element.style.display = 'none';
            element.classList.add('hidden-by-extension');
        });
    });
}

// Initialize hiding of elements when the page is shown
window.addEventListener('pageshow', hideElements);

/**
 * MutationObserver callback function to hide elements
 * Calls the hideElements function whenever changes are detected.
 */
const observer = new MutationObserver(() => {
    hideElements();
});

/**
 * Function to start observing the <main> element for DOM changes.
 * It sets up the MutationObserver to monitor child elements and
 * any changes within the <main> element.
 */
function startObserving() {
    const mainElement = document.querySelector('main');
    if (mainElement) {
        observer.observe(mainElement, { childList: true, subtree: true });
    }
}

// Initialize observation of the <main> element when the page is shown
window.addEventListener('pageshow', startObserving);