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
        <p class="delivery-fee">免費</p>
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
  },
  data() {
    return {
      items: this.initialItems,
      totleCost: 0,
    };
  },
  methods: {
    addQuantity(item) {
      item.quantity += 1;
    },
    minusQuantity(item) {
      if (item.quantity >= 2) {
        item.quantity -= 1;
      }
    },
    totleCostCalc() {
      this.totleCost = 0;
      this.items.map((item) => {
        const itemTotal = item.quantity * item.price;
        this.totleCost += itemTotal;
      });
      this.$emit("new-totle-Cost", { newtotleCost: this.totleCost });
    },
  },
  watch: {
    items: {
      handler: function () {
        this.totleCostCalc();
      },
      immediate: true,
      deep: true,
    },
  },
  filters: {
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