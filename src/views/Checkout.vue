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
                  @delivery-change="deliveryChange"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--checkout section-->
      <CheckoutCart
        :initial-items="items"
        :delivery-cost="userInput.deliveryCost"
      />
    </main>
  </div>
</template>

<script>
import CheckoutCart from "./../components/CheckoutCart";
import Stepper from "./../components/Stepper";

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
  name: "checkout",
  data() {
    return {
      items: [],
      userInput: {
        deliveryCost: 0,
      },
    };
  },
  components: {
    CheckoutCart,
    Stepper,
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.items = dummyData.items;
    },
    deliveryChange(deliveryCost) {
      this.userInput.deliveryCost = Number(deliveryCost);
    },
    // saveDeliverStorage() {

    // }
  },
  computed: {
    //拿route name來做stepper的v-bind
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>