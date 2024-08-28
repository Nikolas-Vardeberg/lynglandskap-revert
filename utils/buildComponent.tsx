import { Fastlink } from 'components/Fastlink'
import { Image } from 'components/Image'
import { List } from 'components/List'
import { MainHero } from 'components/MainHero'
import { Mediemodul } from 'components/Mediemodul'
import { Quote } from 'components/Quote'
import { Rows } from 'components/Rows'
import { Text } from 'components/Text'

const componentsMap = {
  MainHero,
  Quote,
  Fastlink,
  Mediemodul,
  Image,
  List,
  Rows,
  Text,
}

export const buildComponent = ({ _type, ...props }) => {
  if (!_type) {
    throw new Error('Object does not have a "_type" property')
  }

  const Component = componentsMap[_type]
  if (!Component) {
    throw new Error(`No component is registered for type:'${_type}`)
  }
  return <Component key={props._key} {...props} />
}
