import { newspaperDetailAnimations } from './../../animations/newspaper-dashboard.animation';
import { NewspaperService } from './../../services/newspaper.service';
import { Newspaper } from './../../../core/models/newspaper.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'ana-newspaper-detail-page',
    templateUrl: './newspaper-detail-page.component.html',
    styleUrls: ['./newspaper-detail-page.component.scss'],
    animations: newspaperDetailAnimations
})
export class NewspaperDetailPageComponent implements OnInit {

    public newspaper?: Newspaper = undefined;
    public newspaperName = '';
    public analysis?: any;
    public displayDashboard = true;
    public displayAnalysis = false;
    public info = [];

    constructor(private activatedRoute: ActivatedRoute, private newspaperService: NewspaperService) { }

    public ngOnInit(): void {
        this.activatedRoute.params
            .pipe(switchMap(params => {
                this.newspaperName = params.id;
                return this.newspaperService.getNewsPaperAnalysis(this.newspaperName);
            }))
            .subscribe({
                next: info => {
                    this.info = info;
                }
            });
    }

    public openAnalysis(index: number): void {
        this.analysis = index;
        this.displayDashboard = false;
    }

    public closeAnalysis(): void {
        this.analysis = undefined;
        this.displayAnalysis = false;
    }

    public onAnalysisAnimationDone(): void {
        if (!this.displayAnalysis) {
            this.displayDashboard = true;
        }
    }

    public onDashboardAnimationDone(): void {
        if (!this.displayDashboard) {
            this.displayAnalysis = true;
        }
    }

}
