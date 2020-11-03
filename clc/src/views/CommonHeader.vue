<template>
  <header>
    <div class="flex between">
      <h1 class="header-logo">CLC LLC</h1>
      <nav class="header-nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="service">Service</router-link>
          </li>
          <li>
            <router-link to="Tool">Tool</router-link>
          </li>
          <li>
             <router-link to="about">About</router-link>
          </li>
          <li>
            <router-link to="contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  height: 70px;
  background: #000;
}
.header-logo {
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  color: #f2f2f2;
  line-height: 70px;
}
.header-nav li {
  display: inline-block;
  margin-right: 35px;
  font-size: 16px;
}
.header-nav a {
  color: #f2f2f2;
}

@media screen and (max-width: 768px) {
  #hamburger {
    width: 40px;
    height: 40px;
    position: absolute;
    cursor: pointer;
    z-index: 100;
    top: 15px;
    right: 20px;
    transition: 0.4s;
  }
  #hamburger span {
    position: absolute;
    left: 2px;
    display: block;
    width: 35px;
    height: 2px;
    background-color: #fff;
    transition: 0.8s;
  }
  #hamburger span:nth-of-type(1) {
    top: 10px;
  }
  #hamburger span:nth-of-type(2) {
    top: 20px;
  }
  #hamburger span:nth-of-type(3) {
    top: 30px;
  }
  .header-nav {
    display: none;
  }
}
</style>