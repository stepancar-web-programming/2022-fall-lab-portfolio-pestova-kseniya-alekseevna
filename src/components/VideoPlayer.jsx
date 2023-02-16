import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video';
import fireworks from '../resourses/fireworks.mp4';
import 'react-html5video/dist/styles.css';
import classes from '../styles/VideoPlayer.module.css'

export default function VideoPlayer() {
  return (
    <div className={classes.videoBox}>
        <Video>
            <source src={fireworks} type="video/webm"/>
        </Video>
    </div>
  )
}
