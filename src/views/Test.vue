<template>
  <div >
    <div class="conten-test">
     <div class="imagen-conten">
                  <div  class="imagen-turo"> 
                        <div>
                            <img src="../assets/img/tutor-circ.png" alt="" class="tutor">
                        </div>
                        <div class="centrar-titulo">
                          <h1>Seleccione <br> la Respuesta que Considere correcta...!
                          </h1>  
                        </div>
                  </div> 
            </div>
            <div class="caja-form">
               <TestCompo></TestCompo>
            </div>
   
    </div>
  </div>
</template>

<script>

import TestCompo from "@/components/TestCompo";
export default {
  components:{ TestCompo}
}
</script>

<style lang="scss" scoped>

.contenedor {
  height: 900px;
  widows: 1098px;
}
.imagen-turo{
      width: 100%;
    height: 100%;

    // display: grid;
    // grid-template-columns: 20% 80%;
    -webkit-box-pack: unset;
    -ms-flex-pack: end;
    justify-content: space-between;
    -ms-flex-line-pack: center;
    align-content: center;
    background: #731b8b;
    // border-top-left-radius: 100px;
    // border-bottom-left-radius: 100px;
    /* margin-bottom: 0px; */
    // position: absolute;
    
    // margin-top: 10px;
      animation-duration: 1s;
  animation-name: slidein;
}
   img{
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid #FFF;
    padding: 3px;
}

.conten-test{
display: grid;
grid-template-rows: 20% 87%;
    width: 100%;
    // height: 100%;
    
   
}

.centrar-titulo{
  justify-content: center;
  align-items: center;
  text-align: center;
  display: grid;
   font: 600 12px/1 "Poppins", sans-serif;
   color: white;
  //  margin-right: 20px;
}

.caja-form{
  width: 100%;
  height: 780px;
  
  margin-top: 40px;
}

@keyframes slidein {
  from {
    margin-right: 300px;
    
  }

  to {
    margin-right: 0%;
    width: 100%;
  }
}
</style>