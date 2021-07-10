import { Link } from '~/models/link'

export interface Author {
  name: string
  title: string
  about: string
  image: string
  links: Array<Link> | Array<string>
}
