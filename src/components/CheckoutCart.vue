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
                @click.stop.prevent="minusQuantity(item.id)"
                >-</span
              >
              <span class="product-quantity-num">{{ item.quantity }}</span>
              <span
                class="product-quantity-plus cursor-pointer"
                @click.stop.prevent="addQuantity(item.id)"
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
const STORAGE_ITEM = "alphashop-item";

const dummyData = {
  items: [
    {
      id: 1,
      name: "破壞補丁修身牛仔褲",
      quantity: 1,
      price: 3999,
      image: "https://i.imgur.com/sD3wrPt.png",
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      quantity: 1,
      price: 1299,
      image: "https://i.imgur.com/Ib2KPO3.png",
    },
  ],
};

export default {
  props: {
    deliveryCost: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      items: [],
      totleCost: 0,
    };
  },
  created() {
    this.fetchItems();
  },
  mounted() {
    if (localStorage.getItem(STORAGE_ITEM) !== null) {
      this.parseStorageData();
    }
  },
  methods: {
    fetchItems() {
      this.items = dummyData.items;
    },
    //"+" @click, 增加item的購買數量
    addQuantity(id) {
      const item = this.items.find((item) => id === item.id);
      item.quantity += 1;
    },
    //"-" @click, 減少item的購買數量
    minusQuantity(id) {
      const item = this.items.find((item) => id === item.id);
      if (item.quantity >= 2) {
        item.quantity -= 1;
      }
    },
    //計算items的總價錢
    totleCostCalc() {
      this.totleCost = 0;
      for (let i in this.items) {
        this.totleCost += Number(this.items[i].quantity * this.items[i].price);
      }
      this.totleCost += this.deliveryCost;
    },
    saveStorage() {
      localStorage.setItem(STORAGE_ITEM, JSON.stringify(this.items));
    },
    parseStorageData() {
      this.items = JSON.parse(localStorage.getItem(STORAGE_ITEM));
    },
  },
  watch: {
    //用watch讓每次user點+/-都會觸發totleCostCalc()
    items: {
      handler: function () {
        this.totleCostCalc();
        this.saveStorage();
        console.log("watched");
      },
      // immediate: true,
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