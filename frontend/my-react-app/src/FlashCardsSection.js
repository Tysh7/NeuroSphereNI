import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlashcardsSection = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        // Fetch flashcards from Django backend when component mounts
        axios.get('/api/flashcards/')
            .then(response => {
                setFlashcards(response.data);
            })
            .catch(error => {
                console.error('Error fetching flashcards:', error);
            });
    }, []);

    const goToNextCard = () => {
        setCurrentCardIndex(prevIndex => prevIndex + 1);
    };

    const goToPreviousCard = () => {
        setCurrentCardIndex(prevIndex => prevIndex - 1);
    };

    return (
        <div>
            {flashcards.length > 0 && (
                <div>
                    <h2>{flashcards[currentCardIndex].question}</h2>
                    <p>{flashcards[currentCardIndex].answer}</p>
                </div>
            )}
            <div>
                <button onClick={goToPreviousCard} disabled={currentCardIndex === 0}>
                    Previous
                </button>
                <button onClick={goToNextCard} disabled={currentCardIndex === flashcards.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default FlashcardsSection;
