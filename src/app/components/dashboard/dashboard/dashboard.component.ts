import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  chartOptions: any;
  data: any;
  data1: any;
  basicData: any;
  multiAxisData: any;
  multiAxisOptions: any;
  lineStylesData: any;
  basicOptions: any;
  items: MegaMenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Videos', icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'Video 1',
              items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
            },
            {
              label: 'Video 2',
              items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
            }
          ],
          [
            {
              label: 'Video 3',
              items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
            },
            {
              label: 'Video 4',
              items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
            }
          ]
        ]
      },
      {
        label: 'Users', icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'User 1',
              items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
            },
            {
              label: 'User 2',
              items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
            },
          ],
          [
            {
              label: 'User 3',
              items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
            },
            {
              label: 'User 4',
              items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
            }
          ],
          [
            {
              label: 'User 5',
              items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
            },
            {
              label: 'User 6',
              items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
            }
          ]
        ]
      },
      {
        label: 'Events', icon: 'pi pi-fw pi-calendar',
        items: [
          [
            {
              label: 'Event 1',
              items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
            },
            {
              label: 'Event 2',
              items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
            }
          ],
          [
            {
              label: 'Event 3',
              items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
            },
            {
              label: 'Event 4',
              items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
            }
          ]
        ]
      },
      {
          label: 'Settings', icon: 'pi pi-fw pi-cog',
          items: [
              [
                  {
                      label: 'Setting 1',
                      items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                  },
                  {
                      label: 'Setting 2',
                      items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                  },
                  {
                      label: 'Setting 3',
                      items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                  }
              ],
              [
                  {
                      label: 'Technology 4',
                      items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                  }
              ]
          ]
      }
    ]
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
    };

    this.multiAxisData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            fill: false,
            borderColor: '#42A5F5',
            yAxisID: 'y',
            tension: .4,
            data: [65, 59, 80, 81, 56, 55, 10]
        }, {
            label: 'Dataset 2',
            fill: false,
            borderColor: '#00bb7e',
            yAxisID: 'y1',
            tension: .4,
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    };

    this.multiAxisOptions = {
        stacked: false,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    color: '#495057'
                },
                grid: {
                    drawOnChartArea: false,
                    color: '#ebedef'
                }
            }
        }
    };

    this.lineStylesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                tension: .4,
                borderColor: '#42A5F5'
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderDash: [5, 5],
                tension: .4,
                borderColor: '#66BB6A'
            },
            {
                label: 'Third Dataset',
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: '#FFA726',
                tension: .4,
                backgroundColor: 'rgba(255,167,38,0.2)'
            }
        ]
    };
    this.data1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          type: 'line',
          label: 'Dataset 1',
          borderColor: '#42A5F5',
          borderWidth: 2,
          fill: false,
          data: [
              50,
              25,
              12,
              48,
              56,
              76,
              42
          ]
      }, {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#66BB6A',
          data: [
              21,
              84,
              24,
              75,
              37,
              65,
              34
          ],
          borderColor: 'white',
          borderWidth: 2
      }, {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: '#FFA726',
          data: [
              41,
              52,
              24,
              74,
              23,
              21,
              32
          ]
      }]
    };

    this.chartOptions =  {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
    }
    this.data = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ]
        }
      ]
    };
  }

    // getLightTheme() {
    //     return {
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     color: '#495057'
    //                 }
    //             }
    //         }
    //     }
    // }

    // getDarkTheme() {
    //     return {
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     color: '#ebedef'
    //                 }
    //             }
    //         }
    //     }
    // }
}
