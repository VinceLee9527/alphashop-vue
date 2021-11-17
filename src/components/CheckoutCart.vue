<template>
  <div class="checkout-panel" id="checkout-panel">
    <div class="container checkout-container">
      <div class="checkout-product">
        <h4 class="checkout-title mb-7">購物籃</h4>
        <div
          class="product d-flex justify-content-between"
          v-for="item in items"
          :key="item.id"
        >
          <div class="product-img-wrapper">
            <img :src="item.image" />
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
            <p class="product-description">{{ item.name }}</p>
            <div class="product-quantity">
              <span
                class="product-quantity-minus cursor-pointer"
                @click.stop.prevent="minusQuantity(item)"
                >-</span
              >
              <span class="product-quantity-num">{{ item.quantity }}</span>
              <span
                class="product-quantity-plus cursor-pointer"
                @click.stop.prevent="addQuantity(item)"
                >+</span
              >
            </div>
            <p class="product-price-1">{{ item.price | toCurrency }}</p>
          </div>
        </div>
      </div>
      <div class="delivery-wrapper d-flex justify-content-between">
        <p class="delivery-title">運費</p>
        <p class="delivery-fee" v-show="deliveryCost === 0">免費</p>
        <p class="delivery-fee" v-show="deliveryCost > 0">
          {{ deliveryCost | toCurrency }}
        </p>
      </div>
      <div class="total-wrapper d-flex justify-content-between">
        <p class="total-title">小計</p>
        <p class="total-price">{{ totleCost | toCurrency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialItems: {
      type: Array,
      required: true,
    },
    deliveryCost: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      items: this.initialItems,
      totleCost: 0,
    };
  },
  methods: {
    //"+" @click, 增加item的購買數量
    addQuantity(item) {
      item.quantity += 1;
    },
    //"-" @click, 減少item的購買數量
    minusQuantity(item) {
      if (item.quantity >= 2) {
        item.quantity -= 1;
      }
    },
    //for迴圈計算items的總價錢，計算完emit到父層做結帳modal
    totleCostCalc() {
      this.totleCost = 0;
      this.items.map((item) => {
        const itemCost = Number(item.quantity * item.price);
        this.totleCost += itemCost;
      });
      this.totleCost += this.deliveryCost;
      this.$emit("new-totle-Cost", { newtotleCost: this.totleCost });
    },
  },
  watch: {
    //用watch讓每次user點+/-都會觸發totleCostCalc(), 用immediate讓網站初始化完成後，就先觸發
    items: {
      handler: function () {
        this.totleCostCalc();
      },
      immediate: true,
      deep: true,
    },
    deliveryCost: {
      handler: function () {
        this.totleCostCalc();
      },
      immediate: true,
      deep: true,
    },
  },
  filters: {
    //filter渲染數字，呈現currency跟,
    toCurrency(val) {
      let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      });
      return formatter.format(val);
    },
  },
};
</script>