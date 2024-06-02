
import { useState } from "react"

export default function QuiizScreen() {

    const questions = [
      {
                question: 'Which function is used to serialize an object into a JSON string in Javascript?',
                options: ['stringify()', 'parse()', 'convert()', 'None of the above'],
                
                correctAnswer: 'stringify()',
              },
              {
                question: 'Which of the following keywords is used to define a variable in Javascript?',
                options: ['var', 'let', 'var and let', 'None of the above'],
                
                correctAnswer: 'var and let',
              },
              {
                question:
                  'Which of the following methods can be used to display data in some form using Javascript?',
                options: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
               
                correctAnswer: 'All of the above',
              },
              {
                question: 'How can a datatype be declared to be a constant type?',
                options: ['const', 'var', 'let', 'constant'],
                correctAnswer: 'const',
              },

        {
            question: 'HTML Stand For _____________',
            options: ['Hypertext Markup Language', 'incorrect', 'incorrect', 'incorrect'],
            correctAnswer: 'Hypertext Markup Language'
        },
        {
            question: 'CSS Stand For _____________',
            options: ['Cascading StyleSheer', 'incorrect', 'incorrect', 'incorrect'],
            correctAnswer: 'Cascading StyleSheer'
        },
        {
            question: 'JS Stand For _____________',
            options: ['JavaScript', 'incorrect', 'incorrect', 'incorrect'],
            correctAnswer: 'JavaScript'
        },
        {
            question: 'DOM Stand For _____________',
            options: ['Document Object Model', 'incorrect', 'incorrect', 'incorrect'],
            correctAnswer: 'Document Object Model'
        },
        {
            question: 'RAM Stand For _____________',
            options: ['Random Access Memory', 'incorrect', 'incorrect', 'incorrect'],
            correctAnswer: 'Random Access Memory'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [marks, setMarks] = useState(0)

    const checkAnswer = (a: any, b: any) => {
        if (a == b) {
            setMarks(marks + 1)
        }
        if (currentIndex + 1 == questions.length) {
            alert(`Quiz is Completed and Your Marks Are ${marks}`)
            setCurrentIndex(0)
            setMarks(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return <>
        <div className="p-2">
            <div className="container">
                <div className="p-2 mb-3 bg-light rounded shadow">
                    <p className="text-center">Question {currentIndex + 1}/{questions.length}</p>
                    <h3>Q: {questions[currentIndex].question}</h3>
                </div>
                <div className="row">
                    {questions[currentIndex].options.map((x, i) => <div
                        key={i} className="col-md-4 p-2">
                        <button
                            onClick={() => checkAnswer(x, questions[currentIndex].correctAnswer)}
                            className="btn w-100 btn-danger rounded-0"
                        >{x}</button>
                    </div>)}

                </div>
                <div className="p-2">
                    <button onClick={() => {
                        setCurrentIndex(currentIndex + 1)
                    }} className="btn btn-success rounded-0">Skip</button>
                    <p>Total Marks are {marks}</p>
                </div>
            </div>
        </div>
    </>
}