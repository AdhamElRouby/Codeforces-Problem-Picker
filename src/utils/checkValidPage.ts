export const checkValidPage = (): boolean => {
  const url = new URL(window.location.href);
  if(url.origin === 'https://codeforces.com') {
      const isProblemset =
      url.pathname === '/problemset' || url.pathname === '/problemset/';
      return isProblemset;
  }
  return false;
};
