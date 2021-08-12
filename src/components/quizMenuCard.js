import React from 'react'

const QuizMenuCard = props => {
    return(
        <>
            <div className='col-4 rounded p-4 bg-light'>
                {
                    props.QuizQuestions.map(section=>
                        <>
                            <h4>{section.SectionName}</h4>
                            <hr></hr>
                            <div className='row p-1 m-1 numberGroup'>
                                {
                                    section.Questions.map(question=>
                                        {   
                                            const jumpNavFunction = () => {
                                                props.navFunction(props.QuizQuestions.indexOf(section), section.Questions.indexOf(question))
                                            }
                                            return(
                                                <button onClick={jumpNavFunction} className='btn-primary rounded number col-1 p-auto m-1 bg-primary'>
                                                    {section.Questions.indexOf(question)+1}
                                                </button>
                                            )
                                        }   
                                    )
                                }
                            </div>
                        </> 
                    )
                }
            </div>
        </>
    )
}

export default QuizMenuCard