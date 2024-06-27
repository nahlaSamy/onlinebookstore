import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ChangePass from '../../../AuthModule/components/ChangePass/ChangePass';
import Footer from '../../../SharedModule/components/Footer/Footer';
import NavBar from '../../../SharedModule/components/NavBar/NavBar';
import HeroSection from '../HeroSection/HeroSection';
import FeaturedBook from '../../FeaturedBook/FeaturedBook';
import NewRelease from '../NewRelease/NewRelease';
import Categories from '../Categories/Categories';
import BookSale from '../BookSale/BookSale';
import LatestArticles from '../LatestArticles/LatestArticles';
export default function LandingPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="">
        <NavBar/>
      </div>
      <div className='bg-info '>
        <HeroSection/>
      </div >
      <div>
        <Categories/>
      </div>
      <div className=" ">
        <NewRelease/>
      </div>
    
      <div className="">
      <FeaturedBook/>

      </div>
      {/* <button className='btn btn-info' onClick={handleShow}>Change Password</button> */}
       <div className='p-5'>
        <BookSale/>
       </div>
       <div className=''>

       <LatestArticles/>
       </div>
      <div className=''>
        <Footer/>
      </div>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Body>
          <ChangePass handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
