<template>
  <div class="container">
    <section class="mainvisual">
      <h1>
        気温に合ったおしゃれを。
      </h1>
      <p>
        その日の気温に合わせたファッションをアドバイス
      </p>
    </section>

    <form class="data-select">
      <div class="data-select__unit">
        <h2>
          どこに出かけますか？
        </h2>
        <div class="data-select__select-grop">
          <select class="data-select__area">
            <option value="" selected>都道府県を選択</option>
            <option value="東京都">東京都</option>
            <option value="埼玉県">埼玉県</option>
          </select>
          <select class="data-select__area">
            <option value="" selected>市区町村を選択</option>
            <option value="東京都">東京都</option>
            <option value="埼玉県">埼玉県</option>
          </select>
        </div>
      </div>

      <div class="data-select__unit">
        <h2>
          あなたの体質は？
        </h2>
        <div class="data-select__radio-grop">
          <label>
            <input type="radio" name="constitution" value="寒がり">寒がり
          </label>
          <label>
            <input type="radio" name="constitution" value="普通" checked="checked">普通
          </label>
          <label>
            <input type="radio" name="constitution" value="暑がり">暑がり
          </label>
        </div>
      </div>

      <button class="search-btn" type="submit">最適な服装を検索</button>
    </form>

  </div>
</template>

<style scoped>
.mainvisual {
  background-image: url("../assets/img/top-mainvisual@2x.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  padding-right: 20px;
  padding-left: 20px;
  height: 178px;
  padding-top: 48px;
}

.mainvisual h1 {
  font-size: 20px;
  line-height: 1;
  font-weight: normal;
}

.mainvisual p {
  line-height: 1;
  margin-top: 16px;
  font-size: 12px;
}

.data-select {
  margin-top: -32px;
  padding-right: 20px;
  padding-left: 20px;
}

.data-select__unit {
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  overflow: hidden;
}

.data-select__unit:nth-child(2) {
  margin-top: 32px;
}

.data-select__unit h2 {
  color: #016DDC;
  line-height: 1;
  font-weight: 600;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  position: relative;
  overflow: hidden;
}

.data-select__unit h2:before {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: "";
  border-top: 12px solid #016DDC;
  border-left: 12px solid #016DDC;
  border-right: 12px solid transparent;
  border-bottom: 12px solid transparent;
}

.data-select__select-grop {
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
}

.data-select__area {
  appearance: none;
  font-size: 14px;
  color: #016DDC;
  padding: 0 16px 0 12px;
  height: 44px;
  border: 1px solid #016DDC;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  align-content: center;
  width: 48.23%;
}

.data-select__radio-grop {
  padding: 20px 12px;
  display: flex;
  justify-content: space-between;
}

label {
  display: inline-block;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 36px;
  line-height: 1;
  width: 30.86%;
  font-size: 14px;
  border-radius: 6px;
  position: relative;
}

label:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  margin: auto;
  display: block;
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 6px;
}

label:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 14px;
  margin: auto;
  display: block;
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 3px;
}

label input:checked:after {
  background-color: #ddd;
}

label:nth-child(1) {
  border: 1px solid #016DDC;
  background-color: #F5FAFF;
  color: #016DDC;
}

label:nth-child(1):before {
  border: 1px solid #016DDC;
}

label:nth-child(2) {
  border: 1px solid #DC7F01;
  background-color: #FFF9F0;
  color: #DC7F01;
}

label:nth-child(2):before {
  border: 1px solid #DC7F01;
}

label:nth-child(3) {
  border: 1px solid #EF5350;
  background-color: #FFF8F5;
  color: #EF5350;
}

label:nth-child(3):before {
  border: 1px solid #EF5350;
}

label input {
  display: none;
}

/*label input:checked {

}*/

.search-btn {
  border-radius: 24px;
  margin-top: 44px;
  display: block;
  line-height: 1;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  max-width: 300px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: #016DDC;
  box-shadow: 0 3px 10px rgba(0,0,0,0.25);
  border: none;
  font-size: 16px;
  font-weight: 600;
}
</style>
