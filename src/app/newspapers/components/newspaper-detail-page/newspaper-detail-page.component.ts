import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Analysis } from './../../../core/models/analysis.model';
import { NewspaperService } from './../../services/newspaper.service';
import { Newspaper } from './../../../core/models/newspaper.model';
import { newspaperDetailAnimations } from './../../animations/newspaper-detail-page.animation';

@Component({
    selector: 'ana-newspaper-detail-page',
    templateUrl: './newspaper-detail-page.component.html',
    styleUrls: ['./newspaper-detail-page.component.scss'],
    animations: newspaperDetailAnimations
})
export class NewspaperDetailPageComponent implements OnInit {

    public loading = true;
    public newspaper!: Newspaper;
    public newspaperName = '';
    public info: Analysis[] = [];
    public fullDashboard = true;
    public displayAnalysis = false;
    public displayedAnalysis?: Analysis;

    constructor(
        private activatedRoute: ActivatedRoute,
        private newspaperService: NewspaperService,
        private loaderService: NgxSpinnerService
    ) { }

    public ngOnInit(): void {
        this.loaderService.show();
        this.activatedRoute.params.pipe(switchMap(params => {
            this.newspaperName = params.id;
            return this.newspaperService.getNewsPaperAnalysis(this.newspaperName);
        })).subscribe({
            next: newspaper => {
                this.loading = false;
                this.loaderService.hide();
                this.newspaper = newspaper;
                this.info = newspaper?.analyses;
            }
        });
    }

    public openAnalysis(index: number): void {
        this.displayedAnalysis = this.newspaper.analyses[index];
        this.displayAnalysis = true;
    }

    public closeAnalysis(): void {
        this.displayedAnalysis = undefined;
        this.fullDashboard = true;
    }

    public onAnalysisAnimationDone(event: any): void {
        if (this.displayedAnalysis === undefined) {
            this.fullDashboard = true;
            this.displayAnalysis = false;
        }

        else {
            this.fullDashboard = false;
        }
    }

    public onDashboardAnimationDone(event: any): void {
        if (!this.fullDashboard) {
            this.displayAnalysis = true;
        }
    }

}
