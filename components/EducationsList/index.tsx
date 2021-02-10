import EducationalExperienceCard from './educationalExperienceCard';

interface EducationsListProps {
  educationalExperiences: any[],
  elementsRef: any,
}

export default function EducationsList(
  {
    educationalExperiences,
    elementsRef
  }: EducationsListProps
) {
  return <>
    {educationalExperiences.map((education, index) => (
      <EducationalExperienceCard
        reference={elementsRef.current ? elementsRef.current[index] : null}
        key={education.schoolName}
        {...education}
      />))
    }
  </>;
}

