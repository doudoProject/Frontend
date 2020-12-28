<template>
	<div class="Calendar">
		<v-container>
      <v-date-picker v-model="picker" full-width></v-date-picker>
		</v-container>
	</div>
</template>

<script>
export default {
  name: 'Calendar',
  data:()=>({
    picker:null,
  })
}
</script>
