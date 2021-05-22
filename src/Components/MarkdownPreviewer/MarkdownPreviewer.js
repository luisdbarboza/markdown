import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import './MarkdownPreviewer.css'

const initialMarkdown = () => {
    const lines = [
        "# Welcome to my Markdown Parser",
        "## Let me introduce myself!!!.\n",
        "[My name is Luis Barboza and i love Cats, here's my Github profile 0-0](https://freecodecamp.org)\n\n",
        "`<h2>For your eye's sake, i added night mode</h2>\n`",
        "```\n\nwhile(alive) {\n\tlearn++;\n};\n\n\n```",
        "In case you're wondering this are the Top 3 Best RPGs of all time\n- Fallout New Vegas\n- Chrono Trigger\n- Mass Effect 2\n\n",
        'A wise man once said: \n> Life is a succession of lessons which must be lived to be understood\n',
        '![Cool cat with hat](https://i0.wp.com/www.reallycutecats.com/wp-content/uploads/2014/12/cathat2.jpg?resize=500%2C380)',
        '\n**Stay safe everyone**\n'
    ];

    return lines.reduce((markdown, line) => {
        return markdown + '\n' + line;
    }, '')
}

const Wrapper = () => {
    const [editorText, setText] = useState(initialMarkdown);

    return (
        <div className="wrapper">
            <div className="title">
                Markdown Previewer
      </div>
            <Editor text={editorText} changeText={setText} />
            <Preview text={editorText} />
        </div>
    );
}

const MarkdownPreviewer = () => {
    return (
        <Wrapper />
    )
}

export default MarkdownPreviewer;
