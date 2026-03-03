import html2canvas from 'html2canvas';

/**
 * Captures the executive metrics charts and adds them to the zip archive.
 * @param {boolean} isDarkMode - Whether dark mode is enabled.
 * @param {string} themeClassName - The CSS class name for the current theme.
 * @param {JSZip} zip - The JSZip instance to add the captured image to.
 */
export const captureExecutiveMetrics = async (isDarkMode, themeClassName, zip) => {
  const executiveMetricsEl = document.querySelector('.executive-metrics-container');
  if (!executiveMetricsEl) {
    console.warn('Executive metrics element not found, skipping capture.');
    return;
  }

  try {
    const canvas = await html2canvas(executiveMetricsEl, {
      backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (blob) {
      zip.file('executive-metrics.png', blob);
    }
  } catch (error) {
    console.error('Error capturing executive metrics:', error);
  }
};
