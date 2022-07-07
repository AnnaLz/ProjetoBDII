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
    var dataT = [
      ['dance pop', 423],
      ['pop', 407],
      ['hip hop', 392],
      ['edm', 385],
      ['classical performance', 373],
      ['electro house', 369],
      ['rap', 365],
      ['pop rap', 357],
      ['latin', 342],
      ['rock', 327],
      ['pop dance', 294],
      ['urban contemporary', 271],
      ['trap', 266],
      ['r&b', 259],
      ['progressive house', 257],
      ['electropop', 256],
      ['filmi', 252],
      ['country rock', 252],
      ['gangster rap', 249],
      ['electronica', 239],
      ['pop rock', 237],
      ['southern hip hop', 236],
      ['modern rock', 234],
      ['adult standards', 227],
      ['underground hip hop', 224],
      ['mellow gold', 223],
      ['tropical house', 223],
      ['folk rock', 219],
      ['soft rock', 217],
      ['house', 216],
      ['progressive trance', 213],
      ['alternative hip hop', 212],
      ['art pop', 208],
      ['classical', 206],
      ['alternative rock', 205],
      ['opera', 205],
      ['uplifting trance', 205],
      ['indie soul', 203],
      ['latin pop', 199],
      ['classical soprano', 198],
      ['new wave pop', 197],
      ['deep house', 197],
      ['pop edm', 196],
      ['alternative r&b', 196],
      ['indie rock', 194],
      ['classic rock', 194],
      ['trance', 194],
      ['quiet storm', 193],
      ['neo soul', 192],
      ['orchestral performance', 191],
      ['funk', 190],
      ['tech house', 189],
      ['soul', 188],
      ['roots rock', 188],
      ['jazz', 186],
      ['reggaeton', 182],
      ['modern bollywood', 180],
      ['desi pop', 179],
      ['hardcore hip hop', 178],
      ['folk', 177]
    ]

    this.options = {
      series: [{
          type: 'wordcloud',
          data: dataSource,
          name: 'Occurrences'
      }],
      title: {text: 'Gêneros mais comuns'},
      credits: {enabled: false},
      exporting: {allowHTML: false, enabled: false},
    };

    // this.grafico.redraw();
}

}
