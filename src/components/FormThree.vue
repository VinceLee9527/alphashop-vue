<template>
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
        />
      </div>
      <div class="form-row part-cardnum">
        <label for="">卡號</label
        ><input
          id="card-num"
          type="text"
          class="w-100"
          placeholder="1111 2222 3333 4444"
        />
      </div>
      <div class="form-row part-cardexp">
        <label for="">有效期限</label
        ><input id="card-date" type="text" class="w-75" placeholder="MM/YY" />
      </div>
      <div class="form-row part-cvc">
        <label for="">CVC / CCV</label
        ><input id="card-csv" type="text" class="w-100" placeholder="123" />
      </div>
    </div>
  </div>
</template>