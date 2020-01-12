<template>
  <div id="app">
    <div class="contenedor">
     <router-view />
       <div class="contenfilados">
         <div class="conten-nav">
            <div class="back" @click="$router.go(-1)">
                <!-- <i class="fas fa-arrow-circle-left"></i> -->
                   <i class="fas fa-angle-left"></i>
            </div>
             <div id="nav">

              <h1>Vuex :: {{$store.state.estadoMundo}}</h1>
              <router-link to="/"> <span class="navegacion">1</span></router-link> |
              <router-link to="/about"><span class="navegacion">2</span></router-link> |
              <router-link to="/description"><span class="navegacion">3</span></router-link> |
              <router-link to="/test"><span class="navegacion">4</span></router-link> |
              <router-link to="/fin"><span class="navegacion">5</span></router-link> |
            </div>
            <div class="next" @click="$router.go(+1)">
              <i class="fas fa-angle-right"></i>
            </div>
           </div>
             </div>
             </div>
    </div>
</template>
<script>
export default {
  name: "app",
  components:{  },
  methods:{
  inicio(){
        console.log(this.$router)
        this.$router.push("/")
  },
  anterior(){
       this.$router.go(-1)
  },
  siguiente(){
       this.$router.go(1)
  },
} 
  
}
</script>

<style lang="scss" >
::-webkit-scrollbar {
	display: none;
}
a:link
{
text-decoration:none;
}
.navegacion {
    width: 40px;
    height: 40px;
    border: 2px solid #FFF;
    border-radius: 50%;
    /* background: white; */
    text-align: center;
    /* padding: 14px; */
    display: inline-grid;
    text-align: center;
    justify-content: center;
    align-content: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #6666664a;
  
 
}
.contenedor{
  width: 100%;
  height: 100%;
  background: #fffefea8;
  display: grid;
  grid-template-columns: repeat(1,100%); 
  grid-template-rows: 80% 20%;
}
#nav {
  a {
    font-weight: bold;
    color: #FFF;
    &.router-link-exact-active {
      color: #FFF;
      cursor:pointer;
    }
    &.router-link-exact-active:hover{
      color: purple;
    }
  }
}
.contenfilados{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
} 
.conten-nav{
    width: 80%;
    height: 80px;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
    background: #731b8b;
    grid-template-columns: 20% 60% 20%;
   
}
.back {
  color: white;
  font-size: 50px;
  cursor: pointer;
}
.next {
  color: white;
   font-size: 50px;
   cursor: pointer;
}
.next:hover{
  color: #038287;
}
.back:hover{
  color: #038287;
}
  
  @media screen and (max-width: 1024px) {
  .contenedor{
  
  width: 100%;
  height: 758px;
  display: grid;
  grid-template-columns: repeat(1,100%); 
  grid-template-rows: 40% 50% 10%;
  }
  .contenfila{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2,50%); 
}
.contenfilados {
    width: 100%;
    height: 708px;
    align-items: flex-end;
}
}
</style>