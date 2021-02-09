import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SideNav from '../../components/SideNav';
import Button from '../../components/Button';
import ImageIcon from '../../components/ImageIcon';
import ModalComponent from '../../components/Modal';
import Input from '../../components/Input';
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
  AddNewBtnWrapper
} from '../../styles/showcase.styles';
const menuIconURl = '/menu.svg';

interface RootState {
  HomeReducer: { userName: string }
}

export default function ShowCase() {
  const router = useRouter();
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
  const closeModal = () => {
    setModalIsOpen(false);
  }
  useEffect(() => {
    if (!userName || userName === "") {
      router.push('/');
    }
  }, [userName]);

  const { schoolName } = educationalExperiences;
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
                  <Input placeholder="Name of School" onChange={(e) => { }} value={schoolName} />
                </ColumnBox>
                <ColumnBox>
                  <Label>Degree</Label>
                  <Input placeholder="Degree" onChange={(e) => { }} value={schoolName} />
                </ColumnBox>
              </RowBox>
              <RowBox>
                <ColumnBox>
                  <Label>Field Of Study</Label>
                  <Input placeholder="Field Of Study" onChange={(e) => { }} value={schoolName} />
                </ColumnBox>
                <ColumnBox>
                  <Label>Start Year</Label>
                  <Input placeholder="Start Year" onChange={(e) => { }} value={schoolName} />
                </ColumnBox>
              </RowBox>
              <RowBox>
                <ColumnBox>
                  <Label>End Year/Expected End Year</Label>
                  <Input placeholder="End Year/Expected End Year" onChange={(e) => { }} value={schoolName} />
                </ColumnBox>
                <ColumnBox>
                  <Label>Grade</Label>
                  <Input placeholder="Start Year" onChange={(e) => { }} value={schoolName} />
                </ColumnBox>
              </RowBox>
              <ColumnBox>
                <Label>Any thing More you want to add ?</Label>
                <Input placeholder="Any thing More you want to add ?" onChange={(e) => { }} value={schoolName} />
              </ColumnBox>
              <ColumnBoxEnd>
                <Button onClick={() => { }}> Save</Button>
              </ColumnBoxEnd>
            </ColumnBox>
          </ModalContentWrapper>
        </>
      </ModalComponent>
    </ShowcaseWrapper >
  )
}