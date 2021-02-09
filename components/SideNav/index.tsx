import { Div } from './sidenav.styles';

interface SideNavProps {
  showSideNav: Boolean
}
export default function SideNav({ showSideNav }: SideNavProps) {
  return <>
    <Div showSideNav={showSideNav}>
      < ul >
        <li>education one</li>
        <li>education two</li>
        <li>education three</li>
      </ul >
    </Div>
  </>
}