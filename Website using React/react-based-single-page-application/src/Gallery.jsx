import './Gallery.css';
function Gallery(){

    return(
  <div>
  <section class="carousel">
  <div class="slides">
  <img 
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                className="slides-item slide-1"
                id="slide-1"
                alt="Hamsters as pets"
    />
    <img 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className="slides-item slide-2"
                id="slide-2"
                alt="Puppy"
    />
    <img 
                src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80"
                className="slides-item slide-3"
                id="slide-3"
                alt="Cat under blanket"
    />
    <img 
                src="https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                className="slides-item slide-4"
                id="slide-4"
                alt="Black and white rabbit"
    />
    <img 
                src="https://images.unsplash.com/photo-1589792351116-53074a88aabe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                className="slides-item slide-5"
                id="slide-5"
                alt="Parrot on the tree"
    />
    <img 
                src="https://images.unsplash.com/photo-1497671954146-59a89ff626ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className="slides-item slide-6"
                id="slide-6"
                alt="Gold fish"
    />
         
  </div>
  <div class="carousel__nav">
    <a class="slider-nav" href="#slide-1">1</a>
    <a class="slider-nav" href="#slide-2">2</a>
    <a class="slider-nav" href="#slide-3">3</a>
    <a class="slider-nav" href="#slide-4">4</a>
    <a class="slider-nav" href="#slide-5">5</a>
    <a class="slider-nav" href="#slide-6">6</a>
  </div>
  </section>
</div>

    );
}


export default Gallery;