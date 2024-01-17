import './App.css'
import Button from './components/Button/Button'
import JournalItem from './components/JournalItem/JournalItem'

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
    <div>
      <h1>Header</h1>
      <p>Some text</p>

      <Button />
      <JournalItem
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
      <JournalItem
        title={data[1].title}
        text={data[1].text}
        date={data[1].date}
      />
    </div>
  )
}

export default App
