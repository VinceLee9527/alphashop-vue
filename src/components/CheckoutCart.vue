<template>
  <div class="checkout-panel" id="checkout-panel">
    <div class="container checkout-container">
      <div class="checkout-product">
        <h4 class="checkout-title mb-7">購物籃</h4>
        <div class="product d-flex justify-content-between">
          <div class="product-img-wrapper">
            <img src="https://i.imgur.com/sD3wrPt.png" />
          </div>
          <div
            class="
              product-info-wrapper
              d-flex
              flex-column
              justify-content-even
              align-items-end
            "
          >
            <p class="product-description">破壞補丁修身牛仔褲</p>
            <div class="product-quantity">
              <span class="product-quantity-minus cursor-pointer">-</span>
              <span class="product-quantity-num">1</span>
              <span class="product-quantity-plus cursor-pointer">+</span>
            </div>
            <p class="product-price-1">$3,999</p>
          </div>
        </div>
        <div class="product d-flex justify-content-between">
          <div class="product-img-wrapper">
            <img src="https://i.imgur.com/Ib2KPO3.png" />
          </div>
          <div
            class="
              product-info-wrapper
              d-flex
              flex-column
              justify-content-even
              align-items-end
            "
          >
            <p class="product-description">刷色直筒牛仔褲</p>
            <div class="product-quantity">
              <span class="product-quantity-minus cursor-pointer">-</span>
              <span class="product-quantity-num">1</span>
              <span class="product-quantity-plus cursor-pointer">+</span>
            </div>
            <p class="product-price-2">$1,299</p>
          </div>
        </div>
      </div>
      <div class="delivery-wrapper d-flex justify-content-between">
        <p class="delivery-title">運費</p>
        <p class="delivery-fee">免費</p>
      </div>
      <div class="total-wrapper d-flex justify-content-between">
        <p class="total-title">小計</p>
        <p class="total-price">$5,298</p>
      </div>
    </div>
  </div>
</template>