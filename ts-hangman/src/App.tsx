import './App.css'
import { useState } from 'react'

  const randomFrenchWords = [
  "arbre", "maison", "voiture", "livre", "chat", "chien", "école", "ordinateur", "fenêtre", "porte",
  "chaise", "table", "lampe", "rue", "jardin", "fleur", "soleil", "lune", "étoile", "ciel",
  "mer", "rivière", "montagne", "colline", "forêt", "champ", "plage", "île", "océan", "ville",
  "village", "route", "pont", "immeuble", "appartement", "magasin", "supermarché", "restaurant", "café", "hôtel",
  "musée", "théâtre", "cinéma", "bibliothèque", "église", "banque", "bureau", "usine", "parc", "gare",
  "aéroport", "station", "bus", "train", "avion", "bicyclette", "moto", "camion", "bateau", "scooter",
  "trottoir", "carrefour", "place", "statue", "fontaine", "horloge", "mairie", "poste", "police", "hôpital",
  "clinique", "pharmacie", "école", "université", "laboratoire", "bibliothèque", "salle", "gymnase", "stade", "piscine",
  "zoo", "aquarium", "musée", "galerie", "atelier", "studio", "ferme", "grange", "champ", "vigne",
  "verger", "cimetière", "temple", "chapelle", "monument", "tour", "mur", "clôture", "portail", "serre"
];

  const wordToGuess = randomFrenchWords[Math.floor(Math.random() * randomFrenchWords.length)];
function App() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [inactiveLetters, setInactiveLetters] = useState([]);
  const [numOfGuess, setNumOfGuess] = useState(0);
  return <> 
    <HangmandDraw numberOfGuesses={numOfGuess} correctWords={wordToGuess}/>
    <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    <div className='keyboard-container'>
      <Keyboard 
        wordToGuess={wordToGuess.split("")} 
        setNumOfGuess={setNumOfGuess}
        setGuessedLetters={setGuessedLetters}
        setInactiveLetters={setInactiveLetters}          
        inactiveLetters={inactiveLetters}
        addInactiveLetters={addInactiveLetters} />
    </div>

    {numOfGuess === 7 ? 
      <StopGame wordToGuess={wordToGuess.split("")} guessedLetters={guessedLetters} numOfGuesses={numOfGuess} />
      : ""
    }
  </>
}

function StopGame({numOfGuesses}: StopGameProps) {

  return (
    <div className="replay-container" >
      <button className="btn replay" onClick={() => window.location.reload()}>
        { numOfGuesses >= 7 ? "Replay" : ""}
      </button>
    </div>
  )
}

type StopGameProps = {
  wordToGuess: string[],
  guessedLetters: string[],
  numOfGuesses: number
}

type HangmanDrawProps = {
  numberOfGuesses: number
  correctWords: string

}


type KeyboardProps = {
  wordToGuess: string[],
  setNumOfGuess: any,
  setInactiveLetters: any,
  setGuessedLetters: any,
  inactiveLetters: string[],
  addInactiveLetters: (letter: string, setInactiveLetters: any) => void }

type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string,
}
const KEYBOARD_KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "y",
  "x",
  "z",
]

const HEAD = (
  <div className='head_style' 
  ></div>
)

const BODY = (
  <div
    className='body_style'
  >  
  </div>
)

const RIGHT_ARM = (
  <div className='right_arm_style'>
  </div>
)

const LEFT_ARM = (
  <div className='left_arm_style'>
  </div>
)

const RIGHT_FOOT = (
  <div
    className='right_foot_style'>
  </div>

)

const LEFT_FOOT = (
  <div
    className='left_foot_style'
  />
)

const hangman_comp_1 = (
  <div className="h_comp_1"></div>
)
const hangman_comp_2 = (

  <div className="h_comp_2"></div>
)
const hangman_comp_3 = (

  <div className="h_comp_3"></div>
)


const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_FOOT, LEFT_FOOT]


function HangmandDraw({numberOfGuesses, correctWords}: HangmanDrawProps) {

  return (
      
      <div className={`hangman-draw-container`}>
        <div className={`${numberOfGuesses >= 7 ? "visible" : "invisible"}`}>
        <h2>Correct Answer:</h2>
        <h3>{correctWords}</h3>
        </div>
      <div className="hangman-container">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        {hangman_comp_1}
        {hangman_comp_2}
        {hangman_comp_3}
      </div>
    </div>
  )

}


function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {
  return (
    <div className="hangman-word-container">
      {
        wordToGuess.split("").map((letter, index) => {
          return ( <> 
            <span className={!guessedLetters.includes(letter) ? "hangman-word-bottom-border-red" : "hangman-word-bottom-border-black"}>
              <span className = {
                !guessedLetters.includes(letter) ? "hangman-word-hidden" : "hangman-word-visible"} key={index}>{letter}</span>
            </span>
          </>
          );

        })
      }
    </div>
  )
}
// Keyboards
function addInactiveLetters(key: string, setInactiveLetters: any) {
  setInactiveLetters((prev: string[]) => [...prev, key]);
}
function Keyboard({
  wordToGuess,
  setNumOfGuess,
  setGuessedLetters,
  setInactiveLetters,
  inactiveLetters,
  addInactiveLetters,

} : KeyboardProps) {

  return (

    <div className="keyboard"
    >
      {KEYBOARD_KEYS.map((key) => {

        return (
          <button className={inactiveLetters.includes(key) ? "btn inactive" : "btn"}
            disabled={inactiveLetters.includes(key)}
            onClick={() => {
              addInactiveLetters(key, setInactiveLetters)
              if (wordToGuess.includes(key)) {
                setGuessedLetters((prev: string[]) => [...prev, key]);
              } else {
                setNumOfGuess((prev: number) => prev + 1);
              }
            }}

          >{key}
          </button>
        )
      })}
    </div>)
}

export default App

