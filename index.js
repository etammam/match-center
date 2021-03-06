const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express')

const Port = process.env.PORT || 3000;
const baseUrl = 'https://www.yallakora.com/Match-Center/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B1%D9%8A%D8%A7%D8%AA';


const app = express();
const matches = [];

async function getMatches(url) {
    matches.length = 0;
    await axios(url)
        .then(response => {
            const html = response.data;
            const content = cheerio.load(html);
            content('.matchItem', html).each(function () {

                const teamAGoalsArray = [];
                const teamBGoalsArray = [];

                const leagueName = content(this).find('div.ttl').find('a').find('img').attr('alt');
                const leagueLogo = content(this).find('div.ttl').find('a').find('img').attr('src');

                content(this).find('ul.mtchObjContainer').find('.matchObj')
                    .each(function (i, league) {
                        const teamAName = content(league).find('div.teamA').find('a.teamName').text().trim();
                        const teamAScore = content(league).find('div.resultDiv').find('div.matchResult').find('span.LiveTeamA').text();
                        content(league).find('div.teamA').find('div.matchScorer').find('div.goal').each(function (i, el) {
                            const player = content(el).find('a.player').text().trim();
                            const time = content(el).find('span.time').text().trim();
                            teamAGoalsArray.push({
                                player: player,
                                time: time
                            })
                        });
                        const teamALogoUrl = content(league).find('div.teamA').find('a').find('img').attr('src');

                        const teamBName = content(league).find('div.teamB').find('a.teamName').text().trim();
                        const teamBScore = content(league).find('div.resultDiv').find('div.matchResult').find('span.LiveTeamB').text();
                        content(league).find('div.teamB').find('div.matchScorer').find('div.goal').each(function (i, el) {
                            const player = content(el).find('a.player').text().trim();
                            const time = content(el).find('span.time').text().trim();
                            teamBGoalsArray.push({
                                player: player,
                                time: time
                            })
                        });
                        const teamBLogoUrl = content(league).find('div.teamB').find('a').find('img').attr('src');

                        const matchTime = content(league).find('div.resultDiv').find('div.matchTime').text().trim();
                        const week = content(league).find('div.week').text().trim();
                        const tvChannel = content(league).find('div.icon-tv').text().trim();
                        matches.push({
                            league: {
                                name: leagueName,
                                logoUrl: treatMediaLinks(leagueLogo)
                            },
                            host: {
                                name: teamAName,
                                logoUrl: treatMediaLinks(teamALogoUrl),
                                score: treatNoneScore(teamAScore),
                                goals: teamAGoalsArray
                            },
                            visitor: {
                                name: teamBName,
                                logoUrl: treatMediaLinks(teamBLogoUrl),
                                score: treatNoneScore(teamBScore),
                                goals: teamBGoalsArray
                            },
                            matchTime: matchTime,
                            week: week,
                            tvChannel: tvChannel
                        });
                    });
            });
        });
}

function healthCheck() {
    return 'hello Mario, your princess is in another castle';
}

function isGoodDate(dt) {
    const reGoodDate = /^(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2}$/;
    return reGoodDate.test(dt);
}

function treatNoneScore(scores) {
    if (scores === "-")
        return 0;
}

function treatMediaLinks(link){
    return link
        .replaceAll('/\\','/')
        .replaceAll('\\','/')
        .replaceAll('//','/')
        .replaceAll(':/','://').toLowerCase();
}

app.get("/health", (request, response) => {
    response.json(healthCheck());
});


app.get("/matches", async function (request, response) {
    const url = baseUrl;
    const date = request.query.date;
    if (date && date.length > 0) {
        if (isGoodDate(date)) {
            const newUrl = url + `?date=${date}`
            await getMatches(newUrl);
            response.json(matches);
        } else {
            response.status(400);
            response.json("invalid date format please make sure your date following MM/dd/YYYY");
        }

    } else {
        await getMatches(url);
        response.json(matches);
    }
});


app.listen(Port, () => console.log(`application run successfully on port ${Port}`));