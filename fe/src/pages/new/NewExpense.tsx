import {
  Paper,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../components/card/BaseCard";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import React from "react";
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const NewExpense = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Create New Expense
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="New Expense">
            <>
              <Stack spacing={3}>
                <TextField
                  id="cate-basic"
                  label="Category"
                  variant="outlined"
                  defaultValue=""
                />
                <TextField 
                  id="content-basic" 
                  label="Content" 
                  variant="outlined"
                  multiline
                  rows={4} />
                <TextField
                  id="amount-basic"
                  label="Amount"
                  type="number"
                  variant="outlined"
                />
                
                
              </Stack>
              <br />
              <Button>Submit</Button>
            </>
          </BaseCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewExpense;
