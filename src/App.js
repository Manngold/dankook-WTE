import React, { Component } from 'react';
import './App.css';
import FoodType from './foodtype';

const type = [
  "한식",
  "양식",
  "중식",
  "일식",
  "학식"
];
const foodTypeImg = [
  "http://images.cj.net/images/cjBrand/hetbahn/hetbahn_info1.png",
  "https://post-phinf.pstatic.net/MjAxNzA5MThfMTE3/MDAxNTA1NzE0ODA3NDk1.ObyvRiuC0baY1PRKTuuuJCX5XBysJGz72g8I6BoKHGog.dFm3aEhsjm2OvPPQOWs0eM7NLJO2rr1S4bfG_CI9PoQg.JPEG/6.jpg?type=w1200",
  "https://steemitimages.com/DQmSsnHvboGg1BxTSRvhwv5k6BZ8BeqrsyCht7N5sKQV23u/IMG_0043.JPG",
  "http://image.ytn.co.kr/general/jpg/2016/0725/201607250512448875_t.jpg",
  "http://dknews.dankook.ac.kr/news/photo/201504/13188_92_5745.jpg"  
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="main-text">오늘 뭐 먹지?</h1>
        <FoodType typeText={type[0]} typeImg={foodTypeImg[0]} />
        <FoodType typeText={type[1]} typeImg={foodTypeImg[1]} />
        <FoodType typeText={type[2]} typeImg={foodTypeImg[2]} />
        <FoodType typeText={type[3]} typeImg={foodTypeImg[3]} />
        <FoodType typeText={type[4]} typeImg={foodTypeImg[4]} />
      </div>
    );
  }
}

export default App;
