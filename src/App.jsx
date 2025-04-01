import { useState, useEffect, useReducer, useContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import "./components/Navbar";
import Navbar from './components/Navbar';
import Card from './components/Card';
import CardForm from './components/CardForm';
import Example from "./components/Example";
import { ProvaContext } from './stores/ProvaContext';

import { useSelector } from 'react-redux';

function handleClick() {
  alert("hola!");
}
function handleChange(e) {
  console.log(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}

// utilizzo useReducer
function formReducer(state, action){
  switch(action.type) {
    case "CHANGE_FIELD":
      return {...state,[action.field]: action.value}
      case "RESET_FORM":
      return {name: '', email: ''};
      default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);
  const [user, setUser] = useState({ name: "Marcus", age: 23 });
  const [data, setData] = useState([]);
  const [formData, dispatchFormData] = useReducer(formReducer, {name: '', email: ''});

  const cities = useSelector((state) => state.cities.value);

  const aggiungiItem = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem]);
    console.log(items);
  };
  const updateUserName = () => {
    const updatedUser = { ...user, name: "Lucas" };
    setUser(updatedUser);
  };

// utilizzo useReducer
  const handleFieldChange = (field, value) => {
    dispatchFormData({type: "CHANGE_FIELD", field, value});
  };
  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormData({type: "RESET_FORM"});
  };
  const sendForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

// prova di aggiunta json esterno
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((response)=> response.json())
  // .then((data) => {
  //     setData(data);
  //     console.log(data);
  // });

  // const [cities, setCities] = useState([
  //   {
  //     id: 0,
  //     name: "Lima",
  //     description: "lorem ipsum dolor causa, amet consectetur nova aris?",
  //     imgURL: "https://images.lonelyplanetitalia.it/static/places/lima-3437.jpg?q=90&p=2400%7C1350%7Cmax&s=3dc99d33fc99b4388f4cbe5dd0cc1441",
  //     isVisited: true,
  //   },
  //   {
  //     id: 1,
  //     name: "Varsavia",
  //     description: "Lorem ipsum dolor prova con children adipisicing elit. Veniam officiis eaque laboriosam modi!",
  //     imgURL: "https://images.unsplash.com/photo-1577133192629-5140c5371590?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     isVisited: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Londra",
  //     description: "lorem ipsum dolor fish & chips. Repellat at omen ipsum?",
  //     imgURL: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     isVisited: true,
  //   },
  // ]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };


  return (
    // <ProvaContext.Provider value={{ count, setCount }}>
    //   <Example cities={cities}></Example>
    //   <CardForm addCity={addCity}></CardForm>
    //   <div className="grid grid-cols-4 gap-5 p-5">
    //     {cities.map((city) => (
    //       <Card
    //         key={city.id}
    //         title={city.name}
    //         isVisited={city.isVisited}
    //         imgURL={city.imgURL}
    //         description={city.description}>
    //         {/* {city.description} */}
    //       </Card>
    //     ))}
    //   </div>

    <>
    <Example></Example>
    <CardForm></CardForm>
    <div className="grid grid-cols-4 gap-5 p-5">
      {cities.map((city) => (
        <Card
          key={city.id}
          title={city.name}
          isVisited={city.isVisited}
          imgURL={city.imgURL}
          description={city.description}>
          {/* {city.description} */}
        </Card>
      ))}
    </div>

{/* utilizzo useReducer */}
      <form>
        <div className='flex flex-col gap-3 p-10'>
          <div>
            <label htmlFor='name'>Nome:</label>
              <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}
              />
          </div>
          <div>
              <label htmlFor='email'>Email:</label>
              <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              />
          </div>
          <div className='p-5'>
            <button onClick={resetForm}>Resetta</button>
            <button onClick={sendForm}>Invia</button>
          </div>
        </div>

      </form>

      <div className="grid grid-cols-4 gap-5 p-5">
        {data.map((item) => (
          <div key={item.id} className='bg-green-500 rounded-lg p-5' >
            <p className='text-red-500 mb-1'>userId: {item.userId}</p>
            <h3 className='text-xl mb-3'>{item.title}</h3>
            <p className='text-black'>{item.body}</p>
          </div>
        ))}
      </div>

      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <CardForm addCity={addCity}></CardForm>
      </div>
      
      <div className='grid grid-cols-3 gap-x-10 gap-y-10'>
        <Card
          isVisited={true}
          title="Tokyo"
          imgURL="https://images.unsplash.com/photo-1738975927070-d5af82de67c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Lorem ipsum dolor sit, amet adipisicing elit. Excepturi, odio quia pariatur quod soluta optio!"
        ></Card>
        <Card
          isVisited={false}
          title="New York"
          imgURL="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, odio quia soluta optio!"
        ></Card>
        <Card
          isVisited={true}
          title="Roma"
          imgURL="https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Lorem ipsum dolor sit, amet amon adipisicing elit. Excepturi, odio quia pariatur quod soluta optio!"
        ></Card>

        {cities.map((city) => (
          <Card
          key={city.id}
          title={city.name}
          imgURL={city.imgURL}
          isVisited={city.isVisited}
          description={city.description}
          >
          {/* {city.description} */}
          </Card>
        ))}
      </div>

      <div className='flex justify-center p-5'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>

      <div className="card flex justify-evenly">
        <button className='bg-black' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>Alert</button>
        <input type="text"onChange={handleChange} />
        <form onSubmit={handleSubmit}>
          <button type='submit'>Invia</button>
        </form>
      </div>
    {/* </ProvaContext.Provider> */}
    </>
  )
}

export default App;
