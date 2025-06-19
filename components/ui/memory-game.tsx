import { useState, useEffect } from 'react';
import Image from 'next/image';

const CARDS = [
  { id: 1, name: 'react', image: '/re.svg' },
  { id: 2, name: 'next', image: '/next.svg' },
  { id: 3, name: 'typescript', image: '/ts.svg' },
  { id: 4, name: 'tailwind', image: '/tail.svg' },
  { id: 5, name: 'git', image: '/git.svg' },
  { id: 6, name: 'docker', image: '/dockerName.svg' },
  { id: 7, name: 'react', image: '/re.svg' },
  { id: 8, name: 'next', image: '/next.svg' },
  { id: 9, name: 'typescript', image: '/ts.svg' },
  { id: 10, name: 'tailwind', image: '/tail.svg' },
  { id: 11, name: 'git', image: '/git.svg' },
  { id: 12, name: 'docker', image: '/dockerName.svg' },
];

export const MemoryGame = () => {
  const [cards, setCards] = useState(() => 
    CARDS.sort(() => Math.random() - 0.5)
  );
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (flipped.length === 2) {
      setDisabled(true);
      const [first, second] = flipped;
      if (cards[first].name === cards[second].name) {
        setMatched([...matched, cards[first].name]);
        setScore(prev => prev + 10);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
          setScore(prev => Math.max(0, prev - 2));
        }, 1000);
      }
    }
  }, [flipped, cards, matched]);

  const handleClick = (index: number) => {
    if (!disabled && !flipped.includes(index) && flipped.length < 2 && !matched.includes(cards[index].name)) {
      setFlipped([...flipped, index]);
    }
  };

  const resetGame = () => {
    setCards(CARDS.sort(() => Math.random() - 0.5));
    setFlipped([]);
    setMatched([]);
    setScore(0);
    setDisabled(false);
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex justify-between w-full mb-4">
        <span className="text-orange-700 dark:text-orange-100 text-sm">Score: {score}</span>
        <button 
          onClick={resetGame}
          className="px-3 py-1 text-sm bg-gray-200 text-black dark:bg-black/80 dark:text-orange-100 rounded-md hover:bg-gray-300 dark:hover:bg-black/60 transition-colors"
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`
              aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300
              ${flipped.includes(index) || matched.includes(card.name)
                ? 'bg-gray-100 dark:bg-black/80 rotate-y-180 '
                : 'bg-gray-200 dark:bg-black/60'
              }
              hover:bg-gray-300 dark:hover:bg-black/70
            `}
          >
            {(flipped.includes(index) || matched.includes(card.name)) ? (
              <div className="w-8 h-8 relative ">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-contain p-1 "
                />
              </div>
            ) : (
              <div className="w-full h-full rounded-lg border-2 border-orange-500/30" />
            )}
          </div>
        ))}
      </div>
      {matched.length === CARDS.length / 2 && (
        <div className="mt-4 text-orange-700 dark:text-orange-100 text-center">
          <p>Congratulations! 🎉</p>
          <p>Final Score: {score}</p>
        </div>
      )}
    </div>
  );
}; 