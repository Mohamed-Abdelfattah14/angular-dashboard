import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as Highcharts from 'highcharts';

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  bigChartOptions: {} = {};
  smallChartOptions: {} = {};
  pieOptions = {};
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit() {
    this.bigLineChart();
    this.smallChart();
    this.pieChart();
    this.dataSource.paginator = this.paginator;
  }

  bigLineChart() {
    this.bigChartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region',
      },
      subtitle: {
        text: 'Source: Wikipedia.org',
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: 'Billions',
        },
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268],
        },
        {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766],
        },
        {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628],
        },
        {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201],
        },
        {
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46],
        },
      ],
    };
  }

  smallChart() {
    this.smallChartOptions = {
      chart: {
        type: 'area',
      },
      accessibility: {
        description:
          'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.',
      },
      title: {
        text: null,
      },
      xAxis: {
        allowDecimals: false,
        accessibility: {
          rangeDescription: 'Range: 1940 to 2017.',
        },
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      tooltip: {
        pointFormat:
          '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: 'USA',
          data: [
            null,
            null,
            null,
            null,
            null,
            24126,
            27387,
            29459,
            31056,
            31982,
            32040,
            31233,
            29224,
            27342,
            26662,
            26956,
            27912,
            28999,
            28965,
            27826,
            25579,
            25722,
            24826,
            24605,
            24304,
            23464,
            23708,
            24099,
            24357,
            24237,
            24401,
            24344,
            23586,
            22380,
            21004,
            17287,
            14747,
            13076,
            12555,
            12144,
            11009,
            10950,
            10871,
            10824,
            10577,
            10527,
            10475,
            10421,
          ],
        },
        {
          name: 'USSR/Russia',
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            2471,
            3322,
            4238,
            5221,
            6129,
            7089,
            8339,
            9399,
            10538,
            11643,
            13092,
            14478,
            15915,
            17385,
            19055,
            21205,
            23044,
            25393,
            27935,
            30062,
            32049,
            33952,
            35804,
            37431,
            39197,
            45000,
            43000,
            41000,
            39000,
            37000,
            35000,
            33000,
            31000,
            29000,
            27000,
            25000,
            24000,
            23000,
            22000,
            21000,
            20000,
            19000,
            18000,
          ],
        },
      ],
    };
  }

  pieChart() {
    this.pieOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: null,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true,
            },
            {
              name: 'Internet Explorer',
              y: 11.84,
            },
            {
              name: 'Firefox',
              y: 10.85,
            },
            {
              name: 'Edge',
              y: 4.67,
            },
            {
              name: 'Safari',
              y: 4.18,
            },
            {
              name: 'Sogou Explorer',
              y: 1.64,
            },
            {
              name: 'Opera',
              y: 1.6,
            },
            {
              name: 'QQ',
              y: 1.2,
            },
            {
              name: 'Other',
              y: 2.61,
            },
          ],
        },
      ],
    };
  }
}
