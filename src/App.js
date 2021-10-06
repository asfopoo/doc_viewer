import React, {useState} from 'react';
import FileViewer from 'react-file-viewer';
// import file from './Syllabus_FA21.pdf';
import file from './sillybus.docx';

const type = 'docx'
const word = 'This follow-on course to data structures (e.g., 605.202) provides a survey of computer algorithms, examines fundamental techniques in algorithm design and analysis, and develops problem-solving skills required in all programs of study involving computer science. Topics include advanced data structures (red-black and 2-3-4 trees, union- nd), recursion and mathematical induction, algorithm analysis and computational complexity (recurrence relations, big-O notation, NP-completeness), sorting and searching, design paradigms (divide and conquer, greedy heuristic, dynamic programming, amortized analysis), and graph algorithms (depth- rst and breadth- rst search, connectivity, minimum spanning trees, network ow). Advanced topics are selected from among the following: randomized algorithms, information retrieval, string and pattern matching, and computational geometry. Prerequisite(s): EN.605.202 Data Structures or equivalent. EN.605.203 Discrete Mathematics or equivalent is recommended. Course Note(s): The required foundation courses may be taken in any order but must be taken before other courses in the degree. Students can only earn credit for one of EN.605.620, EN.605.621, or EN.685.621.'

const App = () => {

  const highlight_words = () => {
    // we can use this if there are mutliple sections to highlight
    // loop string and remove chars until substring is found, splice and do again
    console.log(document.body.innerHTML.includes(word));
    // is this unsafe... how will we 'unhighlight'
    document.body.innerHTML = document.body.innerHTML.replace(word, `<mark>${word}</mark>`);
    // non standard feature not to be used in production
    // see ref https://developer.mozilla.org/en-US/docs/Web/API/Window/find
    // window.find(word);
  }

  const un_highlight = () => {
    // save text section to var and reset?
  }



    return (
      <div>
      <FileViewer
        fileType={type}
        filePath={file}
        />
        <button
          type="button"
          onClick={highlight_words}
        >
          Highlight
        </button>
        <button
          type="button"
          onClick={un_highlight}
        >
          Undo
        </button>
        </div>
    )
  }

export default App;
