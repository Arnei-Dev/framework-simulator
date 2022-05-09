import '../scss/styles.scss'
import imageRiver from '../assets/jackery-power-01.jpg'
import imageNotebook from '../assets/jackery-power-02.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')


const elemImageRiver = new Image()
elemImageRiver.src = imageRiver

const elemImageNotebook = new Image()
elemImageNotebook.src = imageNotebook

/*
document.querySelector('#river')
.appendChild(elemImageRiver)

document.querySelector('#notebook')
.appendChild(elemImageNotebook)
*/