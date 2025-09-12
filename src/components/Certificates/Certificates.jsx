import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import "./Certificates.css";

// Replace with your own images (certificates or flowers)
import slide3 from "../../assets/certificate/Angular.png";
import slide2 from "../../assets/certificate/AngularWeb.png";
import slide1 from "../../assets/certificate/DataScience+PY.png";
import slide9 from "../../assets/certificate/Email.png";
import slide11 from "../../assets/certificate/HighImpactPresentation.png";
import slide7 from "../../assets/certificate/JS.png";
import slide10 from "../../assets/certificate/TM.png";
import slide5 from "../../assets/certificate/TWTBOOTSTRAP.png";
import slide8 from "../../assets/certificate/TypeScript.png";
import slide4 from "../../assets/certificate/UE.png";
import slide6 from "../../assets/certificate/Website.png";

const Certificates = () => {
 const slides = [
  { src: slide1, caption: "Infosys DataScience with Python" },
  { src: slide2, caption: "Infosys Angular Web Devloper Certification" },
  { src: slide3, caption: "Infosys Angular" },
  { src: slide4, caption: "Infosys User Experience" },
  { src: slide5, caption: "Infosys Twitter BootStrap" },
{ src: slide6, caption: "Infosys Website Creation" },
{ src: slide7, caption: "Infosys JavaScript" },
{ src: slide8, caption: "Infosys TypeScript" },
{ src: slide9, caption: "Infosys Email Writing Skill" },
{ src: slide10, caption: "Infosys Time Management" },
{ src: slide11, caption: "Infosys High Impact Presentation" },
];

  return (
    <div className="container crtf" id="Certification">
    <section className="cert-section">
      <Heading heading='Certifications' para='Certifications that strengthen my knowledge and showcase my professional growth.'/>

      <Swiper
        className="cert-swiper"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.35,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        breakpoints={{
          320: { /* keeps one big card on phones */
            allowTouchMove: true,
          },
          768: {
            allowTouchMove: true,
          },
          1024: {
            allowTouchMove: true,
          },
        }}
      >
       {slides.map((slide, i) => (
  <SwiperSlide key={i}>
    <div className="cert-card">
      <img src={slide.src} alt={`certificate ${i + 1}`} />
      <p className="cert-caption">{slide.caption}</p>
    </div>
  </SwiperSlide>
))}

      </Swiper>
              <p className="crt">View The certificates below</p>
              <div className="gapps">
      <div className="btns">

        <Button className="btn-blue cs" href="https://drive.google.com/file/d/12Lnt5jYU13_iMYE0H0rrCUU1yumaJBUA/view?usp=sharing" children="Email Writting Skill" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1B2D4L0OSrzzkgeQBgIO8QCZZuQIZHxIp/view?usp=sharing" children="JavaScript" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1FIdgK8D-uFbpw3FmXxU5K4jJzVmESDRh/view?usp=sharing" children="Learn Ai with TensorFlow" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1I8_N4rod0dR9wPE2i21Xd8o4ApMRydyR/view?usp=sharing" children="CSS3" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1J8kk4bj5x03NLl5ai4zLn2FHXyWP2tLc/view?usp=sharing" children="Angular" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1R6G5i--h8bVVB9ZHvkzuohgHXsQXYGeN/view?usp=sharing" children="Angular Web Devloper Certification" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1RMWQMkFBj00RF5q_Zh99I4578I2ytpEF/view?usp=sharing" children="High Impact Presentation" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1d8G0hV5-_MOqZR7VHaZyAn-0z7RRXPO1/view?usp=sharing" children="Website Creation" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1fQhSwOriXit13N-iRXQLok461E8IqRtT/view?usp=sharing" children="Time Management" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1mtpKjDOMqZ3ruY3Pn9gwxH8O3YDM8BJE/view?usp=sharing" children="Twitter Bootstrap" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1nYndQyZaA5TgXym8JKUUQ8X1nD4BGvzk/view?usp=sharing" children="User Experience" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1trZimefct6F8775EwkRMhW1IUjB_6H9Z/view?usp=sharing" children="TypeScript" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1wsegGApCqNxrJ3_lr8J0BekJJ4uYGoU6/view?usp=sharing" children="Data Science with Python" />
<Button className="btn-blue cs" href="https://drive.google.com/file/d/1xQ0HLkxHut6zQInBqlSiIzZHsI2lmpMf/view?usp=sharing" children="Responsive web Pages using BootStrap" />

        </div></div>
    </section>
    </div>
  );
};

export default Certificates;