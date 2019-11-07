const $container = document.getElementById('container');
const $summonerName = document.getElementById('txt_summonerName');
const $btnSearchSummonerName = document.getElementById('btn_searchSummoner');
const $imgChampionIcon = document.getElementById('img_championIcon');
const $imgSummonerRankIcon = document.getElementById('img_summonerRankIcon');

const apiKey = 'RGAPI-63cd9c47-9e82-4fc2-abac-73eb479d48da';

const summonerData = async (summonerName) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`;

    return await fetch(proxy + url)
            .then(res => res.json());
}

const summonerRank = async (summonerId) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    const url = `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${apiKey}`;

    return await fetch(proxy + url)
            .then(res => res.json());
}

const summonerMastery = async (summonerId) => {
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    const url = `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${apiKey}`;

    return await fetch(proxy + url)
            .then(res => res.json());
}

const championsData = async () => {
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    const url = `http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json`;

    return await fetch(proxy + url)
            .then(res => res.json());
}

$btnSearchSummonerName.addEventListener('click', () => {
    summonerData($summonerName.value).then(summonerData => {
        summonerRank(summonerData.id).then(summonerRank => {
            summonerMastery(summonerData.id).then(summonerMastery => {
                championsData().then(championsData => {

                    const championName = Object.keys(championsData.data).filter( (championName, i) =>
                    championsData.data[championName].key == summonerMastery[0].championId);
    
                    const championIcon = `http://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${championName}.png`;

                    $imgChampionIcon.src = championIcon;

                    summonerRank = summonerRank.filter(gameMode => gameMode.queueType == 'RANKED_SOLO_5x5');

                    if ('tier')
                        $imgSummonerRankIcon.src = `./img/${summonerRank[0].tier.toLowerCase()}.png`;
                    else 
                        $imgSummonerRankIcon.src = '';

                })
            })
        })
    });
});



    
