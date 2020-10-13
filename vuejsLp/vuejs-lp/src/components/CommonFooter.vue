<template>
  <div>
    <footer class="top-footer">
      <div class="footer-bar">
        <div class="flex">
          <div class="footer-logo">estra inc.</div>
          <nav class="footer-nav">
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">service</a></li>
              <li><a href="#">works</a></li>
              <li><a href="#">price</a></li>
              <li><a href="#">contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <small>Copyright 2019 estra inc. All Rights Reserved.</small>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.footer-bar {
  height: 70px;
  line-height: 70px;
}

.top-footer {
  background: #000;
  text-align: center;
}

.top-footer small {
  text-align: center;
  color: #fff;
}

.footer-logo {
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  color: #fff;
  line-height: 70px;
}

.footer-nav li {
  display: inline-block;
  margin-right: 35px;
}

.footer-nav a {
  color: #fff;
}

@media screen and (max-width: 768px) {

.footer-bar,
.footer-logo,
.footer-nav {
  display: none;
}

}
</style>