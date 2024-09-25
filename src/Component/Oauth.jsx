import * as React from 'react'; 
import { AppProvider, SignInPage } from '@toolpad/core'; 
import { useTheme } from '@mui/material/styles';

const providers = [ 
  { id: 'github', name: 'GitHub' }, 
  { id: 'google', name: 'Google' },
];

const signIn = async (provider) => {
  const promise = new Promise((resolve) => { 
    setTimeout(() => { 
      console.log(`Sign in with ${provider.id}`);  
      resolve();  
    }, 500);  
  });
  return promise;
};

export default function OAuthSignInPage() { 
  const theme = useTheme(); 

  return ( 
    <>
    <AppProvider theme={theme}> 
      <SignInPage signIn={signIn} providers={providers} /> 
    </AppProvider>
    </>
  );
}
