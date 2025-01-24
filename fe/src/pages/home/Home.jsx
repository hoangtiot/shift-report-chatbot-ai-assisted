import './home.scss'
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Home = () => {
  return (
    <div className='home'>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Total Income
              </Typography>
              <Typography variant="body1">
                $0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Total Expenses
              </Typography>
              <Typography variant="body1">
                $0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Net Profit
              </Typography>
              <Typography variant="body1">
                $0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;