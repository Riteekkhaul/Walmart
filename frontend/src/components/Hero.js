import React from 'react';
import { FaCartPlus , FaTshirt , FaMobile , FaBook } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Hero = () => {
 
    var ele = document.getElementById('time-span');
    {
      function updateTime(){
        var curTime = new Date();
        var hour = curTime.getHours();
        var min = curTime.getMinutes();
        var sec = curTime.getSeconds();
        ele.innerHTML = hour + ':' +min +":" + sec ;
      } 
    }
    return (
        <div className='hero'>
            <div className='flex flex-row'>
                <h1 className='text-2xl font-bold my-5'>Top Categories :</h1>
                <div className="my-5 flex flex-row ">
                   <div className='category'>
                       <Link to='/products'>
                       <div className='round'>
                       <FaTshirt className=" icon" />
                       </div></Link>
                       <p>Fashion</p>
                   </div>
                   <div className='category'>
                   <div className='round'>
                   <FaCartPlus className=" icon" />
                    </div>
                       <p>Home</p>
                   </div>
                   <div className='category'>
                   <div className='round'>
                   <FaMobile className=" icon" />
                    </div>
                       <p>Mobiles</p>
                   </div>
                   <div className='category'>
                   <div className='round'>
                   <FaCartPlus className=" icon" />
                    </div>
                       <p>Electronics</p>
                   </div>
                   <div className='category'>
                   <div className='round'>
                   <FaCartPlus className=" icon" />
                    </div>
                       <p>Grocery</p>
                   </div>
                   <div className='category'>
                   <div className='round'>
                   <FaBook className=" icon" />
                   </div>
                       <p>Books,Toys</p>
                   </div>
                   <div className='category'>
                   <div className='round'>
                   <FaCartPlus className=" icon" />
                    </div>
                       <p>Essentials</p>
                   </div>
                </div>
            </div><hr  className='border-black'/>
            <div className='banner'>
                <img src='offer.jpg' alt='banner ' className='h-96 w-full flex-2'  />
                <img src='timer.jpg' alt='banner'  className='h-96 w-full flex-1'  />
                <div className='absolute right-80 '>
                <h1 className='text-3xl font-bold '>Offer Valid Up To<br /> 12pm only</h1>
                 <br/>
                <div id='time-span' className='font-bold text-white text-2xl text-red w-28 h-18 pl-1 rounded-3xl bg-gray-600 '></div>
            </div>
            </div><hr  className='border-black'/>
            <div className='my-10 '>
                <h1 className='text-4xl font-bold text-center mt-10 underline text-indigo-600'> Deal's Of The Day </h1>
                <div className='cardcon'>
                  <div className='card'>
                  <img src='timer.jpg'  alt='card' />
                     <p className='caption'>Men's Shoose</p>
                  </div>
                  <div className='card'>
                  <img src='timer.jpg' alt='card' />
                     <p className='caption'>Men's Shoose</p>
                  </div>
                  <div className='card'>
                  <img src='timer.jpg'  alt='card' />
                     <p className='caption'>Men's Shoose</p>
                  </div>
                  <div className='card'>
                     <img src='timer.jpg' alt='card' />
                     <p className='caption' >Men's Shoose</p>
                  </div>
                </div>
            </div>
            <hr  className='border-black'/>
        </div>
    );
};

export default Hero;
