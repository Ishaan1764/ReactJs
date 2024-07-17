
import './App.css'
import'./components/Card'
import Card from './components/Card'
function App() {
  const obj={
    name:'allu',
    age:88
  }
  const cname="sallu";
  return (
    <>
      <h1 className='text-red-200 bg-green-500 rounded-xl mb-5'>Tailwind Test</h1>
      {/* <Card channel="ma channel hu" simpleObj={obj}/>\ */}
      <Card channel={cname} btnText="babay"/>

    </>
  )
}

export default App
