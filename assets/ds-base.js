// Self-contained loader for the AS-Automobile offer pages.
// These pages use only inline styles + FontAwesome, so NO design-system bundle
// is required — this only supplies the Inter webfont and the two design tokens
// the pages reference (--font-sans, --shadow-sm).
(() => {
  const f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap';
  document.head.appendChild(f);
  const s = document.createElement('style');
  s.textContent = ':root{--font-sans:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;--shadow-sm:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);}';
  document.head.appendChild(s);
})();
