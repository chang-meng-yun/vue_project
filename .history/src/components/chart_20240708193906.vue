<template>
    <div>
        <div id="myChart" :data="roleNum" :style="{ width: '470px', height: '350px',float:'left'}"></div>
        <div id="myChart2" :data="billNum" :style="{ width: '470px', height: '350px' ,float:'left'}"></div>
    </div>

</template>

<script>
    export default {
        name: "Pc2FbEcharts",

        data() {
            return {
                message: '',
                roleNum: [],
                billNum:[]
            };
        },

        mounted() {
            this.drawLine();
            this.drawLine2();
        },

        methods: {
            drawLine() {
                this.$postRequest('/charts/roleStatus').then(res => {
                    this.roleNum = res.data.roleNum
                    console.log(this.roleNum)
                    //    myChart.setOption.series.data = this.roleNum;
                    // 基于准备好的dom，初始化echarts实例
                    let myChart = this.$echarts.init(document.getElementById("myChart"));
                    // 绘制图表
                    myChart.setOption({
                        title: {
                            text: "角色占比",
                            left: "center",
                        },
                        tooltip: {
                            // 触发方式
                            trigger: "item",
                            // 格式化提示内容：
                            // a 代表series系列图表名称  
                            // b 代表series数据名称 data 里面的name    
                            // c 代表series数据值 data 里面的value   
                            // d代表  当前数据/总数据的比例
                            formatter: "{a} <br/>{b}: {c} ({d}%)",
                        },
                        legend: {
                            top: "10%",
                            left: "center",
                            data: ['系统管理员', '普通员工', '经理']
                        },
                        color: ['#61a0a8', '#d48265', '#91c7ae'],
                        series: [
                            {
                                name: "占比情况",
                                type: "pie",
                                radius: "50%",
                                data: this.roleNum,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: "rgba(0, 0, 0, 0.5)",
                                    },
                                },
                                label: {
                                    formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}:}{c}  {per|{d}%}  ",
                                    backgroundColor: "",
                                    borderColor: "",
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    rich: {},
                                },
                            },
                        ],
                    });
                })

            },
            drawLine2() {
                this.$postRequest('/charts/billStatus').then(res => {
                let myChart = this.$echarts.init(document.getElementById("myChart2"));
                myChart.setOption({
                    title: {
                            text: "创建订单情况",
                            left: "center",
                        },
                        tooltip: {
                            // 触发方式
                            trigger: "item",
                            // 格式化提示内容：
                            // a 代表series系列图表名称  
                            // b 代表series数据名称 data 里面的name    
                            // c 代表series数据值 data 里面的value   
                            // d代表  当前数据/总数据的比例
                            formatter: "{a} <br/>{b}: {c} ({d}%)",
                        },
                    xAxis: {
                        type: 'category',
                        data: ['系统管理员', '普通员工', '经理']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    color: ['#61a0a8'],
                    series: [
                        {   
                            name: "创建订单情况",
                            data: [120, 200, 150,],
                            type: 'bar'
                        }
                    ]
                });
            })
            }
        },
    };
</script>