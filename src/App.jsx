import './App.css'
import Button from './components/Button/Button'
import JournalItem from './components/JournalItem/JournalItem'
import CardButton from './components/CardButton/CardButton'
import Header from './components/Header/Header'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'

function App() {
  const data = [
    {
      title: 'Title 1',
      text: 'Lorem ipsum and other characters',
      date: new Date(),
    },
    {
      title: 'Title 2',
      text: 'Lorem ipsum and other characters',
      date: new Date(),
    },
  ]

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalList>
          <JournalAddButton />
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>

          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        Body
        {/* <h1>Header</h1>
        <p>Some text</p>
        <Button /> */}
      </Body>
    </div>
  )
}

export default App
