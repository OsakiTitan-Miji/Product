window.addEventListener("DOMContentLoaded", function () {
  const colorButtons = document.querySelectorAll('.ReChamp2_colorBtn');
  const displayImage = document.getElementById('ReChamp2_colorDisplay');

  const colorMap = {
    taupe: "https://cdn.shopify.com/s/files/1/0086/1297/0558/files/4.ReChamp2_Taupe.png?v=1748876965",
    brown: "https://cdn.shopify.com/s/files/1/0086/1297/0558/files/3.ReChamp2_Brown.png?v=1748876965",
    black: "https://cdn.shopify.com/s/files/1/0086/1297/0558/files/2.ReChamp2_Black.png?v=1748876965"
  };

  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 기존 선택 해제
      colorButtons.forEach(btn => btn.classList.remove('selected'));

      // 새로 선택된 버튼에 selected 부여
      button.classList.add('selected');

      // 이미지 변경
      const color = button.dataset.color;
      displayImage.src = colorMap[color];
      displayImage.alt = `${color.charAt(0).toUpperCase() + color.slice(1)} Chair`;
    });
  });
});
