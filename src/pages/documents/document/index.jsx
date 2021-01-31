import React from 'react';
import store from 'store';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core';
import Editor from '../../../components/editorContainer';

const useStyles = makeStyles(() => ({
    editorContainer: {
        maxHeight: '70vh',
        overflow: 'auto',
    },
}));

function Document(props) {
    const { match } = props;
    const { id } = match.params;
    const classes = useStyles();

    const document = _.find(store.get('documents'), { id });

    return (
        <div className={classes.editorContainer}>
            <Editor document={document} />
        </div>
    );
}

export default Document;
