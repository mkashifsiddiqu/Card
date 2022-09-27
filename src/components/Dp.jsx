import React from 'react'
import userdp from '../assets/profile.jpeg'
import { Box, Button, Link, Typography } from '@mui/material'

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Dp() {
  return (
    <>
      <Box sx={{
        position: `relative`,display:`flex`,
        flexDirection:  `column`,
        justifyContent:`center`,alignItems:`center`,
        // top: `44px`, left: `116px`, right: `117px`,bottom:`44px`
      }}>
        <Box
          component='img'
          src={userdp}
          sx={{
            height: `317px`, width: `317px`,
            borderTopLeftRadius: `8px`, borderTopRightRadius: `8px`
          }}
        />
        <Box
          sx={{
            marginTop: `-4px`,
            width: `317px`,
            height: ` 100%`,
            backgroundColor: `#1A1B21`,
            display: `flex`, flexDirection: `column`, alignItems: `center`
          }}
        >

          <Typography variant='h6' color={`white`} marginTop={`21px`}>Kashif Siddique</Typography>
          <Typography variant='subtitle2' color={`#F3BF99`}>Front End Developer</Typography>
          <Typography color={`white`} fontSize='12px'>mkashifsiddiqu.web</Typography>
          <Box marginTop={`21px`} sx={{ display: `flex`, justifyContent: `space-evenly`, width: `100%` }}>
            <Button variant='contained' 
            component='a'
            target="_blank" href="http://www.google.com"
            sx={{
              backgroundColor: `#FFFFFF`, color: `#374151`,
              '&:hover': { backgroundColor: `#FFFFFF`, color: `#374151` },
              border: ` 1px solid #D1D5DB`,
              boxShadow: ` 0px 1px 2px rgba(0, 0, 0, 0.05)`,
              borderRadius: `6px`, textTransform: `capitalize`
            }}
              startIcon={<EmailIcon />}
            >Email</Button>
            <Button variant='contained'
              component='a'
              target="_blank" href="https://www.linkedin.com/in/mkashifsiddque/"
              startIcon={<LinkedInIcon />}
              sx={{
                boxShadow: ` 0px 1px 2px rgba(0, 0, 0, 0.05)`,
                borderRadius: `6px`, textTransform: `capitalize`
              }}
            >Linkedin</Button>

          </Box>
          <Box sx={{ m: 2, }}>
            <Box >
              <Typography sx={{
                fontSize: `16px`,
                fontWeight: `700`,
                lineHeight: `24px`,
                letterSpacing: `0em`,
                textAlign: `left`,
                color: `#F5F5F5`
              }}
              >About</Typography>
              <Typography sx={{
                width: `247px`,
                fontSize: `16px`,
                fontWeight: `400`,
                lineHeight: `18px`,
                color: `#DCDCDC`

              }}> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</Typography>
            </Box>
            <Box>
              <Typography sx={{
                fontSize: `16px`,
                fontWeight: `700`,
                lineHeight: `24px`,
                letterSpacing: `0em`,
                textAlign: `left`,
                color: `#F5F5F5`
              }}
              >Interests</Typography>
              <Typography sx={{
                width: `247px`,
                fontStyle: `normal`,
                fontSize: `16px`,
                fontWeight: `400`,
                lineHeight: `18px`,
                color: `#DCDCDC`

              }}>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ height: `100px`, width: `317px`,backgroundColor:`#161619`,
            borderBottomLeftRadius: `8px`, borderBottomRightRadius: `8px`,
            display:`flex`,justifyContent:`center`,alignItems:`center`
            }}>
                <Box sx={{display:`flex`,
                justifyContent:`space-evenly`,width:`100%`}}>
                    <Link target={`_blank`} href='https://twitter.com/mkashifsiddiqu'>
                    <TwitterIcon sx={{color:`#918E9B`,fontSize:`25px`}} 
                    />
                    </Link>
                    <Link arget={`_blank`} href='https://www.facebook.com/MKashifSiddiqu/'>
                    <FacebookIcon sx={{color:`#918E9B`,fontSize:`25px`}}/>
                    </Link>
                    <Link  arget={`_blank`} href='https://www.instagram.com/mkashifsiddiqu/'>
                    <InstagramIcon sx={{color:`#918E9B`,fontSize:`25px`}}/>
                    </Link>
                    <Link  arget={`_blank`} href='https://github.com/mkashifsiddiqu/'>
                    <GitHubIcon sx={{color:`#918E9B`,fontSize:`25px`}}/>
                    </Link>
                </Box>
        </Box>          
      </Box>

    </>
  )
}
