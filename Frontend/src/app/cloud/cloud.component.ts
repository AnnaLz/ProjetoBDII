import { Component, Input, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

const Wordcloud = require('highcharts/modules/wordcloud');
Wordcloud(Highcharts);

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {
  @Input() data;

  highcharts = Highcharts;
  chartOptions: any;
  public activity: any;
  public xData: any;
  public label: any;
  options:any;

  grafico: any;
  constructor() { }

  async ngOnInit() {
    await this.loadOptions(this.data);
  }

  ngAfterViewInit() {
    Highcharts.chart('container', this.options);
  }

  loadOptions(dataSource){
    this.options = {
      series: [{
          type: 'wordcloud',
          data: dataSource,
          name: 'Ocorrências'
      }],
      title: {text: 'Gêneros mais comuns'},
      credits: {enabled: true},
      exporting: {allowHTML: false, enabled: false},
    };
}

}
