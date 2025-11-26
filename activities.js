// Activity types（循環）
const types = ["daily", "events"];

// URL パラメータから初期表示読み取り（なければ daily）
const params = new URLSearchParams(window.location.search);
let current = params.get("type") || "daily";

function showActivity(type) {
    current = type;

    // 全非表示
    document.querySelectorAll(".activity-content")
        .forEach(c => c.classList.remove("active"));

    document.getElementById(type).classList.add("active");

    // タブのハイライト
    document.querySelectorAll(".activity-tab")
        .forEach(tab => tab.classList.toggle("active", tab.dataset.type === type));
}

// 左右矢印（循環）
document.getElementById("arrow-left").addEventListener("click", () => {
    let index = types.indexOf(current);
    index = (index - 1 + types.length) % types.length;
    showActivity(types[index]);
});

document.getElementById("arrow-right").addEventListener("click", () => {
    let index = types.indexOf(current);
    index = (index + 1) % types.length;
    showActivity(types[index]);
});

// タブクリック
document.querySelectorAll(".activity-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        showActivity(tab.dataset.type);
    });
});

// 初期表示
showActivity(current);
