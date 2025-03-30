window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titleElement = document.getElementById('title');

    if (!titleElement) {
      console.error("Elemen dengan ID 'title' tidak ditemukan!");
      return;
    }

    const texts = ['HALOO CANTIKK‼️', 'HOW"S UR DAY CANTIKK?', 'I HOPE YOU"RE OKAYY', 'MINAL AIDZIN WAL FAIDZIN YAA CANTIKK‼️', 'MAAF LAHIR DAN BATIN YAA', 'MAAFIN AKU YAA?☹️', 'MAAF KALO AK SERING BUAT KAMU KESEL', 'MAAF UDAH BUAT KAMU BM', 'MAAFIN YAA HEHE', 'MAKASII UDAH BACA INI SEMUA CANTIKK‼️🤍✨', 'SEE YOUU ANAKK BAIKK👋🏻😼🫵🏻'];
    let textIndex = 0;

    function animateText() {
      const currentText = texts[textIndex];
      const currentTitles = currentText.split('');
      let charIndex = 0;

      function displayCharacter() {
        if (charIndex < currentTitles.length) {
          titleElement.innerHTML += currentTitles[charIndex];
          charIndex++;
          setTimeout(displayCharacter, 290);
        } else {
          setTimeout(() => {
            textIndex++;
            if (textIndex < texts.length) {
              titleElement.innerHTML = '';
              animateText();
            } else {
              titleElement.innerHTML = texts[texts.length - 1];
            }
          }, 1000);
        }
      }

      displayCharacter();
    }

    animateText();
  }, 1000);
};
