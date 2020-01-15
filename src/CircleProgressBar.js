import React, {Component} from 'react';
import {View, Text} from 'react-native';

class CircleProgressBar extends Component {
  state = {
    Lenght: [],
    percentage: this.props.percentage,
    splited: true,
  };

  componentDidMount() {
    const Lenght = [];
    for (let i = 0; i < 100; i++) {
      Lenght.push(i);
    }
    this.setState({Lenght});
    if (this.props.splited != undefined) {
      this.setState({splited: this.props.splited});
    }
  }

  getDefaultValue = (value, defaultValue) => {
    return value ? value : defaultValue;
  };

  renderInnerComponent = () => {
    const {percentage, size} = this.props;
    const circle_width = this.getDefaultValue(size, 100);
    return (
      <Text
        style={{
          fontSize: circle_width / 5,
        }}>
        {percentage}%
      </Text>
    );
  };

  render() {
    const {Lenght, splited} = this.state;
    const {
      isRtl,
      size,
      compeletedColor,
      inCompeletedColor,
      percentage,
      innerComponent,
    } = this.props;
    const circle_width = this.getDefaultValue(size, 100);
    return (
      <View
        style={{
          backgroundColor: '#fff',
          width: circle_width,
          height: circle_width,
          borderRadius: 100
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: (circle_width - circle_width / 10)- 2,
            height: (circle_width - circle_width / 10) - 2,
            borderRadius: ((circle_width - circle_width / 10)) / 2,
            zIndex: 10,
            position: 'absolute',
            top: circle_width / 20 + 2,
            left: circle_width / 20 + 1,
          }}>
          {CircleProgressBarHoc(
            innerComponent,
            innerComponent,
            this.renderInnerComponent,
          )}
        </View>
        {Lenght.map(item => {
          return (
            <View
              key={item}
              style={{
                width: circle_width,
                height: 2,
                flexDirection: 'row',
                position: 'absolute',
                top: circle_width / 2,
                transform: [
                  {rotate: (isRtl ? item * 3.6 - 90 : item * 3.6 + 90) + 'deg'},
                ],
              }}>
              <View
                style={{
                  width: circle_width / 2,
                  height: splited ? circle_width / 75 : (circle_width / 75) * 4,
                  backgroundColor:
                    item < percentage
                      ? this.getDefaultValue(compeletedColor, '#39bc65')
                      : this.getDefaultValue(inCompeletedColor, '#C1C1C1'),
                }}
              />
              <View
                style={{
                  width: circle_width / 2,
                  height: circle_width / 50,
                  backgroundColor: 'rgba(0,0,0,0)',
                }}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

export {CircleProgressBar};

function CircleProgressBarHoc(condition, cm1, cm2) {
  if (condition) {
    return cm1;
  } else {
    return cm2();
  }
}
