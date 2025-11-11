import { createRoot } from 'react-dom/client';
import App from './App';

// for Codeforces
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

// for LeetCode 
if (window.location.href.startsWith('https://zerotrac.github.io/leetcode_problem_rating')) {
  try {
    const initializeLeetCode = () => {
      const resetButton = Array.from(document.querySelectorAll('button.el-button--danger')).find(
        (btn) => btn.textContent?.trim().toLowerCase().includes('reset')
      );
      
      if (!resetButton) {
        setTimeout(initializeLeetCode, 100);
        return;
      }
      
      // Find parent el-form-item__content container
      const container = resetButton.closest('.el-form-item__content');
      if (!container) {
        setTimeout(initializeLeetCode, 100);
        return;
      }

      let root = document.getElementById('extension-random-button-root');
      if (!root) {
        root = document.createElement('div');
        root.id = 'extension-random-button-root';
        // Inserting after the Reset button in the same container
        container.appendChild(root);
      }
      
      createRoot(root).render(<App />);
    };
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeLeetCode);
    } else {
      initializeLeetCode();
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error initializing LeetCode Problem Randomizer Extension: ',
        error.message
      );
    } else {
      console.error('Unknown error:', error);
    }
  }
}
