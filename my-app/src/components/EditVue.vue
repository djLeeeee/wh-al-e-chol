<template>
  <!-- relative로 수정하는 게 좋을 듯? -->
  <q-card style="min-width: 400px">

  <q-card-section class="row justify-between">
    <span class="text-h6">주류 정보 수정</span>
    <q-btn flat>
      <q-icon v-if="changedInfo.recommend" name="star" @click="changedInfo.recommend = false"/>
      <q-icon v-else name="star_outline" @click="changedInfo.recommend = true"/>
    </q-btn>
  </q-card-section>

  <q-card-section class="q-pt-none">
    <q-input borderless v-model="changedInfo.name" label="이름" disable />
    <q-input borderless v-model="changedInfo.capacity" label="용량" disable />
    <q-input borderless v-model="changedInfo.category" label="종류" disable />
    <q-input v-model="changedInfo.price" label="가격" />
    <q-input v-model="changedInfo.amount" label="수량" />
    <q-input borderless v-model="changedInfo.like" label="추천횟수" disable />
  </q-card-section>

  <q-card-actions align="right" class="text-primary">
    <q-btn flat label="저장" @click="sendInfo(changedInfo)" v-close-popup />
    <q-btn flat color="deep-orange" label="닫기" v-close-popup />
  </q-card-actions>

  </q-card>
</template>

<script>
  export default {
    props: {
      information: {
        type: Object,
        required: true,
      },
    },
    data() {
      return  {
        changedInfo: this.information
      }
    },
    setup () {
      const sendInfo = (target) => {
        console.log(target)
      }
      return {
        sendInfo,
      }
    }
  }
</script>
