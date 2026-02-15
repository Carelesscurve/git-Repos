document.addEventListener('DOMContentLoaded', () => {
  // Add copy buttons to each code block
  document.querySelectorAll('pre').forEach(pre => {
    pre.style.position = 'relative';
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', async (e) => {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied';
        setTimeout(() => btn.textContent = 'Copy', 1400);
      } catch (err) {
        console.error('copy failed', err);
        btn.textContent = 'Copy';
      }
    });
    pre.appendChild(btn);
  });

  // Reveal list items as they scroll into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.steps li').forEach(li => observer.observe(li));
});

// Small accessibility enhancement: allow keyboard focus on copy buttons
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.activeElement.blur?.();
  }
});
