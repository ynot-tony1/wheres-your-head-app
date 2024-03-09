const axios = require('axios');
const dateFormatter = require('../utils/dateformatter');

exports.renderEmotionTrendsPage = (req, res, next) => {
    const userId = res.locals.user.id;
    const apiUrl = 'http://localhost:3002';

    prepareMostEnjoyableDay(userId)
        .then(mostEnjoyableDay => {
            res.locals.mostEnjoyableDay = mostEnjoyableDay;
            return prepareMostSurprisingDay(userId);
        })
        .then(mostSurprisingDay => {
            res.locals.mostSurprisingDay = mostSurprisingDay;
            return prepareMostSadDay(userId);
        })
        .then(mostSadDay => {
            res.locals.mostSadDay = mostSadDay;
            return axios.get(`${apiUrl}/stats/chart/${userId}`, { validateStatus: (status) => { return status < 500; } });
        })
        .then(response => {
            if (!response.data.data || response.data.data.length === 0) {
                res.render('stats', {
                    noDataMessage: 'Sorry, there is no data to show! Click "add" on the top right of the screen to add a snapshot',
                    dates: [],
                    emotionLevels: [],
                    mostEnjoyableDay: res.locals.mostEnjoyableDay,
                    mostSurprisingDay: res.locals.mostSurprisingDay,
                    mostSadDay: res.locals.mostSadDay,
                });
                return; 
            } 
            const emotionData = response.data.data.map(data => ({
                ...data,
                date: dateFormatter(data.date),
            }));
            res.render('stats', {
                dates: emotionData.map(data => data.date),
                emotionLevels: emotionData,
                mostEnjoyableDay: res.locals.mostEnjoyableDay,
                mostSurprisingDay: res.locals.mostSurprisingDay,
                mostSadDay: res.locals.mostSadDay,
            });
        })
        .catch(error => {
                console.error('Error:', error.message);
                next(error);
          
        });
};


function prepareMostEnjoyableDay(userId) {
    const API_BASE_URL = 'http://localhost:3002';
    return axios.get(`${API_BASE_URL}/stats/enjoyment/${userId}`, { validateStatus: (status) => { return status < 500; } })
        .then(response => {
            if (response.data && response.data.data) {
                const data = response.data.data;
                const mostEnjoyableDay = data.reduce((acc, day) => 
                    parseFloat(day.average_enjoyment) > parseFloat(acc.average_enjoyment) ? day : acc, data[0]);
                return mostEnjoyableDay;
            } else {
                return null;
            }
        });
}



function prepareMostSurprisingDay(userId) {
    const API_BASE_URL = 'http://localhost:3002';
    return axios.get(`${API_BASE_URL}/stats/surprise/${userId}`, { validateStatus: (status) => { return status < 500; } })
        .then(response => {
            if (response.data && response.data.data) {
                const data = response.data.data;
                const mostSurprisingDay = data.reduce((acc, day) => 
                    parseFloat(day.average_surprise) > parseFloat(acc.average_surprise) ? day : acc, data[0]);
                return mostSurprisingDay;
            } else {
                return null;
            }
        });
}


function prepareMostSadDay(userId) {
    const API_BASE_URL = 'http://localhost:3002';
    return axios.get(`${API_BASE_URL}/stats/sadness/${userId}`, { validateStatus: (status) => { return status < 500; } })
        .then(response => {
            if (response.data && response.data.data) {
                const data = response.data.data;
                const mostSadDay = data.reduce((acc, day) => 
                    parseFloat(day.average_sadness) > parseFloat(acc.average_sadness) ? day : acc, data[0]);
                return mostSadDay;
            } else {
                return null;
            }
        });
}

