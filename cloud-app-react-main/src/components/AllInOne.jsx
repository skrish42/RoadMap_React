import React from 'react';
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/outline';
import { PauseIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { FaBookDead, FaBusinessTime, FaCloudMoonRain, FaPauseCircle, FaTimesCircle } from 'react-icons/fa';

const AllInOne = () => {

  return (
    <div name='roadmaps' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>What's Trendin' Now !!?</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
          Check-out at the recent releases, bug-fixes, work-in progress, and future updates of GitWonk...
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-9'>

          <div className='flex'>
            <div> <PauseIcon className='w-7 mr-3 text-green-600' />
           
            </div>
            <div>
            <h3 className='mb-2 text-sm'>Bug-fixes</h3>     
              <h3 className='font-bold text-2xl'>Need bug-fixes on the testing </h3>
              <img src="https://static.vecteezy.com/system/resources/previews/006/742/283/original/modern-style-icon-of-bug-fixing-editable-vector.jpg" 
              class="h-96 border-2 w-full object-cover" alt="bug" width="20%" height="20%" />
              <p className='text-lg pt-2 pb-4 mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
            <div className='text-xs pr-3 text-gray-500 text-right'>Posted:  Sept 01</div>

          </div>

          <div className='flex'>
            <div>
              <PauseIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
            <h3 className='mb-2 text-sm'>Data Integration</h3>     
              <h3 className='font-bold text-2xl'>Ought to integrate data from 2 sectors</h3>
              <img src="https://www.irion-edm.com/wp-content/uploads/2020/11/Data-Integration.png" 
              class="h-96 border-2 w-full object-cover" alt="bug" width="20%" height="20%" />
              <p className='text-lg pt-2 pb-4 mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
            <div className='text-xs pr-3 text-gray-500 text-right'>Posted:  Dec 27</div>
          </div>

          <div className='flex'>
            <div>
              <CheckCircleIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
            <h3 className='mb-2 text-sm'>Preview Mode</h3>     
              <h3 className='font-bold text-2xl'>Pending preview mode from production</h3>
              <img src="https://www.analyticsmania.com/wp-content/uploads/2020/10/image-2020-10-20T151105.637.jpg" 
              class="h-96 border-2 w-full object-cover" alt="bug" width="20%" height="20%" />
              <p className='text-lg pt-2 pb-4 mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
            <div className='text-xs pr-3 text-gray-500 text-right'>Posted: Aug 15</div>
          </div>

          <div className='flex'>
            <div>
              <FaBusinessTime className='w-7 mr-4 text-green-600' />
            </div>
            <div>
            <h3 className='mb-2 text-sm'>Automation and workflow</h3>     
              <h3 className='font-bold text-2xl'>Schedule or run custom actions</h3>
              <img src="https://wpforms.com/wp-content/uploads/2019/06/best-marketing-automation-software.jpg" 
              class="h-96 border-2 w-full object-cover" alt="bug" width="20%" height="20%" />
              <p className='text-lg pt-2 pb-4 mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
            <div className='text-xs pr-3 text-gray-500 text-right'>Posted: July 01</div>
          </div>

          <div className='flex'>
            <div>
              <CheckCircleIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
            <h3 className='mb-2 text-sm'>Bug-fixes</h3>     
              <h3 className='font-bold text-2xl'>Need bug-fixes on the testing </h3>
              <img src="https://media.licdn.com/dms/image/C5612AQHa3ijPv8r5KQ/article-cover_image-shrink_600_2000/0/1554236276664?e=2147483647&v=beta&t=mUUfyVBWVoSOzDW2uKG0gSMgWpZsg0KzYWofGvi7KXE" 
              class="h-96 border-2 w-full object-cover" alt="bug" width="20%" height="20%" />
              <p className='text-lg pt-2 pb-4 mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
            <div className='text-xs pr-3 text-gray-500 text-right'>Posted:  Sept 01</div>
          </div>
          
          <div className='flex'>
            <div>
              <FaBusinessTime className='w-7 mr-4 text-green-600' />
            </div>
            <div>
            <h3 className='mb-2 text-sm'>Table improvements</h3>     
              <h3 className='font-bold text-2xl'>Search box, updating joined inputs via dropdown</h3>
              <img src="https://community.tableau.com/sfc/servlet.shepherd/version/renditionDownload?rendition=THUMB720BY480&versionId=0684T000001hNx9&operationContext=CHATTER&contentId=05T4T0000078RvS&page=0" 
              class="h-96 border-2 w-full object-cover" alt="bug" width="20%" height="20%" />
              <p className='text-lg pt-2 pb-4 mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
            <div className='text-xs pr-3 text-gray-500 text-right'>Posted:  Nov 21</div>
          </div>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
            <h3 className='mb-2 text-sm'>Bug-fixes</h3>     
              <h3 className='font-bold text-2xl'>Need bug-fixes on the testing </h3>
              <img src="https://static.vecteezy.com/system/resources/previews/006/742/283/original/modern-style-icon-of-bug-fixing-editable-vector.jpg" 
              class="h-96 border-2 w-full object-cover" alt="bug" width="20%" height="20%" />
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
            <div className='text-xs pr-3 text-gray-500 text-right'>Posted:  Sept 01</div>
          </div>





        </div>
      </div>
    </div>
  );
};

export default AllInOne;
