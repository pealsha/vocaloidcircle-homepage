// ============================
// Team Card Popup Control
// ============================

// タッチデバイス判定
const isTouch = ('ontouchstart' in window);

document.querySelectorAll(".team-card").forEach(card => {
    const overlay = card.querySelector(".team-overlay");

    if (isTouch) {
        // スマホ：タップで開閉
        card.addEventListener("click", () => {
            const isOpen = overlay.style.opacity === "1";

            if (isOpen) {
                overlay.style.opacity = "0";
                overlay.style.transform = "translateY(10px)";
            } else {
                overlay.style.opacity = "1";
                overlay.style.transform = "translateY(0)";
            }
        });
    }
});
