import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SideNav from '../../components/SideNav';
import Button from '../../components/Button';
import ImageIcon from '../../components/ImageIcon';
import ModalComponent from '../../components/Modal';
import Input from '../../components/Input';
import { saveEducationalExperiences } from '../../store/action';
import {
  ShowcaseWrapper,
  ContentWrapper,
  ContentBox,
  RowBox,
  ColumnBox,
  ModalContentWrapper,
  H1,
  ColumnBoxEnd,
  Label,
  AddNewBtnWrapper,
  ErrorLabel
} from '../../styles/showcase.styles';
const menuIconURl = '/menu.svg';

interface RootState {
  HomeReducer: { userName: string }
}

export default function ShowCase() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showSideNav, setShowSideNav] = useState<Boolean>(true);
  const userName = useSelector(({ HomeReducer: { userName } }: RootState) => userName);

  const [modalIsOpen, setModalIsOpen] = useState<Boolean>(false);
  const [educationalExperiences, setEducationalExperiences] = useState({
    schoolName: "",
    degree: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
    grade: "",
    anyThingMore: "",
  });
  const [errors, setErrors] = useState({
    schoolName: "",
    degree: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: "",
    grade: ""
  });
  useEffect(() => {
    if (!userName || userName === "") {
      router.push('/');
    }
  }, [userName]);
  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleInputChange = ({ name, value }) => {
    setEducationalExperiences((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleSave = () => {
    const educationObj = { ...educationalExperiences };
    const errorsObj = { ...errors };
    let allValid = true;
    Object.keys(educationObj).forEach((key: string) => {
      if (educationObj[key].length === 0) {
        allValid = false;
        errorsObj[key] = `${key.split(/(?=[A-Z])/).join(" ").toLocaleLowerCase()} is required`;
      } else {
        errorsObj[key] = "";
      }
    });
    if (!allValid) {
      setErrors(errorsObj);
      return false;
    }
    dispatch(saveEducationalExperiences(educationObj));
  }

  const {
    schoolName,
    degree,
    fieldOfStudy,
    startYear,
    endYear,
    grade,
    anyThingMore } = educationalExperiences;

  return (
    <ShowcaseWrapper>
      <AddNewBtnWrapper>
        <ImageIcon url={menuIconURl} onClick={() => setShowSideNav(!showSideNav)} />
        <Button onClick={() => setModalIsOpen(true)}> Add new education</Button>
      </AddNewBtnWrapper>
      <ContentWrapper>
        <SideNav showSideNav={showSideNav} />
        <ContentBox>
          <div>
            <h1>Full Stack Software Developer</h1>
            <p>Octopolis Technologies(apnaklub.com)
            Oct 2019 - Present
            Bengaluru, India</p>
            <p>Designed and developed the dashboard for the operations team to manage products, inventories, and order details. Operations team
            time saved by 40% when this application is used as compared to manually maintaining the excel sheets for inventory and purchase orders of products from vendors.</p>
          </div>
          <div>
            <h1>Full Stack Software Developer</h1>
            <p>Octopolis Technologies(apnaklub.com)
            Oct 2019 - Present
            Bengaluru, India</p>
            <p>Designed and developed the dashboard for the operations team to manage products, inventories, and order details. Operations team
            time saved by 40% when this application is used as compared to manually maintaining the excel sheets for inventory and purchase orders of products from vendors.</p>
          </div>
        </ContentBox>
      </ContentWrapper>
      <ModalComponent closeModal={closeModal} modalIsOpen={modalIsOpen} >
        <>
          <ModalContentWrapper>
            <H1>Add educational experience!</H1>
            <ColumnBox >
              <RowBox>
                <ColumnBox>
                  <Label>Name of School</Label>
                  <Input
                    placeholder="Name of School"
                    onChange={(e) =>
                      handleInputChange({ name: 'schoolName', value: e.currentTarget.value })
                    }
                    value={schoolName}
                  />
                  {errors.schoolName.length > 0 && <ErrorLabel color={"red"}>{errors.schoolName}</ErrorLabel>}
                </ColumnBox>
                <ColumnBox>
                  <Label>Degree</Label>
                  <Input
                    placeholder="Degree"
                    onChange={(e) =>
                      handleInputChange({ name: 'degree', value: e.currentTarget.value })
                    }
                    value={degree}
                  />
                  {errors.degree.length > 0 && <ErrorLabel color={"red"}>{errors.degree}</ErrorLabel>}
                </ColumnBox>
              </RowBox>
              <RowBox>
                <ColumnBox>
                  <Label>Field Of Study</Label>
                  <Input
                    placeholder="Field Of Study"
                    onChange={(e) =>
                      handleInputChange({ name: 'fieldOfStudy', value: e.currentTarget.value })
                    }
                    value={fieldOfStudy}
                  />
                  {errors.fieldOfStudy.length > 0 && <ErrorLabel color={"red"}>{errors.fieldOfStudy}</ErrorLabel>}
                </ColumnBox>
                <ColumnBox>
                  <Label>Start Year</Label>
                  <Input
                    placeholder="Start Year"
                    onChange={(e) =>
                      handleInputChange({ name: 'startYear', value: e.currentTarget.value })
                    }
                    value={startYear} />
                  {errors.startYear.length > 0 && <ErrorLabel color={"red"}>{errors.startYear}</ErrorLabel>}
                </ColumnBox>
              </RowBox>
              <RowBox>
                <ColumnBox>
                  <Label>End Year/Expected End Year</Label>
                  <Input
                    placeholder="End Year/Expected End Year"
                    onChange={(e) =>
                      handleInputChange({ name: 'endYear', value: e.currentTarget.value })
                    }
                    value={endYear} />
                  {errors.endYear.length > 0 && <ErrorLabel color={"red"}>{errors.endYear}</ErrorLabel>}
                </ColumnBox>
                <ColumnBox>
                  <Label>Grade</Label>
                  <Input
                    placeholder="Grade"
                    onChange={(e) =>
                      handleInputChange({ name: 'grade', value: e.currentTarget.value })
                    }
                    value={grade} />
                  {errors.grade.length > 0 && <ErrorLabel color={"red"}>{errors.grade}</ErrorLabel>}
                </ColumnBox>
              </RowBox>
              <ColumnBox>
                <Label>Any thing More you want to add ?</Label>
                <Input
                  placeholder="Any thing More you want to add ?"
                  onChange={(e) =>
                    handleInputChange({ name: 'anyThingMore', value: e.currentTarget.value })
                  }
                  value={anyThingMore} />
              </ColumnBox>
              <ColumnBoxEnd>
                <Button onClick={() => handleSave()}> Save</Button>
              </ColumnBoxEnd>
            </ColumnBox>
          </ModalContentWrapper>
        </>
      </ModalComponent>
    </ShowcaseWrapper >
  )
}