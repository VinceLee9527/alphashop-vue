<template>
  <div>
    <div class="part-container">
      <div class="part">
        <h2 class="form-header">寄送地址</h2>
        <div class="form-row part-title">
          <label>稱謂</label>
          <div class="select-wrapper">
            <select name="a-type" id="a-type" required>
              <option value="mister">先生</option>
              <option value="miss">小姐</option>
              <option value="none">不拘</option>
            </select>
          </div>
        </div>
        <div class="form-row part-name">
          <label for="">姓名</label
          ><input
            id="name"
            type="text"
            class="w-100"
            placeholder="請輸入姓名"
          />
        </div>
        <div class="form-row part-phone">
          <label for="">電話</label
          ><input
            id="phone"
            type="text"
            class="w-100"
            placeholder="請輸入電話"
          />
        </div>
        <div class="form-row part-email">
          <label for="">Email</label
          ><input
            id="email"
            type="text"
            class="w-100"
            placeholder="請輸入電子郵件"
          />
        </div>
        <div class="form-row part-city">
          <label for="">縣市</label>
          <div class="select-wrapper">
            <select name="a-type" id="a-location" required>
              <option value="" disabled selected>請選擇縣市</option>
              <option value="">台北市</option>
              <option value="">台中市</option>
              <option value="">高雄市</option>
            </select>
          </div>
        </div>
        <div class="form-row part-address">
          <label for="">地址</label
          ><input
            id="address"
            type="text"
            class="w-100"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>
    <!--next/prev button-->
    <div id="btn-control" class="control-panel d-flex">
      <button class="btn btn-primary" @click.stop.prevent="NextStep">
        下一步
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   initialUser: {
  //     type: Object,
  //     default: () => ({
  //       gender: "",
  //       name: "",
  //       tel: "",
  //       email: "",
  //       city: "",
  //       address: "",
  //       id: "",
  //     }),
  //   },
  // },
  // data() {
  //   return {
  //     cities: [
  //       { name: "基隆市", id: "1" },
  //       { name: "台北市", id: "2" },
  //       { name: "新北市", id: "3" },
  //       { name: "桃園市", id: "4" },
  //       { name: "新竹市", id: "5" },
  //       { name: "新竹縣", id: "6" },
  //       { name: "苗栗市", id: "7" },
  //       { name: "台中市", id: "8" },
  //       { name: "彰化縣", id: "9" },
  //       { name: "南投縣", id: "10" },
  //       { name: "雲林縣", id: "11" },
  //       { name: "嘉義市", id: "12" },
  //       { name: "嘉義縣", id: "13" },
  //       { name: "台南市", id: "14" },
  //       { name: "高雄市", id: "15" },
  //       { name: "屏東縣", id: "16" },
  //       { name: "台東縣", id: "18" },
  //       { name: "花蓮縣", id: "19" },
  //       { name: "宜蘭縣", id: "20" }
  //     ],
  //     user: this.initialUser,
  //   };
  // },
  methods: {
    NextStep() {
      //console.log(this.receiverInfo)
      // const { gender, name, tel, email, city, address, id } = this.user;
      this.$emit("step-after-submit");
      this.$router.push({ name: "delivery" });
    },
  },
};
</script>