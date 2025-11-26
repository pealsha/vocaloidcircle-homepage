// 班の順序（循環する）
const groups = [
    "illust",
    "video",
    "vocalo",
    "dance",
    "band",
    "cosplay",
    "djvj",
    "system"
];

// URL パラメータから初期班を取得
const params = new URLSearchParams(window.location.search);
let current = params.get("group") || "illust";

// 班コンテンツ切り替え
function showGroup(group) {
    current = group;

    // 全非表示
    document.querySelectorAll(".group-content").forEach(div =>
        div.classList.remove("active")
    );
    document.getElementById(group).classList.add("active");

    // アイコンのハイライト
    document.querySelectorAll(".icon-item").forEach(icon =>
        icon.classList.toggle("active", icon.dataset.group === group)
    );
}

// 左右矢印（循環）
document.getElementById("arrow-left").addEventListener("click", () => {
    let index = groups.indexOf(current);
    index = (index - 1 + groups.length) % groups.length;
    showGroup(groups[index]);
});

document.getElementById("arrow-right").addEventListener("click", () => {
    let index = groups.indexOf(current);
    index = (index + 1) % groups.length;
    showGroup(groups[index]);
});

// アイコンをクリックすると切り替え
document.querySelectorAll(".icon-item").forEach(icon => {
    icon.addEventListener("click", () => {
        showGroup(icon.dataset.group);
    });
});

// 初期表示
showGroup(current);
