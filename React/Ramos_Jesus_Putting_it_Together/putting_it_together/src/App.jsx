import PersonCard from './components/PersonCard'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <PersonCard
        lastName={'Doe'}
        firstName={'Jane'}
        age={45}
        hairColor={'Black'}
      />
      <PersonCard
        lastName={'S mith'}
        firstName={'John'}
        age={88}
        hairColor={'Brown'}
      />
      <PersonCard
        lastName={'Fillmore'}
        firstName={'Millard'}
        age={50}
        hairColor={'Brown'}
      />
      <PersonCard
        lastName={'Smith'}
        firstName={'Maria'}
        age={62}
        hairColor={'Brown'}
      />
      <PersonCard
        lastName={'Ramos'}
        firstName={'Jesus'}
        age={25}
        hairColor={'Brown'}
      />
    </div>
  )
}

export default App
