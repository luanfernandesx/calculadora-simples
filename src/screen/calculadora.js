import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from '../styles';


export function Calculadora() {

    const classes = useStyles();
    const [contador, setContador] = useState("");

    return (
        <div>
            <TextField
                variant="outlined"
                className={classes.textField}
                margin="normal"
                value={contador}
                InputProps={{
                    readOnly: true
                }}
            />

            <Grid
                container
                direction="row"
                justify="center">
                <Grid >
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "7")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            7
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "4")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            4
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "1")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            1
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "0")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            0
                        </Button>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "8")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            8
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "5")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            5
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "2")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            2
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "/")}
                            size="large"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            ÷
                        </Button>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "9")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            9
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "6")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            6
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "3")}
                            size="large"
                            variant="contained"
                            color="inherit"
                            className={classes.button}
                        >
                            3
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "+")}
                            size="large"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            +

                        </Button>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador("")}
                            size="large"
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            C
                        </Button>

                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "*")}
                            size="large"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            *
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(contador + "-")}
                            size="large"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            -
                        </Button>
                    </Grid>
                    <Grid>
                        <Button
                            onClick={() => setContador(eval(contador))}
                            size="large"
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            =
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
