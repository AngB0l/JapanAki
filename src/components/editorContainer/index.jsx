import 'draft-js/dist/Draft.css';
import 'draftail/dist/draftail.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import {
    DraftailEditor, BLOCK_TYPE, INLINE_STYLE, createEditorStateFromRaw, serialiseEditorStateToRaw,
} from 'draftail';
import { saveDocument } from '../../utils';
import Definition from './definition';

const useStyles = makeStyles(() => ({
    editor: {
        width: 1000,
    },
}));

function EditorContainer(props) {
    const { document } = props;
    const classes = useStyles();

    const [contentState, setContentState] = useState(createEditorStateFromRaw(document.content));

    useEffect(() => {
        const handleOnChange = (currentState) => {
            document.content = serialiseEditorStateToRaw(currentState);
            saveDocument(document);
        };

        const selection = contentState.getSelection();
        const anchorKey = selection.getAnchorKey();
        const currentContent = contentState.getCurrentContent();
        const currentBlock = currentContent.getBlockForKey(anchorKey);
        const start = selection.getStartOffset();
        const end = selection.getEndOffset();
        const selectedText = currentBlock.getText().slice(start, end);

        console.log(selectedText);

        handleOnChange(contentState);
    }, [contentState, document]);

    return (
        <div className={classes.editor}>
            <Definition contentState={contentState} />
            <DraftailEditor
                editorState={contentState}
                onChange={setContentState}
                blockTypes={[
                    { type: BLOCK_TYPE.HEADER_THREE },
                    { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
                ]}
                inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
            />
        </div>
    );
}

export default EditorContainer;
