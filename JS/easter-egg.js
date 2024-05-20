const originalTitle = document.title;
window.addEventListener("blur", () => { document.title = "Pls Come back!"; });
window.addEventListener("focus", () => { document.title = originalTitle; });