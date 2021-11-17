<template>
  <div>
    <div class="part-container">
      <div class="part">
        <h2 class="form-header">付款資訊</h2>
        <div class="form-row part-cardholder-name">
          <label for="">持卡人姓名</label
          ><input
            id="card-name"
            type="text"
            class="w-100"
            placeholder="John Doe"
            v-model="userInput.cardName"
          />
        </div>
        <div class="form-row part-cardnum">
          <label for="">卡號</label
          ><input
            id="card-num"
            type="text"
            class="w-100"
            placeholder="1111 2222 3333 4444"
            v-model="userInput.cardNum"
          />
        </div>
        <div class="form-row part-cardexp">
          <label for="">有效期限</label
          ><input
            id="card-date"
            type="text"
            class="w-75"
            placeholder="MM/YY"
            v-model="userInput.cardDate"
          />
        </div>
        <div class="form-row part-cvc">
          <label for="">CVC / CCV</label
          ><input
            id="card-csv"
            type="text"
            class="w-100"
            placeholder="123"
            v-model="userInput.cardCsv"
          />
        </div>
      </div>
    </div>
    <div id="btn-control" class="control-panel d-flex">
      <button class="btn btn-outline" @click.stop.prevent="prevStep">
        上一步
      </button>
      <button class="btn btn-primary" @click.stop.prevent="finalStep">
        確認下單
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUserInput: {
      type: Object,
      default: () => ({
        cardName: "",
        cardNum: "",
        cardDate: "",
        cardCsv: "",
      }),
    },
  },
  data() {
    return {
      userInput: this.initialUserInput,
    };
  },
  methods: {
    finalStep() {
      console.log(this.userInput);
    },
    prevStep() {
      this.$router.push({ name: "delivery" });
    },
  },
};
</script>