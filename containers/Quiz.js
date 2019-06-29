import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { DECK_ID } from '../helpers/navigation';
import { getDeck } from '../api/decks';
import { clearNotifications, setNotification } from '../api/notifications';

const Quiz = ({navigation}) => {
    const [deck, setDeck] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [currentCard, setCurrentCard] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const deckId = navigation.getParam(DECK_ID);

    const fetchDeck = () => {
        getDeck(deckId).then(result => setDeck(result));
    };

    useEffect(() => {
        fetchDeck();
    },[]);

    const cardsLeft = () => deck.questions.length - currentCard;
    const endQuiz = () => clearNotifications().then(setNotification);
    return (
    <View style={styles.container}>
        {deck 
        ? <>
            {cardsLeft() > 0 
            ? <>
                <View style={styles.text}>
                    <Text style={styles.content}>cards left: {cardsLeft()}</Text>
                    <Text style={styles.content}>Q: {deck.questions[currentCard].question}</Text>
                    {showAnswer && <Text style={styles.content}>A: {deck.questions[currentCard].answer}</Text>}
                </View>
                <View style={styles.buttons}>
                    {!submitted && <Button
                        style={styles.content}
                        title={showAnswer ? "hide answer" : "show answer"} 
                        onPress={() => setShowAnswer(!showAnswer)}/>}
                    {(!submitted && showAnswer) && 
                    <>
                        <Button
                            style={styles.content}
                            title="Mark Correct"
                            onPress={() => {
                                setCorrectCount(correctCount + 1);
                                setSubmitted(true);}}/>
                        <Button
                            style={styles.content}
                            title="Mark Incorrect" 
                            onPress={() => setSubmitted(true)}/>
                    </>}
                    {submitted && 
                        <Button 
                            style={styles.content}
                            title={cardsLeft() > 1 ? "next question" : "end quiz"} 
                            onPress={() => {
                                setShowAnswer(false);
                                setSubmitted(false);
                                setCurrentCard(currentCard + 1);
                                if (cardsLeft() === 1) endQuiz();
                                }}/>}
                </View>
            </>
            : <>
                <Text>Quiz Complete!</Text>
                <Text>{`correct: ${correctCount} / ${deck.questions.length}`}</Text>
            </>
            }
        </>
        : <Text>loading...</Text>}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: "70%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    questions:{
        flex: 2,
        minHeight:200,
        paddingTop:100
    },
    buttons: {
        flex: 4,
        margin:10
    },
    content: {
        padding: 10
    }
});

export default Quiz;