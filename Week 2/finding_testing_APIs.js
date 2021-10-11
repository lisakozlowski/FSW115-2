var art={
    "response_code": 0,
    "results": [
        {
            "category": "Art",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What French sculptor designed the Statue of Liberty? ",
            "correct_answer": "Fr&eacute;d&eacute;ric Auguste Bartholdi",
            "incorrect_answers": [
                "Jean-L&eacute;on G&eacute;r&ocirc;me",
                "Auguste Rodin",
                "Henri Matisse"
            ]
        },
        {
            "category": "Art",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What year did Albrecht D&uuml;rer create the painting &quot;The Young Hare&quot;?",
            "correct_answer": "1502",
            "incorrect_answers": [
                "1702",
                "1402",
                "1602"
            ]
        }
    ]
}

var artStr = JSON.stringify(art);

document.body.innerHTML = artStr;