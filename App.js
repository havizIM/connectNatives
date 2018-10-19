import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { View } from 'react-native';

import store from './store/configStore';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
	state = {
	    isLoadingComplete: false,
	  };

	render() {
		 if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
	      return (
	      	<View style={{ backgroundColor: '#0f1c42'}}>
		        <AppLoading
		          startAsync={this._loadResourcesAsync}
		          onError={this._handleLoadingError}
		          onFinish={this._handleFinishLoading}
		          color='#f2e4be'
		        />
		    </View>
	      );
	    } else {
			return (
				<Provider store={store} >
					<AppNavigator />
				</Provider>
			);
		}
	}

	_loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
	    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}
