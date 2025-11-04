console.log("🎵 Halo dari script.js! File berhasil terhubung");

const inputNama = document.querySelector("#playlist-name");
const inputMood = document.querySelector("#playlist-mood");
const inputDeskripsi = document.querySelector("#playlist-desc");

const previewNama = document.querySelector("#preview-name");
const previewMood = document.querySelector("#preview-mood");
const previewDeskripsi = document.querySelector("#preview-desc");
const previewCard = document.querySelector("#preview");

console.log(inputNama);
console.log(previewNama);
console.log(inputMood);
console.log(previewMood);
console.log(inputDeskripsi);
console.log(previewDeskripsi);
console.log(previewCard);

inputNama.addEventListener("input", function () {
    const teksNama = inputNama.value;
    previewNama.textContent = teksNama || "Judul Playlist";
});

inputDeskripsi.addEventListener("input", function () {
    console.log("✏️ Deskripsi sedang diketik:");
});

inputDeskripsi.addEventListener("input", function () {
    const teksDeskripsi = inputDeskripsi.value;

    if (teksDeskripsi === "") {
        previewDeskripsi.textContent = "Deskripsi playlist kamu akan muncul di sini";
    } else {
        previewDeskripsi.textContent = teksDeskripsi;
    }
});


inputMood.addEventListener("input", function () {
    const mood = inputMood.value;
    let warna = "#ffffff";
    let moodText = "—";

    switch (mood) {
        case "happy":
            warna = "#f0d97fff";
            moodText = "😁 Happy";
            break;
        case "chill":
            warna = "#83d1d4";
            moodText = "😎 Chill";
            break;
        case "sad":
            warna = "#588292";
            moodText = "😞 Sad";
            break;
        case "energetic":
            warna = "#fbad3fff";
            moodText = "🔥 Energetic";
            break;
    }

    previewMood.textContent = moodText;
    previewCard.style.backgroundColor = warna;
});