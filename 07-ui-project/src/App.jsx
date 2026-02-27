import React from 'react'
import Section1 from './assets/components/Section1/Section1'
import Section2 from './assets/components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661592899299-a69594743e5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D', 
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661693445273-0aefa6ae28b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8', 
      intro:'',
      tag:'Underbanked'
    }
    
  ]
  return (
    <div>
      <Section1 users={users}/>
      {/* <Section2/> */}
    </div>
  )
}

export default App
