import { Div } from './sidenav.styles';
import { Link } from 'react-scroll';
import { getShortString } from "../../utilities";
interface SideNavProps {
  showSideNav: Boolean
  educationalExperiences: any[],
  elementsRef: any,
}
export default function SideNav({ showSideNav, educationalExperiences, elementsRef }: SideNavProps) {
  return <>
    <Div showSideNav={showSideNav}>
      {educationalExperiences && educationalExperiences.length > 0 &&
        educationalExperiences.map((education, index) => (
          <Link to={education.schoolName} key={education.schoolName}>{getShortString(
            {
              title: education.schoolName,
              length: 20
            })
          }
          </Link>)
        )}
    </Div>
  </>
}