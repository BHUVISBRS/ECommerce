import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Divider, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import CustomButton from './materialui/CustomButton';
import ProductListing from './ProductListing';

export default function ShopCategary() {

  return (
    <>
      <div class="container" >

        <div class="row">
          <div class="col">
            {/**************** girl image ************/}
            <Stack sx={{ boxShadow: 8, border: "1px soild black" }} >
              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="390"
                    image="1girl.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: 2, letterSpacing: 1 }}>
                      Everyday Shoes
                    </Typography>
                    <div style={{ marginLeft: 19 }}><hr /></div>

                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 2 }}>
                      <img src='TREE.png' alt='#' style={{ height: 35 }} />Comfy, All-Day Wearable
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
          </div>


          {/**************** Active Shoes ************/}
          <div class="col">
            <Stack sx={{ boxShadow: 8, border: "1px soild black" }} >
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="390"
                    image="activeshoe.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: 2, letterSpacing: 1 }}>
                      Active Shoes
                    </Typography>
                    <div style={{ marginLeft: 19 }}><hr /></div>

                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 2 }}>
                      <img src='TREE.png' alt='#' style={{ height: 35 }} />Bouncy, Cushy Soles
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
          </div>


          {/**************** Slip-On Shoes ************/}
          <div class="col">
            <Stack sx={{ boxShadow: 8, border: "1px soild black" }} >
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="390"
                    image="slipshoe.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: 2, letterSpacing: 1 }}>
                      Slip-On Shoes
                    </Typography>
                    <div style={{ marginLeft: 19 }}><hr /></div>

                    <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 2 }}>
                      <img src='TREE.png' alt='logo' style={{ height: 35 }} />Easy on, Easy off
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
          </div>

        </div>
      </div>
      <div style={{ paddingTop: 150 }}>

        <Card sx={{ maxWidth: 1350 }}>
          <CardMedia
            sx={{ height: 600 }}
            image="bigimg.jpg"
            title="Shopping page" ></CardMedia>
        </Card>

      </div>
      <div>
        <Typography variant="h4" sx={{ marginLeft: 65, paddingTop: 14, paddingBottom: 2 }}>Summer Styles</Typography>
        <Typography sx={{ marginLeft: 45, paddingBottom: 7, color: 'grey' }}>Get a move on (or out) in bouncy shoes made with natural materials.
        </Typography>
        <div style={{ bgcolor: 'black', marginLeft: 450 }}><CustomButton></CustomButton></div>
      </div>
    </>

  );
}


