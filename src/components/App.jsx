import { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

import { AppDiv } from "./app.styled";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export class App extends Component {
  state = {
    page:1,
    pictName: '',
    imgData: [],
    modalPict: null,
    screen: 'idle',
    // imgTotal: null,
  };
  // -------------------------------------------------|   МЕТОДИ ЦИКЛУ
  componentDidMount() { }
  
  componentDidUpdate(pProps, pState) {
    const { succesFetch } = this;
    const { page, pictName } = this.state;
    const KEY = '31888671-f215a97b976f323f834fb73b1';

    //  || pState.imgTotal === imgTotal
    if (pState.pictName !== pictName || pState.page !== page) {
      this.setState({ screen: 'pending', });

      fetch(`https://pixabay.com/api/?q=${pictName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(resp => resp.json())
        .then(succesFetch)
        // .then(({ hits }) => this.setState({ imgData: hits, screen: 'succes', }))
        .catch(Error => this.setState({ screen: 'error', }));
    }
    return;
  };

  // -------------------------------------------------|   ОБРОБКА ФЕТЧА
  succesFetch = (resp) => {
    const { hits, total } = resp;
    // console.log(resp);

    if (hits.length<1) {
      return this.setState({ screen: 'error', });
    };

    return this.setState(({ imgData }) => {
      // console.log(imgData);
      return ({
      imgData: [...imgData, ...hits],
      screen: 'succes',
      imgTotal: total,
    })});
  }

  // -------------------------------------------------|   КАСТОМНІ МЕТОДИ
  hendleFormSubmit = (name) => {
    if (name === this.state.pictName) return toast.success('Тут поправив ;)');;

    this.setState({
      page:1,
      pictName: name,
      imgData: [],
    });
  };
  takeImgId = (id) => {
    const { imgData } = this.state;
    const findImg = imgData.find(img => img.id === id);
    // console.log(findImg);
    
    this.setState(({modalPict})=>({modalPict:findImg,}));
  };
  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1, }));
  };
  toggleModal = () => {
    this.setState(({modalPict})=>({modalPict:null,}));
  };

  render() {
    const { hendleFormSubmit, toggleModal, takeImgId, loadMore } = this;
    const { imgData, modalPict, screen } = this.state;
    const plug = screen === 'idle' || screen === 'pending' || screen === 'error';
    // console.log(screen);

    return (
      <AppDiv>
        <Searchbar onSubmit={hendleFormSubmit} />
        <ImageGallery imgData={imgData} takeImgId={takeImgId} />
        <Loader screenText={screen} />

        {screen === 'succes' && <Button loadMore={loadMore} />}
        {modalPict && <Modal toggleModal={toggleModal} modalPict={modalPict} />}

        {plug&&<div style={{ height:"calc(100vh - 275px)"}}></div>}
        <footer></footer>
        
        <ToastContainer autoClose={2000} />
      </AppDiv>
    );
  }
};
