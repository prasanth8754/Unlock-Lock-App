import {useState} from 'react'

import {BgCont, Img, Para, Btn} from './styledComponents'

const Unlock = () => {
  const [locked, setLock] = useState(true)

  const onChangeLockStatus = () => {
    setLock(prevState => !prevState)
  }

  const imgSrc = locked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  return (
    <BgCont>
      <Img src={imgSrc} alt={locked ? 'lock' : 'unlock'} />
      <Para>
        {locked ? 'Your Device is Locked' : 'Your Device is Unlocked'}
      </Para>
      <Btn type="button" onClick={onChangeLockStatus}>
        {locked ? 'Unlock' : 'Lock'}
      </Btn>
    </BgCont>
  )
}

export default Unlock
