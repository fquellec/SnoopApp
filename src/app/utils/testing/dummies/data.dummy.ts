import { of } from 'rxjs';

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

export const dummyTopicsGraphData = [
    {
        name: 'Sport',
        value: 4200
    },
    {
        name: 'Science',
        value: 4000
    },
    {
        name: 'Entertainment',
        value: 3000
    },
    {
        name: 'Politic',
        value: 2800
    },
    {
        name: 'Health',
        value: 1000
    }
    ,
    {
        name: 'Economy',
        value: 800
    }
];

export const dummyGenderData = [
    {
        name: 'Men quoted',
        series: [
            {
                name: 2018,
                value: 620000
            },
            {
                name: 2019,
                value: 730000
            },
            {
                name: 2020,
                value: 894000
            }
        ]
    },

    {
        name: 'Women quoted',
        series: [
            {
                name: 2018,
                value: 250000
            },
            {
                name: 2019,
                value: 309000
            },
            {
                name: 2020,
                value: 311000
            }
        ]
    },
];
