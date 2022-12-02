const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const h1 = <p id='hi'>Hi, this is a mini webapp for good mood!</p>

const button = <button class='b' onClick = {()=>window.open('/', "_self")}>follow</button>

const content_box = (
    <div class='box'>
        {h1}
        {button}
    </div>
)

root.render(content_box);