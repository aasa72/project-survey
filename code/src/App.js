import React, { useState } from 'react'
import './app.css'

export const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [exercise, setExercise] = useState('');
  const [newsletter, setNewsletter] = useState('')
  const [showSummary, setShowSummary] = useState (false);

  const ageGroups = ["19-35", "36-50", "51-65"];

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className="surveyPage">
      {!showSummary &&
      <form onSubmit = {handleSubmit}>
        <h1>We want to know how active you are!</h1>
        <label>
          <p>What is your name?</p>
          <input
          type = "text"
          onChange = {(event) => setName (event.target.value)}
          value = {name}
          />
        </label>
      
        <p>How old are you?</p>
        {ageGroups.map (group => (
        <label key = {group}> 
          <input 
            type = "radio"
            value = {group}
            onChange = {(event) => setAge(event.target.value)}
            checked = {age === group}
          />
          {group}
        </label>
      ))}

        <label>
          <p>How often do you exercise?</p>
          <select
            onChange = {(event) => setExercise (event.target.value)}
            value = {exercise}>
              <option value=""></option>
              <option value="daily">Daily</option>
              <option value="5-6">5-6 days a week</option>
              <option value="3-4">3-4 days a week</option>
              <option value="1-2">1-2 days a week</option>
              <option value="none">I don`t exercise!</option>
          </select>
        </label>

        <label>
          <p>Sign up for a motivating newsletter</p>
          <input
            type = "checkbox"
            onChange = {(event) => setNewsletter (event.target.value)}
            value = {newsletter}
          />
        </label>
        <br/>

        <button type="submit">Submit</button>
      </form>}

      {showSummary && 
      <section>
        <h1>Hey {name}! </h1>
        <p>You exercise {exercise} times a week.</p>
      </section>}
    </div> 
  )
}
