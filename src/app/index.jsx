import React, { useEffect } from 'react'

import { Routing } from 'pages';
import { withProviders } from './providers';



const App = () => {



  return (
    <div>
    <Routing/>
    </div>
  );
};

export default withProviders(App);









/*
H1 — The quick brown fox jumps over the lazy dog
Font: Mont Bold / Size: 32px / Line height: 41px / Letter spacing: -0.01em
H2 — The quick brown fox jumps over the lazy dog
Font: Mont Bold / Size: 22px / Line height: 31px / Letter spacing: 0
H3 — The quick brown fox jumps over the lazy dog
Font: Mont SemiBold / Size: 20px / Line height: 26px / Letter spacing: 0
Font: Mont Bold / Size: 12px / Line height: 11px / Letter spacing: 0.04em
Font: Mont SemiBold / Size: 14px / Line height: 21px / Letter spacing: 0
Font: Mont Regular / Size: 14px / Line height: 21px / Letter spacing: 0
Font: Mont SemiBold / Size: 12px / Line height: 15px / Letter spacing: 0


*/