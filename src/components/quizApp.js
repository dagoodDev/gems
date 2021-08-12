import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import QnA from '../assets/quiz'
import QuestionCard from './questionCard'
import QuizMenuCard from './quizMenuCard'

const QuizApp = props => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentSection, setCurrentSection] = useState(0)
    const nextSection = () => {
        const next = currentSection + 1
        if(next < QnA.length){
            setCurrentSection(next)
            setCurrentQuestion(0)
        }
    }
    const nextQuestion = () => {
        const next = currentQuestion + 1
        if(next < QnA[currentSection].Questions.length){
            setCurrentQuestion(next);
        }
    }
    const prevQuestion = () => {
        const prev = currentQuestion - 1
        if(prev >= 0){
            setCurrentQuestion(prev);
        }
    }
    const prevSection = () => {
        if(currentSection-1 >= 0){
            const prevSecQues = QnA[currentSection-1].Questions.length - 1
            setCurrentSection(currentSection-1)
            setCurrentQuestion(prevSecQues);
        } else {
            alert('you are on the first question of the first section')
        }
    }
    const jumpSectionAndQuestion = (sec, ques) => {
        setCurrentSection(sec)
        setCurrentQuestion(ques)
    }
    console.log(currentSection)
    const question = QnA[currentSection].Questions[currentQuestion].Question
    const options = QnA[currentSection].Questions[currentQuestion].Options
    return(
        <>
            <div className='container'>
                <h2>Time Management Test Series</h2>
                <br></br>
                <div className='d-flex'>
                    <QuizMenuCard 
                        QuizQuestions={QnA}
                        navFunction={jumpSectionAndQuestion}
                    />
                    <div className='m-2'></div>
                    {
                        currentQuestion!=QnA[currentSection].Questions.length-1?
                            currentQuestion==0?
                                <QuestionCard 
                                    sectionName={QnA[currentSection].SectionName}
                                    currentQuestion={currentQuestion}
                                    question={question}
                                    options={options}
                                    nextSection={false}
                                    prevSection={true}
                                    nextFunction={nextQuestion}
                                    prevFunction={prevSection}
                                />
                            :
                                <QuestionCard 
                                    sectionName={QnA[currentSection].SectionName}
                                    currentQuestion={currentQuestion}
                                    question={question}
                                    options={options}
                                    nextSection={false}
                                    prevSection={false}
                                    nextFunction={nextQuestion}
                                    prevFunction={prevQuestion}
                                />
                        :
                            currentQuestion==0?
                                <QuestionCard 
                                    sectionName={QnA[currentSection].SectionName}
                                    currentQuestion={currentQuestion}
                                    question={question}
                                    options={options}
                                    nextSection={true}
                                    prevSection={true}
                                    nextFunction={nextSection}
                                    prevFunction={prevSection}
                                />
                            :
                                <QuestionCard 
                                    sectionName={QnA[currentSection].SectionName}
                                    currentQuestion={currentQuestion}
                                    question={question}
                                    options={options}
                                    nextSection={true}
                                    prevSection={false}
                                    nextFunction={nextSection}
                                    prevFunction={prevQuestion}
                                />

                    }
                    
                </div>
            </div>
        </>
    )
}

export default QuizApp