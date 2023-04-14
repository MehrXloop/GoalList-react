import React from 'react'
import FirstGoal from './FirstGoal'
import SecondGoal from './SecondGoal'
import ThirdGoal from './ThirdGoal'
import './GoalList.css'
import FourthGoal from './FourthGoal'

function GoalList() {
  return (
    <div className='goalList'>
    <ul>
       <FirstGoal/>
       <SecondGoal/>
       <ThirdGoal/>
       <FourthGoal/>
    </ul>
    </div>
  )
}

export default GoalList