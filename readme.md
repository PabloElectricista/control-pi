<h1 align='center'> Controling Raspberry </h1>

<h3 align='center'>Just a playground to practice with raspberry outputs, but useful to turn on/off some ligths.</h3>
<br/>

<div style='margin-left:30px'>
<p>A server with socket.io and postgresql </p>
<p>Instant actions and responses  </p>
<p>Save the states on database to  </p>
<p>update outputs  </p>
<p>when the server restarts.  </p>
  
<p>Raspberry outputs with doble relay module  </p>
<p>is easy to connect with few wires.</p>

<p>And an Wemos D1 Mini with it's own  </p>
<p>one channel relay connected  </p>
</div>
<br/>
  
<p style='margin-left:30px'>
    <img src="./img_raspberrypi3.png" alt="raspberrypi3" />  
</p>  
<p style='margin-left:30px'>
    connection diagram
</p>  
<br/>

<p style='margin-left:30px'>
    <img src="./Raspins.jpg" alt="raspins" height="300"/>  
</p>
<p style='margin-left:30px'> 
    pin description
</p>  

<p style='margin-left:30px'>
    <img src="./wemos-relay.jpg" alt="wemos" height="200"/>  
</p>
<p style='margin-left:30px'> 
    Wemos R1 Mini connected
</p>  
<br/>

<div style='margin-left:30px'>
<p>The raspberry serves the page with switches</p>
<p>two of which activate their own the relays</p>  
<p>if turns on the third the Wemos receives</p>  
<p>the order by WiFi what this has to do.</p>  
</div>
<br/>

<p style='margin-left:30px'>
    <img src="./control_screen.png" alt="screen" height="200"/>  
</p>
<p style='margin-left:30px'> 
    Wemos R1 Mini connected
</p>  
<br/>

<div style='margin-left:30px'>
<p>You can clone this repository in your Raspberry Pi  </p>
<p>then do:  <b style="color:lightyellow;">npm install</b>  </p>
<p>You need postgres installed and configured  </p>
<p>save on a .env file:  </p>
<p><b style="color:lightyellow;">DB_PASS</b> = your_postgres_password  </p>
<p>and create a user "pi" or change user in database.js  </p>
<p>before to do:  <b style="color:lightyellow;">npm start</b></p>

<p>finally, you got to find the ip of your device and  </p>
use it on the browser.

<p>That's it.</p>
</div>
