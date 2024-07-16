import { Collapsible, CollapsibleItem } from 'react-materialize';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import ArticleIcon from '@mui/icons-material/Article';
import Grid from '@mui/material/Grid';

export default function AboutPage() {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '10px',
        paddingTop: '10px',
        paddingBottom: '500px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Collapsible
        accordion={false}
        style={{ width: '80%', backgroundColor: 'white' }}
      >
        <CollapsibleItem
          expanded={false}
          header={
            <Grid container alignItems='center'>
              <BusinessCenterIcon />
              <span style={{ marginLeft: '10px' }}>
                Orchids Flowers Company
              </span>
            </Grid>
          }
          style={{ color: 'black' }}
          className='my-element'
        >
          Here you can see the orchids information
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header={
            <Grid container alignItems='center'>
              <PlaceIcon />
              <span style={{ marginLeft: '10px' }}>Country</span>
            </Grid>
          }
          style={{ color: 'black' }}
          className='my-element'
        >
          Viet Nam, England, Malaysia
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header={
            <Grid container alignItems='center'>
              <ArticleIcon />
              <span style={{ marginLeft: '10px' }}>Daily news</span>
            </Grid>
          }
          style={{ color: 'black' }}
          className='my-element'
        >
          Daily news
        </CollapsibleItem>
      </Collapsible>
    </div>
  );
}
