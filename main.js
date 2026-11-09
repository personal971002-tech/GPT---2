let gems = 1200;
const cost = 100;

$(".gacha-button").on("click", function() {

    $(".modal-overlay").css("display", "flex");

});

$(".modal-cancel").on("click", function() {

    $(".modal-overlay").css("display", "none");

});

$(".modal-confirm").on("click", function () {

  // 残高不足なら終了
  if (gems < cost) {
    alert("ジェルが不足しています！");
    $(".modal-overlay").css("display", "none");
    return;
  }

  // ジェルを消費
  gems -= cost;

  // 残高を更新
  $(".game-coin").text("✦ " + gems.toLocaleString());

  // モーダルを閉じる
  $(".modal-overlay").css("display", "none");

  // 以下のif・else ifはそのまま

  // 1〜100の整数を生成
  const rand = Math.ceil(Math.random() * 100);

  let rarity = "";

  if (rand <= 1) {
    rarity = "SSR";
  } else if (rand <= 10) {
    rarity = "SR";
  } else if (rand <= 30) {
    rarity = "R";
  } else {
    rarity = "NR";
  }

  // 結果を表示
  $(".gacha-result").text(rarity + " 獲得！");

  // 画像を変更
  $(".gacha-image").attr("src", "images/" + rarity + ".jpg");

  // レアリティ表示を変更
  $(".rarity-label").text("✦ " + rarity + " ✦");

});