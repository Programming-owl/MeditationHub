
//home_page

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const e = React.createElement;

let img = [`static/back/morning_wald.jpg?${new Date()}`, `static/back/rain.jpg?${new Date()}`, `static/back/sea.jpg?${new Date()}`];
let names = ['Утренний лес', 'Звуки дождя', 'Морской прилив'];
let urls = ['/#morning_wald', '/#rain', '/#sea'];

let w = {'#morning_wald':"morning_wald", '#rain':"rain", '#sea':'sea'};
let music = {'morning_wald':"https://drivemusic.me//dl/yjwtdD1aNJGJxaGV1kU58w/1669063075/download_music/2015/10/bez-imeni-les.mp3",
            'rain':"https://drivemusic.me/dl/wRmDwAxDb18fjBVAaigdcA/1669101477/download_music/2016/02/bez-imeni-dozhd-v-lesu.mp3",
            'sea':"https://drivemusic.me/dl/vn0gk_4LiwXwa8_DtivcYw/1669224183/download_music/2015/10/bez-imeni-pribojj.mp3"
}

let blocks = [];

for (var i = 0; i < img.length; i++){

    let url = urls[i];

    let block = (
        <div class='block' onClick = {() => window.open(url, '_self')}>
            <img class='img' src={img[i]}/>
            <p id='name'>{names[i]}</p>
        </div>
    );

    console.log(i);

    blocks.push(block);
}

let box = (
    <div class='box'>
        {blocks}
    </div>
)

root.render(box);
//end

let audio = new Audio();

//musik_page
function make_page(name){
    document.body.style.background = `url('static/back/${name}.jpg?${new Date()}')` + ' no-repeat center center fixed';
    document.body.style.backgroundSize = 'cover';
    
    let button = <button id='homepage_button' onClick={() => window.open('/', "_self")}><img src='static/home.png' id='home_icon'/></button>
    audio = new Audio(music[name]);
    audio.loop = true;
    audio.play();

    return [button];

}

function return_homepage(){
    audio.pause();
    console.log('home');
    document.body.style.background = '#0d1117';
    root.render(box);
}

window.addEventListener('hashchange', function(){
    let hash = this.location.hash;

    if (hash.length == 0){
        return_homepage();

        return;
    }

    root.render(make_page(w[hash]));

});

window.onload = function(){
    let hash = this.location.hash;

    if (hash.length == 0){
        return_homepage();

        return;
    }

    root.render(make_page(w[hash]));
}

//end