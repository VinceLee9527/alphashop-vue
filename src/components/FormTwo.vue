<template>
  <div>
    <div class="part-container">
      <div class="part">
        <h2 class="form-header">運送方式</h2>
        <div class="form-row part-shipping">
          <div class="shipping-method">
            <input
              type="radio"
              name="shipping-method"
              value="0"
              id="standard"
              class="shipping-method-radio"
              v-model="deliveryCost"
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
              value="500"
              id="dhl"
              class="shipping-method-radio"
              v-model="deliveryCost"
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
    <div id="btn-control" class="control-panel d-flex">
      <button class="btn btn-outline" @click.stop.prevent="prevStep">
        上一步
      </button>
      <button class="btn btn-primary" @click.stop.prevent="nextStep">
        下一步
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialDeliveryCost: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      deliveryCost: this.initialDeliveryCost,
    };
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "payment" });
    },
    prevStep() {
      this.$router.push({ name: "address" });
    },
    deliveryButtonClick() {
      this.$emit("delivery-change", this.deliveryCost);
    },
  },
  watch: {
    deliveryCost: {
      handler: function () {
        this.deliveryButtonClick();
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>