import { useState } from 'react'
import Countrymap from './comfonents/Countrymap'
import Heder from './comfonents/Heder';
import './App.css'

const App = () => {
  const [countrys, setcountrys] = useState([]);
  const [country, setcountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  //국가,메달 추가
  const addcontryhandler = (e) => {
    e.preventDefault();
    const newCountry = {
      id: new Date().getTime(),
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    const goldSorted = [...countrys, newCountry].sort(
      (a, b) => b.gold - a.gold
    );
    setcountrys(goldSorted);
  };


  //국가
  const changeCountryhandler = (e) => {
    setcountry(e.target.value)
  };
  //메달
  const goldCounter = (e) => {
    setGold(e.target.value)
  };
  const silverCounter = (e) => {
    setSilver(e.target.value)
  };
  const bronzeCounter = (e) => {
    setBronze(e.target.value)
  };
  //삭제
  const deleteCountryHendler = (id) => {
    const deletCountry = countrys.filter((country) => {
      return country.id !== id
    });
    setcountrys(deletCountry);
  };
  //업데이트
  const updatecontryhandler = (e) => {
    e.preventDefault();
    const newCountrys = countrys.map((item) => {
      if (item.country === country) {
        return { country, gold, silver, bronze };
      }
      else {
        return item;
      }
    });
    const goldSorted = newCountrys.sort((a, b) => b.gold - a.gold);
    setcountrys(goldSorted);
  }


  return (

    <div className='main-container'>
      <Heder />
      <form className='form-container' action="">
        <ul className='list-container'>
          <li className='list'>
            <h3>국가명</h3>
            <input type="text" placeholder='국가 입력' value={country} onChange={changeCountryhandler} />
          </li>

          <li className='list'>
            <h3>금메달</h3>
            <input type="number" value={gold} onChange={goldCounter} />
          </li>

          <li className='list'>
            <h3>은메달</h3>
            <input type="number" value={silver} onChange={silverCounter} />
          </li>

          <li className='list'>
            <h3>동메달</h3>
            <input type="number" value={bronze} onChange={bronzeCounter} />
          </li>
          <div className='btn'>
            <button type='button' onClick={addcontryhandler}>국가 추가</button>
            <button type='button' onClick={updatecontryhandler}>업데이트</button>
          </div>

        </ul>
      </form>
 
      <Countrymap 
      deleteCountryHendler={deleteCountryHendler} 
      countrys={countrys}
      />

    </div>
  );
};

export default App

//버튼 컴포넌트
const button = ({ children, onClick, color }) => {
  if (color) {
    return (<button style={{ backgroundColor: color, }} onClick={onClick}>
      {children}
    </button>
    );
  }
  return <button onClick={onClick}>{children}</button>
};