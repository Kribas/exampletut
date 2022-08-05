import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

export default function ParentComponent() {

    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
      setAge(age + 1)
  },[age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])



  return (
    <div>
        <Title/>
        <Count text="Age" count = {age}/>
        <Button increment={incrementAge}>Increment Age</Button>
        <Count text="Salary" count = {salary}/>
        <Button increment={incrementSalary}>Increment Salary</Button>

    </div>
  )
}
