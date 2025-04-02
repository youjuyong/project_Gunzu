import {
    Popover as MuiPopover,
    Box,
    Paper,
    Typography,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Grid,
    makeStyles,
  } from '@material-ui/core';
import { forwardRef } from 'react';
  
const useStyles = makeStyles({
    popoverPaper: {
      marginTop: '10px',
      overflowX: "unset",
      overflowY: "unset",
      width: '310px',
      "&::before": {
          boxShadow: '20px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 1px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          opacity: 0.9,
          content: '""',
          position: "absolute",
          top: 0,
          left: 155,
          marginTop: '-10px',
          width: 10,
          height: 10,
          backgroundColor: 'white',
          transform: "translate(-50%, 50%) rotate(-45deg)",
          clipPath: "polygon(-5px -5px, calc(100% + 5px) -5px, calc(100% + 5px) calc(100% + 5px))",
      },
    }
  });

const Popover = forwardRef((  props : any, ref ) => {
    const classes = useStyles();
    if (!props?.nodeData) return (<div></div>);
    const { data } = props?.nodeData;
    const notReachedValue = 0;
    
    const formatDecimal = (value:any) => +parseFloat(value).toFixed(2);
    return (
      <MuiPopover
        open={props?.anchor !== null}
        anchorEl={props?.anchor}
        onClose={props?.onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: classes.popoverPaper,
        }}
      >
        <Paper
          style={{
            padding: 10,
            minWidth: 230,
            opacity: 0.8,
          }}
        >
          <Box>
            <Typography variant="h6" title={data.contentName}>
              { data.name }
            </Typography>
          </Box>
          { typeof(data.date) === 'object' && (
            <Box mb={1}>
              <Typography variant="body1">
                From 01/06  to 15/06
              </Typography>
            </Box>
          )}
          { typeof(data.date) === 'string' && (
            <Box mb={1}>
              <Typography variant="body1">
              Not Reached
              </Typography>
            </Box>
          )}
          <Box mb={1}>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '11px' }}>
                  Potential target
                </Typography>
                <Typography variant="body1">
                Not Reached
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "center"}}>
                <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '11px' }}>
                  Target
                </Typography>
                <Typography variant="body1">
                Not Reached
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right"}}>
                <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '11px' }}>
                 
                </Typography>
                <Typography variant="body1">
              
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mt={2}>
            <Typography variant="body1">
              Details
            </Typography>
          </Box>
          <TableContainer style={{ marginTop: 10 }}>
            <Table size="small">
              <TableBody >
                {/* { data.data.analytics.map(({ value, label, color }, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ padding: 0}}>
                      <div style={{
                        border: `5px solid ${color}`,
                        borderRadius: 5
                      }}/>
                    </TableCell>
                    <TableCell>{label}</TableCell>
                    <TableCell style={{ textAlign: 'right'}}>{value}</TableCell>
                    <TableCell style={{ textAlign: 'right'}}>{formatDecimal(value / data.data.potentialTarget * 100)} %</TableCell>
                  </TableRow>
                ))} */}
                <TableRow>
                  <TableCell style={{ padding: 0}}>
                    <div style={{
                      border: `5px solid #cccccc`,
                      borderRadius: 5
                    }}/>
                  </TableCell>
                  <TableCell>Not Reached</TableCell>
                  <TableCell style={{ textAlign: 'right'}}>Not Reached</TableCell>
                  <TableCell style={{ textAlign: 'right'}}>Not Reached</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </MuiPopover>
    );
  });
  
  export default Popover;