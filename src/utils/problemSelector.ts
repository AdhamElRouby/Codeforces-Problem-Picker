import { errorNotify } from './errorNotify';

export const selectRandomProblem = (): void => {
  // on Codeforces
  if (window.location.href.startsWith('https://codeforces.com/problemset')) {
    const problemTr = document.querySelectorAll('table.problems tbody tr');
    if (problemTr.length <= 1) {
      errorNotify(`No problems found on the page.`);
      return;
    }
    const randomIndex: number =
      1 + Math.floor(Math.random() * (problemTr.length - 1));
    const aTag = problemTr[randomIndex]?.querySelector('.id a');
    if (!aTag) {
      errorNotify(`Could not find a valid problem link.`);
      return;
    }
    const href = aTag.getAttribute('href');
    window.open(`https://codeforces.com${href}`, '_blank');
    return;
  }

  // on LeetCode 
  if (window.location.href.startsWith('https://zerotrac.github.io/leetcode_problem_rating')) {
    let tableRows = document.querySelectorAll('.el-table__body-wrapper tbody tr');
    if (tableRows.length === 0) {
      tableRows = document.querySelectorAll('.el-table tbody tr');
    }
    if (tableRows.length === 0) {
      tableRows = document.querySelectorAll('tbody tr');
    }
    
    if (tableRows.length === 0) {
      errorNotify(`No problems found in the table. Make sure the table is loaded.`);
      return;
    }
    
    // Select a random row
    const randomIndex = Math.floor(Math.random() * tableRows.length);
    const randomRow = tableRows[randomIndex];
    
    // Find the problem link in the row
    const allLinks = randomRow.querySelectorAll('a.el-link');
    let targetLink: HTMLAnchorElement | null = null;
    
    for (const link of Array.from(allLinks)) {
      const href = link.getAttribute('href');
      if (href && href.includes('leetcode.com/problems/')) {
        targetLink = link as HTMLAnchorElement;
        break;
      }
    }
    
    if (!targetLink && allLinks.length > 0) {
      // first link if we can't find a problem link
      targetLink = allLinks[0] as HTMLAnchorElement;
    }
    
    if (!targetLink) {
      errorNotify(`Could not find a valid problem link in the selected row.`);
      return;
    }
    
    const href = targetLink.getAttribute('href');
    if (!href) {
      errorNotify(`The problem link does not have a valid href attribute.`);
      return;
    }
    
    window.open(href, '_blank');
    return;
  }

  errorNotify(`Unsupported page. This extension works on Codeforces problemset and LeetCode Problem Rating pages.`);
};
