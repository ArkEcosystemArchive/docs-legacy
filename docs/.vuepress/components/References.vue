<template>
<div class="referencesTemplate">
  <h2>References</h2>
  <ol>
    <li v-for="ref in references">
      <span class="referenceName">{{ref.name}}</span><br>
      <p class="referenceLinkText"><a :href="ref.link">{{ref.link}}</a></p>
      <span class="referenceDescription">{{ref.desc}}</span>
      <hr>
    </li>
  </ol>
</div>
</template>

<style scoped>
.referencesTemplate {
  color: #2C3E50
}

.referenceName {
  font-size: 1.1em;
  weight: 800;
  text-align: center;
  font-weight: bold;
}

.referenceLinkText {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  margin-top: 0;
  display: inline-block;
  margin-bottom: 0
}

.referenceDescription {
  display: block;
  margin-top: 0
}

</style>

<script>  
  export default {

    props: ['references']
  }
</script>
