import { Div } from './sidenav.styles';
import { getShortString } from "../../utilities";
interface SideNavProps {
  showSideNav: Boolean
  educationalExperiences: any[],
  elementsRef: any,
}
export default function SideNav({ showSideNav, educationalExperiences, elementsRef }: SideNavProps) {
  const navigateTo = (index) => {
    elementsRef.current[index] && elementsRef.current[index].current.scrollIntoView();
  }
  return <>
    <Div showSideNav={showSideNav}>
      <ul>
        {educationalExperiences && educationalExperiences.length > 0 &&
          educationalExperiences.map((education, index) => (
            <li key={education.schoolName} onClick={() => navigateTo(index)}>{getShortString(
              {
                title: education.schoolName,
                length: 20
              })
            }
            </li>)
          )}
      </ul>
    </Div>
  </>
}