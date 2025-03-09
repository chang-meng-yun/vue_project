<template>
    <div id="myChart" :style="{ width: '800px', height: '500px' }"></div>
  </template>
   
  <script>
  export default {
    name: "Pc2FbEcharts",
   
    data() {
      return {};
    },
   
    mounted() {
      this.drawLine();
    },
   
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("myChart"));
        // 绘制图表
        myChart.setOption({
          title: {
            text: "角色占比",
            left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            top: "10%",
            left: "center",
          },
          color: ['#6eb158', '#cdcdcd', '#3f8cff'],
          series: [
            {
              name: "占比情况",
              type: "pie",
              radius: "50%",
              data: [
                { value: 3, name: "系统管理员" },
                { value: 3, name: "经理" },
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
      },
    },
  };
  </script>
  