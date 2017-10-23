<template>
	<footer style="z-index: 9999;">
	    	<router-link class="mune" to="/home" tag='div' active-class="active">
	    		<a href="javascript:;">
            <img src="../assets/images/jsf01.png">
            <p>健身房</p>
          </a>
	    	</router-link>
	    	<router-link class="mune" to='/follow' tag='div' active-class="active">
	    		<a href="javascript:;">
            <img src="../assets/images/jl01.png">
            <p class="color">教练</p>
          </a>
	    	</router-link>
	    	<router-link class="mune" to="/league" tag='div' active-class="active">
	    		<a href="javascript:;">
            <img src="../assets/images/tk01.png">
            <p>团课</p>
          </a>
	    	</router-link>
        <router-link class="mune" to="/user-info" tag='div' active-class="active">
          <a href="javascript:;">
            <img src="../assets/images/w01.png">
            <p>我的</p>
          </a>
        </router-link>

	</footer>
</template>

<style>


</style>
