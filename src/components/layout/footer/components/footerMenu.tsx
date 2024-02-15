import { FooterList } from '../styled'

export interface IFooterMenu {
  name: string
  url: string
}

interface IProps {
  title: string
  menu: IFooterMenu[]
}

const FooterMenu: React.FC<IProps> = ({ menu, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <FooterList>
        {menu.map((list, index) => (
          <a href={list.url} key={index}>
            <li>{list.name}</li>
          </a>
        ))}
      </FooterList>
    </div>
  )
}

export default FooterMenu
