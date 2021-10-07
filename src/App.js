import React, {useState} from 'react';
import FileViewer from 'react-file-viewer';
// import file from './Syllabus_FA21.pdf';
// import file from './sillybus.docx';
import file from './baseDoc';

const type = 'docx'
const word = 'This fOllow-on couRse to data structures (e.g., 605.202) provides a survey of computer algorithms, examines fundamental techniques in algorithm design and analysis, and develops problem-solving skills required in all programs of study involving computer science. Topics include advanced data structures (red-black and 2-3-4 trees, union- nd), recursion and mathematical induction, algorithm analysis and computational complexity (recurrence relations, big-O notation, NP-completeness), sorting and searching, design paradigms (divide and conquer, greedy heuristic, dynamic programming, amortized analysis), and graph algorithms (depth- rst and breadth- rst search, connectivity, minimum spanning trees, network ow).'

const App = () => {

  const highlight_words = () => {
    
    // we can use this if there are mutliple sections to highlight
    // loop string and remove chars until substring is found, splice and do again
    console.log(document.body.innerHTML.includes(word));
    
    // is this unsafe... how will we 'un-highlight'
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
