<template>
  <div id="app">
    <main>
      <div id="eyecatch">
        <p>Capital Leaf Consulting LLC</p>
      </div>
      <div id="about" class="wrap">
        <h2 class="section-title">Our business</h2>
        <div class="flex around">
          <div class="about-left">
            <img src="../assets/bg2.jpg" alt />
          </div>
          <div class="about-right">
            <h3>Capital Leaf Consulting LLC</h3>
            <p>私たちは、Saas、ExcelなどのITツールを用いた経理業務の効率化と英文会計業務を外資系企業へ提供をすることで、外資系企業の日本での円滑な事業活動をサポートいたします。</p>
            <ol>
              <p>業務内容</p>
              <li>経理業務効率化</li>
              <li>英文会計業務</li>
              <li>翻訳業務</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>

export default {
}
</script>

<style>
#eyecatch {
  height: 600px;
  background: url(../assets/bg1.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

#eyecatch p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  font-style: italic;
  font-weight: bold;
  color: #ccc;
  line-height: 1;
}

.about-right h3,
.about-right p {
  margin-bottom: 15px;
}

.about-left,
.about-right {
  width: 45%;
}

.about-right ol {
  list-style-position: inside;
}

</style>

