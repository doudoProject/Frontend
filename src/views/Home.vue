<template>
	<v-container>
    <v-row class="mb-1">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-icon left color="yellow lighten-1">mdi-hand-right</v-icon>
            환영해요
          </v-card-title>
          <v-card-text class="text-center text-h6">
            <a>{{this.$store.getters.user.info.name}}</a> 님
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card v-if="this.$store.getters.user.info.couple">
          <v-card-title>
            <v-icon left color="red">mdi-heart</v-icon>
            <b class="mr-1">{{this.$store.getters.user.info.couple.name}}</b> 커플
          </v-card-title>
          <v-card-text>
            <v-chip
              v-for="(item,index) in this.$store.getters.user.info.couple.member"
              :key="index"
              class="ma-2"
              color="primary"
              label
            >
              <v-icon left>
                mdi-account-circle
              </v-icon>
              {{item.name}}
            </v-chip>
          </v-card-text>
        </v-card>
        <v-card v-else>
          <v-card-title>
            <v-icon left>mdi-heart-off</v-icon>
            아직 커플이 아니시네요
          </v-card-title>
          <v-card-text>
            커플을 만들고 상대를 초대해보세요
          </v-card-text>
          <v-card-actions right>
            <v-btn text color="primary">생성하기</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-icon left color="green">mdi-flash</v-icon>
            바로가기
          </v-card-title>
          <v-card-text>
            <v-btn block color="primary">
              할일 추가하기
            </v-btn>
            <v-btn block class="mt-1">
              이벤트 추가하기
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
	</v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
  .col{
    padding-bottom:0;
  }
</style>
