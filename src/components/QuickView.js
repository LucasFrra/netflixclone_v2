import { Cancel } from '@material-ui/icons'
import React from 'react'
import './QuickView.scss'

function QuickView({bannerStyle, movie, popUp, popUpStatus}) {
  return (
    <div className= {`quickView ${popUpStatus && "open"}`}>
        <div className='quickView__banner' style={bannerStyle}>
            <div className='quickView__content'>
                <h3 className='quickView__title'>{movie?.title || movie?.name || movie?.original_title}</h3>
                <p>{movie?.overview}</p>
            </div>
            <button className='quickView__close' onClick={popUp}><Cancel /></button>
        </div>
    </div>
  )
}

export default QuickView