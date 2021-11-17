<template>
  <div id="stepper-control">
    <div class="container stepper-container mt-4 d-flex">
      <div class="step active" :class="{ checked: currentStep !== 'address' }">
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
      <div
        class="step s2"
        :class="[
          { active: currentStep === 'delivery' },
          { checked: currentStep === 'payment' },
        ]"
      >
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
      <div class="step s3" :class="{ active: currentStep === 'payment' }">
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
</template>

<script>
export default {
  props: {
    currentStep: {
      type: String,
      required: true,
    },
  },
};
</script>

