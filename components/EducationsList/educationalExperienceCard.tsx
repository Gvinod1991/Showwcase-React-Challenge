import { ContentBox, Title, Text } from './educationList.styles';

interface EducationProps {
  schoolName: string
  degree: string,
  fieldOfStudy: string,
  startYear: string,
  endYear: string,
  grade: string,
  anyThingMore: string
}

export default function EducationalExperienceCard({ schoolName,
  degree,
  fieldOfStudy,
  startYear,
  endYear,
  grade,
  anyThingMore }: EducationProps) {
  return (
    <ContentBox id={schoolName}>
      <Title>{`${degree} ${fieldOfStudy} @ ${schoolName}`}</Title>
      <Text>{grade ? `Grade ${grade}` : null}</Text>
      <Text>{startYear}- {endYear}</Text>
      <Text>{anyThingMore}</Text>
    </ContentBox>
  )
}