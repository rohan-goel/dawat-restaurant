import "./App.css";
import ChefCard from './components/ChefCard'
import NewsCard from './components/NewsCard'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <div className="first_page">
        <header className="header1">
          <div className="front">
            <span>
              <i class="far fa-envelope"></i>Email
            </span>
            <span>
              <i class="fas fa-phone-alt"></i>Telephone
            </span>
          </div>
          <div className="back">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-behance"></i>
            <i class="fas fa-wifi fa-rotate-45"></i>

            <button>Book A Ticket</button>
          </div>
        </header>
        <hr />
        <header className="header2">
          <div className="front">
            <img src="./dawat-images/main_logo.png" alt="" />
          </div>
          <div className="back">
            <a href="Home">Home</a>
            <a href="Home">About Us</a>
            <a href="Home">Offer</a>
            <a href="Home">Menu</a>
            <a href="Home">Team</a>
            <a href="Home">Blog</a>
            <a href="Home">Gallery</a>
            <a href="Home">Contact</a>
            <i class="fas fa-search"></i>
          </div>
        </header>
        <div className="slides">Our Menu See What's new today</div>
      </div>

      <div className="story">
        <h1>Our Story</h1>
        <div className="split_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          reiciendis facilis labore laborum aperiam! Dignissimos quod error
          quibusdam corporis explicabo iste dicta saepe, aut, animi blanditiis
          sed qui mollitia suscipit harum ex, libero voluptatibus repellat
          inventore. Illo eligendi laborum non excepturi quia iure amet
          distinctio velit suscipit ipsam sint quod, vero eum quas quaerat
          dolore qui commodi? Dolores, omnis placeat magni culpa autem, nisi nam
          ad, saepe hic laborum laboriosam dolor non ipsum illo maiores soluta
          eaque quasi neque! Ad, saepe consequuntur? Amet debitis qui reiciendis
          consequatur, corrupti, suscipit, voluptatibus tenetur perspiciatis
          nihil veritatis ipsa odit necessitatibus possimus placeat voluptatum?
        </div>
        <img src="./dawat-images/story.png" alt="" />
      </div>

      <div className="special_offer">
        <div className="heading">
          <h2>Special Package</h2>
          <img src="./dawat-images/red.png" alt="" />
        </div>
        <div className="parent_package_screen">
          <img
            src="./dawat-images/promo_slide_1.jpg"
            alt=""
            className="promo1"
          />
          <div className="card">
            <h3> $40% off for 9'-12' pizza-Wed, Thu,Friday only</h3>
            <p>Pizza 12 inch + Side Dish 1.5L Coke Bottle Only from 209,000</p>
            <button className="order-now">ORDER NOW</button>
          </div>
        </div>
      </div>

      <div className="book-table">
        <div>
          <h2>BOOK A TABLE NOW!</h2>
          <button>BOOK NOW</button>
        </div>
      </div>

      <div className="chefs">
      <div className="heading">
          <h2>Our Chefs</h2>
          <img src="./dawat-images/red.png" alt="" />
        </div>
        <div className="chef-list">
          <ChefCard name="Mark Angelila" photo ="./dawat-images/team-1.jpg"/>
          <ChefCard name="Angel Meskat" photo ="./dawat-images/team-2.jpg"/>
          <ChefCard name="Jon doe" photo ="./dawat-images/team-3.jpg"/>
          <ChefCard name="Angel Di Maria" photo ="./dawat-images/team-4.jpg"/>
          <ChefCard name="Park Ji Sung" photo ="./dawat-images/team-5.jpg"/>
        </div>
      </div>

      <div className="news">
      <div className="heading">
          <h2>Latest News</h2>
          <img src="./dawat-images/red.png" alt="" />
        </div>
        <div className="news-list">
          <NewsCard photo ="./dawat-images/blog-1.jpg" title="Restaurant Welcome Day Meetup"/>
          <NewsCard photo ="./dawat-images/blog-2.jpg" title="Restaurant first Day first reservation"/>
          <NewsCard photo ="./dawat-images/blog-3.jpg" title="Home to get your home delivery"/>
         
        </div>
      </div>

      <div className="gallery heading">
        <h2>Gallery</h2>
        <img src="./dawat-images/red.png" alt="" />
      </div>

      <Footer/>

    </div>
  );
}
export default App;
