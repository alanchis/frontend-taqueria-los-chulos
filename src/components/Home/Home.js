




export default function Home() {


  const losChulos =`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.4838849125622!2d-99.18782843237351!3d19.37473413568817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13ff36c3affae9b8!2sLos%20Chulos%20Taqueria!5e0!3m2!1ses-419!2smx!4v1646697596268!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`


  return (

    
    <>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="assets/logo1.png"  height="1200px" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="assets/promo1.jpg"  height="1200px" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="assets/lugar.jpg"  height="1200px" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>













      {/* <img src="assets/lugar.jpg" alt="establecimiento" width="100%"/> */}



      <h1>Ubicacion</h1>

      <h2> Av. Revolucion 886 Insurgentes Mixcoac, Benito Juarez, 03920, Ciudad de Mexico</h2>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.4838849125622!2d-99.18782843237351!3d19.37473413568817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13ff36c3affae9b8!2sLos%20Chulos%20Taqueria!5e0!3m2!1ses-419!2smx!4v1646697596268!5m2!1ses-419!2smx" width="1800" height="900" style={{border: '0'}} allowfullscreen="" loading="lazy" title
      ="los Chulos"></iframe>












    




        
    </>
  )
}
