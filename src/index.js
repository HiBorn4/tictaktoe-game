import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";

function Card (props) {
    return ( <div>
        <h2>{props.name}</h2>
		<img src = {props.src} alt = {props.alt}/>
		<p>{props.tel}</p>
		<p>{props.mail}</p>
    </div>);
}

ReactDOM.render(<div>
        <Card
        name = "Beyonce"
        src = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt = "Beyonce's Image"
        tel = "+123 456 789"
        mail = "b@beyonce.com"/>
        <Card
        name = "Jack Bauer"
        src = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        alt = "Jack Bauer's Image"
        tel = "+987 654 321"
        mail = "jack@nowhere.com"/>
        <Card
        name = "Chuck Norris"
        src = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        alt = "Chuck Norris's Image"
        tel = "+918 372 574"
        mail = "gmail@chucknorris.com"/>
</div>, document.getElementById("root"));