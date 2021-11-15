<template>
  <div class="part-container">
    <div class="part">
      <h2 class="form-header title-grid">寄送地址</h2>
      <div class="form-row part-title">
        <label>稱謂</label>
        <div class="select-wrapper">
          <select name="a-type" id="a-type" required>
            <option value="mister">先生</option>
            <option value="miss">小姐</option>
            <option value="none">不拘</option>
          </select>
        </div>
      </div>
      <div class="form-row part-name">
        <label for="">姓名</label
        ><input id="name" type="text" class="w-100" placeholder="請輸入姓名" />
      </div>
      <div class="form-row part-phone">
        <label for="">電話</label
        ><input id="phone" type="text" class="w-100" placeholder="請輸入電話" />
      </div>
      <div class="form-row part-email">
        <label for="">Email</label
        ><input
          id="email"
          type="text"
          class="w-100"
          placeholder="請輸入電子郵件"
        />
      </div>
      <div class="form-row part-city">
        <label for="">縣市</label>
        <div class="select-wrapper">
          <select name="a-type" id="a-location" required>
            <option value="" disabled selected>請選擇縣市</option>
            <option value="">台北市</option>
            <option value="">台中市</option>
            <option value="">高雄市</option>
          </select>
        </div>
      </div>
      <div class="form-row part-address">
        <label for="">地址</label
        ><input
          id="address"
          type="text"
          class="w-100"
          placeholder="請輸入地址"
        />
      </div>
    </div>
  </div>
</template>