// ==UserScript==
// @name 测试数据生成
// @author jy
// @version 1.0.0
// @description 脚本
// @require https://unpkg.com/vue@2/dist/vue.js
// @require https://unpkg.com/setaria-ui/lib/index.js
// @require https://code.jquery.com/jquery-3.7.0.min.js
// @include *
// @icon data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @icon64 data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @resource css https://unpkg.com/setaria-ui/lib/theme-chalk/index.css
// @grant   GM_addStyle
// @grant   GM_getResourceText
// @grant   GM_xmlhttpRequest
// @run-at document-idle
// ==/UserScript==
(() => {
    (function () {

        addStyle();
        const type = GM_getResourceText("css");
        GM_addStyle(type);
        const el = document.createElement("div");
        el.classList.add("dataBg");
        el.innerHTML = `<div id='createdBody'><el-button type="primary" @click="visibles=true">生成数据</el-button><main-view :visible.sync="visibles" /></div>`;
        document.body.appendChild(el);
    })();

    Vue.component('menuView', {
        template: `<el-button style="width: 100px;height: 30px;background: #f0f2f5;border: 0;" @click="visible=true" />
    <mainView :visible.sync="visible" />`,
        data(){
            return {
                visible: false,
            }
        }
    })
    function addStyle(){
        let css = `
         .v-modal{
             z-index:0 !important;
         }
            .dataBg{
                       position: fixed;
                       display: inline-block;
                       top: 0px;
                       right: -90px;
                       transition:all 0.5s;
                       z-index:2001;
                 }
            .dataBg:hover
             {
               right:0px;
              }

         `
        GM_addStyle(css);
    }


    Vue.component('main-view', {
        // 声明 props
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                isLoading:false,
                days: [{
                    value: '30天付款',
                    label: '30天付款'
                }, {
                    value: '60天付款',
                    label: '60天付款'
                }],
                types: [{
                    value: '电汇',
                    label: '电汇'
                }, {
                    value: '承兑汇票',
                    label: '承兑汇票'
                }],
                data:{
                    accountDate: '2023-05-09 01:00:00',
                    accountDeptCode: '112',
                    accountDeptName: '澳优财务共享组',
                    accountHeaderId: '769031',
                    attribute1: 'SRM系统',
                    attribute10: '',
                    attribute2: '034006',
                    attribute3: '原材料',
                    attribute4: '协同1.0',
                    attribute5: '',
                    attribute6: '',
                    attribute7: '',
                    attribute8: '',
                    attribute9: '',
                    buSegCode: '',
                    buSegName: '',
                    coSegCode: '261',
                    coSegName: '110_OU_HQ',
                    contractNo: 'HT123456789',
                    contractName: 'HT123456789',
                    documentLineList: [
                        {
                            accountHeaderId: '769031',
                            accountPeriod: '60天付款',
                            accountPeriodCode: '1111',
                            ajustAmount: 0,
                            attribute1: '2023-5-01 11:31:03',
                            attribute10: '',
                            attribute2: '',
                            attribute3: '',
                            attribute4: '',
                            attribute5: '',
                            attribute6: '',
                            attribute7: '',
                            attribute8: '',
                            attribute9: '',
                            contractNo: 'HT123456789',
                            contractName: 'HT123456789',
                            contractSerialNum: 'HT1234567890000',
                            deliverTransactionId: 129944100,
                            inventoryItemId: 0,
                            itemDescription: '澳优木糖醇（结晶）',
                            itemNumber: '100807006100',
                            matchOption: 'R',
                            matchPrice: '899',
                            matchingAmount: 899000,
                            payAmount: 899000,
                            payTypeId: '电汇',
                            poCreateDate: '2023-05-10 00:23:01',
                            poDistributionId: 10885273,
                            poHeaderId: 3936935,
                            poLineId: 14509228,
                            poLineLocationId: 10071721,
                            poNumber: '230076030721',
                            quantityInvoiced: 1000,
                            rcvTransationId: 120944100,
                            receiptLineNum: '1',
                            receiptNumber: '23007601038312',
                            receiptReceivedDate: '2023-4-28 11:31:03',
                            remark: 'YY测试数据0506031',
                            seg: '',
                            segCode: '',
                            shipmentHeaderId: 61261956,
                            shipmentLineId: 69012151,
                            synDocumentLineCode: 'DZ0000031',
                            synDocumentNumCode: 'D23007655220230506031',
                            taxRate: 0,
                            unitOfMeasLookupCode: '千克',
                            warehouse: 'L23:冷饮陕西工厂材料库',
                            warehouseCode: 'L23',
                            warrantyAmount: '',
                        },
                    ],
                    drfatUserNum: 'CN001013',
                    employeeName: '杨晓',
                    employeeNumber: 'CN001013',
                    invoiceNo: '',
                    payLineList: [
                        {
                            accountHeaderId: '769030',
                            accountPeriod: '60天付款',
                            accountPeriodCode: '1111',
                            amount: 899000,
                            attribute1: '',
                            attribute2: '',
                            attribute3: '',
                            attribute4: '',
                            attribute5: '',
                            attribute6: '',
                            attribute7: '',
                            attribute8: '',
                            attribute9: '',
                            payTypeId: '电汇',
                            synDocumentLineCode: 'FK0000031',
                            synDocumentNumCode: 'D23007655220230506031',
                        },
                    ],
                    paymentType: '收货之日起',
                    submitDate: '2023-05-01 00:00:00',
                    synDocumentNumCode: 'D23007655220230506031',
                    taxLineList: [
                        {
                            attribute1: '',
                            attribute2: '',
                            attribute3: '',
                            attribute4: '',
                            attribute5: '',
                            invoiceCode: '',
                            invoiceNo: '',
                            invoiceType: '',
                            pdfFtp: '',
                            pdfUrl: '',
                            prueAmount: 0,
                            synDocumentLineCode: '',
                            synDocumentNumCode: '',
                            taxAmount: 0,
                            taxRate: 0,
                            totalAmount: 0,
                        },
                    ],
                    totalAmount: 899000,
                    vendorClientId: 225568,
                    vendorName: '长沙博益机电设备有限公司',
                    vendorNo: '102536',
                    vendorSite: '长沙市',
                    vendorSiteCode: '长沙市',
                    vendorSiteId: 225569,
                    warehouse: 'L23:冷饮陕西工厂材料库',
                    warehouseCode: 'L23',

                },
                tableData: [],
                dialogVisible: false,
                fullscreen: false,
                form: {
                    coSegCode: '1',
                    coSegName: '',
                    count: '0',
                    synDocumentNumCode: '',
                    accountHeaderId: '',
                    synDocumentLineCode: '',
                    vendorClientId: '',
                    vendorName: '',
                    vendorNo: '',
                    vendorSite: '',
                    vendorSiteCode: '',
                    vendorSiteId: '',
                    accountPeriod:'', //30天付款/60天付款/空
                    payTypeId:'',//电汇/承兑汇票/空
                    paymentType:'',
                },
                uiSchema: {},
                schema: {
                    required: [],
                    properties: {
                        coSegCode: {
                            type: 'string',
                            title: 'coSegCode',
                        },
                        coSegName: {
                            type: 'string',
                            title: 'coSegName',
                        },
                        count: {
                            type: 'string',
                            title: '生成数量',
                        },
                        synDocumentNumCode: {
                            type: 'string',
                            title: 'synDocumentNumCode',
                        },
                        accountHeaderId: {
                            type: 'string',
                            title: 'accountHeaderId',
                        },
                        synDocumentLineCode: {
                            type: 'string',
                            title: 'synDocumentLineCode',
                        },
                        vendorClientId: {
                            type: 'string',
                            title: 'vendorClientId',
                        },
                        vendorName: {
                            type: 'string',
                            title: 'vendorName',
                        },
                        vendorNo: {
                            type: 'string',
                            title: 'vendorNo',
                        },
                        vendorSite: {
                            type: 'string',
                            title: 'vendorSite',
                        },
                        vendorSiteId: {
                            type: 'string',
                            title: 'vendorSiteId',
                        },
                        vendorSiteCode: {
                            type: 'string',
                            title: 'vendorSiteCode',
                        },
                        accountPeriod:{
                            type:'string',
                            title:'accountPeriod',
                        },
                        payTypeId:{
                            type:'string',
                            title:'accountPeriod',
                        },
                        paymentType:{
                            type:'string',
                            title:'accountPeriod',
                        },
                    },
                },
            };
        },
        computed: {
            innerVisible: {
                get() {
                    return this.visible;
                },
                set(val) {
                    this.$emit('update:visible', val);
                },
            },
        },
        created() {
            const json = this.data;
            this.form.vendorSiteCode = json.vendorSiteCode;
            this.form.vendorSiteId = json.vendorSiteId;
            this.form.vendorSite = json.vendorSite;
            this.form.vendorNo = json.vendorNo;
            this.form.vendorName = json.vendorName;
            this.form.vendorClientId = json.vendorClientId;
            this.form.synDocumentLineCode = json.documentLineList[0].synDocumentLineCode.substr(2);
            this.form.accountHeaderId = json.accountHeaderId;
            this.form.synDocumentNumCode = json.synDocumentNumCode.substr('D23007655220230'.length);
            this.form.coSegName = json.coSegName;
            this.form.coSegCode = json.coSegCode;
            this.form.accountPeriod = json.documentLineList[0].accountPeriod;
            this.form.payTypeId = json.documentLineList[0].documentLineList;
            this.form.paymentType = json.paymentType;
        },
        methods: {
            indexMethod(index) {
                return index * 2;
            },
            handleClick() {

            },
            onSubmit() {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        this.$message.success('查询执行成功');
                        this.crateData();
                        resolve();
                    }, 500);
                });
            },
            handleClose() {
                this.innerVisible = false;
            },
            copyClick(item) {
                const el = document.createElement('input');
                el.setAttribute('value', item.content);
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                this.$message.success('拷贝成功');
            },
            request(scope){

                scope.row.loading = true;
                GM_xmlhttpRequest({
                    method: "POST",
                    url: "http://dev-fssc-integration-web.ausnutria.com/integration/api/feign/integration/bussinessBill/v1/saveTodoClaim",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    data:scope.row.content,
                    onload: function(response) {
                        scope.row.claimNo=JSON.parse(response.responseText).data.message.split(':')[1]
                        scope.row.loading = false;
                    }
                });
            },
            clearData() {
                this.tableData = [];
            },
            crateData() {
                const json = this.data;
                this.tableData = [];
                let code = Number(this.form.synDocumentNumCode);
                let headerId = Number(this.form.accountHeaderId);
                let synLineCode = Number(`1${this.form.synDocumentLineCode}`);
                json.coSegCode = this.form.coSegCode;
                json.coSegName = this.form.coSegName;
                json.vendorSiteCode = this.form.vendorSiteCode;
                json.vendorSiteId = this.form.vendorSiteId;
                json.vendorSite = this.form.vendorSite;
                json.vendorNo = this.form.vendorNo;
                json.vendorName = this.form.vendorName;
                json.vendorClientId = this.form.vendorClientId;
                this.form.accountPeriod = json.documentLineList[0].accountPeriod;
                this.form.payTypeId = json.documentLineList[0].documentLineList;
                json.paymentType=this.form.paymentType
                const str = JSON.stringify(json);
                // this.jsonData = [];
                // eslint-disable-next-line global-require
                // const axios = require('axios');

                // eslint-disable-next-line no-plusplus
                for (let i = 1; i <= this.form.count; i++) {
                    const lCode = synLineCode.toString().substr(1);
                    const js = JSON.parse(str);
                    const random = Math.round(Math.random());
                    const newCode = `D23007655220230${code.toString()}`;
                    js.accountHeaderId = headerId.toString();
                    const ds = js.documentLineList[0];
                    ds.remark = `YY测试数据0${code.toString()}`; // +1
                    ds.synDocumentLineCode = `DZ${lCode}`; // 1
                    ds.synDocumentNumCode = newCode; // 1
                    ds.payTypeId = this.form.payTypeId;
                    ds.accountPeriod = this.form.accountPeriod; //

                    const ps = js.payLineList[0];
                    ps.accountHeaderId = headerId.toString();
                    ps.accountPeriod = this.form.accountPeriod; //
                    ps.payTypeId = this.form.payTypeId;
                    ps.synDocumentLineCode = `FK${lCode}`;// +1
                    ps.synDocumentNumCode = newCode;// +1
                    js.synDocumentNumCode = newCode;// +1
                    // this.jsonData.push(JSON.stringify(js));
                    this.tableData.push({
                        synDocumentNumCode: js.synDocumentNumCode,
                        vendorName: js.vendorName,
                        content: JSON.stringify(js),
                        loading:false,
                        claimNo:'',
                    });
                    // axios.post('/integration/api/feign/integration/bussinessBill/v1/saveTodoClaim', js).then((res) => {
                    //   console.log(res);
                    // });
                    code += 1;
                    headerId += 1;
                    synLineCode += 1;
                }
            },
        },
        // 同样也可以在 vm 实例中像 "this.message" 这样使用
        template: `<el-dialog
          title="测试数据生成"
          :visible.sync="innerVisible"
          :cache="true"
          width="90%"
          :fullscreen="fullscreen"
          :dragable="false"
          :before-close="handleClose"
      >

        <el-query-filter
            v-model="form"
            class="filter"
            :advance-schema="schema"
            :advance-ui-schema="uiSchema"
            :after-submit="onSubmit"
            :show-result="false"
            @clear="clearData"
        >
          <template slot="accountPeriod" slot-scope="scope">
            <el-select v-model="scope.data.accountPeriod" clearable placeholder="请选择">
              <el-option
                  v-for="item in days"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </template>
          <template slot="payTypeId" slot-scope="scope">
            <el-select v-model="scope.data.payTypeId" clearable placeholder="请选择">
              <el-option
                  v-for="item in types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </template>
          <template slot="synDocumentNumCode" slot-scope="scope">
            <el-input v-model="scope.data.synDocumentNumCode" placeholder="请输入内容">
              <template slot="prepend">D23007655220230</template>
            </el-input>
          </template>
          <template slot="synDocumentLineCode" slot-scope="scope">
            <el-input v-model="scope.data.synDocumentLineCode" placeholder="请输入内容">
              <template slot="prepend">DZ|FK</template>
            </el-input>
          </template>

        </el-query-filter>
        <el-table
            :data="tableData"
            style="width: 100%"
        >
          <el-table-column
              type="index"
          />
          <el-table-column
              prop="synDocumentNumCode"
              label="synDocumentNumCode"
          />
          <el-table-column
              prop="vendorName"
              label="供应商名称"
          />
           <el-table-column
              prop="claimNo"
              label="订单号"
          />
          <el-table-column
              fixed="right"
              label="操作"
              width="350"
          >
            <template slot-scope="scope">
              <el-popover
                  placement="top-start"
                  title="json"
                  width="1400"
                  trigger="hover"
                  :content="scope.row.content"
              >
                <el-button slot="reference" type="text" size="small">查看</el-button>
              </el-popover>
              <el-button type="text" size="small" style="padding-left:15px" @click="copyClick(scope.row)">拷贝</el-button>
              <el-button type="text" size="small" @click="request(scope)" :loading="scope.row.loading">发起请求</el-button>

            </template>
          </el-table-column>
        </el-table>

        <span slot="footer" class="dialog-footer">
      <el-button @click="innerVisible = false">关闭</el-button>
    </span>
      </el-dialog>`
    })

// 创建根实例
    new Vue({
        el: '#createdBody',
        data(){
            return{
                visibles:false,
            }
        },
        methods:{

        }
    })
})();
