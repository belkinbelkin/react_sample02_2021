import {VscLoading} from 'react-icons/vsc';
import React from 'react';
import './Loading.css';

/**
 * Loading screen
 * params show - boolean
 */
export default function Loading({show}) {

  return show ? (
      <div className={'loading-screen'}>
        <VscLoading size={50}/>
      </div>
  ) : null;
}