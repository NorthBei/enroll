<template>
    <div>
        <b-row>
            <b-col>
                <b-form inline  class="mb-3">
                    <b-form-select v-model="filter.confirmed.selected" :options="filter.confirmed.options" />
                    <b-form-group
                        id="fieldset1"
                        label-for="input1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        :state="state"
                    >
                        <b-form-input id="input1" :state="state" v-model.trim="name"></b-form-input>
                    </b-form-group>

                    <b-button disabled variant="primary">搜尋</b-button>
                </b-form>
            </b-col>
        </b-row>
        
        <b-table striped hover :items="items" :fields="fields" :filter="filterItems">
            <template slot="end_date" slot-scope="data">
                <date-picker v-model="data.item.end_date" :config="config.datePicker"></date-picker>
                <!-- <date-picker v-model="date" @dp-hide="doSomethingOnHide" @dp-change="doSomethingOnChange"></date-picker> -->
            </template>
            <template slot="confirmed" slot-scope="data">
                {{data.item.confirmed == 0 ? '未完成' : '已完成'}}
            </template>
        </b-table>
    </div>
</template>

<script>
import Vue from 'vue';
/*for datepciker start */
// Import required dependencies 
import 'bootstrap/dist/css/bootstrap.css';
// Import this component
import datePicker from 'vue-bootstrap-datetimepicker';
// Import date picker css
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
/*for datepciker end */

Vue.use(datePicker);

export default {
 name: 'QueryStduent',
  data () {
    return {
      config:{
          datePicker:{
            format: 'YYYY-MM-DD',
            useCurrent: false,
          }
      },
      filter:{
        std_code:'',
        confirmed:{
          selected: null,
          options: [
            { value: null, text: '全部' },
            { value: '0', text: '未完成' },
            { value: '1', text: '已完成' }
          ]
        }
      },
      fields: [
        {
          key: 'std_code',
          label: '學號',
          sortable: true,
        },
        {
          key: 'std_pid',
          label: '身分證字號',
          sortable: true,
        },
        {
          key: 'std_epost',
          label: '通行碼',
          sortable: true,
        },
        {
          key: 'start_date',
          label: '開放修改起始日期',
          sortable: true,
        },
        {
          key: 'end_date',
          label: '開放修改結束日期',
          sortable: true,
          tdClass:'position-relative'
        },
        {
          key: 'confirmed',
          label: '是否已完成',
        },],
      items:[
        {
          std_no:"8029C3DA-DB17-4E78-AA13-0015FC634862",
          std_code:"0715303",
          std_pid:"H225332889",
          std_epost:"DE8B5",
          start_date:"2018-05-22",
          end_date:"2018-05-30",
          confirmed:0,
          isChange:false
        },
        {
          std_no:"B72C4810-AA6A-49B5-82F6-00188AB16158",
          std_code:"0753920",
          std_pid:"K122670668",
          std_epost:"AD31B",
          start_date:"2018-05-21",
          end_date:"2018-05-29",
          confirmed:0,
          isChange:false
        },
        {
          std_no:"D6F92A73-B7E6-4D94-8918-00547017E31B",
          std_code:"0753917",
          std_pid:"V221403922",
          std_epost:"CCB20",
          start_date:"2018-06-22",
          end_date:"2018-06-30",
          confirmed:0,
          isChange:false
        }
      ]
    }
  },
  methods:{
    filterItems:function(oldItems){
      if(oldItems.std_code.includes(this.filter.std_code))
        return true;

      if(this.filter.confirmed.selected === null)
        return true;

      return oldItems.confirmed == this.filter.confirmed.selected;
    }
  },
  computed: {
    isConfirmed(confirmed){
      return confirmed == 0 ? '未完成' : '已完成';
    }
  },
  components: {
    datePicker
  }
}
</script>

