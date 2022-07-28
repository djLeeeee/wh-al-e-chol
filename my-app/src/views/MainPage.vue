<template>
  <div class="q-pa-md">
    <q-table
      title="Shop DB"
      @row-click="goTo"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: '이름',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'category', label: '주류 종류', field: 'category', sortable: true },
  { name: 'capacity', label: '용량 (ml)', field: 'capacity', sortable: true },
  { name: 'country', label: '제조국', field: 'country', sortable: true },
  { name: 'price', label: '가격 (원)', field: 'price', sortable: true },
  { name: 'alchol', label: '도수 (%)', field: 'alchol', sortable: true },
  { name: 'amount', label: '재고 (개)', field: 'amount', sortable: true },
]

const rows = [
  {
    name: '와일드터키 8',
    category: '위스키',
    capacity: 700,
    country: '미국',
    price: 79200,
    alchol: 50.5,
    amount: 20,
  },
]

export default {
  name: 'MainPage',
  setup () {
    const goTo = (event, row) => {
      console.log(row)
    }
    return {
      columns,
      rows,
      goTo
    }
  }
}
</script>
