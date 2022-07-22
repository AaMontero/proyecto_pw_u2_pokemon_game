<template>
<div class = "options_container">
    <ul>
      <li>1.</li>
      <li>2.</li>
      <li>3.</li>
      <li>4.</li>
  </ul>
  </div>
  
</template>

<script>
export default {
    
}
</script>

<style>
    ul{
        list-style-type: none;
    }
    li{
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgb(0, 0, 0.05);
        width: 400px;
        margin-top: 10px;
        cursor:pointer;
        
    }
    li:hover{
        background-color: gray;
    }
    .options_container{
        justify-content: center;
        display:flex;
    }
</style>