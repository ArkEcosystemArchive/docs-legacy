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
  max-width: 30%;
  font-weight: 500;
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
  vertical-align: bottom;
  text-overflow: ellipsis;
  max-width: 65%;
  margin-top: 0;
  display: inline-block;
  margin-bottom: 0;
}

.referenceDescription {
  font-weight: 300;
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
