import React from 'react'

const QuestionCard = props => {

    return(
        <div className='col-8 rounded p-4 bg-light'>
            <h4 className='text-primary'>{props.sectionName}- Question {props.currentQuestion + 1}</h4>
            <hr></hr>
            <h4 className='font-weight-bold'>{props.question}</h4>
            <br></br>
            {
                props.options.map(option => {
                    return(
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id={`option${props.options.indexOf(option)}`} value={`option${props.options.indexOf(option)}`} checked></input>
                            <label class="form-check-label" for={`option${props.options.indexOf(option)}`}>
                                {option}
                            </label>
                        </div>
                    )
                })
            }
            <br></br>
            <br></br>
            <hr></hr>
            <div className='d-flex justify-content-end'>
                {   
                    props.prevSection?
                    <button className='btn-secondary rounded' onClick={props.prevFunction}>Previous Section</button>
                    :
                    <button className='btn-secondary rounded' onClick={props.prevFunction}>Previous Question</button>
                }
                <div className='m-2'></div>
                {
                    props.nextSection?
                    <button className='btn-primary rounded' onClick={props.nextFunction}>Next Section</button>
                    :
                    <button className='btn-primary rounded' onClick={props.nextFunction}>Next Question</button>
                }
            </div>

        </div>
    )
}

export default QuestionCard