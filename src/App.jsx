import { useLayoutEffect, useState } from 'react'
import { Header } from './Components/Header'

function App() {

  const Items = [
    {
      ItemName: "Sugar",
      Price: 2,
      stillAvailable: true
    },
    {
      ItemName: "Milk",
      Price: 6,
      stillAvailable: false
    },
    {
      ItemName: "Bread",
      Price: 3,
      stillAvailable: true
    },
    {
      ItemName: "Fruit Juice",
      Price: 9,
      stillAvailable: false
    },
    {
      ItemName: "Watermelon",
      Price: 2.99,
      stillAvailable: false
    },
    {
      ItemName: "Broccoli",
      Price: 10,
      stillAvailable: true
    },
  ]
  const [radiusTop, setRadiusTop] = useState("")
  const [radiusBot, setRadiusBot] = useState("")
  const [heightAndWidth, setHeightAndWidth] = useState("")
  const [inpColor, setInpColor] = useState("")
  const handleColor = (e) =>{
    setInpColor(e.target.value)
  }
  
  useLayoutEffect(() => {
    const calculate = Math.floor(Math.random() * (100 - 50 + 1)) + 50
    const calculateTop = Math.floor(Math.random() * (100 - 10 + 1)) + 10
    const calculateBot = Math.floor(Math.random() * (100 - 20 + 1)) + 5
    setHeightAndWidth(calculate)
    setRadiusTop(calculateTop)
    setRadiusBot(calculateBot)
  }, [inpColor])

  const [searchTerm, setSearchTerm] = useState("")
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const [under_5_checked, setUnder_5_checked] = useState(false)
  const Under_5 = (e) => {
    setUnder_5_checked(e.target.checked)
  }

  const [beyond_5_checked, setBeyond_5_checked] = useState(false)
  const Beyond_5 = (e) => {
    setBeyond_5_checked(e.target.checked)
  }

  const Price_Under_5 = Items.filter(el => {
    return el.Price < 5
  })

  const Price_Beyond_5 = Items.filter(el => {
    return el.Price > 5
  })
  const Search = Items.filter(el => {
    return el.ItemName.toLowerCase().includes(searchTerm.toLowerCase())
  })
  

  return (
    <>
      <Header />
      <hr />
      <h1>Grocery Store</h1>
      <div className='wraper'>
      <div>
        <div className='Filters'>
          <div>
            <label htmlFor="search">Filter your search :</label> <br />
            <input value={searchTerm} onChange={handleSearch} type="text" id="search" placeholder='Search' />
          </div>
          <div>
            <label htmlFor="Under_5">Price <span style={{fontSize: '1.3rem'}}>‹</span> $5</label> <br />
            <input checked={under_5_checked} onChange={Under_5} type="checkbox" id="Under_5" />
          </div>
          <div>
            <label htmlFor="Under_5">Price <span style={{fontSize: '1.3rem'}}>›</span> $5</label> <br />
            <input checked={beyond_5_checked} onChange={Beyond_5} type="checkbox" id="Beyond_5" />
          </div>
        </div>
        <table className='Items'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

              { searchTerm ? (
                Search.length > 0 ?  
                Search.map(el => (
                  <tr key={el.Price}>
                    <td>{el.ItemName}</td>
                    <td>${el.Price}</td>
                  </tr>
                )) : <tr><td colSpan={2}>No Results</td></tr>
              ) :
              beyond_5_checked ?
              Price_Beyond_5.map(el => (
                <tr key={el.Price}>
                  <td>{el.ItemName}</td>
                  <td>${el.Price}</td>
                </tr>))
              :
              under_5_checked ?
              Price_Under_5.map(el => (
                <tr key={el.Price}>
                  <td>{el.ItemName}</td>
                  <td>${el.Price}</td>
                </tr>)) :
                Items.map(el => (
                  <tr key={el.Price}>
                    <td> {el.ItemName} </td>
                    <td> ${el.Price} </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
        <div className='play'>
          <label htmlFor="colorPicker">Discover what a colour looks like :</label>
          <input onChange={handleColor} type="text" placeholder='Grey' id="colorPicker" />
          <div style={{backgroundColor: `${inpColor}` || "grey",
                      height: `${heightAndWidth}px`,
                      width: `${heightAndWidth}px`,
                      borderTopRightRadius: `${radiusTop}px`,
                      borderBottomLeftRadius: `${radiusBot}px`
                    }} id='square'></div>
        </div>
      </div>
      <div>
        <h3 style={{textAlign: "center", fontFamily: "monospace"}}>2024 | Made by RID Tech with <span style={{color: "red"}}>&hearts;</span> </h3>
      </div>
    </>
  )
}

export default App
