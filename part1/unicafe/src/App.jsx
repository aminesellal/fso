import { useState } from 'react'

// composant bouton réutilisable
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

// composant qui affiche une seule statistique
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

// composant pour afficher toutes les statistiques
const Statistics = (props) => {
  if (props.all > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.calcaverage()} />
        <StatisticLine text="positive" value={props.calcpos() + " %"} />
      </div>
    )
  }

  return <p>No feedback given</p>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad

  const calcaverage = () => {
    let average
    if (all > 0) {
      average = (good * 1 + neutral * 0 + bad * -1) / all
    } else {
      average = 0
    }
    return average
  }

  const calcpos = () => {
    let positive
    if (all > 0) {
      positive = (good / all) * 100
    } else {
      positive = 0
    }
    return positive
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        calcaverage={calcaverage}
        calcpos={calcpos}
      />
    </div>
  )
}

export default App
