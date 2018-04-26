import Home from './components/Home'
import Featured from './components/Featured'
import Photo from './components/Photo'
import Error from './components/Error'

export default {
  '/': Home,
  '/featured': Featured,
  '/photo': Photo,
  '/bad': Error
}
