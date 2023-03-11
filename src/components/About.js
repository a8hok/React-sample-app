import React from 'react'

function About(props) {
  console.log('props',props)
  return (
    <div className='user-container'>
      {
        props.userData.length && props.userData.map((user) => <div>
          <img alt="" src={user.picture.thumbnail}/>
          <span>{user.name.title}</span>.<span>{user.name.first}</span><br></br>
        </div>)
      }
    </div>
  )
}

export default About