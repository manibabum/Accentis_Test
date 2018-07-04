import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist/dist/chartist.component";
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from "@angular/router";
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { DashboardDataList } from 'app/shared/data/DashboardData';



declare var require: any;

const data: any = require('../../shared/data/chartist.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component {
    constructor(private router: Router,
        private route: ActivatedRoute, public translate: TranslateService) {

    }



    // Line Chart 1 Starts
    lineChart1: Chart = {
        type: 'Line', data: data['line1'],
        options: {
            axisX: {
                showGrid: false,
            },
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            fullWidth: true,
            chartPadding: { top: 0, right: 25, bottom: 0, left: 0 }
        },

    };
    // Line Chart 1 Ends
    // Stacked Bar chart configuration Starts
    Stackbarchart: Chart = {
        type: 'Bar',
        data: data['Stackbarchart'],
        options: {
            stackBars: true,
            fullWidth: true,
            axisX: {
                showGrid: false,
            },
            axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
            },
            chartPadding: 30
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'linear',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(0, 201, 255,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(17,228,183, 1)'
                });
            },
            draw(data: any): void {
                if (data.type === 'bar') {
                    data.element.attr({
                        style: 'stroke-width: 5px',
                        x1: data.x1 + 0.001
                    });

                }
                else if (data.type === 'label') {
                    data.element.attr({
                        y: 270
                    })
                }
            }
        },
    };
    // Stacked Bar chart configuration Ends

    // line chart configuration Starts
    WidgetlineChart: Chart = {
        type: 'Line', data: data['WidgetlineChart'],
        options: {
            axisX: {
                showGrid: true,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 40,
                showLabel: false,
                offset: 0,
            },
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            fullWidth: true,
        },
    };
    // Line chart configuration Ends



    //Initial filter descriptor
    public state: State = {
        skip: 0,
        take: 5,
        filter: {
            logic: 'or',
            filters: [{ field: 'Omschrijving', operator: 'contains', value: '' }]
        }
    };

    //fill kendo grid
    public gridData: GridDataResult = process(DashboardDataList, this.state);

    // fliter data 
    public dataStateChange(state: DataStateChangeEvent): void {

        this.state = state;
        this.gridData = process(DashboardDataList, this.state);
    }
}
