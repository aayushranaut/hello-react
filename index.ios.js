/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
} = React;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <View>

      </View>
    );
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
