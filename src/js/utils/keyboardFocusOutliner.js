/**
 * Adds ".outline" class to elements, when they get focused using keyboard.
 * This way, we can disable common, ugly ":focus { outline: ... }" styles
 * add add custom focus style for tabkey navigation to increase accessability
 */

export function init() {
    const TABKEY = 9;

    //
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === TABKEY) {
            window.setTimeout(() => {
                const outlinedElements = document.querySelectorAll('.outline');
                for (const outlinedElement of outlinedElements) {
                    outlinedElement.classList.remove('outline');
                }
                document.activeElement.classList.add('outline');
            }, 50);
        }
    });


    //
    document.addEventListener('focusout', () => {
        const outlinedElements = document.querySelectorAll('.outline');
        for (const outlinedElement of outlinedElements) {
            outlinedElement.classList.remove('outline');
        }
    });
}

