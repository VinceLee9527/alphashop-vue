<template>
  <div id="main-app">
    <main id="main-content">
      <div class="left-content">
        <h1 class="main-title">結帳</h1>
        <!--stepper-->
        <div id="stepper-control">
          <div class="container stepper-container mt-4 d-flex">
            <div class="step active">
              <div
                class="
                  circle-container
                  c1
                  d-flex
                  justify-content-center
                  align-items-center
                "
              ></div>
              <span class="connect-line l1"></span>
              <div class="label-container">寄送地址</div>
            </div>
            <div class="step s2">
              <div
                class="
                  circle-container
                  c2
                  d-flex
                  justify-content-center
                  align-items-center
                "
              ></div>
              <span class="connect-line l2"></span>
              <div class="label-container">運送方式</div>
            </div>
            <div class="step s3">
              <div
                class="
                  circle-container
                  c3
                  d-flex
                  justify-content-center
                  align-items-center
                "
              ></div>
              <div class="label-container">付款資訊</div>
            </div>
          </div>
        </div>

        <!--form-->
        <div class="form-panel">
          <div class="container form-container">
            <form id="a-form" class="d-flex flex-column">
              <div class="form-content">
                <!--form - delivery info-->
                <FormOne v-show="CurrentStep === 1" />
                <!--form - shipping address-->
                <FormTwo v-show="CurrentStep === 2" />
                <!--form - payment method-->
                <FormThree v-show="CurrentStep === 3" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--checkout section-->
      <CheckoutCart :initial-items="items" />
      <!--next/prev button-->
      <div id="btn-control" class="control-panel d-flex">
        <button
          class="btn btn-outline"
          v-show="CurrentStep > 1"
          @click.stop.prevent="handlePrevStep"
        >
          上一步
        </button>
        <button
          class="btn btn-primary"
          v-if="CurrentStep <= 2"
          @click.stop.prevent="handleNextStep"
        >
          下一步
        </button>
        <button
          class="btn btn-primary"
          v-else
          @click.stop.prevent="handleNextStep"
        >
          確認下單
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import FormOne from "./../components/FormOne";
import FormTwo from "./../components/FormTwo";
import FormThree from "./../components/FormThree";
import CheckoutCart from "./../components/CheckoutCart";

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
      CurrentStep: 1,
      items: [],
    };
  },
  components: {
    FormOne,
    FormTwo,
    FormThree,
    CheckoutCart,
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      this.items = dummyData.items;
    },
    handleNextStep() {
      if (this.CurrentStep <= 2) {
        this.CurrentStep = this.CurrentStep + 1;
      } else {
        return;
      }
    },
    handlePrevStep() {
      if (this.CurrentStep >= 2) {
        this.CurrentStep = this.CurrentStep - 1;
      } else {
        return;
      }
    },
  },
};
</script>