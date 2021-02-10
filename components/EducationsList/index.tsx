import EducationalExperienceCard from './educationalExperienceCard';

interface EducationsListProps {
  educationalExperiences: any[],
  elementsRef: any,
}

export default function EducationsList(
  {
    educationalExperiences
  }: EducationsListProps
) {
  return <>
    {educationalExperiences.map((education, index) => (
      <EducationalExperienceCard
        key={education.schoolName}
        {...education}
      />))
    }
  </>;
}

