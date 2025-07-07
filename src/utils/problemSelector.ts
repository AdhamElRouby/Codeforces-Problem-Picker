import { errorNotify } from './errorNotify';

export const selectRandomProblem = (): void => {
  const problemTr = document.querySelectorAll('table.problems tbody tr');
  const randomIndex: number =
    1 + Math.floor(Math.random() * (problemTr.length - 1));
  const aTag = problemTr[randomIndex]?.querySelector('.id a');
  if (!aTag) {
    errorNotify(`Could not find a valid problem link.`);
    return;
  }
  const href = aTag.getAttribute('href');
  window.open(`https://codeforces.com${href}`, '_blank');
};
