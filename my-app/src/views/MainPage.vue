<template>
  <div>

  </div>
  <div class="q-pa-md">
    <q-table
      @row-click="openEdit"
      :rows="rows"
      :columns="$q.screen.gt.xs ? $q.screen.gt.sm ? columns : columnsMid : columnsMinimum"
      row-key="name"
    >
      <template v-slot:bottom-row>
        <q-tr @click="openAdd">
          <q-td colspan="100%" class="text-center">
            <q-icon name="add_circle_outline" style="color: #ccc; font-size:2rem;" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
  <q-dialog v-model="state.prompt" persistent>
    <EditVue :information="state.selected" />
  </q-dialog>
  <q-dialog v-model="state.addView" persistent>
    <AddVue />
  </q-dialog>
</template>

<script>
import { reactive } from 'vue'
import EditVue from '../components/EditVue.vue'
import AddVue from '../components/AddVue.vue'

const columns = [
  { name: 'name', label: '이름', align: 'left', field: row => row.name, sortable: true },
  { name: 'category', label: '주류 종류', field: 'category', sortable: true },
  { name: 'capacity', label: '용량 (ml)', field: 'capacity', sortable: true },
  { name: 'country', label: '제조국', field: 'country', sortable: true },
  { name: 'price', label: '가격 (원)', field: 'price', sortable: true },
  { name: 'alchol', label: '도수 (%)', field: 'alchol', sortable: true },
  { name: 'amount', label: '재고 (개)', field: 'amount', sortable: true },
  { name: 'like', label: '추천횟수', field: 'like', sortable: true },
]

const columnsMid = [
  { name: 'name', label: '이름', align: 'left', field: row => row.name, sortable: true },
  { name: 'capacity', label: '용량 (ml)', field: 'capacity', sortable: true },
  { name: 'price', label: '가격 (원)', field: 'price', sortable: true },
  { name: 'amount', label: '재고 (개)', field: 'amount', sortable: true },
  { name: 'like', label: '추천횟수', field: 'like', sortable: true },
]

const columnsMinimum = [
  { name: 'name', label: '이름', align: 'left', field: row => row.name, sortable: true },
  { name: 'capacity', label: '용량 (ml)', field: 'capacity', sortable: true },
  { name: 'amount', label: '재고 (개)', field: 'amount', sortable: true },
  { name: 'like', label: '추천횟수', field: 'like', sortable: true },
]

// 주류 DB를 받고 해당 양식에 맞게 가공
// 아니면 여기 코드를 고쳐도 되고.
const rows = [
  {
    pk: 1,
    name: '와일드터키 8',
    category: '위스키',
    capacity: 700,
    country: '미국',
    price: 79200,
    alchol: 50.5,
    amount: 20,
    like: 4,
    recommend: true,
  },
  {
    pk: 2,
    name: '처음처럼',
    category: '소주',
    capacity: 350,
    country: '한국',
    price: 2000,
    alchol: 17,
    amount: 300,
    like: 0,
    recommend: false,
  },
]

export default {
  name: 'MainPage',
  components: {
    EditVue,
    AddVue,
  },
  setup () {
    const state = reactive({
      prompt: false,
      addView: false,
      selected: '',
    })
    const openEdit = (event, target) => {
      state.prompt = true
      state.selected = target
    }
    const openAdd = () => {
      state.addView = true
    }
    return {
      state,
      openEdit,
      openAdd,
      columns,
      columnsMid,
      columnsMinimum,
      rows,
    }
  }
}
</script>
