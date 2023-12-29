import React from 'react'
import PriceCard from '../components/PriceCard'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import { Button, Tooltip } from 'flowbite-react';

function Music() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <NewNav />

      <div className='pageheader'>
        Entertainment
      </div>
      <div className='entertainmentdescription'>
        The wedding season is my personal Christmas period. I cannot describe the excitement I am experiencing when I am booked for a love celebration!
        Every couple has its own story to tell and this is what makes each wedding so unique. Whether in Luxembourg, Tuscany, France, Malta or Dubai, creating memories of this important life decision that last forever is a blessing!
        I love adventures! About my working style? I’m discrete, trying to capture a moment without you noticing it, but I’m also an entertainer, not afraid to make your bridal party or groomsmen laugh for honestly joyful group photos!
        I also love aesthetics and I might walk for a half hour around your wedding location to find the best spot to hang the bridal dress for a picture. My travel experiences and
        linguistic skills make that I adapt to any situation, locating and culture very easily!
      </div>
      <div class="wrapper">

        <div>
          <PriceCard title="Disc Jockey (DJ)" price="15000">

            <ul>
              <li><b>Professional DJ Service</b></li>
              <li><b>4 Hours of Play Time</b></li>
              <li><b>Lightning System</b></li>
              <li><b>Powered PA Sound System</b></li>
            </ul>

          </PriceCard>
        </div>
        <div>
          <PriceCard title="Full Band" price="30000">
            <ul>
              <li><b>Live performace with Professional Artists</b></li>
              <li><b>4 Hours of Play Time</b></li>
              <li><b>Wide Range of Instruments</b></li>
              <li><b>Live Sound Reinforcement System</b></li>
            </ul>

          </PriceCard>
        </div>
        <div>
          <PriceCard title="Dance" price="10000">

            <ul>
              <li><b>Professional Dance Performance</b></li>
              <li><b>5 dances with Professional Dancers</b></li>
              <li><b>Choreography and Music</b></li>
              <li><b>Interactive Sessions</b></li>
            </ul>
          </PriceCard>
        </div>
        <div>
          <PriceCard title="DJ + Dance" price="22000">
            <ul>
              <li><b>Combination of DJ and Dance Package</b></li>
              <li><b>Interractive DJ and Professional Dancers</b></li>
              <li><b>Coordinated Music and Choreography</b></li>
            </ul>

          </PriceCard>
        </div>
        <div>
          <PriceCard title="Full Band + Dance" price="35000">
            <ul>
              <li><b>Dynamic Full Band with Dance Performance</b></li>
              <li><b>Live Music and Coordinated Dance Routine</b></li>
              <li><b>Entertainment Extravaganza</b></li>
            </ul>

          </PriceCard>
        </div>
      </div>

      <div className='hehe'>
        <div class="flex justify-end">
          <Tooltip content="Skip Choosing Entertainment and Go Next Page" style="light">
            <a href="#" ><Button class="nextBtn">Next Page</Button> </a>
          </Tooltip>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Music
