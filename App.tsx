import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import SignIn from './src/modules/auth/container/SignIn';

const queryClient = new QueryClient();

const App = () => {
  const backgroundStyle = {
    backgroundColor: 'white',
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={[backgroundStyle, styles.sectionContainer]}>
        <SignIn />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignContent: 'center',
  },
});

export default App;
