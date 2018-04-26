import en from './en'
import fr from './fr'
import it from './it'
import pt from './pt'

const hls = {
  en, fr, it, pt
}

export default hls[window.localStorage.getItem('hl') || 'en'].messages
