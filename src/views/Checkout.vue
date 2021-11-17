<template>
  <div id="main-app">
    <main id="main-content">
      <div class="left-content">
        <h1 class="main-title">結帳</h1>
        <!--stepper-->
        <Stepper :current-step="currentRouteName" />

        <!--form-->
        <div class="form-panel">
          <div class="container form-container">
            <form id="a-form" class="d-flex flex-column">
              <div class="form-content">
                <router-view
                  :initial-delivery-cost="userInput.deliveryCost"
                  :initial-user-input="userInput"
                  @delivery-change="deliveryChange"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--checkout section-->
      <CheckoutCart
        :delivery-cost="userInput.deliveryCost"
        @quantity-plus="quantityPlus"
      />
      <!-- :initial-items="items" -->
    </main>
  </div>
</template>

<script>
import CheckoutCart from "./../components/CheckoutCart";
import Stepper from "./../components/Stepper";

// const dummyData = {
//   items: [
//     {
//       id: 1,
//       name: "破壞補丁修身牛仔褲",
//       quantity: 1,
//       price: 3999,
//       image: "https://i.imgur.com/sD3wrPt.png",
//     },
//     {
//       id: 2,
//       name: "刷色直筒牛仔褲",
//       quantity: 1,
//       price: 1299,
//       image: "https://i.imgur.com/Ib2KPO3.png",
//     },
//   ],
// };

const STORAGE_KEY = "alphashop-checkout";

export default {
  name: "checkout",
  data() {
    return {
      // items: [],
      userInput: {
        deliveryCost: 0,
        title: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        cardName: "",
        cardNum: "",
        cardDate: "",
        cardCsv: "",
      },
    };
  },
  components: {
    CheckoutCart,
    Stepper,
  },
  created() {
    // this.fetchItems();
    this.createStorageData();
  },
  methods: {
    // fetchItems() {
    //   this.items = dummyData.items;
    // },
    deliveryChange(deliveryCost) {
      this.userInput.deliveryCost = Number(deliveryCost);
    },
    quantityPlus(item) {
      item;
    },
    //分解userInput後填入localStorage的資料
    createStorageData() {
      this.userInput = {
        ...this.userInput,
        ...JSON.parse(localStorage.getItem(STORAGE_KEY)),
      };
    },
    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.userInput));
    },
  },
  computed: {
    //拿route name來做stepper的v-bind
    currentRouteName() {
      return this.$route.name;
    },
  },
  watch: {
    //當userInput改動時觸發localStorage
    userInput: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },
};
</script>