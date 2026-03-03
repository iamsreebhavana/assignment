import html2canvas from 'html2canvas';

/**
 * Captures the monthly report and adds it to the zip archive.
 * @param {HTMLElement} reportContainerEl - The report container DOM element.
 * @param {boolean} isDarkMode - Whether dark mode is enabled.
 * @param {string} themeClassName - The CSS class name for the current theme.
 * @param {JSZip} zip - The JSZip instance to add the captured image to.
 */
export const captureMonthlyReport = async (reportContainerEl, isDarkMode, themeClassName, zip) => {
  if (!reportContainerEl) {
    console.warn('Report container element not found, skipping capture.');
    return;
  }

  try {
    const canvas = await html2canvas(reportContainerEl, {
      backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (blob) {
      zip.file('monthly-report.png', blob);
    }
  } catch (error) {
    console.error('Error capturing monthly report:', error);
  }
};

/**
 * Captures the availability table and adds it to the zip archive.
 * @param {HTMLElement} availabilityEl - The availability table DOM element.
 * @param {boolean} isDarkMode - Whether dark mode is enabled.
 * @param {boolean} isAmpExport - Whether this is an AMP export.
 * @param {JSZip} zip - The JSZip instance to add the captured image to.
 */
export const captureAvailabilityTable = async (availabilityEl, isDarkMode, isAmpExport, zip) => {
  if (!availabilityEl) {
    console.warn('Availability element not found, skipping capture.');
    return;
  }

  try {
    const canvas = await html2canvas(availabilityEl, {
      backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (blob) {
      const filename = isAmpExport ? 'amp-availability-report.png' : 'availability-report.png';
      zip.file(filename, blob);
    }
  } catch (error) {
    console.error('Error capturing availability table:', error);
  }
};

/**
 * Captures the incidents section and adds it to the zip archive.
 * @param {HTMLElement} incidentContainerEl - The incidents container DOM element.
 * @param {boolean} isDarkMode - Whether dark mode is enabled.
 * @param {JSZip} zip - The JSZip instance to add the captured image to.
 */
export const captureIncidents = async (incidentContainerEl, isDarkMode, zip) => {
  if (!incidentContainerEl) {
    console.warn('Incidents container element not found, skipping capture.');
    return;
  }

  try {
    const canvas = await html2canvas(incidentContainerEl, {
      backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (blob) {
      zip.file('incidents-report.png', blob);
    }
  } catch (error) {
    console.error('Error capturing incidents:', error);
  }
};

/**
 * Captures the corrective action report and adds it to the zip archive.
 * The content is center-aligned and equally distributed across the full width.
 * @param {boolean} isDarkMode - Whether dark mode is enabled.
 * @param {JSZip} zip - The JSZip instance to add the captured image to.
 */
export const captureCorrectiveActionReport = async (isDarkMode, zip) => {
  const correctiveActionEl = document.querySelector('.corrective-action-container');
  if (!correctiveActionEl) {
    console.warn('Corrective action element not found, skipping capture.');
    return;
  }

  // Create a temporary wrapper to ensure center alignment in the export
  const tempContainer = document.createElement('div');
  tempContainer.classList.add('temp-export-element');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.top = '0';
  tempContainer.style.width = '1200px';
  tempContainer.style.backgroundColor = isDarkMode ? '#1a1a2e' : '#ffffff';
  tempContainer.style.padding = '20px';

  // Clone the corrective action element
  const clone = correctiveActionEl.cloneNode(true);

  // Apply center alignment styles to the clone
  clone.style.width = '100%';
  clone.style.margin = '0 auto';
  clone.style.textAlign = 'center';
  clone.style.display = 'flex';
  clone.style.flexDirection = 'column';
  clone.style.alignItems = 'center';
  clone.style.justifyContent = 'center';

  // Ensure child stat items are evenly distributed
  const statItems = clone.querySelectorAll('.corrective-action-stat, .stat-item, .stats-row, .stats-container');
  statItems.forEach((item) => {
    item.style.width = '100%';
    item.style.display = 'flex';
    item.style.justifyContent = 'center';
    item.style.alignItems = 'center';
    item.style.textAlign = 'center';
  });

  // Ensure any row/grid containers distribute children equally
  const rows = clone.querySelectorAll('.row, [class*="stats-row"], [class*="grid"]');
  rows.forEach((row) => {
    row.style.width = '100%';
    row.style.display = 'flex';
    row.style.justifyContent = 'space-evenly';
    row.style.alignItems = 'center';
    row.style.textAlign = 'center';
  });

  // Ensure tables are centered
  const tables = clone.querySelectorAll('table');
  tables.forEach((table) => {
    table.style.margin = '0 auto';
    table.style.width = '100%';
    table.style.textAlign = 'center';
  });

  tempContainer.appendChild(clone);
  document.body.appendChild(tempContainer);

  try {
    const canvas = await html2canvas(tempContainer, {
      backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false,
      width: 1200,
    });

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (blob) {
      zip.file('corrective-action-report.png', blob);
    }
  } catch (error) {
    console.error('Error capturing corrective action report:', error);
  } finally {
    // Clean up temporary DOM element to prevent memory leaks
    if (tempContainer.parentNode) {
      document.body.removeChild(tempContainer);
    }
  }
};
