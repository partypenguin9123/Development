import './App.css';
import { useState } from 'react';
import bakeryInfo from "./baked.json";

bakeryInfo.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

let copyInfo = JSON.parse(JSON.stringify(bakeryInfo));

function CC(props) {
  return(
    <div className="CC">
      <br></br>
      <h4>{props.item.name}</h4>
      <img src = {props.item.image}></img>
      <br></br>
      <p>{props.item.description}</p>
      <p>Price: ${props.item.price}</p>
      <p>Calories: {props.item.calories}</p>
      <button onClick={() => {props.upC(props.index); props.pushP(props.price + props.item.price)}}>Lemme add one</button> <button onClick={() => {if (props.c[props.index] >= 1) {props.pushP(props.price - props.item.price)}; props.downC(props.index)}}>Lemme remove one</button>
      <br></br>
    </div>
  )
}

function SS(props) {
  return (
    <div className="SS">
      <label>
        <input type="checkbox" checked={props.chex} onChange={props.changeChex}/>
        {"Calories"}
      </label>
    </div>
  )
}



function App() {
  const [l, pushL] = useState(bakeryInfo); // sort
  const [chex, pushChex] = useState(false);
  const changeChex = () => {
    let peach = JSON.parse(JSON.stringify(l));;
    pushChex(!chex);
    if (chex) {
      pushL(copyInfo);
    } else {
      peach.sort((a, b) => (a.calories < b.calories) ? 1 : -1)
      pushL(peach);
    }
  };

  const [p, pushP] = useState(0); // set price
  const [c, pushC] = useState({}); // set cart
  const upC = (i) => {
    let mario = c;
    mario[i] ? (
      mario[i] += 1
    ) : (
      mario[i] = 1
    )
    pushC({...mario});
  };
  const downC = (i) => {
    let luigi = c;
    if (luigi[i] > 1) {
      luigi[i] -= 1
      pushC({...luigi})
    } else if (luigi[i] === 1) {
      delete luigi[i];
    }
  };

  return (
    <div className="App">
      <h1>Welcome to my bakery!</h1>
      <h3>Enjoy exploring some of my favorite creations :)</h3>

      <div className="Cart">
        <br></br>
        <h2>Cart</h2>
        <br></br>
        {Object.keys(c).map((key) => (
          <>
          {c[key] + "x " + bakeryInfo[key].name}
          <br></br>
          </>
        ))}
        <h4>Total</h4>
        <>${Math.ceil(p * 100) / 100}</>
        <br></br>
        <br></br>
        <button onClick={() => {pushP(0); pushC({})}}>Clear Cart</button>
        <br></br>
        <br></br>
        <br></br>
      </div>


      <div className="pastry">
        <h3>Sort by</h3>
        <SS chex={chex} changeChex={changeChex}></SS>
      </div>


      <div className="bread">
        {l.map((item, index) => (
            <CC upC = {upC} downC = {downC} item = {item} index = {index} price = {p} c = {c} pushP = {pushP}></CC>
        ))}
      </div>
      <br></br>
    </div>
  );
}

export default App;
