import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieList from "../components/Movielist";
import AppNavbar from "../components/Navbar";

const movies = [
  {
    id: 1,
    title: "Cars",
    duration: "1h 57m",
    description: "A hotshot race car named Lightning McQueen gets lost on the way to an important race and ends up in a small town called Radiator Springs. While trying to get back on track, he learns valuable lessons about friendship, humility, and the true meaning of success.",
    casts: "Owen Wilson as Lightning McQueen, Paul Newman as Doc Hudson, Bonnie Hunt as Sally Carrera, Larry the Cable Guy as Mater",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"
  },
  {
    id: 2,
    title: "Frozen",
    duration: "1h 42m",
    description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice and traps her kingdom in eternal winter, her sister Anna teams up with a mountain man, his loyal reindeer, and a snowman to bring summer back.",
    casts: "Kristen Bell as Anna, Idina Menzel as Elsa, Josh Gad as Olaf, Jonathan Groff as Kristoff",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg"
  },
  {
    id: 3,
    title: "Zootopia",
    duration: "1h 48m",
    description: "In the modern mammal metropolis of Zootopia, Judy Hopps becomes the first rabbit to join the police force. Determined to prove herself, she jumps at the opportunity to solve a mysterious case of missing animals. To crack the case, she reluctantly teams up with a fast-talking, sly fox named Nick Wilde. As the unlikely duo uncovers clues, they begin to unravel a deep conspiracy that threatens the harmony of their diverse city.",
    casts: "Ginnifer Goodwin as Judy Hopps, Jason Bateman as Nick Wilde, Idris Elba as Chief Bogo, Jenny Slate as Assistant Mayor Bellwether, J.K. Simmons as Mayor Lionheart, Nate Torrence as Officer Clawhauser",
    image: "https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450"
  },
  {
    "id": 4,
    "title": "Turbo",
    "duration": "1h 36m",
    "description": "Turbo is a high-velocity animated comedy about an underdog snail whose dreams kick into overdrive when he miraculously gains the power of super-speed. After a freak accident, Turbo sets out to prove that no dream is too big and no dreamer too small. With the help of his streetwise snail crew and a group of human allies, he enters the Indy 500 to race against the best drivers in the world.",
    "casts": "Ryan Reynolds as Turbo, Paul Giamatti as Chet, Samuel L. Jackson as Whiplash, Michael Peña as Tito, Luis Guzmán as Angelo, Snoop Dogg as Smoove Move, Maya Rudolph as Burn",
    "image": "https://i.pinimg.com/736x/85/05/e2/8505e264802aca9b9481f57d1ddc0311.jpg"
  },
  {
    "id": 5,
    "title": "Ratatouille",
    "duration": "1h 51m",
    "description": "In the heart of Paris, a rat named Remy dreams of becoming a great chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers beneath a renowned Parisian restaurant, he forms an unlikely alliance with a young kitchen worker. Together, they set in motion a hilarious and heartwarming culinary adventure that turns the culinary world of Paris upside down.",
    "casts": "Patton Oswalt as Remy, Lou Romano as Linguini, Ian Holm as Skinner, Brian Dennehy as Django, Peter Sohn as Emile, Janeane Garofalo as Colette, Brad Garrett as Gusteau, Peter O'Toole as Anton Ego",
    "image": "https://resizing.flixster.com/ySiX7RlyKRuuxCcAI7SgdkMAZ0U=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc="
  },
  {
    "id": 6,
    "title": "Moana",
    "duration": "1h 47m",
    "description": "Moana, a spirited and determined teenager, sets sail on a daring journey to save her people. Chosen by the ocean itself, she seeks out the legendary demigod Maui to restore the heart of Te Fiti and bring balance back to the world. Along the way, Moana discovers her own identity and the true meaning of courage as she navigates treacherous seas, mythical creatures, and ancient lore.",
    "casts": "Auli'i Cravalho as Moana, Dwayne Johnson as Maui, Rachel House as Tala, Temuera Morrison as Chief Tui, Jemaine Clement as Tamatoa, Nicole Scherzinger as Sina, Alan Tudyk as Heihei",
    "image": "https://lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg?region=0%2C0%2C540%2C810"
  },
  {
    "id": 7,
    "title": "Hotel Transylvania",
    "duration": "1h 31m",
    "description": "Welcome to Hotel Transylvania, Dracula’s lavish five-stake resort where monsters and their families can live it up without worrying about humans. On his daughter Mavis’ 118th birthday, Dracula invites his friends—Frankenstein, the Mummy, the Invisible Man, and more—for a huge celebration. But when a human backpacker accidentally stumbles into the hotel and falls for Mavis, Dracula’s world starts to unravel in hilarious and heartwarming ways.",
    "casts": "Adam Sandler as Dracula, Selena Gomez as Mavis, Andy Samberg as Jonathan, Kevin James as Frankenstein, Steve Buscemi as Wayne, David Spade as Griffin, CeeLo Green as Murray, Fran Drescher as Eunice",
    "image": "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/249/2023/09/05172525/eJGvzGrsfe2sqTUPv5IwLWXjVuR-683x1024.jpg"
  },  
  {
    "id": 8,
    "title": "Aladdin",
    "duration": "1h 30m",
    "description": "Aladdin, a kind-hearted street rat, discovers a magical lamp that unleashes a wise-cracking Genie who grants him three wishes. With his newfound powers, Aladdin tries to win the heart of Princess Jasmine and thwart the evil plans of the royal vizier, Jafar. Through adventure, magic, and self-discovery, Aladdin learns that it's what's inside that truly counts.",
    "casts": "Scott Weinger as Aladdin, Robin Williams as Genie, Linda Larkin as Jasmine, Jonathan Freeman as Jafar, Frank Welker as Abu, Gilbert Gottfried as Iago, Douglas Seale as Sultan",
    "image": "https://lumiere-a.akamaihd.net/v1/images/p_aladdin1992_20486_174ba005.jpeg"
  },
  {
    "id": 9,
    "title": "Beauty and the Beast",
    "duration": "1h 24m",
    "description": "An enchanted castle, a cursed prince, and a brave young woman come together in a timeless tale of love and redemption. Belle, a bright and independent girl, finds herself imprisoned by the Beast, a prince cursed to live as a monster. As she slowly begins to see the kindness in his heart, they discover that true beauty lies within.",
    "casts": "Paige O'Hara as Belle, Robby Benson as Beast, Angela Lansbury as Mrs. Potts, Jerry Orbach as Lumière, David Ogden Stiers as Cogsworth, Richard White as Gaston",
    "image": "https://lumiere-a.akamaihd.net/v1/images/p_beautyandthebeast1991_20488_592ec4b5.jpeg"
  }
  
  
];
  

function DashboardPage() {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <AppNavbar />
      <Container className="mt-4" style={{ backgroundColor: '#141414', minHeight: '100vh' }}>
        <h2 className="mb-4">Movie List</h2>
        <MovieList movies={movies} onCardClick={handleMovieClick} />
      </Container>

    </>
  );
}

export default DashboardPage;
