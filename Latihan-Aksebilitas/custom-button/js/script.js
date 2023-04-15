const nativeButton = document.querySelector("button");
const customButton = document.querySelector(".button");
const content = document.querySelector("p");

const clickHandler = () => {
  content.innerText = "Berhasil menekan tombol!";

  setTimeout(() => {
    content.innerText =
      "Coba tekan tombol menggunakan kursor dan menggunakan fokus (gunakan tab key, kemudian space atau enter untuk menekan)";
  }, 1000);
};

nativeButton.addEventListener("click", clickHandler);
customButton.addEventListener("click", clickHandler);
