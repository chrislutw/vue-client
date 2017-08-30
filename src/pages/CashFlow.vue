<template>
  <div class="wrap">
    <header>
      <div class="banner-sale">
        <img src="static/images/banner.jpg" alt="">
      </div>
    </header>
    <div class="content">
      <ul class="nav">
        <li>
          <div class="sale-position icon-discount">最高 +30%</div>
          <!-- <a href="credit-card.html">
            <div class="nav-icon icon-creditcard"></div>
            <p>信用卡</p>
          </a> -->
          <router-link to="/credit-card">
            <div class="nav-icon icon-creditcard"></div>
            <p>信用卡</p>
          </router-link>
        </li>
        <li>
          <div class="sale-position icon-rate">最高 1:105</div>
          <!-- <a href="top-up.html">
            <div class="nav-icon icon-topup"></div>
            <p>點數卡</p>
          </a> -->
          <router-link to="/top-up">
            <div class="nav-icon icon-topup"></div>
            <p>點數卡</p>
          </router-link>
        </li>
        <li>
          <div class="sale-position icon-discount">最高 +30%</div>
          <!-- <a href="funpay.html">
            <div class="nav-icon icon-funpay"></div>
            <p>全家立即儲</p>
          </a> -->
          <router-link to="/funpay">
            <div class="nav-icon icon-funpay"></div>
            <p>全家立即儲</p>
          </router-link>
        </li>
        <li>
          <div class="sale-position icon-discount">最高 +30%</div>
          <!-- <a href="mobile-pay.html">
            <div class="nav-icon icon-mobile"></div>
            <p>手機輕鬆付</p>
          </a> -->
          <router-link to="/mobile-pay">
            <div class="nav-icon icon-mobile"></div>
            <p>手機輕鬆付</p>
          </router-link>
        </li>
        <li>
          <div class="sale-position icon-discount">最高 +30%</div>
          <!-- <a href="serial-number.html">
            <div class="nav-icon icon-gift"></div>
            <p>序號兌換</p>
          </a> -->
          <router-link to="/serial-number">
            <div class="nav-icon icon-gift"></div>
            <p>序號兌換</p>
          </router-link>
        </li>

      </ul>
    </div>
  </div>

</template>
<script>

</script>

