const jsxApp ={
    title: "Indecison App",
    subTitle: "Put your life in hands of a Computer",
    options: []
};

const onFormSubmit = (e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        jsxApp.options.push(option);
        e.target.elements.option.value = "";
        renderTemplate();
    }
};

const onRemoveAll = ()=>{
    jsxApp.options = [];
    renderTemplate();
};

const onMakeDecision = ()=> {
  const randomNum = Math.floor(Math.random()*jsxApp.options.length);
  const option = jsxApp.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = ()=>{
    const template = (
        <div>
            <h1>{jsxApp.title}</h1>
            {jsxApp.subTitle && <p>{jsxApp.subTitle}</p>}
            <p> {jsxApp.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button onClick={onMakeDecision} disabled={jsxApp.options.length===0}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ul>
                {
                    jsxApp.options.map(
                        (option)=> {
                            return <li key={option}>{option}</li>
                        }
                    )
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>

    );
    ReactDOM.render(template,appRoot);
} ;

renderTemplate();

