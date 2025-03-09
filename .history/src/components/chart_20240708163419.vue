<template>
    <div>
        <div id="myChart" :style="{ width: '470px', height: '350px',float:'left'}"></div>
        <div id="myChart2" :style="{ width: '470px', height: '350px' ,float:'left'}"></div>
    </div>
   
</template>

<script>
    export default {
        name: "Pc2FbEcharts",
        data() {
            return {};
        },

        mounted() {
            this.drawLine();
            this.drawLine2();
        },

        methods: {
            drawLine() {
                this.$postRequest('/role/carStatus').then(res => {
                 console.log(this.roleName.data)
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
                        data:['管理员','普通员工']
                    },
                    color: ['#6eb158', '#3f8cff'],
                    series: [
                        {
                            name: "占比情况",
                            type: "pie",
                            radius: "50%",
                            data: [ 
                                { value: 3, name: "管理员" },
                                { value: 10, name: "普通员工" },
                            ],
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
                let myChart = this.$echarts.init(document.getElementById("myChart2"));
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
                    },
                    yAxis: {},
                    series: [
                        {
                            type: 'bar',
                            name: '2015',
                            data: [89.3, 92.1, 94.4, 85.4]
                        },
                        {
                            type: 'bar',
                            name: '2016',
                            data: [95.8, 89.4, 91.2, 76.9]
                        },
                        {
                            type: 'bar',
                            name: '2017',
                            data: [97.7, 83.1, 92.5, 78.1]
                        }
                    ]
                });
            }
        },
    };
</script>