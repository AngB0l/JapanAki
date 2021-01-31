import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { Grid } from '@material-ui/core';
import page from './page.jpg';
import { createDocument } from '../../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 1200,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding: 50,
    },
    cover: {
        width: 600,
        height: 600,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

function LandingPage() {
    const classes = useStyles();

    // const history = useHistory();

    const handleCreateDocument = () => {
        const newDocument = createDocument();
        // history.push(`/documents/${newDocument.id}`);
        window.location.replace(`/documents/${newDocument.id}`);
    };

    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '70vh' }}
        >

            <Grid item xs={9}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h1" variant="h1">
                                Hi, I am Angeliki!
                            </Typography>
                            <Typography variant="h5" color="textSecondary">
                                I created this app to help you study Japanese the way I do it.
                            </Typography>

                            <div className={classes.controls}>
                                <Button
                                    onClick={handleCreateDocument}
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<SendIcon />}
                                >
                                    START USING ジャパン空き!
                                </Button>

                            </div>
                        </CardContent>

                    </div>
                    <CardMedia
                        className={classes.cover}
                        image={page}
                        title="Me, studing Japanese!"
                    />
                </Card>
            </Grid>
        </Grid>

    );
}

export default LandingPage;
