import { Newspaper } from './../../../core/models/newspaper.model';
import { of, throwError } from 'rxjs';
import { Analysis } from 'src/app/core/models/analysis.model';

// Dummy trends
export const dummyTrends = [
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
];

export const dummyTrends2 = [
    { Framework: 'Salut', Stars: '116443', Released: '2012' },
    { Framework: 'Ca', Stars: '50793', Released: '2013' },
    { Framework: 'Va', Stars: '62342', Released: '2019' },
    { Framework: 'Sale', Stars: '37647', Released: '2010' },
    { Framework: 'Pute', Stars: '1471', Released: '2011' },
];
export const dummyTrendsResponse = of(dummyTrends);

export const dummyAnalyses = [
    new Analysis('Topics', ' 47% Health', [dummyTrends]),
    new Analysis('NA', 'top', []),
    new Analysis('Gender tracker', '78% men', [dummyTrends]),
    new Analysis('Sentiment', '65% Positive', [dummyTrends]),
    new Analysis('NA', 'info bottom', []),
    new Analysis('Keywords', '"pute"', [dummyTrends]),
    new Analysis('Sources', '147 sources', [dummyTrends]),
    new Analysis('Diversity', '0.58% information', [dummyTrends]),
];

export const dummyNewspaper = (newspaperName: string) => new Newspaper(newspaperName, '13290 articles', dummyAnalyses);

export const dummyNewspaperResponse = (newspaperName: string) => of(dummyNewspaper(newspaperName));

export const dummyErrorResponse = throwError(new Error());
