<template>
  <div class="part-container d-none">
    <div class="part">
      <h2 class="form-header title-grid">運送方式</h2>
      <div class="form-row part-shipping">
        <div class="shipping-method">
          <input
            type="radio"
            name="shipping-method"
            value="standard"
            id="standard"
            class="shipping-method-radio"
            checked
          />
          <label
            for="standard"
            class="
              shipping-method-name
              d-flex
              flex-column
              justify-content-center
            "
          >
            <h4 class="shipping-name">標準配送</h4>
            <p class="shipping-time">約 3~7 個工作天</p>
          </label>
          <span class="shipping-fee">免費</span>
        </div>

        <div class="shipping-method">
          <input
            type="radio"
            name="shipping-method"
            value="dhl"
            id="dhl"
            class="shipping-method-radio"
          />
          <label
            for="dhl"
            class="
              shipping-method-name
              d-flex
              flex-column
              justify-content-center
            "
          >
            <h4 class="shipping-name">DHL 貨運</h4>
            <p class="shipping-time">48小時內送達</p>
          </label>
          <span class="shipping-fee">$500</span>
        </div>
      </div>
    </div>
  </div>
</template>