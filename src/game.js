import { EventEmitter } from 'events'
import animation from './animation'

const game = new EventEmitter()

export default game

// 监听ready事件， 更新新bird和land
game.on('ready', () => {
  animation.timer = setInterval(animation.update('bird', 'land'), animation.intertime)
  setTimeout(() => animation.emit('stop'), 5000)
})

//  监听start事件，更新所有动画
game.on('start', () => {
  animation.timer = setInterval(animation.update('all'), animation.intertime)
  setTimeout(() => animation.emit('stop'), 5000)
})
