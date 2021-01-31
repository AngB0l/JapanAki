import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Jisho from 'unofficial-jisho-api';
import axios from 'axios';

const jisho = new Jisho();

const proxy = 'https://cors-anywhere.herokuapp.com/';
// const proxy = 'https://thingproxy.freeboard.io/fetch/';

const useStyles = makeStyles(() => ({
    definition: {
        maxHeight: '70vh',
        overflow: 'auto',
    },
}));

function Definition(props) {
    const { contentState } = props;
    const selection = contentState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const currentContent = contentState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(anchorKey);
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();
    const selectedText = currentBlock.getText().slice(start, end);

    const classes = useStyles();

    const [def, setDef] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const url = proxy + jisho.getUriForPhraseSearch(selectedText);
            const result = await axios.get(url);
            const defs = result.data.data;
            console.log(selectedText);
            console.log(defs);

            if (defs[0]) {
                const text = `${defs[0].japanese[0].word} reading: ${defs[0].japanese[0].reading}`;
                const english = defs[0].senses.map((word) => word.english_definitions.join()).join();
                console.log(english);
                setDef({ text, english });
            }
        };
        fetchData();
    }, [selectedText]);

    return (
        <div className={classes.definition}>
            {def.text}
            <br />
            {def.english}
        </div>
    );
}

export default Definition;
