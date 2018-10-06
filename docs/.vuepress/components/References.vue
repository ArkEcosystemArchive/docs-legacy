<template>
<div class="referencesTemplate">
  <h2>References</h2>
  <ul>
    <li v-for="ref in references">
      <span class="referenceName">{{ref.name}}</span><p class="referenceLinkText"><a :href="ref.link">{{ref.link}}</a></p>
      <span class="referenceDescription">{{ref.desc}}</span>
      <hr>
    </li>
  </ul>
</div>
</template>

<style scoped>
.referencesTemplate {
  color: #2C3E50
}

.referenceName {
  font-size: 1.1em;
  weight: 800;
  font-weight: bold;
  max-width: 50%;
  display: inline-block;
  border-right: 0.1em solid lightgrey;
  margin-right: 0.3em;
  padding-right: 0.3em;
  border-bottom: 0.1em solid lightgrey
}

.referenceLinkText {
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;
  margin-top: 0;
  display: inline;
  margin-bottom: 0;
}

.referenceDescription {
  display: block;
  margin-top: 0
}

ul {
  list-style-type: none
}

</style>

<script>  
  export default {

    props: ['references']
  }
</script>
