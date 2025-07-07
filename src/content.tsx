import { createRoot } from 'react-dom/client';
import App from './App';

if (window.location.href.startsWith('https://codeforces.com/problemset')) {
  try {
    const datatable = document.querySelector('.datatable');
    if (!datatable) throw new Error('Datatable not found on the page.');
    const targetElement = datatable.querySelectorAll('div')[4];
    if (!targetElement)
      throw new Error('Target element not found within the datatable.');
    const root = document.createElement('div');
    root.id = 'extension-random-button-root';
    targetElement.appendChild(root);
    createRoot(root).render(<App />);
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error initializing Codeforces Problem Randomizer Extension: ',
        error.message
      );
    } else {
      console.error('Unknown error:', error);
    }
  }
}
