window.addEventListener("DOMContentLoaded", () => {
  const removeBadge = () => {
    const el = document.querySelector('[class*="base44"], #base44-badge, iframe, div');

    if (el && el.innerText?.includes("Edit")) {
      el.remove();
    }
  };

  setInterval(removeBadge, 500);
});