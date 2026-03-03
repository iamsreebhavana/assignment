/**
 * Cleans up any temporary DOM elements created during the export process.
 * Removes all elements with the 'temp-export-element' class from the document body.
 */
export const cleanupTempElements = () => {
  const tempElements = document.querySelectorAll('.temp-export-element');
  tempElements.forEach((el) => {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
};
