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
                <FormOne />
                <!--form - shipping address-->
                <FormTwo />
                <!--form - payment method-->
                <FormThree />
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--checkout section-->
      <CheckoutCart />
      <!--next/prev button-->
      <div id="btn-control" class="control-panel d-flex">
        <button class="btn btn-outline d-none">上一步</button>
        <button class="btn btn-primary">下一步</button>
      </div>
    </main>
  </div>
</template>

<script>
import FormOne from "./../components/FormOne";
import FormTwo from "./../components/FormTwo";
import FormThree from "./../components/FormThree";
import CheckoutCart from "./../components/CheckoutCart";

export default {
  name: "checkout",
  components: {
    FormOne,
    FormTwo,
    FormThree,
    CheckoutCart,
  },
};
</script>